// eslint-disable-next-line @typescript-eslint/naming-convention -- no error
export interface IYoutubeChannel {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
  brandingSettings: BrandingSettings;
}

interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
}

interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

interface High {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}

interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
}

interface RelatedPlaylists {
  likes: string;
  uploads: string;
}

interface Statistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

interface BrandingSettings {
  channel: Channel;
  image?: Image;
}

interface Channel {
  title: string;
}

interface Image {
  bannerExternalUrl: string;
}
