---
name: Nightlife Modern
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c0d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9d8ba0'
  outline-variant: '#504254'
  surface-tint: '#ebb2ff'
  primary: '#ebb2ff'
  on-primary: '#520072'
  primary-container: '#bc13fe'
  on-primary-container: '#ffffff'
  inverse-primary: '#9800d0'
  secondary: '#dcfdff'
  on-secondary: '#00373a'
  secondary-container: '#00f1fd'
  on-secondary-container: '#006a6f'
  tertiary: '#ffb4aa'
  on-tertiary: '#690003'
  tertiary-container: '#e62721'
  on-tertiary-container: '#140000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#ebb2ff'
  on-primary-fixed: '#320047'
  on-primary-fixed-variant: '#74009f'
  secondary-fixed: '#6ff6ff'
  secondary-fixed-dim: '#00dce6'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4aa'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930005'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin: 20px
---

## Brand & Style
The design system is engineered for high-energy social discovery in low-light environments. It targets a sophisticated urban audience seeking exclusivity and safety. The aesthetic is **Sleek Minimalism** fused with **Glassmorphism**, creating a sense of depth and mystery.

The emotional response should be one of "controlled excitement"—vibrant enough to feel alive, yet dark enough to feel private. Visual cues emphasize anonymity through abstraction and trust through explicit, high-contrast safety controls.

## Colors
The palette is built on a "Total Black" foundation to preserve night vision and blend into dark venues.
- **Primary (Electric Purple):** Used for "Live" status, active discovery modes, and primary calls to action.
- **Secondary (Cyan):** Used for trust indicators, verified statuses, and secondary interactive elements.
- **Tertiary (Panic Red):** Strictly reserved for the 'Panic Exit' and high-priority safety alerts.
- **Surface Neutrals:** Deep charcoals (#121212) and "Midnight" (#1A1A1A) layers provide tonal separation without breaking the dark-mode immersion.

## Typography
The system uses **Hanken Grotesk** for high-impact headlines to provide a sharp, contemporary feel. **Inter** handles all body copy for maximum legibility in high-glare or low-light situations. 

For technical or "hidden" metadata (anonymized IDs, timestamps), **JetBrains Mono** is used to provide a distinct, utilitarian contrast that reinforces the "digital privacy" aspect of the brand. High contrast (White #FFFFFF on Deep Charcoal #121212) is maintained across all reading levels.

## Layout & Spacing
This design system utilizes a **Mobile-First Fluid Grid**. 
- **Margins:** 20px side margins ensure content doesn't bleed into curved screen edges.
- **Gutter:** 16px between cards and grid items.
- **Rhythm:** A 4px baseline grid governs all vertical spacing. 
- **Safe Areas:** Significant bottom-padding is reserved for persistent "Panic Exit" or navigation elements to ensure they are always reachable by the thumb.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and tonal layering rather than traditional drop shadows.
- **Level 1 (Base):** Solid #0A0A0A.
- **Level 2 (Cards):** Semi-transparent #1A1A1A (80% opacity) with a 16px backdrop blur and a 0.5px white border at 10% opacity.
- **Level 3 (Overlays/Modals):** 60% opacity with 32px backdrop blur, creating a "frosted" look that allows background neons to bleed through.
- **Glows:** Active "Live" elements use a soft outer glow (12px blur) matching their accent color to simulate neon lighting.

## Shapes
The system utilizes **Rounded (0.5rem)** corners as the default for most interactive elements. 
- **Cards:** Use `rounded-lg` (1rem) to create a soft, premium feel.
- **Anonymity Avatars:** Always perfectly circular, using abstract generative gradients instead of photographic imagery.
- **Inputs:** Use `rounded-lg` for a tactile, modern appearance.

## Components
- **Panic Exit Button:** A persistent, high-contrast component. Fixed position, solid #FF3B30 background, white bold typography. Designed for immediate recognition and "no-miss" tap accuracy.
- **Abstract Avatars:** Instead of user photos, the system generates blur-hash or geometric patterns in the user's selected accent color to preserve anonymity.
- **Glass Cards:** Used for event discovery and user profiles. Features the 0.5px subtle border and backdrop blur.
- **Live Indicators:** Small pulses of Primary Purple or Secondary Cyan with a 2-second breathing animation.
- **Consent Prompts:** High-contrast modal overlays that dim the background entirely, forcing focus on "Accept" or "Decline" actions before proceeding.
- **Action Chips:** Low-profile, outlined buttons with JetBrains Mono labels for filtering "Music Type" or "Vibe."