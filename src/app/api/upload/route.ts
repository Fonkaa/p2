import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: (
    process.env.CLOUDINARY_CLOUD_NAME ||
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    "nytwathq"
  ).trim(),
  api_key: (process.env.CLOUDINARY_API_KEY || "437881219689841").trim(),
  api_secret: (process.env.CLOUDINARY_API_SECRET || "TGpy1LrafrLNUnuG6YA5feBQd_I").trim(),
  secure: true,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = file.type || "image/jpeg";
    const dataUri = `data:${mimeType};base64,${buffer.toString("base64")}`;

    const uploadRes = await cloudinary.uploader.upload(dataUri, {
      folder: "portfolio_assets",
      resource_type: "image",
      transformation: [{ width: 1200, crop: "limit", quality: "auto" }],
    });

    console.log("[SERVER] Cloudinary upload success:", uploadRes.secure_url);

    return NextResponse.json({
      success: true,
      url: uploadRes.secure_url,
    });
  } catch (err: any) {
    console.error("[SERVER] Cloudinary upload error:", err?.message || err);
    return NextResponse.json(
      { success: false, error: err?.message || "Cloudinary upload failed" },
      { status: 500 }
    );
  }
}