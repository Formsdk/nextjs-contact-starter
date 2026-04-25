import { handleRequest } from "@formsdk/sdk";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await handleRequest({
    config: {
      fields: {
        name: (v) => typeof v === "string" && v.length >= 2,
        email: (v) => typeof v === "string" && v.includes("@"),
        message: (v) => typeof v === "string" && v.length >= 10,
      },
    },
    body,
    ctx: { ip: req.headers.get("x-forwarded-for") || undefined },
  });
  return Response.json(result, { status: result.success ? 200 : 400 });
}