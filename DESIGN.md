# Design

Visual design tokens and patterns for Old Forrest Consulting. For copy/voice, see `STYLE_GUIDE.md`.

The site is a dark-themed Next.js + Tailwind CSS 4 app. Tokens live in `app/globals.css` as CSS custom properties exposed to Tailwind via `@theme`.

## Colors

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `--background` | `#0a0f1e` | Page base, even sections |
| `--section-odd` | `#0d1220` | Alternating section background |
| `--background-elevated` | `#111827` | Raised surfaces |
| `--card` | `#0f1629` | Card base |
| `--card-hover` | `#1a1f35` | Card hover |
| `--secondary` / `--muted` | `#1e293b` | Slate-800 panels |

### Brand

| Token | Hex | Use |
|---|---|---|
| `--primary` | `#3b82f6` | Primary CTAs, links, focus ring |
| `--primary-hover` | `#2563eb` | Primary button hover |
| `--accent` | `#60a5fa` | Brighter blue accent, gradient stops |

### Text

| Token | Hex | Use |
|---|---|---|
| `--foreground` | `#f1f5f9` | Default body text |
| `--secondary-foreground` | `#f8fafc` | Text on slate panels |
| `--muted-foreground` | `#cbd5e1` | Secondary copy, captions |
| `--accent-foreground` | `#0f172a` | Text on light accent backgrounds |
| `--primary-foreground` | `#ffffff` | Text on primary buttons |

### Borders

All borders are translucent white over the dark base — never solid.

| Token | Value |
|---|---|
| `--border-subtle` | `rgba(255,255,255,0.05)` |
| `--border-default` | `rgba(255,255,255,0.10)` |
| `--border-emphasis` | `rgba(255,255,255,0.20)` |
| `--border-primary` | `rgba(59,130,246,0.5)` |

## Typography

Two Google Fonts loaded via `next/font/google` in `app/layout.tsx`:

- **Inter** — body, UI (`--font-inter`, `--font-sans`)
- **Outfit** — headings (`--font-outfit`, `--font-heading`)

Heading rules (applied globally in `globals.css`):

- `font-weight: 700`
- `letter-spacing: -0.02em`
- All of `h1`–`h6` use Outfit

## Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.5)` |
| `--shadow-xl` | `0 20px 40px rgba(0,0,0,0.6)` |
| `--shadow-primary` | `0 0 20px rgba(59,130,246,0.3)` |

Primary buttons use a stronger blue glow — `0 0 20px rgba(59,130,246,0.4)` resting, `0 0 30px rgba(59,130,246,0.6)` on hover.

## Component patterns

### Cards

```
bg-white/5 border border-white/10 rounded-2xl p-8
hover:bg-white/[0.08] hover:border-white/20
hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]
transition-all duration-300
```

### Primary button

```
px-8 py-4 text-base font-semibold text-white
bg-primary hover:bg-[#2563eb] rounded-lg
hover:scale-[1.02]
shadow-[0_0_20px_rgba(59,130,246,0.4)]
hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
transition-all duration-200
```

### Secondary button

```
px-8 py-4 text-base font-semibold text-gray-200
bg-white/5 border border-white/10 rounded-lg
hover:bg-white/10 hover:border-white/20
transition-all duration-200
```

### Pill / eyebrow badge

```
inline-flex items-center gap-3 px-6 py-3 rounded-full
bg-primary/10 border border-primary/20 backdrop-blur-sm
text-sm text-primary font-semibold
```

### Icon tile (inside cards)

```
w-12 h-12 bg-primary/20 rounded-lg
flex items-center justify-center
text-primary
group-hover:scale-110 transition-transform
```

### Headline gradient text

```
text-transparent bg-clip-text
bg-gradient-to-r from-blue-400 to-gray-400
```

### Hero glow

A blurred blue orb behind the hero copy:

```
absolute h-[310px] w-[310px] rounded-full
bg-primary/20 opacity-20 blur-[100px]
```

## Radii

- Buttons, inputs: `rounded-lg` (0.5rem)
- Cards, large surfaces: `rounded-2xl` (1rem)
- Pills, badges, dots: `rounded-full`
- Icon tiles: `rounded-lg`

## Focus

Global focus style in `globals.css`:

```
outline: 2px solid var(--primary);
outline-offset: 2px;
border-radius: 0.25rem;
```

Use `focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2` on interactive elements that override defaults.

## Selection

```
::selection { background-color: var(--primary); color: white; }
```

## Section rhythm

Pages alternate `.section-even` (`#0a0f1e`) and `.section-odd` (`#0d1220`) backgrounds for visual separation. Use `.section-border` (`border-top: 1px solid var(--border-subtle)`) where a hairline divider helps.

## Logos

In `public/`:

- `logo.png` — primary
- `logo_white.png` — white variant for dark backgrounds
- `logo-option1.png`, `logo-option2.png`, `logo-option3.png` — earlier variants, kept for reference

## Animation

- `framer-motion` for component-level motion
- Default transitions: `duration-200` (buttons), `duration-300` (cards)
- Hover scale: `1.02` for buttons, `1.10` for icon tiles
- Reduce motion: respect `prefers-reduced-motion` when adding new animations

## Stack

- Next.js 16 (static export)
- Tailwind CSS 4 (no `tailwind.config`, theme defined inline in `globals.css`)
- `lucide-react` for icons
- `framer-motion` for animation
