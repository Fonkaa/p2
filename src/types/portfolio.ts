import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { initialData } from "@/data/initialData";

export const dynamic = "force-dynamic";

function getRedisInstance(): Redis | null {
  const rawUrl =
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    "";
  const rawToken =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    "";

  // Clean away any quotes, spaces, or line breaks that sneak in
  const url = rawUrl.trim().replace(/^["']|["']$/g, "");
  const token = rawToken.trim().replace(/^["']|["']$/g, "");

  if (!url || !token) {
    console.warn("[PORTFOLIO DB] Missing credentials. URL:", Boolean(url), "Token:", Boolean(token));
    return null;
  }

  try {
    return new Redis({ url, token });
  } catch (err) {
    console.error("[PORTFOLIO DB] Redis initialization failed:", err);
    return null;
  }
}

const STORAGE_KEY = "luxury_portfolio_master_v1";

export async function GET() {
  const redis = getRedisInstance();

  if (!redis) {
    console.warn("[PORTFOLIO DB] Running without Redis. Returning initial data.");
    return NextResponse.json({
      success: true,
      source: "no-redis-keys",
      data: initialData,
    });
  }

  try {
    const record = await redis.get(STORAGE_KEY);

    if (!record) {
      console.log("[PORTFOLIO DB] Redis is connected but key is empty. Returning initial data.");
      return NextResponse.json({
        success: true,
        source: "redis-empty",
        data: initialData,
      });
    }

    const parsedData = typeof record === "string" ? JSON.parse(record) : record;

    return NextResponse.json({
      success: true,
      source: "redis-cloud",
      data: parsedData,
    });
  } catch (err: any) {
    console.error("[PORTFOLIO DB] Redis read error:", err?.message);
    return NextResponse.json({
      success: true,
      source: "redis-error-fallback",
      data: initialData,
    });
  }
}

export async function POST(req: NextRequest) {
  const redis = getRedisInstance();

  if (!redis) {
    console.error("[PORTFOLIO DB POST] Cannot persist: Redis is not configured.");
    return NextResponse.json(
      { success: false, error: "Database not connected. Check environment variables." },
      { status: 500 }
    );
  }

  try {
    const payload = await req.json();

    // Store as a strict JSON string to avoid truncation
    await redis.set(STORAGE_KEY, JSON.stringify(payload));

    console.log("[PORTFOLIO DB POST] Successfully persisted to Upstash Redis!");

    return NextResponse.json({
      success: true,
      message: "Persisted to Upstash Redis Cloud.",
    });
  } catch (err: any) {
    console.error("[PORTFOLIO DB POST] Write error:", err?.message);
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to persist to Redis" },
      { status: 500 }
    );
  }
}