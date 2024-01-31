import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "Github Bio",
  description:
    "Generate Awesome GitHub Profile Readme.",
  url: "https://githubbio.com",
  ogImage: "https://githubbio.com/og.png",
  metadataBase: new URL("https://githubbio.com"),
  keywords: ["github bio", "github profile", "Awesome GitHub Profile", "github readme"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  links: {
    twitter: "https://twitter.com/weijunext",
    github: "https://github.com/weijunext/github-bio",
  },
  footerProduct: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
