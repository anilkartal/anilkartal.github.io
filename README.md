# Kişisel Portfolyo & Blog

Playwright, TypeScript ve AI destekli test süreçleri üzerine uzmanlaşmış bir Software Test & Quality Expert'in kişisel portfolyo ve blog sitesi.

**Stack:** Astro · TypeScript · Vanilla CSS · Framer Motion · MDX · Shiki  
**Hosting:** Vercel

---

## Local Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (http://localhost:4321)
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

---

## Klasör Yapısı

```
src/
├── components/
│   ├── astro/          # Astro bileşenleri (statik render)
│   │   ├── BaseHead.astro      — meta, OG, JSON-LD, tema script
│   │   ├── Header.astro        — sticky header, nav
│   │   ├── Footer.astro        — footer
│   │   ├── SectionLabel.astro  — "01 // KİMLİK" etiketleri
│   │   └── TechTag.astro       — teknoloji rozeti
│   └── react/          # React island'ları (etkileşimli)
│       ├── ThemeToggle.tsx     — dark/light tema toggle
│       ├── MobileNav.tsx       — mobil nav overlay (Framer)
│       ├── FloatingNumber.tsx  — 404 floating animasyon
│       ├── TableOfContents.tsx — blog scroll-spy TOC
│       └── CopyButton.tsx      — panoya kopyala butonu
├── layouts/
│   ├── BaseLayout.astro        — header + footer sarmalayıcı
│   ├── PostLayout.astro        — blog yazısı düzeni (TOC, yazar)
│   └── ProjectLayout.astro     — proje case study düzeni
├── pages/
│   ├── index.astro             — anasayfa
│   ├── hakkimda.astro          — hakkımda
│   ├── deneyim.astro           — deneyim / CV
│   ├── iletisim.astro          — iletişim
│   ├── 404.astro               — özel 404
│   ├── blog/
│   │   ├── index.astro         — blog listesi
│   │   └── [slug].astro        — blog yazısı detay
│   └── projeler/
│       ├── index.astro         — proje listesi
│       └── [slug].astro        — proje detay
├── content/
│   ├── blog/                   — MDX blog yazıları
│   └── projects/               — MDX proje case study'leri
├── styles/
│   ├── tokens.css              — CSS değişkenleri (renkler, tipografi, spacing)
│   ├── global.css              — reset, base stiller, data-reveal sistemi
│   └── typography.css          — MDX prose stilleri
├── data/
│   └── site.ts                 — kişisel veriler (isim, e-posta, sosyal)
└── lib/
    └── utils.ts                — tarih formatlama yardımcıları
public/
├── og-default.png              — Open Graph görseli (1200x630)
├── robots.txt                  — arama motoru izinleri
├── favicon.svg                 — site ikonu
└── cv.pdf                      — CV dosyası
```

---

## Yeni Blog Yazısı Ekleme

1. `src/content/blog/` altında yeni bir `.mdx` dosyası oluştur:

```
src/content/blog/yazinin-slug.mdx
```

2. Frontmatter ekle:

```yaml
---
title: "Yazı başlığı"
description: "Kısa açıklama (meta description olarak kullanılır)"
date: 2026-05-16
category: "Playwright"
tags: ["playwright", "typescript", "e2e"]
draft: false
---
```

3. MDX içeriğini yaz. Kod blokları için dil etiketi belirt:

````md
```typescript
// kod buraya
```
````

4. `draft: true` ise yazı production build'de görünmez, geliştirme sırasında görünür.

**Geçerli kategoriler:** `Playwright` · `TypeScript` · `Test Automation` · `AI Testing` · `Software Quality` · `Engineering Notes` · `Career Growth`

---

## Yeni Proje Ekleme

1. `src/content/projects/` altında yeni bir `.mdx` dosyası oluştur:

```
src/content/projects/proje-slug.mdx
```

2. Frontmatter ekle:

```yaml
---
title: "Proje Adı"
description: "Kısa açıklama"
date: 2026-01-01
tags: ["Playwright", "TypeScript"]
featured: true
order: 1
draft: false
github: "https://github.com/username/repo"
demo: "https://demo-url.com"
---
```

3. MDX içeriğini case study formatında yaz (problem → yaklaşım → çözüm → sonuç → öğrenilenler).

4. `featured: true` olan projeler anasayfada öne çıkan çalışmalar bölümünde gösterilir. `order` değeri sıralamayı belirler.

---

## Tema Renklerini Değiştirme

Tüm renkler `src/styles/tokens.css` içindeki CSS değişkenleridir:

```css
/* Aksan rengi — tüm vurgular, butonlar, linkler */
--accent: #3b5bdb;        /* light mode */
--accent-hover: #2f49b3;
--accent-bg: #eef1fb;

/* Dark mode için */
[data-theme="dark"] {
  --accent: #7c8fff;
  --accent-hover: #9aa8ff;
  --accent-bg: #1a1f3a;
}
```

---

## Kişisel Verileri Güncelleme

`src/data/site.ts` dosyasını düzenle:

```typescript
export const site = {
  name: "Ad Soyad",
  role: "Software Test & Quality Expert",
  location: "Şehir, Türkiye",
  bio: "Kısa biyografi metni (meta description ve anasayfa hero'da kullanılır).",
  shortBio: "Çok kısa biyografi (footer için).",
  email: "email@domain.com",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    x: "https://x.com/username",
  },
  now: "Şu an ne üzerinde çalışıyorsun (anasayfa 'Şu An' bölümü).",
  url: "https://siteadresi.com",
};
```

CV dosyasını güncellemek için `public/cv.pdf` dosyasını değiştir.

---

## Vercel Deploy

### İlk Deploy

1. [vercel.com](https://vercel.com)'da hesap aç
2. GitHub reposunu Vercel'e bağla
3. Framework olarak **Astro** seç (otomatik algılanır)
4. Build komutları otomatik gelir:
   - Build: `npm run build`
   - Output: `dist/`
5. **Deploy** butonuna tıkla

### Custom Domain

1. Vercel dashboard → Projenin Settings → Domains
2. Domain adını ekle (örn. `hasananilkartal.com`)
3. DNS sağlayıcında Vercel'in gösterdiği A/CNAME kayıtlarını ekle
4. SSL otomatik olarak etkinleşir

### Ortam Değişkeni

`astro.config.mjs` ve `src/data/site.ts` içindeki site URL'sini production domain'inle güncelle:

```javascript
// astro.config.mjs
site: 'https://siteadresi.com',

// src/data/site.ts
url: 'https://siteadresi.com',
```

---

## Lighthouse Hedefleri

| Kategori       | Hedef |
|----------------|-------|
| Performance    | >= 95  |
| Accessibility  | >= 95  |
| Best Practices | >= 95  |
| SEO            | >= 95  |
