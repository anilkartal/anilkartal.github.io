export const site = {
  name: "HASAN ANIL KARTAL",
  role: "Software Test & Quality Expert",
  location: "[Ankara, Türkiye]",
  bio: "10+ yıldır yazılım projelerinde test mühendisi olarak çalışıyorum. Playwright, TypeScript ve AI destekli test süreçlerine odaklanıyorum.",
  shortBio: "Yazılım kalitesi uzmanı.",
  email: "hasananilkartal@gmail.com",
  social: {
    github: "https://github.com/anilkartal",
    linkedin: "https://www.linkedin.com/in/hasananilkartal/",
    x: "https://x.com/username",
  },
  now: "Şu sıralar Playwright tabanlı görsel regresyon test framework'ümü yazıyorum.",
  url: "https://anilkartal.github.io",
} as const;

export type SiteConfig = typeof site;
