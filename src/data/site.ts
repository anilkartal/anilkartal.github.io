export const site = {
  name: "Hasan Anıl Kartal",
  role: "QA Engineer · Test Automation · AI Testing",
  location: "[Ankara, Türkiye]",
  bio: "10 yılı aşkın sürede yazılım testinde edindiğim kalite mühendisliği deneyimini ERP, e-ticaret ve kurumsal e2e projelerden edilen birikimi şimdi yapay zeka araçlarıyla nasıl daha güçlü hale getireceğimi keşfediyorum ve tecrübelerimi burada paylaşıyorum.",
  shortBio: "Yazılım kalitesi uzmanı.",
  email: "hasananilkartal@gmail.com",
  social: {
    github: "https://github.com/anilkartal",
    linkedin: "https://www.linkedin.com/in/hasananilkartal/",
    x: "https://x.com/username",
  },
  now: "Şu sıralar yapay zeka tabanlı sürdürülebilir test mimarileri üzerine çalışıyorum.",
  url: "https://anilkartal.github.io",
} as const;

export type SiteConfig = typeof site;
