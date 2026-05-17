# Tasarım Referansları — Klasör Haritası

Bu klasör, Stitch ile üretilmiş tasarım referanslarını içerir. Her alt klasörde:
- `code.html` — Stitch tarafından üretilen HTML (Tailwind + Material Symbols + Google Fonts CDN ile)
- `screen.png` — Tasarımın ekran görüntüsü

**Önemli:** Bu tasarımlar **referans**tır, **kopyalanacak final ürün değildir**. `docs/PROMPT.md` içindeki "TUT / DEĞİŞTİR / AT" disiplini her tasarıma uygulanır.

## Klasör → Sayfa eşleştirmesi

| Klasör | Sayfa | Tür |
|---|---|---|
| `home_quality_ai_engineering_pro/` | Anasayfa | Desktop |
| `home_mobile_optimization_pro/` | Anasayfa | Mobile responsive |
| `about_experience_engineering_leader_pro/` | Hakkımda + Deneyim | Desktop |
| `about_experience_mobile_optimization_pro/` | Hakkımda + Deneyim | Mobile responsive |
| `case_studies_engineering_excellence_pro/` | Projeler | Desktop |
| `case_studies_mobile_optimization_pro/` | Projeler | Mobile responsive |
| `clinical_precision/` | **Belirsiz** — açıp incele, genel stil varyantı mı yoksa belirli bir sayfa mı kararla, bana sor |

## Eksik tasarımlar (Claude Code türetecek)

- **Blog liste** ve **blog yazı detayı**: Tasarım yok. Diğer sayfaların dilini (tipografi, numbered labels, spacing, accent renk kullanımı) baz alarak türet. Final tasarım için onay bekle.
- **İletişim sayfası:** Tasarım yok. Diğer sayfalarla uyumlu, minimal bir layout üret.
- **404:** Tasarım yok. Standart, sade.

## Tasarım okuma sırası

Faz 0'da şu sırayla incele ve her birinin "TUT / DEĞİŞTİR / AT" açısından özelliklerini çıkar:
1. `home_quality_ai_engineering_pro/` — site dilini en çok bu belirleyecek
2. `about_experience_engineering_leader_pro/`
3. `case_studies_engineering_excellence_pro/`
4. `clinical_precision/` — bunun ne olduğunu kararla
5. Mobile varyantları — sadece responsive davranışı görmek için