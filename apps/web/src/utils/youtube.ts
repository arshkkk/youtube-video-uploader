import { google } from "googleapis";
import type { IYoutubeChannel } from "@/types/youtube";

export const getOwnChannelDetails = async (
  accessToken: string,
): Promise<IYoutubeChannel | null> => {
  const youtube = google.youtube({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    version: "v3",
  });

  const { data: channelDetails } = await youtube.channels.list({
    part: ["snippet,contentDetails,statistics", "brandingSettings"],
    mine: true,
  });

  if (channelDetails.items && channelDetails.items.length > 0) {
    return channelDetails.items[0] as unknown as IYoutubeChannel;
  }

  return null;
};
