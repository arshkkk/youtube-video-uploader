import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSupabaseSecretClient } from "@/utils/supabase";
import { getOwnChannelDetails } from "@/utils/youtube";
import type { Json } from "@/types/supabase";
import { getOAuthGoogleClient } from "../route";

const REQUEST_URL = "/app/channel";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state: { userId: string } = JSON.parse(
    searchParams.get("state") || "{}",
  );
  const supabase = getSupabaseSecretClient();

  if (!code) {
    return NextResponse.json({ success: false }, { status: 403 });
  }
  const oauthclient = getOAuthGoogleClient();
  const { tokens } = await oauthclient.getToken(code);

  if (!tokens.access_token || !tokens.refresh_token) {
    return;
  }

  const youtubeChannel = await getOwnChannelDetails(tokens.access_token);

  if (!youtubeChannel) {
    const url = new URL(REQUEST_URL, req.url);
    url.searchParams.set("message", "No Channel Found");
    return NextResponse.redirect(url);
  }

  const youtubeChannelId = youtubeChannel.id;
  let dbChannelId;
  const _channelInDB = await supabase
    .from("channel")
    .select("id")
    .eq("channel_id", youtubeChannelId);

  if (_channelInDB.data && _channelInDB.data.length === 0) {
    const _ = await supabase
      .from("channel")
      .insert({
        channel_id: youtubeChannelId,
        name: youtubeChannel.snippet.title,
        backdrop_url: youtubeChannel.brandingSettings.image?.bannerExternalUrl,
        channel_videos_count: Number(youtubeChannel.statistics.videoCount),
        subscribers_count: Number(youtubeChannel.statistics.subscriberCount),
        picture_url: youtubeChannel.snippet.thumbnails.high.url,
        user_id: state.userId,
        channel_info_meta: youtubeChannel as unknown as Json,
      })
      .select("id");
    dbChannelId = _.data?.at(0)?.id;
  } else {
    dbChannelId = _channelInDB.data?.at(0)?.id;
  }

  const _tokensInDB = await supabase
    .from("channel_token")
    .select("id")
    .eq("channel_id", dbChannelId);

  if (_tokensInDB.data && _tokensInDB.data.length === 0) {
    await supabase.from("channel_token").insert({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      channel_id: dbChannelId,
    });
  }

  const url = new URL(REQUEST_URL, req.url);
  url.searchParams.set("message", "Channel has been Added");
  return NextResponse.redirect(url);
}
