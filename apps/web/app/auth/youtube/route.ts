import { google } from "googleapis";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseServerClient } from "@/utils/supabase";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/youtube/callback`;

export const getOAuthGoogleClient = () =>
  new google.auth.OAuth2({
    clientId,
    clientSecret,
    redirectUri,
  });

export async function GET() {
  const cookieStore = cookies();
  const supabase = getSupabaseServerClient(cookieStore);
  const user = await supabase.auth.getUser();
  if (!user.data.user) {
    return NextResponse.redirect("/login", { status: 401 });
  }

  const oauth2Client = getOAuthGoogleClient();

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline", // Request a refresh token
    scope: [
      "https://www.googleapis.com/auth/youtube",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
    state: JSON.stringify({ userId: user.data.user.id }),
  });

  return NextResponse.redirect(new URL(authUrl));
}
