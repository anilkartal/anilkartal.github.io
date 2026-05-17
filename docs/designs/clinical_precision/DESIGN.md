---
name: Clinical Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#104af0'
  primary: '#0040df'
  on-primary: '#ffffff'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#993100'
  on-tertiary: '#ffffff'
  tertiary-container: '#c24100'
  on-tertiary-container: '#ffece6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812900'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-md:
    fontFamily: geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-data:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
This design system embodies the "Clean Laboratory" aesthetic—an environment where high-end engineering meets surgical clarity. The target audience includes technical stakeholders, architects, and industrial partners who value obsessive attention to detail and functional minimalism.

The visual style is **Minimalist / Corporate Modern**, drawing inspiration from high-end instrumentation and Apple’s hardware engineering. The UI should feel airy, expensive, and unyielding in its precision. Every element exists with purpose; whitespace is used as a structural tool to separate complex data sets rather than just aesthetic breathing room. The emotional response is one of absolute trust, reliability, and technical sophistication.

## Colors
The palette is anchored by a sterile, high-brightness background of **#FAFAFA**, providing a neutral canvas for technical content. 

- **Primary (Electric Blue):** #2D5BFF is used sparingly for primary actions and critical focus states. On light backgrounds, this provides a 4.6:1 contrast ratio, meeting WCAG AA standards.
- **Surface & Text (Dark Charcoal):** #0F172A is the primary color for all typography, ensuring maximum legibility and a "printed ink" feel.
- **Accents & Borders:** A range of cool greys (#E2E8F0 to #64748B) are used for structural lines and secondary metadata. 

Avoid gradients. Use solid fills and hairline strokes to maintain the engineered feel.

## Typography
We utilize **Geist** exclusively for its monolinear, technical character that mimics drafting blueprints. The hierarchy is extremely disciplined.

- **Headlines:** Set with tight tracking (-0.02em) to appear as solid blocks of information.
- **Body Text:** Generous line-height (1.6) is used to ensure readability of technical specifications.
- **Labels:** Uppercase labels with slight tracking are used for categorizing data points, reminiscent of labels on a control panel.
- **Data:** For numerical values or code snippets, JetBrains Mono is permitted to emphasize the "engineering" aspect of the portfolio.

## Layout & Spacing
The design system operates on a strict **8px grid** (the "Round Eight" geometry). All padding, margins, and heights must be multiples of 8.

- **Desktop:** A 12-column fixed grid centered in the viewport. 24px gutters provide clear breathing room between technical modules.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Alignment:** Use hard-edge alignment. Elements should snap to the grid to maintain the "engineered" look. Avoid centered layouts for technical data; stick to left-aligned hierarchies to mimic document structures.

## Elevation & Depth
Depth is achieved through **low-contrast outlines** and **ambient shadows** rather than color shifts or glows.

- **Borders:** Surfaces are primarily defined by 1px solid strokes in `#E2E8F0`. 
- **Shadows:** Use a single, highly diffused "Object Shadow" for elevated cards: `0px 4px 20px rgba(15, 23, 42, 0.05)`. It should be barely perceptible, suggesting a slight lift from the sterile background.
- **Layers:** Use tonal layering. For example, a "Sub-surface" can be `#F1F5F9` to distinguish it from the main `#FAFAFA` background, creating a recessed effect without using shadows.

## Shapes
Following the "Round Eight" philosophy, the standard border radius is **8px** (0.5rem). This offers a balance between mechanical precision and modern software friendliness.

- **Base Radius:** 8px (Buttons, Inputs, Small Cards).
- **Large Radius:** 16px (Main Content Containers).
- **Strictness:** Do not use 100% rounded "pill" shapes for buttons; keep them rectangular with the 8px radius to preserve the structural integrity of the layout.

## Components
- **Buttons:** Primary buttons use a solid `#2D5BFF` fill with white text. Secondary buttons use a 1px `#E2E8F0` border with `#0F172A` text. High-state buttons should feel "solid" and architectural.
- **Input Fields:** Use a white background with a `#E2E8F0` border. On focus, the border changes to `#2D5BFF` with a 2px thickness. Use Geist Mono for input values to emphasize data entry.
- **Cards:** Cards should have a white background, a 1px stroke, and the soft ambient shadow mentioned in the elevation section. No heavy headers—use the `label-caps` typography style for card titles.
- **Chips/Badges:** Small, rectangular tags with an 8px radius. Use `#F1F5F9` background and `#475569` text for a neutral, technical metadata look.
- **Progress Indicators:** Use thin, 4px height bars. The track should be `#E2E8F0` and the indicator `#2D5BFF`. Avoid rounded caps on progress bars; keep them flush (butt-ended) for a more technical appearance.