export type Preview = {
  name: string;
  url: string;
};

export type Layout = {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  comingSoon?: boolean;
  liveUrl?: string;
  previews?: Preview[];
};
