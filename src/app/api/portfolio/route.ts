import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { initialData } from "@/data/initialData";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DB_KEY = "luxury_portfolio_live_data_v1";

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  "Content-Type": "application/json",
};

function getSanitizedRedis(): Redis | null {
  const rawUrl = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "").trim().replace(/^["'`]+|["'`]+$/g, "");
  const rawToken = (process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "").trim().replace(/^["'`]+|["'`]+$/g, "");

  if (!rawUrl || !rawToken || !rawUrl.startsWith("https://")) {
    return null;
  }

  try {
    return new Redis({ url: rawUrl, token: rawToken });
  } catch (err: any) {
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
    const raw = await redis.get(DB_KEY);

    if (raw) {
      let parsed = raw;
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
        { success: true, source: "redis-cloud", data: parsed },
        { headers: noCacheHeaders }
      );
    }

    return NextResponse.json(
      { success: true, source: "redis-empty", data: initialData },
      { headers: noCacheHeaders }
    );
  } catch (error: any) {
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
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON" },
      { status: 400, headers: noCacheHeaders }
    );
  }

  const redis = getSanitizedRedis();
  if (!redis) {
    return NextResponse.json(
      { success: false, error: "Redis not configured" },
      { status: 500, headers: noCacheHeaders }
    );
  }

  try {
    const frameCount = body?.projects?.[0]?.rotation360Images?.length || 0;
    console.log(`[API POST] Manual save by user. Inscribing ${frameCount} frames to Redis.`);

    await redis.set(DB_KEY, JSON.stringify(body));

    return NextResponse.json(
      { success: true, message: "Saved to Redis", frameCount },
      { status: 200, headers: noCacheHeaders }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Write failed" },
      { status: 500, headers: noCacheHeaders }
    );
  }
}