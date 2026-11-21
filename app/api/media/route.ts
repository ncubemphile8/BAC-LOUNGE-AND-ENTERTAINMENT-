import { unzipSync } from "fflate";
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const revalidate = 86400;
const archiveUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_3JlBxAyut4hiS7XHQife3mH61Ba/d74b387b-202b-4f46-87c4-1e0eccfec363.zip";
const allowed = new Set([
"7215266285388f0e9a7c5c1bcb6dacef.webp","5a60d57f-389a-4a11-b275-ad31b8c9b61f.mp4","b5b944a30e3a6f83fcf0babcca87a07d.webp","443d819717fa45741ad99b9bc22de5a0.webp","d718e7ede34240024a6dec85f36271a1.webp","66492096f22fc9b3d3c44b2f026599b0.webp","d9398f40081e3c6eb4f8f0fdad39041b.webp","b4d59679-8542-4a76-b46b-9dfe26e4aee6.mp4","8d6583a2-2d3f-42bf-96c4-1632d7cebc48.mp4","41082a56d80e5b9ff7d8976ecc25bec8.webp","bab9264edb75904b0e89637d85773450.webp","6288e6df356373e36f4ec4bac4f97a7b.webp","13fbc7d95927ec3cddc9fd99be2ddd89.webp","be170f0f6109cb80131b77ba5b86f694.webp","cefbde28d49fd6be1b5364226160d34d.webp","a0690a3aa8b1d4fe1e482af75c8e9e49.webp","IMG-20261106-WA0028.jpg","IMG-20261109-WA0051.jpg"
]);
let archive: Promise<Record<string, Uint8Array>> | undefined;
async function getArchive() {
  archive ??= (async () => {
    const response = await fetch(archiveUrl, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error("BAC media archive could not be loaded");
    return unzipSync(new Uint8Array(await response.arrayBuffer()));
  })();
  return archive;
}
export async function GET(request: NextRequest) {
  const filename = request.nextUrl.searchParams.get("file") || "";
  if (!allowed.has(filename)) return new Response("Not found", { status: 404 });
  try {
    const files = await getArchive();
    const file = files[filename];
    if (!file) return new Response("Media not found in archive", { status: 404 });
    const type = filename.endsWith(".mp4") ? "video/mp4" : filename.endsWith(".jpg") ? "image/jpeg" : "image/webp";
    return new Response(file as unknown as BodyInit, { headers: { "Content-Type": type, "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800" } });
  } catch {
    archive = undefined;
    return new Response("Media temporarily unavailable", { status: 502 });
  }
}