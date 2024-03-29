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
    email: "mailto:weijunext@gmail.com",
    twitter: "https://twitter.com/weijunext",
    github: "https://github.com/weijunext/",
    repo: "https://github.com/weijunext/github-bio-generator",
    buyMeCoffee: "https://www.buymeacoffee.com/weijunext",
    juejin: "https://juejin.cn/user/26044008768029",
    weChat: "https://weijunext.com/make-a-friend",
  },
  footerProduct: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
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
