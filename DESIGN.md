# Design System Strategy: Editorial Momentum

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Career Catalyst."** 

Unlike standard corporate job portals that feel static and bureaucratic, this system is designed to feel like an accelerating force. We move away from the "template" look by embracing **Kinetic Editorialism**. This means utilizing high-contrast typography scales, intentional asymmetry, and "gravity-defying" elements that overlap sections to create a sense of forward motion. 

The aesthetic leverages the vibrant energy of the core orange and amber palette to provide a professional yet high-octane atmosphere. By utilizing the provided 3D character imagery as a dynamic anchor, the UI breathes life into the user journey—treating every career milestone as a premium editorial feature rather than a database entry.

---

## 2. Color & Surface Philosophy
The palette is rooted in warmth and professional urgency. We utilize a sophisticated "Tonal Layering" approach to define space, moving away from legacy web borders.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or container definition. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `background` or `surface` element. This creates a high-end, seamless "magazine" feel.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials.
- **Surface (Base):** `#fff8f6` - The primary canvas.
- **Surface-Container-Low:** `#fff1eb` - For secondary information zones.
- **Surface-Container-Highest:** `#f6ded3` - For high-focus interaction areas.
Nesting these tiers allows us to define importance through depth. An inner card (`surface-container-lowest`) sitting on a `surface-container-high` section creates natural separation without visual noise.

### The "Glass & Gradient" Rule
To elevate the "out-of-the-box" feel, floating elements (like navigation bars or hovering tooltips) must use **Glassmorphism**:
- **Background:** Semi-transparent `surface` color (approx. 70-80% opacity).
- **Effect:** `backdrop-blur` (12px–20px).
- **Signature Gradient:** Main CTAs and Hero backgrounds should use a subtle linear gradient from `primary` (#9d4300) to `primary_container` (#f97316) at a 135° angle to inject "soul" and dimension.

---

## 3. Typography: The Editorial Voice
Our typography creates a "Strong & Heavy" hierarchy that feels authoritative yet approachable.

*   **Display & Headlines (Plus Jakarta Sans):** These are the "voice" of the brand. Use `ExtraBold` weights for `display-lg` (3.5rem) to create high-impact editorial moments. The tight letter-spacing and heavy weight reflect the "energetic and career-focused" personality.
*   **Body & Labels (Inter):** While headlines shout, the body text guides. Inter provides exceptional legibility at smaller scales. Use `body-lg` (1rem) for most reading experiences to maintain a premium, airy feel.
*   **Contrast as Navigation:** Use extreme weight contrast (e.g., an `ExtraBold` headline paired with a `Regular` weight body-md) to create an immediate visual hierarchy that requires zero mental effort to scan.

---

## 4. Elevation & Depth
In this system, depth is a functional tool, not just a stylistic choice.

*   **The Layering Principle:** Avoid shadows for static elements. Instead, stack `surface-container-lowest` cards on top of `surface-container-low` backgrounds. This "tonal lift" is the hallmark of modern, high-end digital design.
*   **Ambient Shadows:** For interactive floating elements (like a card on hover), use **Ambient Shadows**. These are extra-diffused: `box-shadow: 0 20px 40px rgba(37, 25, 19, 0.06)`. The shadow color is a tint of our `on-surface` (#251913), never pure black, ensuring the depth feels integrated with the warm brand palette.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility in input fields, use the `outline_variant` (#e0c0b1) at 20% opacity. 100% opaque borders are forbidden.
*   **Corner Treatment:** Embrace the **xl (3rem)** or **lg (2rem)** roundedness for main content containers. This extreme rounding, paired with the vibrant character imagery, softens the "professional" edge, making the platform feel welcoming and modern.

---

## 5. Components

### Buttons
- **Primary:** Gradient-filled (Primary to Primary-Container) with `full` (pill) roundedness. Use `title-sm` (Inter SemiBold) for label text.
- **Secondary:** Surface-tinted with a "Ghost Border." No fill.
- **Interaction:** On hover, a subtle `ambient-shadow` and a 2px upward Y-axis shift.

### Cards & Lists
- **Rule:** Forbid divider lines. Use `1.4rem (4)` to `2rem (6)` of vertical white space to separate items.
- **Styling:** Use `xl (3rem)` rounded corners. Backgrounds should be `surface-container-lowest` to pop against the `background`.

### Input Fields
- **Style:** `md (1.5rem)` rounded corners.
- **State:** When focused, the "Ghost Border" increases to 40% opacity with a subtle `primary` glow. Helper text uses `label-md` in `on-surface-variant`.

### Chips
- **Selection Chips:** Use `secondary_container` (#fea619) for active states to provide a vibrant "Amber" pop that distinguishes selection from the primary action color.

---

## 6. Do’s and Don’ts

### Do:
- **Do** overlap character imagery across two different surface containers to break the "grid" and create a sense of depth.
- **Do** use the `24 (8.5rem)` spacing scale for major section padding to ensure the UI feels "Editorial" and airy.
- **Do** use `primary_fixed_dim` (#ffb690) for subtle background accents behind text to highlight key career stats.

### Don't:
- **Don't** use 1px solid dividers or borders to separate list items; let white space do the work.
- **Don't** use pure black for text or shadows; always use the `on-surface` (#251913) or a tinted variant to maintain the warm, professional tone.
- **Don't** cram content. If a section feels crowded, double the padding. High-end design requires the "luxury of space."
- **Don't** use standard "Drop Shadows." If it doesn't look like a soft, ambient glow, it doesn't belong in this system.