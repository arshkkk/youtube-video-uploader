import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseServerClient } from "@/utils/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cookiesStore = cookies();

  const code = searchParams.get("code");

  if (code) {
    await getSupabaseServerClient(cookiesStore).auth.exchangeCodeForSession(
      code,
    );
  }

  return NextResponse.redirect(new URL("/profile", req.url));
}
