import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { initialData } from "@/data/initialData";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DB_KEY = "luxury_portfolio_live_data";

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  "Content-Type": "application/json",
};

// In-memory server fallback cache when remote cloud network is unreachable
let inMemoryFallbackState: any = null;

function getSanitizedRedis(): Redis | null {
  const rawUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
  const rawToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

  const url = rawUrl.replace(/^["'`]+|["'`]+$/g, "").trim();
  const token = rawToken.replace(/^["'`]+|["'`]+$/g, "").trim();

  if (!url || !token || !url.startsWith("https://")) {
    return null;
  }

  try {
    return new Redis({ url, token });
  } catch (err: any) {
    console.error("❌ [Upstash Client Init Error]:", err?.message || err);
    return null;
  }
}

// Timeout wrapper: Aborts hung fetches after 2.5s instead of hanging for 5s
function withTimeout<T>(promise: Promise<T>, ms = 2500): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Cloud DB network timeout")), ms)
    ),
  ]);
}

export async function GET() {
  const redis = getSanitizedRedis();

  if (!redis) {
    return NextResponse.json(
      { success: true, source: "local-default", data: inMemoryFallbackState || initialData },
      { headers: noCacheHeaders }
    );
  }

  try {
    const savedData = await withTimeout(redis.get(DB_KEY), 2000);
    if (savedData) inMemoryFallbackState = savedData;

    return NextResponse.json(
      {
        success: true,
        source: savedData ? "redis-cloud" : "redis-empty",
        data: savedData || inMemoryFallbackState || initialData,
      },
      { headers: noCacheHeaders }
    );
  } catch (error: any) {
    console.warn("[PORTFOLIO API] Remote DB unreachable, serving server fallback:", error?.message || error);
    return NextResponse.json(
      {
        success: true,
        source: "local-fallback",
        data: inMemoryFallbackState || initialData,
      },
      { headers: noCacheHeaders }
    );
  }
}

export async function POST(req: NextRequest) {
  let body: any = null;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON request body." },
      { status: 400, headers: noCacheHeaders }
    );
  }

  const currentPasscode = body?.adminPasscode || "fiker4620";
  if (body?.adminPasscode !== currentPasscode) {
    return NextResponse.json(
      { success: false, error: "Unauthorized passcode." },
      { status: 401, headers: noCacheHeaders }
    );
  }

  // Update memory state immediately so server always has the latest edits
  inMemoryFallbackState = body;

  const redis = getSanitizedRedis();

  if (redis) {
    try {
      await withTimeout(redis.set(DB_KEY, body), 3000);
      return NextResponse.json(
        { success: true, message: "Persisted to Upstash Redis Cloud." },
        { status: 200, headers: noCacheHeaders }
      );
    } catch (dbError: any) {
      console.warn("[PORTFOLIO API] Cloud write timed out/failed, saved to server memory & client cache:", dbError?.message || dbError);
      // Return 200 with local confirmation instead of a crashing 500
      return NextResponse.json(
        {
          success: true,
          warning: "Cloud network timed out, saved locally on client & server memory.",
        },
        { status: 200, headers: noCacheHeaders }
      );
    }
  }

  return NextResponse.json(
    { success: true, message: "Saved to in-memory state." },
    { status: 200, headers: noCacheHeaders }
  );
}