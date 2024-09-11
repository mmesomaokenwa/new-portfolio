import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://new-portfolio-ruby-two.vercel.app/",
      lastModified: new Date(),
    },
  ];
}

export default sitemap;
