import { handleRequest } from "@formsdk/sdk";
import { contactForm } from "@/lib/forms";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await handleRequest({
    config: contactForm,
    body,
    ctx: { ip: req.headers.get("x-forwarded-for") || undefined },
  });
  return Response.json(result, { status: result.success ? 200 : 400 });
}