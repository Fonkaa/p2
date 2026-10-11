import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { initialData } from "@/data/initialData";
import { PortfolioData } from "@/types/portfolio";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// The single master storage key for both GET and POST
const DB_KEY = "luxury_portfolio_live_data_v1";

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  "Content-Type": "application/json",
};

function getSanitizedRedis(): Redis | null {
  const rawUrl = (
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    ""
  )
    .trim()
    .replace(/^["'`]+|["'`]+$/g, "");

  const rawToken = (
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    ""
  )
    .trim()
    .replace(/^["'`]+|["'`]+$/g, "");

  if (!rawUrl || !rawToken || !rawUrl.startsWith("https://")) {
    console.warn("[PORTFOLIO DB] Missing or invalid Redis credentials.");
    return null;
  }

  try {
    return new Redis({ url: rawUrl, token: rawToken });
  } catch (err: any) {
    console.error("[PORTFOLIO DB] Redis initialization error:", err?.message || err);
    return null;
  }
}

export async function GET() {
  const redis = getSanitizedRedis();

  if (!redis) {
    return NextResponse.json(
      { success: true, source: "no-redis-configured", data: initialData },
      { headers: noCacheHeaders }
    );
  }

  try {
    const raw: any = await redis.get(DB_KEY);

    if (raw) {
      let parsed: any = raw;
      if (typeof raw === "string") {
        try {
          parsed = JSON.parse(raw);
        } catch {
          parsed = raw;
        }
      }

      const frameCount = parsed?.projects?.[0]?.rotation360Images?.length || 0;
      console.log(`[API GET] Retrieved data from Upstash Redis. Project 0 frame count: ${frameCount}`);

      return NextResponse.json(
        { success: true, source: "redis-cloud", data: parsed as PortfolioData },
        { headers: noCacheHeaders }
      );
    }

    return NextResponse.json(
      { success: true, source: "redis-empty", data: initialData },
      { headers: noCacheHeaders }
    );
  } catch (error: any) {
    console.error("[API GET ERROR]:", error?.message || error);
    return NextResponse.json(
      { success: false, source: "redis-error", data: initialData },
      { headers: noCacheHeaders }
    );
  }
}

export async function POST(req: NextRequest) {
  let body: any = null;

  try {
    const text = await req.text();
    if (!text || text.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Empty request body" },
        { status: 400, headers: noCacheHeaders }
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON request body" },
      { status: 400, headers: noCacheHeaders }
    );
  }

  const redis = getSanitizedRedis();
  if (!redis) {
    return NextResponse.json(
      { success: false, error: "Redis database not configured" },
      { status: 500, headers: noCacheHeaders }
    );
  }

  try {
    const frameCount = body?.projects?.[0]?.rotation360Images?.length || 0;
    console.log(`[API POST] Manual save by user. Inscribing ${frameCount} frames to Redis.`);

    await redis.set(DB_KEY, JSON.stringify(body));

    return NextResponse.json(
      { success: true, message: "Persisted to Upstash Redis Cloud.", frameCount },
      { status: 200, headers: noCacheHeaders }
    );
  } catch (err: any) {
    console.error("[API POST ERROR]:", err?.message || err);
    return NextResponse.json(
      { success: false, error: err?.message || "Write failed" },
      { status: 500, headers: noCacheHeaders }
    );
  }
}