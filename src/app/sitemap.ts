import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://mmesomacodes.vercel.app/",
      lastModified: new Date(),
    },
  ];
}

export default sitemap;
