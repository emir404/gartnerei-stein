Build a full-screen, dark-themed hero section for a geology brand called **Lithos**, using **React 18 + TypeScript + Vite + Tailwind CSS** and **lucide-react** for icons. The signature feature is a **cursor-following spotlight that reveals a second image** through a soft circular mask on top of a base image. Match every detail below exactly.

### Fonts
Add this to the top of `src/index.css`, then `@tailwind base/components/utilities`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap');
* { font-family: 'Inter', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }
```
- Body/UI font: **Inter**.
- Display/wordmark accent: **Playfair Display, italic**.

### Asset URLs (use these exactly)
- Base image (`BG_IMAGE_1`):
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85`
- Reveal image (`BG_IMAGE_2`):
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85`

### Layout & structure
Root wrapper: `min-h-screen bg-white tracking-[-0.02em]`, inline `fontFamily: "'Inter', sans-serif"`.

**Section** (`<section>`): `relative w-full overflow-hidden h-screen bg-black`, inline `style={{ height: '100dvh' }}`. Layers, by z-index:
1. **Base image** (`z-10`): `absolute inset-0 bg-center bg-cover bg-no-repeat`, background = `BG_IMAGE_1`.
2. **Reveal layer** (`z-30`): a `RevealLayer` component (see below) showing `BG_IMAGE_2`.
3. **Heading** (`z-50`): `absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none`. An `<h1>` with `text-white leading-[0.95]` containing two block spans:
   - Line 1: `block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl`, inline `letterSpacing: '-0.05em'`, text **"Layers hold"**.
   - Line 2: `block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1`, inline `letterSpacing: '-0.08em'`, text **"tales of time"**.
4. **Bottom-left paragraph** (`z-50`): `hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px]`. `<p className="text-sm text-white/80 leading-relaxed">` — "Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us."
5. **Bottom-right block** (`z-50`): `absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5`. Contains a `<p className="text-xs sm:text-sm text-white/80 leading-relaxed">` — "Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet." — and a **Start Digging** button: `bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30`.

### The cursor spotlight reveal (core mechanic)
In the parent, define `const SPOTLIGHT_R = 260;` and track the mouse with smoothing:
- Refs: `mouse` (raw), `smooth` (eased), `rafRef`; state `cursorPos` (init `{x:-999,y:-999}`).
- `mousemove` listener stores raw `e.clientX/clientY`.
- A `requestAnimationFrame` loop lerps: `smooth.x += (mouse.x - smooth.x) * 0.1` (same for y), then `setCursorPos`. Clean up listener + cancel RAF on unmount.

`RevealLayer({ image, cursorX, cursorY })`:
- Holds a hidden `<canvas>` (`absolute inset-0 pointer-events-none`, `style={{display:'none'}}`) sized to `window.innerWidth/Height` on mount + resize.
- A reveal `<div>` (`absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none`) with the reveal image as background.
- On every render: clear canvas, build a **radial gradient** at `(cursorX, cursorY)` from radius 0 → `SPOTLIGHT_R` with stops:
  `0 → rgba(255,255,255,1)`, `0.4 → 1`, `0.6 → 0.75`, `0.75 → 0.4`, `0.88 → 0.12`, `1 → 0`.
  Fill an arc of radius `SPOTLIGHT_R` with it. Then `canvas.toDataURL()` and apply it as `maskImage`/`webkitMaskImage` on the reveal div with `maskSize: '100% 100%'`. This makes the second image visible only inside the soft glowing circle that trails the cursor.

### Navigation (fixed, over hero)
`<nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">`:
- **Left**: an inline SVG logo (26×26, viewBox `0 0 256 256`, `fill="#ffffff"`, path `M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z`) + wordmark `<span className="text-white text-2xl font-playfair italic">Lithos</span>`.
- **Center pill** (`hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1`): buttons **Course** (active: full white text), then **Field Guides, Geology, Plans, Live Tour** (`text-white/80 ... hover:bg-white/20 hover:text-white transition-colors`, `px-4 py-1.5 rounded-full text-sm font-medium`).
- **Right (desktop)**: `hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100` — **Sign Up**.

### Animations (premium, on load)
Add to `index.css`:
```css
@keyframes heroReveal { 0%{opacity:0;transform:translateY(28px);filter:blur(12px)} 100%{opacity:1;transform:translateY(0);filter:blur(0)} }
@keyframes heroFadeUp { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
@keyframes heroZoom { 0%{transform:scale(1.12)} 100%{transform:scale(1)} }
.hero-anim { opacity:0; animation-fill-mode:forwards; animation-timing-function:cubic-bezier(0.16,1,0.3,1); }
.hero-reveal { animation-name:heroReveal; animation-duration:1.1s; }
.hero-fade { animation-name:heroFadeUp; animation-duration:1s; }
.hero-zoom { animation:heroZoom 1.8s cubic-bezier(0.16,1,0.3,1) forwards; }
@media (prefers-reduced-motion: reduce){ .hero-anim,.hero-zoom{ animation:none; opacity:1; } }
```
Apply:
- Base image div → add `hero-zoom` (slow Ken Burns zoom-out).
- Heading line 1 → `hero-anim hero-reveal`, inline `animationDelay: '0.25s'`; line 2 → same with `'0.42s'` (blur-rise, staggered).
- Bottom-left paragraph wrapper → `hero-anim hero-fade`, `animationDelay: '0.7s'`.
- Bottom-right wrapper → `hero-anim hero-fade`, `animationDelay: '0.85s'`.

### Responsiveness
- Heading scales `text-5xl` → `sm:text-7xl` → `md:text-8xl`.
- Center nav pill and desktop Sign Up are `hidden` below `md`; the mobile hamburger is `md:hidden`.
- Bottom-left paragraph is `hidden sm:block`; bottom-right block is full-width on mobile (`left-5 right-5`) and right-anchored from `sm`.
- Use `100dvh` so mobile browser chrome doesn't clip the section.

---------------

Create a single-page dental clinic landing page using **React + Vite + TypeScript + Tailwind CSS**. No external UI libraries, no icon libraries. Everything lives in one `App.tsx` file. The page has 3 full-screen sections, a splash screen, and a fixed navbar.

---

### SETUP

**Font:** "Open Sauce One" loaded via these exact links in `index.html` `<head>`:
```html
<link href="https://db.onlinewebfonts.com/c/1cd1e7d71e048159076fd90b39846902?family=Open+Sauce+One" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/42acf9aa4a6dc2f2886a3f682e337ead?family=Open+Sauce+One+Bold" rel="stylesheet">
```

**Title:** "Dental Health - Quality Healthcare"

**Global CSS (index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open Sauce One', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

**Tailwind config:** Default, no extensions. Content: `['./index.html', './src/**/*.{js,ts,jsx,tsx}']`.

---

### IMAGE URLS (use these EXACT URLs)

```ts
const HERO_IMAGE = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_113640_ccf3cf97-d447-425b-a134-d7b09fc743fc.png&w=1280&q=85';

const SECTION2_IMAGE = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_114219_414dfe80-f15c-4e25-bf52-b13721f4bd88.png&w=1280&q=85';

const SECTION3_IMG1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_115253_c19ab167-8dd5-48b4-967d-b9f0d9d6e8fb.png&w=1280&q=85';

const SECTION3_IMG2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_115237_fc519057-6e87-4abf-999a-9610b8b085b4.png&w=1280&q=85';

const SECTION3_BG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_114355_752ba9e6-0942-4abb-9047-5d9bb16632e9.png&w=1280&q=85';
```

---

### DATA CONSTANTS

```ts
const featureBars = ['Advanced Dentistry', 'High Quality Equipment', 'Friendly Staff'];

const services = [
  { name: 'Dental\nVeneers', num: '01', active: true },
  { name: 'Dental\nCrowns', num: '02', active: false },
  { name: 'Teeth\nWhitening', num: '03', active: false },
  { name: 'Dental\nImplants', num: null, active: false },
];
```

---

### CORE TECHNICAL CONCEPT: "MASKED CARDS"

Sections 1 and 2 use a single large background image shared across multiple cards. Each card shows a different "window" into the same image, creating a cohesive mosaic effect. Implementation:

**`useMaskPositions` hook:**
- Takes a ref to the section container and a ref to an array of card elements.
- Uses `ResizeObserver` on the section container.
- For each card, computes `{ x, y, sw, sh }` where x/y is the card's top-left offset relative to the section, sw/sh is the section's width/height.

**`useImageWidth` hook:**
- Loads the image in a `new Image()` object.
- Calculates: `renderWidth = img.naturalWidth * (sectionHeight / img.naturalHeight)`.
- Returns how wide the image would be if scaled to fill the section height.

**`MaskedCard` component:**
- Props: `bgImage`, `position` (from useMaskPositions), `imageWidth` (from useImageWidth), `focalX` (0-1 float), `className`, `children`, `cardRef`, `style`.
- Calculates `overflow = imageWidth > position.sw ? imageWidth - position.sw : 0`, then `focalOffset = overflow * focalX`.
- Applies inline style:
  ```
  backgroundImage: url(bgImage)
  backgroundSize: auto [position.sh]px
  backgroundPosition: -[position.x + focalOffset]px -[position.y]px
  backgroundRepeat: no-repeat
  ```
- `focalX` values: Section 1 mobile=0.7, desktop=0.8. Section 2 mobile=0.65, desktop=0.8.

**`useIsMobile` hook:**
- Listens to `window.matchMedia('(max-width: 767px)')` change events.
- Returns boolean.

---

### ANIMATION: `useStaggeredReveal` hook

- Takes `count` (number of elements) and `threshold` (IntersectionObserver threshold, default 0.15).
- Returns `{ containerRef, getAnimStyle }`.
- `containerRef` is attached to the section; when it crosses the threshold, `visible` becomes true (fires once).
- `getAnimStyle(index)` returns:
  ```css
  opacity: visible ? 1 : 0
  transform: visible ? 'translateY(0)' : 'translateY(24px)'
  transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1) [index*120]ms,
              transform 0.6s cubic-bezier(0.16,1,0.3,1) [index*120]ms
  ```

---

### SPLASH SCREEN

- Fixed overlay covering viewport, `z-[100]`, white background.
- Number counter displayed at **bottom-left** (`items-end justify-start`).
- Counter style: `text-7xl md:text-9xl font-bold tabular-nums p-6 md:p-10 leading-none`, black text.
- Counts from 0 to 100 over exactly 2000ms (20ms per step, 100 steps).
- After reaching 100: wait 200ms, then set `exiting=true` which triggers `opacity-0` with `transition-opacity duration-700`.
- After 900ms total from reaching 100, call `onComplete()` which removes splash from DOM.

---

### NAVBAR

**Container:** `fixed top-0 left-0 right-0 z-50`, `flex items-center justify-between`, `px-4 md:px-6 py-2 md:py-3`, `bg-white/80 backdrop-blur-md`.

**Logo (left side):**
- Two lines stacked: "Dental" and "Health"
- Wrapper: `flex flex-col`
- Text: `text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none`
- Second line has `-mt-1.5 md:-mt-2` for tight spacing
- Below logo text: "quality healthcare" in `text-[8px] md:text-[9px] font-medium leading-none mt-1.5 md:mt-2`

**Desktop nav (hidden on mobile with `hidden md:block`):**
- "Menu" button: `px-6 py-3 bg-white rounded-full border border-black text-sm font-semibold`, hover: `hover:bg-black hover:text-white transition-colors duration-200`
- "Dental Emergency" text: `text-sm font-semibold text-black`

**Mobile hamburger (visible only on mobile with `md:hidden`):**
- Container: `w-10 h-10 flex items-center justify-center`, `relative`
- 3 spans, each: `absolute h-0.5 w-6 bg-black rounded-full`
- Transition: `transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]`
- Closed state: top span `-translate-y-2`, middle `opacity-100 scale-x-100`, bottom `translate-y-2`
- Open state: top `rotate-45 translate-y-0`, middle `opacity-0 scale-x-0`, bottom `-rotate-45 translate-y-0`

**Mobile menu overlay (`md:hidden`):**
- Outer: `fixed inset-0 z-40`, pointer-events toggled based on open state
- Backdrop: `absolute inset-0 bg-black/20 backdrop-blur-sm`, fades opacity. Clicking closes menu.
- Panel: `absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl`, slides with `translate-x-0` (open) / `translate-x-full` (closed), `duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]`
- Content: `flex flex-col justify-center h-full px-8 gap-1`
- Nav links: ['Home', 'Services', 'About', 'Gallery', 'Contact']
  - Each: `text-4xl font-bold text-black hover:text-neutral-500`
  - Staggered entrance: `opacity-0 translate-x-8` -> `opacity-100 translate-x-0`, `transitionDelay: ${100 + i * 60}ms` when open
  - `transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]`
- Bottom section: `mt-8 pt-8 border-t border-neutral-200`, delayed 450ms
  - "Dental Emergency" text: `text-sm font-semibold text-black mb-4`
  - Button: `w-full px-6 py-4 bg-black rounded-full text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200`, text "Book Appointment"
- When open: `document.body.style.overflow = 'hidden'`. Cleanup on unmount.

---

### SECTION 1 - HERO

**Container:** `<section>`, `h-screen w-full overflow-hidden flex flex-col`, `pt-24 md:pt-24 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2`

Attach both `section1Ref` and `s1Reveal.containerRef` to this element.

Uses `HERO_IMAGE` as shared background via MaskedCard technique.

**3 Feature Bars** (mapped from `featureBars` array):
- Each is a `MaskedCard` with: `w-full h-14 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative`
- Animated with `s1Reveal.getAnimStyle(i)` for i=0,1,2
- Content: `<span>` centered vertically and horizontally (`flex items-center justify-center h-full`), `text-black text-lg md:text-3xl font-bold text-center`, `relative z-10`

**Main Hero Card** (4th card, index 3):
- `MaskedCard`: `w-full flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden relative`
- Animated with `s1Reveal.getAnimStyle(3)`
- **Top-left text:** `absolute top-4 left-4 md:top-7 md:left-7`, `text-black text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[300px] z-10`
  - Content: "We wish to provide professional dental services" `<br/>` "that match the current technologies"
- **Bottom-left block:** `absolute bottom-5 left-3 md:bottom-8 md:left-4 z-10`
  - Label: `block text-black text-xs md:text-sm font-semibold mb-1 md:mb-2`, text "Trusted Dentist in West New York"
  - Heading: `<h1>` with `text-black text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight`, content: "Dental" `<br/>` "Care"
- **Bottom-right text:** `absolute bottom-6 right-4 md:bottom-10 md:right-8`, `text-white text-xs md:text-sm font-semibold z-10`, content: "Free Consultation"

---

### SECTION 2 - SMILE GALLERY

**Container:** `<section>`, `min-h-screen md:h-screen w-full overflow-hidden flex flex-col`, `pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2`

Attach both `section2Ref` and `s2Reveal.containerRef` to this element.

Uses `SECTION2_IMAGE` as shared background via MaskedCard technique.

**Grid container:** `flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2`

**Card 0 - Top Left ("Smile Gallery"):**
- `MaskedCard`: `rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(0)`
- Heading: `absolute top-4 left-5 md:top-6 md:left-7`, `text-white md:text-black text-2xl md:text-3xl font-bold z-10`, text "Smile Gallery"
- Subtitle: `absolute bottom-4 left-5 md:bottom-6 md:left-7`, `text-white md:text-black text-xs md:text-sm font-semibold z-10`, text "Our cosmetic dental work"

**Card 1 - Top Right (spans 2 rows on desktop):**
- `MaskedCard`: `md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(1)`
- Text: `absolute bottom-16 left-5 md:bottom-20 md:left-7`, `text-white text-xs md:text-sm font-semibold leading-4 md:leading-5 z-10`, content: "If you want a gorgeous smile," `<br/>` "call us to ask about a smile makeover."
- Button: `absolute bottom-4 right-4 md:bottom-6 md:right-6`, `px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform`, text "Call Us"

**Card 2 - Bottom Left ("Smile makeover"):**
- `MaskedCard`: `rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(2)`
- Heading: `absolute top-4 left-5 md:top-6 md:left-7`, `text-white md:text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10`, content: "Smile" `<br/>` "makeover"

**Card 3 - Bottom Full Width (Services):**
- `MaskedCard`: `col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(3)`
- Inner container: `absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3`
- 4 service sub-cards mapped from `services` array:
  - Container: `flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between`
  - Active: `bg-white/90 backdrop-blur-md`
  - Inactive: `bg-white/20 backdrop-blur-xl`
  - Service name: `<h3>` with `text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line`, color: active=`text-black`, inactive=`text-white`
  - Number badge (if `svc.num` exists): `self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold`
    - Active: `border-black text-black`
    - Inactive: `border-white text-white`

---

### SECTION 3 - IMPLANT DENTISTRY

**Container:** `<section>`, `min-h-screen md:h-screen w-full overflow-hidden flex flex-col`, `pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2`

Attach `s3Reveal.containerRef` to this element.

Does NOT use MaskedCard technique. Uses regular `<img>` tags and solid backgrounds.

**Grid:** `flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2`

#### LEFT COLUMN: `flex flex-col gap-1.5 md:gap-2`

**1. Heading Card:**
- `<div>`: `rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.2] min-h-[180px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(0)`
- Heading: `<h2>` with `text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black`, content: "Implant" `<br/>` "Dentistry"
- Subtitle: `<p>` with `text-xs md:text-sm font-semibold text-black`, text "Restore Missing Teeth"

**2. Two Image Cards (side by side):**
- Wrapper: `<div>` with `flex gap-1.5 md:gap-2 flex-1 min-h-[140px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(1)`
- Left image: `<div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden"><img src={SECTION3_IMG1} alt="Dental implant procedure" className="w-full h-full object-cover" /></div>`
- Right image: `<div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden"><img src={SECTION3_IMG2} alt="Dental restoration" className="w-full h-full object-cover" /></div>`

**3. Consultation Card:**
- `<div>`: `rounded-xl md:rounded-2xl bg-zinc-200 p-5 md:p-7 flex items-end justify-between flex-[0.8] min-h-[160px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(2)`
- Left content block:
  - Label: `<p>` with `text-xs md:text-sm font-semibold text-black mb-2 md:mb-3`, text "Consultation"
  - Heading: `<h3>` with `text-xl md:text-3xl font-bold text-black leading-6 md:leading-8`, content: "Dental" `<br/>` "Restoration" `<br/>` "Services"
- Button: `px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold hover:scale-105 transition-transform`, text "Book Online"

#### RIGHT COLUMN: Single tall image card

- `<div>`: `rounded-xl md:rounded-2xl overflow-hidden relative min-h-[350px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(3)`
- Background image: `<img src={SECTION3_BG} alt="Smiling patient" className="w-full h-full object-cover" />`
- **Overlay container:** `absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex gap-1.5 md:gap-2`

**Overlay Card 1 (white, left):**
- `flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52`
- Heading: `<h4>` with `text-lg md:text-2xl font-bold text-black leading-5 md:leading-7`, content: "The Process" `<br/>` "of Installing" `<br/>` "Implants"
- Arrow icon: `self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center`
  - SVG: `width="14" height="14" viewBox="0 0 14 14" fill="none"`, class `rotate-[-45deg]`
  - Path: `d="M1 7h12m0 0L8 2m5 5L8 12"` with `stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"`

**Overlay Card 2 (glass, right):**
- `flex-1 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52`
- Heading: `<h4>` with `text-lg md:text-2xl font-bold text-white leading-5 md:leading-7`, content: "Caring" `<br/>` "for Dental" `<br/>` "Implants"
- Arrow icon: `self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center`
  - Same SVG as above but with added class `text-white`

---

### OUTER WRAPPER

The entire app is wrapped in `<div className="bg-white">` containing:
1. `{showSplash && <SplashScreen />}` (conditionally rendered)
2. `<Navbar />`
3. Section 1
4. Section 2
5. Section 3

---

### KEY DESIGN RULES

- **Spacing between sections:** Only `pb-1.5 md:pb-2` on each section and `pt-1.5 md:pt-2` on sections 2 and 3 -- virtually seamless.
- **Border radius:** All cards use `rounded-xl md:rounded-2xl` with `overflow-hidden`.
- **Color palette:** Strictly black, white, and translucent white (`bg-white/20`, `bg-white/90`) with `backdrop-blur-md` or `backdrop-blur-xl`.
- **Background fills:** `bg-stone-50` and `bg-zinc-200` for Section 3 solid cards.
- **Typography:** Heavy bold/extrabold, `clamp()` for responsive headings, extremely tight leading (0.79, 0.9, 0.95, 1.05).
- **Interactions:** `hover:scale-105 transition-transform` on CTA buttons.
- **Responsive:** Single `md:` (768px) breakpoint. Stacked on mobile, grid on desktop.
- **No external packages** beyond React and Tailwind.

---------------

Create a React + Vite + TypeScript + Tailwind CSS landing page for a creative studio called "Prisma". The page has 3 sections: Hero, About, and Features. Use framer-motion for animations and lucide-react for icons. The design is dark, moody, and cinematic with a warm cream color palette.

FONTS

Load two Google Fonts in index.html:

Almarai (weights: 300, 400, 700, 800) -- used as the global default font
Instrument Serif (italic only) -- used for italic accent text in the About section
In index.css, set the global font family:


* { font-family: 'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; }
In tailwind.config.js, extend:

colors.primary: #DEDBC8 (warm cream, used for all primary text and accents)
fontFamily.serif: ['"Instrument Serif"', 'serif']
COLOR SYSTEM

Background: black (#000000) globally, #101010 for the About card, #212121 for Features cards
Primary text color: #E1E0CC (applied via inline style, slightly different from Tailwind primary)
Tailwind primary: #DEDBC8 (used for utility classes like text-primary, text-primary/70)
Gray text: text-gray-400, text-gray-500
Navbar link color: rgba(225, 224, 204, 0.8) with hover: #E1E0CC
CUSTOM CSS UTILITIES (index.css)

Two SVG noise texture utilities:

.noise-overlay: fractal noise (baseFrequency: 0.85, numOctaves: 3) used as overlay on hero video
.bg-noise: fractal noise (baseFrequency: 0.9, numOctaves: 4) used as subtle background in Features section
Both use inline SVG data URIs with feTurbulence filter.

SECTION 1: HERO

Full viewport height (h-screen). The entire section has p-4 md:p-6 padding creating an inset effect. Inside is a container with rounded-2xl md:rounded-[2rem] and overflow-hidden.

Background video:

URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4
autoPlay loop muted playsInline, object-cover, fills entire container
Noise overlay on top: .noise-overlay with opacity-[0.7] mix-blend-overlay pointer-events-none
Gradient overlay: bg-gradient-to-b from-black/30 via-transparent to-black/60
Navbar:

Absolutely positioned at top center
Black background pill that hangs from top edge: bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8
5 nav items: "Our story", "Collective", "Workshops", "Programs", "Inquiries"
Text size: text-[10px] sm:text-xs md:text-sm
Gap between items: gap-3 sm:gap-6 md:gap-12 lg:gap-14
Link color: rgba(225, 224, 204, 0.8), hover: #E1E0CC (inline styles)
Hero Content (bottom-aligned):

Absolutely positioned at bottom: absolute bottom-0 left-0 right-0
12-column grid: left 8 columns for heading, right 4 columns for text + button
Giant heading "Prisma" using WordsPullUp component:
Responsive sizes: text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]
font-medium leading-[0.85] tracking-[-0.07em]
Color: #E1E0CC
Has a superscript asterisk (*) on the final "a" of "Prisma": positioned with absolute top-[0.65em] -right-[0.3em] text-[0.31em]
Pull-up animation: each word slides up from y:20 with staggered delay of 0.08s, triggered by useInView
Description paragraph (right column):
"Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives."
text-primary/70 text-xs sm:text-sm md:text-base, line-height: 1.2
Framer motion: fade up from y:20, delay 0.5s, custom ease [0.16, 1, 0.3, 1]
CTA Button "Join the lab":
Pill shape: bg-primary rounded-full
Black text, font-medium, text-sm sm:text-base
Right side has a black circle (bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10) containing a white/cream ArrowRight icon
Hover: gap increases (hover:gap-3), circle scales up (group-hover:scale-110)
Framer motion: fade up from y:20, delay 0.7s, same custom ease
SECTION 2: ABOUT

bg-black, padded section with centered content
Inner card: bg-[#101010], centered text, max-w-6xl
Top: small label "Visual arts" in text-primary, text-[10px] sm:text-xs
Main heading uses WordsPullUpMultiStyle component with 3 segments:
"I am Marcus Chen," -- font-normal (Almarai)
"a self-taught director." -- italic font-serif (Instrument Serif italic)
"I have skills in color grading, visual effects, and narrative design." -- font-normal
Container: text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]
Each word animates in with pull-up effect (y:20 to y:0), staggered at 0.08s delay
Body paragraph below with scroll-linked character opacity animation:
Text: "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
text-[#DEDBC8], text-xs sm:text-sm md:text-base
Each character is individually wrapped in an AnimatedLetter component
Uses useScroll with target offset ['start 0.8', 'end 0.2']
Each character's opacity transitions from 0.2 to 1 based on scroll position, creating a progressive text reveal effect
Character staggering: charProgress = index / totalChars, range [charProgress - 0.1, charProgress + 0.05]
SECTION 3: FEATURES

min-h-screen bg-black, with subtle .bg-noise overlay at opacity-[0.15]
Header text uses WordsPullUpMultiStyle:
Line 1: "Studio-grade workflows for visionary creators." in cream
Line 2: "Built for pure vision. Powered by art." in text-gray-500
Both: text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal
4-column card grid (lg:h-[480px], gap-3 sm:gap-2 md:gap-1):

Each card has staggered entrance animation: scale from 0.95 + fade in, triggered by useInView (once, margin "-100px"), staggered at 0.15s intervals with ease [0.22, 1, 0.36, 1].

Card 1 - Video card: Full video background (URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4), autoPlay loop muted playsInline, object-cover. Bottom text: "Your creative canvas." in #E1E0CC.

Card 2 - "Project Storyboard." (01): bg-[#212121], small image icon at top (https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85, 10x10 sm:12x12 rounded), title with number, 4 checklist items with green Check icons, "Learn more" link with rotated arrow (-45deg).

Card 3 - "Smart Critiques." (02): Same layout as Card 2. Icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85. 3 checklist items about AI analysis, creative notes, tool integrations.

Card 4 - "Immersion Capsule." (03): Same layout. Icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85. 3 checklist items about notification silencing, ambient soundscapes, schedule syncing.

All feature card checklist items use Check icon from lucide-react in text-primary color, with text-gray-400 description text. "Learn more" buttons use ArrowRight rotated -45deg.

SHARED ANIMATION COMPONENTS

WordsPullUp: Splits text by spaces, each word is a motion.span that slides up (y:20 to 0) with staggered delay. Uses useInView (once: true). Supports showAsterisk prop that adds a superscript * after the last character "a" of the final word.

WordsPullUpMultiStyle: Takes an array of {text, className} segments, splits all into individual words preserving per-word className. Same pull-up animation. Words are wrapped in inline-flex flex-wrap justify-center.

RESPONSIVE BREAKPOINTS

The page is fully responsive across mobile, tablet, and desktop. Cards in Features switch from 1-col (mobile) to 2-col (md) to 4-col (lg). Hero text scales from 26vw down to 19vw. Navbar items compress with smaller gaps on mobile. All padding, font sizes, and spacing use Tailwind responsive prefixes (sm/md/lg/xl/2xl).

TECH STACK

Vite + React 18 + TypeScript
Tailwind CSS 3
framer-motion (for all animations: pull-up text, fade-in, scroll-linked opacity, card entrances)
lucide-react (ArrowRight, Check icons)

------------------------


