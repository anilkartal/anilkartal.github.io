# Kişisel Web Sitesi — Proje Brifi

Bu doküman projenin tam tanımıdır. Kod yazmadan önce baştan sona oku, anladıklarını özetle, ardından FAZ 0'dan başla. Faz atlamak yok; her fazın sonunda dur ve onay bekle.

---

## 1. PROJE KİMLİĞİ

**Site sahibi:** Software Test & Quality Expert
**Uzmanlık:** Playwright, TypeScript, test otomasyonu mimarisi, AI destekli test süreçleri
**Site dili:** Türkçe. UI metinleri, navigasyon, tarih formatları, slug'lar tamamen Türkçe. Sektörel terimler İngilizce kalabilir: Playwright, automation, framework, pipeline, CI/CD, test runner, regression, end-to-end vb. Türkçeye zorlama, doğal akışı koru.
**Hedef kitle:** Yazılım mühendisleri, QA profesyonelleri, teknoloji yöneticileri, işe alımcılar.

**Amaç:**
- Profesyonel konumlandırma ve teknik otorite
- Uzun vadeli içerik üretimi için sürdürülebilir blog altyapısı
- Mühendislik vitrini (case study formatında projeler)
- İşbirliği ve iş fırsatları için iletişim noktası

---

## 2. TASARIM REFERANSLARI — KRİTİK

Tüm tasarım referansları `docs/designs/` klasöründe alt klasörler halindedir. Her klasörde `code.html` + `screen.png` vardır. Klasör-sayfa eşleştirme tablosu `docs/designs/README.md` içindedir — **önce onu oku**.

Tasarımları **olduğu gibi kopyalama**. Aşağıdaki "TUT / DEĞİŞTİR / AT" disiplinini her tasarıma uygula. Bu disiplin tüm site geneli için geçerlidir.

### TUT (tüm tasarımlardan koru)

- **Tipografi sistemi:** Geist (UI/başlık) + JetBrains Mono (mono aksanlar). Boyut skalası: hero 48-72px (clamp ile), başlık 32px, alt başlık 22px, body 16px (1.6 line-height), mono 13px. Letter-spacing başlıklarda -0.02em.
- **Numbered section labels:** `01 // KİMLİK`, `02 // YOLCULUK` gibi mono, küçük (12px), harfler arası açık (0.2em tracking), her ana bölümün üstünde.
- **Tipografi hiyerarşisi ve ritim:** Büyük başlık → mono label → body → kart cluster. Bu ritim her sayfada tekrarlasın.
- **İçerik mimarisi (tasarımlardan çıkar):**
  - Deneyim: kimlik / felsefe → timeline → expertise clusters → credentials → CTA
  - Anasayfa: hero → öne çıkan projeler → son yazılar → uzmanlıklar → şu an → CTA
  - Case study: problem → yaklaşım → çözüm → sonuç → öğrenilenler
- **Mühendislik aksanları:** Etiketler, kategoriler, metadata, teknoloji isimleri mono font ile yazılsın. Bu sitenin imza karakteri.
- **Teknoloji etiketleri:** Mono, küçük (11-12px), ince border, ince padding, 2px köşe.
- **Spacing disiplini:** 8px unit. Section gap'leri desktop 120px, mobile 64px. Max content width 1200px.

### DEĞİŞTİR (tasarımlardan farklılaş)

- **Renk paleti:** Tasarımlardaki çoklu aksanlar (mavi + turuncu + diğerleri) yerine **tek aksan rengi**. Linear estetiği — siyah/beyaz omurga + tek bir aksan.
  - **Aksan rengi:** `#3b5bdb` (light), `#7c8fff` (dark). Sakin, derin mavi. Stitch'in parlak mavi/turuncu kombinasyonu olgun değil.
  - Numbered label'lar da accent ya da muted text renginde — ayrı renkler açma.
- **CSS değişkenleri:**

```css
/* Light (varsayılan) */
--bg: #ffffff;
--bg-subtle: #fafafa;
--bg-elevated: #ffffff;
--text: #0a0a0a;
--text-muted: #525252;
--text-faint: #a3a3a3;
--border: #e5e5e5;
--border-strong: #d4d4d4;
--accent: #3b5bdb;
--accent-hover: #2f49b3;
--accent-bg: #eef1fb;
--code-bg: #f5f5f5;

/* Dark */
--bg: #0a0a0a;
--bg-subtle: #111111;
--bg-elevated: #161616;
--text: #fafafa;
--text-muted: #a3a3a3;
--text-faint: #525252;
--border: #262626;
--border-strong: #404040;
--accent: #7c8fff;
--accent-hover: #9aa8ff;
--accent-bg: #1a1f3a;
--code-bg: #171717;
```

- **İkonlar:** Material Symbols YOK. **Lucide** kullan (`@lucide/astro` static için, `lucide-react` island'lar için). Stroke-based, ince çizgili, `currentColor` ile çalışsın.
- **Köşe yuvarlama:** `rounded-full` YOK. 6px köşe (kartlar), 4px (butonlar), 2px (etiketler/rozet).
- **Tailwind YOK, Material Design naming YOK:** Vanilla CSS + CSS değişkenleri. Tasarım HTML'leri sadece görsel referans, kod yapısı değil.
- **Buton stilleri:**
  - Birincil: dolu accent rengi, beyaz metin, 4px köşe, padding 0.625rem 1.25rem, hover'da accent-hover.
  - İkincil: transparent bg, 1px border (border-strong), hover'da accent border + accent text.
  - Mono caps stili tut (örn. "CV İNDİR"), ama yuvarlak yerine 4px köşe.
- **Skill bar'lar (deneyim sayfasında):** Tut ama yüzde sayısı koyma (95%, 80% gibi). Sadece bar uzunluğu görsel ipucu versin.
- **Türkçeleştir:** Tüm UI metinleri, section label'lar, buton metinleri. Örnek:
  - `01 // IDENTITY` → `01 // KİMLİK`
  - `02 // EVOLUTION` → `02 // YOLCULUK`
  - `03 // CAPABILITIES` → `03 // UZMANLIKLAR`
  - `04 // CREDENTIALS` → `04 // EĞİTİM`
  - `05 // VALIDATION` → `05 // SERTİFİKALAR`
  - `DOWNLOAD CV` → `CV İNDİR`
  - `Engineering Philosophy` → `Mühendislik Felsefem`
  - `Professional Timeline` → `Profesyonel Yolculuk`
  - `Expertise Clusters` → `Uzmanlık Alanları`
  - Hero metni Türkçe: *"Kırılmayan yazılım sistemleri inşa ediyorum."* tarzı (kısa, güçlü)

### AT (tasarımlarda var, sitede olmayacak)

- **Glassmorphism:** `backdrop-blur`, `bg-white/80` türü cam efektleri. Düz arka plan + ince border yeterli.
- **Dekoratif gradient'ler:** `bg-gradient-to-br from-primary/5` ve benzeri. Hero arka planında çok ince bir radial fade kabul edilebilir, ama gözle zar zor seçilmeli.
- **Dekoratif blob'lar:** `absolute rounded-bl-full bg-primary/5` türü süslemeler.
- **Renkli üst border çizgileri:** `border-t-4 border-t-primary` gibi 4px renkli vurgular. Gerekirse 1px ince border yeterli.
- **Renkli drop shadow / glow:** `shadow-primary/20` gibi. Sadece çok ince nötr shadow (örn. `0 1px 2px rgba(0,0,0,0.04)`).
- **"GET AUDIT" / "AVAILABLE FOR HIRE" rozetleri:** Freelance/danışmanlık konumlandırması işine uymuyor — kullanma.
- **Material Symbols ikonlar:** Lucide ile değiştir.

---

## 3. TEKNOLOJİ STACK'İ

- **Astro** (`src/pages` dosya tabanlı routing, View Transitions açık)
- **TypeScript** (relaxed mod)
- **Astro Content Collections** (type-safe frontmatter — blog ve projeler için)
- **MDX** (`@astrojs/mdx`)
- **Vanilla CSS** (CSS değişkenleri + scoped `<style>` blokları). **Tailwind YOK, shadcn YOK.**
- **Framer Motion** — sadece etkileşim gereken React island'larda. `@astrojs/react` entegrasyonu.
- **Astro View Transitions** — sayfa geçişleri (Framer ile DEĞİL).
- **Fontsource** — `@fontsource-variable/geist`, `@fontsource-variable/jetbrains-mono`
- **Lucide** — `@lucide/astro` + `lucide-react`
- **Shiki** — Astro yerleşik syntax highlighter (`github-dark-default` + `github-light-default`)

**Kütüphane kuralı:** Yukarıdaki listede olmayan bir paket eklemeden önce DUR ve SOR. Vanilla ile yapılabiliyorsa vanilla yap.

**Hosting:** Vercel.

---

## 4. TEMA SİSTEMİ

- Sistem tercihi ile başla (`prefers-color-scheme`)
- Manuel toggle (header'da, Lucide Sun/Moon ikonu)
- Seçim `localStorage`'da saklansın
- FOUC yok — `<head>` içinde inline blocking script ile ilk render'da `data-theme` attribute'u `<html>`'e yerleştir
- Tüm renkler CSS değişkenleri üzerinden

---

## 5. ANİMASYON STRATEJİSİ

**Felsefe:** Dozajlı zengin. Her yerde animasyon değil, doğru yerde belirgin animasyon.

**Framer Motion nereye:**
- Hero başlık stagger entrance (kelime kelime fade-up, `client:load`)
- Section'lar görünüme girdiğinde fade-up (`client:visible`, IntersectionObserver)
- Timeline kartları sırayla reveal
- Expertise cluster kartları stagger reveal
- Tema toggle icon morph (sun ↔ moon)
- 404 rakamı floating
- Mobil nav slide-in

**Framer DEĞİL:**
- Sayfa geçişleri → Astro `<ViewTransitions />`
- Basit hover (border vurgusu, translate-y) → CSS `:hover` + `transition`
- Statik içerik → sıfır animasyon

**Standartlar:**
- Easing: `[0.22, 1, 0.36, 1]`
- Süre: 300-500ms (giriş), 150-250ms (hover)
- Stagger: 60-80ms

**Erişilebilirlik:** `prefers-reduced-motion: reduce` → tüm Framer animasyonları kapat. Her React island'da bu kontrolü yap.

---

## 6. SİTE MİMARİSİ

```
/                       Anasayfa                  ← home_quality_ai_engineering_pro
/hakkimda               Hakkımda                  ← about_experience_engineering_leader_pro
/projeler               Proje listesi             ← case_studies_engineering_excellence_pro
/projeler/[slug]        Proje detay               ← case_studies_engineering_excellence_pro
/blog                   Blog listesi              ← TASARIM YOK, türet
/blog/[slug]            Blog yazısı               ← TASARIM YOK, türet
/deneyim                Deneyim / CV              ← about_experience_engineering_leader_pro
/iletisim               İletişim                  ← TASARIM YOK, türet
/404                    Özel 404                  ← TASARIM YOK, türet
```

**Not:** Tasarımlardaki "Hakkımda + Deneyim" birleşik gibi görünüyor. İncele ve karar ver: tek sayfa mı yoksa iki ayrı sayfa mı? Bana sor.

**Global elemanlar:**
- **Header:** Sol — logo/isim (mono font). Orta — nav. Sağ — tema toggle. Sticky, scroll'da hafif blur + border-bottom kazanır.
- **Footer:** Üst — kısa bio cümlesi. Orta — kategori linkleri (numbered). Alt — telif yılı + "Astro ile kuruldu" notu (mono).
- **Sayfa geçişleri:** View Transitions fade + ufak slide.

---

## 7. SAYFA SAYFA İÇERİK

Her sayfa için referans tasarımı `docs/designs/<klasör>/code.html` ve `screen.png` üzerinden incele, sonra "TUT / DEĞİŞTİR / AT" disiplinini uygulayarak kur.

### 7.1 Anasayfa
Referans: `home_quality_ai_engineering_pro/` (desktop) + `home_mobile_optimization_pro/` (mobile davranış)

Bölümler tasarımdan çıkarılacak. Tahmini akış:
1. **Hero** — mono üst etiket (rol), büyük başlık (isim + tek satır konumlandırma), alt metin (2-3 satır), CTA buton ikilisi. Framer stagger entrance.
2. **`01 // ÖNE ÇIKAN ÇALIŞMALAR`** — 3 proje, liste formatında (yıl · başlık · özet · tag'ler)
3. **`02 // SON YAZILAR`** — 3 yazı (tarih · kategori · başlık · okuma süresi)
4. **`03 // UZMANLIK ALANLARI`** — 4 cluster kartı (Test Automation, AI Testing, Quality Engineering, CI/CD)
5. **`04 // ŞU AN`** — `src/data/site.ts`'ten okunan 2-3 satır manuel not
6. **CTA** — "Birlikte çalışmak ister misiniz?"

### 7.2 Hakkımda
Referans: `about_experience_engineering_leader_pro/` ve mobile karşılığı

Tasarımdaki "kimlik + felsefe" üst bölümünü kullan:
- `01 // KİMLİK` — büyük başlık + paragraf bio
- `02 // MÜHENDİSLİK FELSEFEM` — 3 numaralı madde (Stitch tasarımındaki "Engineering Philosophy" kartı gibi)
- `03 // YOLCULUK` — kariyer hikayesi (2-3 paragraf)
- `04 // TEKNİK STACK` — kategorize liste (Test / Diller / Tooling / AI-ML)
- `05 // ÇALIŞMA DEĞERLERİM` — 3-5 madde

### 7.3 Projeler
Referans: `case_studies_engineering_excellence_pro/`

**Liste sayfası:**
- Numbered label + başlık
- Dikey liste — her satır: yıl · başlık · 1 satır özet · teknoloji etiketleri
- Hover: satır subtle vurgu, sol kenarda 2px accent çizgi

**Detay sayfası — case study formatı:**
- `01 // PROJE` — başlık + meta (yıl, rol, teknolojiler)
- `02 // PROBLEM`
- `03 // YAKLAŞIM`
- `04 // ÇÖZÜM` — mimari kararlar
- `05 // SONUÇ` — etki, ölçülebilir kazanım
- `06 // ÖĞRENDİKLERİM` — 2-3 madde
- Alt: GitHub/demo linkleri (Lucide)

### 7.4 Blog — TASARIM YOK
Diğer sayfaların dilini (numbered labels, tipografi, spacing, accent kullanımı) baz alarak türet. Bittiğinde önizleme göster, onay bekle.

**Liste:**
- Yıl bazlı gruplama (2026 başlık → o yılın yazıları)
- Her satır: tarih · kategori (mono, accent) · başlık · okuma süresi
- Üstte kategori filtre chip'leri (mono caps, ince border)

**Yazı sayfası:**
- Üst meta: kategori · tarih · okuma süresi
- Büyük başlık (clamp 32-48px)
- Opsiyonel kapak görseli
- İçerik (MDX) — max 68ch, line-height 1.7
- Sağda sticky **TOC** (h2/h3 otomatik, scroll-spy)
- Mobilde TOC gizli (veya en üstte accordion)
- **Kod blokları (Shiki):** `github-dark-default` + `github-light-default`, dil etiketi sağ üstte mono, kopyala butonu (Lucide Copy ikonu, kopyalandı feedback'i)
- Yazı sonu: yazar mini kartı + paylaşım linkleri (Lucide Twitter, LinkedIn)
- Yazı altı: 2 ilgili yazı önerisi (kategori bazlı)

**Kategoriler:** Playwright · TypeScript · Test Automation · AI Testing · Software Quality · Engineering Notes · Career Growth

**Frontmatter:**
```yaml
title: string
description: string
date: Date
category: enum
tags: string[]
draft: boolean (default false)
cover: string (opsiyonel)
```

**Örnek yazılar:** En az 2 örnek MDX yazısı, **gerçek mühendislik notu hissinde Türkçe** (lorem ipsum YOK):
- "Playwright'ta paralel test çalıştırmanın incelikleri" (3-4 paragraf + 2-3 kod örneği)
- "AI destekli görsel regresyon testlerine giriş" (3-4 paragraf + 1 kod örneği)

### 7.5 Deneyim ⭐
Referans: `about_experience_engineering_leader_pro/` (Stitch'in mühendislik karakteri en güçlü burada)

- `01 // KİMLİK` — büyük başlık + paragraf, sağda "Mühendislik Felsefem" kartı (3 numaralı madde, Lucide ikonlar)
- `02 // YOLCULUK` — dikey timeline
  - Orta ince dikey çizgi
  - Her olay sol/sağ alternatifli kart (mobilde hepsi sağda)
  - Yıl etiketi mono accent
  - Rol + şirket + paragraf + 2-3 başarı maddesi (Lucide chevron-right) + teknoloji tag'leri
- `03 // UZMANLIKLAR` — Stitch'in 4 cluster kartı:
  - **Core Automation:** sub-skill'ler (WEB E2E / MOBILE / API & PERF) + EXPERT/ADVANCED rozetleri + ince skill bar (yüzde YOK) + teknoloji listesi
  - **AI & Innovation:** açıklama kartı
  - **CI/CD & Infrastructure:** açıklama kartı
  - **Culture & Leadership:** 2 sütun span
  - Üst border 1px accent (4px DEĞİL)
- `04 // EĞİTİM` — basit kart (ikon + üniversite + tarih + uzmanlık etiketi)
- `05 // SERTİFİKALAR` — liste kartlar (ikon + ad + Lucide BadgeCheck verified)
- **Alt CTA:** "Birlikte çalışalım mı?" + iki buton: "CV İNDİR" (birincil) + "LINKEDIN'DE BAĞLAN" (ikincil). Gradient yok, glassmorphism yok.

CV PDF: `public/cv.pdf` placeholder.

### 7.6 İletişim — TASARIM YOK
Türet, sade.
- Numbered label + büyük başlık ("Konuşmak ister misin?")
- Tek paragraf
- E-posta — büyük mono yazı + kopyala butonu (kopyalandı feedback)
- Sosyal: GitHub · LinkedIn · X — her biri ikon + isim, dikey liste
- **Form YOK**

### 7.7 404 — TASARIM YOK
- Büyük "404" (mono, accent)
- "Aradığın sayfa burada değil."
- "Anasayfaya dön →"
- Framer: subtle floating (4s döngü, ±4px)

---

## 8. SEO & PERFORMANS

- Dinamik `<title>` ve `<meta description>` her sayfada
- Open Graph + Twitter Card
- OG image: 1200x630 statik tek tasarım (`public/og-default.png`) — sade siyah/beyaz, isim + rol (Geist), altta URL. Dinamik OG sonradan opsiyonel (`@vercel/og`).
- `sitemap.xml` → `@astrojs/sitemap`
- `robots.txt` → `public/robots.txt` (allow all + sitemap referansı)
- Canonical URL her sayfada
- JSON-LD: anasayfa `Person`, blog yazıları `BlogPosting`
- Semantik HTML
- WCAG AA kontrast
- `:focus-visible` her interaktif elemanda
- **Lighthouse hedefi: ≥95** (her dört kategori)
- Görseller: `astro:assets` ile optimize, lazy load default

---

## 9. RESPONSIVE

Breakpoint'ler:
- Mobile: < 640px
- Tablet: 640-1024px
- Desktop: > 1024px
- Wide: > 1280px (content max 1200px)

Tasarımlardaki `_mobile_optimization_pro` klasörlerini her sayfa için mobile davranış referansı olarak kullan. Özel durumlar:
- Hero başlığı `clamp(2.5rem, 5vw + 1rem, 4.5rem)` ile akıcı küçülsün
- TOC mobilde gizli veya accordion
- Nav mobilde hamburger menü (Framer slide-in overlay)
- Timeline mobilde tek kolon (hepsi sağda)
- Kod blokları mobilde yatay scroll
- Section gap mobilde 64px, desktop 120px

---

## 10. KLASÖR YAPISI

```
src/
├── components/
│   ├── astro/
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SectionLabel.astro        # "01 // KİMLİK"
│   │   ├── TechTag.astro
│   │   ├── ProjectListItem.astro
│   │   ├── PostListItem.astro
│   │   ├── TimelineEntry.astro
│   │   ├── ExpertiseCard.astro
│   │   └── ...
│   └── react/
│       ├── ThemeToggle.tsx
│       ├── HeroIntro.tsx
│       ├── ScrollReveal.tsx
│       ├── MobileNav.tsx
│       ├── CopyButton.tsx
│       ├── TableOfContents.tsx
│       └── ...
├── layouts/
│   ├── BaseLayout.astro
│   ├── PostLayout.astro
│   └── ProjectLayout.astro
├── content/
│   ├── blog/
│   └── projects/
├── content.config.ts
├── pages/
│   ├── index.astro
│   ├── hakkimda.astro
│   ├── iletisim.astro
│   ├── deneyim.astro
│   ├── 404.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── projeler/
│       ├── index.astro
│       └── [slug].astro
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── typography.css
├── data/
│   └── site.ts
└── lib/
    ├── utils.ts
    └── readingTime.ts
public/
├── fonts/
├── cv.pdf
├── og-default.png
├── robots.txt
└── favicon.svg
```

---

## 11. KİŞİSEL VERİLER

`src/data/site.ts` içine yerleştir. Stitch tasarımındaki sahte verileri (TechFlow Solutions, Nebula Systems, Stanford gibi) **kullanma** — realist ama jenerik Türkçe placeholder yaz.

```typescript
export const site = {
  name: "[Ad Soyad]",
  role: "Software Test & Quality Expert",
  location: "[Şehir, Türkiye]",
  bio: "5+ yıldır finans ve SaaS sektörlerinde test otomasyonu mühendisi olarak çalışıyorum. Playwright, TypeScript ve AI destekli test süreçlerine odaklanıyorum.",
  email: "merhaba@example.com",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    x: "https://x.com/username",
  },
  now: "Şu sıralar Playwright tabanlı görsel regresyon test framework'ümü yazıyorum.",
  url: "https://example.com",
};
```

Tüm sayfalar bu dosyadan okusun. Hard-coded isim/e-posta yok.

---

## 12. ÇALIŞMA AKIŞI — FAZLAR

Her fazın sonunda DUR, özet ver, onay bekle.

### FAZ 0 — Anlama & doğrulama
- Bu dokümanı okuduğunu doğrula
- `docs/designs/README.md`'yi oku, klasör haritasını anla
- `docs/designs/` altındaki **tüm klasörleri** dolaş. Her birinde `code.html` ve `screen.png`'ye bak.
- Şunları çıkar ve göster:
  - 8-12 maddelik gereksinim özeti
  - Her tasarım klasörünün hangi sayfaya ait olduğunu doğrula. **`clinical_precision/` klasörü açıp incele ve ne olduğunu söyle** (genel stil varyantı mı, belirli bir sayfa mı, yoksa farklı bir şey mi). Eşleştirmede şüphen varsa sor.
  - "Hakkımda" ve "Deneyim" tasarımlarının birleşik mi ayrı mı olduğunu kararla, öneri ver
  - Tasarımlardan çıkardığın renk paletinin **prompt'taki "DEĞİŞTİR" kuralıyla** ne kadar farklı olduğunu özetle
  - Önerdiğin paket bağımlılıkları (versiyonlarıyla)
  - Soruların / netleşmesi gereken noktalar
  - Önerdiğin fazlandırma planı (benimkini değiştirebilirsin)
- **KOD YAZMA.** Sadece anla, özetle, soru sor.

### FAZ 1 — Kurulum & tasarım sistemi
- `npm create astro@latest` (Empty template)
- Bağımlılıklar: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/react`, `framer-motion`, `react`, `react-dom`, `lucide-react`, `@lucide/astro`, `@fontsource-variable/geist`, `@fontsource-variable/jetbrains-mono`
- `astro.config.mjs`: site URL, integrations, View Transitions
- `tsconfig.json` path alias (`@/*`)
- `src/styles/tokens.css` (tüm CSS değişkenleri — bölüm 2'deki renk + tipografi + spacing)
- `src/styles/global.css` (reset + base)
- `src/styles/typography.css` (prose / MDX)
- `src/data/site.ts`
- `BaseHead.astro` (meta, fontlar, OG, tema inline script)
- `Header.astro`, `Footer.astro`, `SectionLabel.astro`, `TechTag.astro`
- `BaseLayout.astro`
- `ThemeToggle.tsx` (sistem tercihi + localStorage + FOUC-free)
- **Çıktı:** Boş anasayfa render edilebiliyor, header + footer görünüyor, tema toggle çalışıyor.

### FAZ 2 — Content Collections
- `src/content.config.ts` (zod schemas)
- 2 örnek blog yazısı (MDX, gerçek görünümlü Türkçe)
- 2 örnek proje (MDX, case study formatında)
- `readingTime` utility

### FAZ 3 — Blog sistemi
- `/blog` liste (yıl grupları, kategori filtresi)
- `/blog/[slug]` detay (TOC, Shiki, CopyButton, yazar kartı)
- `PostLayout.astro`
- MDX prose tipografisi son hali
- **Tasarım yok — diğer sayfaların dilinde türet. Bittikten sonra önizleme göster, onay bekle.**

### FAZ 4 — Projeler
- `/projeler` liste — `case_studies_engineering_excellence_pro/` referansı + disiplin
- `/projeler/[slug]` case study

### FAZ 5 — Deneyim sayfası ⭐
- `about_experience_engineering_leader_pro/` baz, disiplinli uygulanmış hali
- Timeline, expertise clusters, eğitim, sertifikalar, CTA

### FAZ 6 — Anasayfa & diğer sayfalar
- Anasayfa — `home_quality_ai_engineering_pro/` baz + Framer hero
- Hakkımda — `about_experience_engineering_leader_pro/`'dan kimlik bölümü + ek içerik
- İletişim — türet
- 404 — türet

### FAZ 7 — Animasyon & polish
- ScrollReveal her sayfaya entegre
- Mobil nav
- View Transitions ince ayar
- `prefers-reduced-motion` testleri
- Hover micro-interaction'lar
- Tüm mobile davranışları (`_mobile_optimization_pro` klasörleri referans)

### FAZ 8 — SEO & deploy
- Sitemap, robots, OG image, JSON-LD
- Lighthouse ≥95 doğrula
- `README.md` (bölüm 14'e bak)

---

## 13. KOD KALİTESİ

- Tek sorumluluk bileşenler
- Magic number yok — `tokens.css` veya `site.ts`
- TypeScript prop tipleri
- `console.log` temiz
- Anlamlı isimlendirme (kısaltma değil)
- Yorum: ne değil, **neden**
- Her bileşende: `:focus-visible`, ARIA (gerekiyorsa), kontrast
- React island'lar minimal — sadece etkileşim gerektiren kısımlar

---

## 14. README

Bittiğinde `README.md` şunları içersin:
- Proje özeti
- Local kurulum (`npm install`, `npm run dev`)
- Klasör yapısı açıklaması
- **Yeni blog yazısı ekleme** (adım adım, frontmatter örneğiyle)
- **Yeni proje ekleme** (adım adım)
- **Tema renklerini değiştirme** (`tokens.css` hangi değişken)
- **Kişisel verileri güncelleme** (`src/data/site.ts`)
- **Vercel deploy** (adım adım, custom domain dahil)
- Lighthouse skorları

---

## ÖZET HİSSİYAT

> Bu site, Linear'ın berraklığını, Anthropic'in olgun sadeliğini ve bir mühendislik notebookunun teknik samimiyetini birleştirir. Stitch tasarımları "mühendislik karakteri" verir; "DEĞİŞTİR/AT" disiplini "premium olgunluk" katar. Premium ama gösterişsiz, modern ama klişesiz, teknik ama erişilebilir.

**ŞİMDİ FAZ 0'A BAŞLA.**