import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  const url = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "").trim().replace(/^["']|["']$/g, "");
  const token = (process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "").trim().replace(/^["']|["']$/g, "");

  const diagnostics = {
    hasUrl: Boolean(url),
    urlPrefix: url ? url.substring(0, 15) + "..." : "MISSING",
    hasToken: Boolean(token),
    tokenLength: token ? token.length : 0,
    testResult: "",
    errorDetail: null as any,
  };

  if (!url || !token) {
    diagnostics.testResult = "Environment variables are missing on this server instance.";
    return NextResponse.json(diagnostics, { status: 500 });
  }

  try {
    const redis = new Redis({ url, token });
    // Write and read a test ping key
    await redis.set("test_ping", "connection_working");
    const val = await redis.get("test_ping");
    diagnostics.testResult = val === "connection_working" ? "SUCCESS: Connected to Upstash Redis!" : "Unexpected value returned";
    return NextResponse.json(diagnostics);
  } catch (err: any) {
    diagnostics.testResult = "FAILED to connect to Upstash Redis";
    diagnostics.errorDetail = {
      message: err?.message,
      name: err?.name,
      cause: err?.cause,
    };
    return NextResponse.json(diagnostics, { status: 500 });
  }
}