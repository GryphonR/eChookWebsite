# Design Notes for eChook Redesign

## Wireframe Concepts

### Homepage Layout
- **Header**: existing logo left, keep same font and background color. Responsive hamburger on mobile.
- **Hero**:
  - Large tagline: "Open Source Engineering & Telemetry Solutions"
  - Subtext: "Hardware, data acquisition, and 3D printed components for Greenpower Teams."
  - Optional call-to-action button: "Explore eChook" linking to below spokes section.
- **Spoke Cards** (flex container):
  1. **Greenpower Telemetry**
     - Icon/illustration of telemetry board + wire loom.
     - Text: "Complete data logging systems for F24/F24+".
     - Button/link: "Greenpower Teams" -> greenpower.html.
  2. **3D Printing Shop**
     - Icon of 3D printer or parts.
     - Text: "Cases, mounts, and various other nicknacks." 
     - Button/link: shop.echook.uk.
- **How the eChook Greenpower Telemetry System Works** (three steps)
  - Step 1: Hardware integration (eChook Nano V2 Hardware and sensors).
  - Step 2: Connect to OMNI Android app via Bluetooth.
  - Step 3: Analyse live data for performance at live.echook.uk
  - Each step has a small icon and brief description.
- **Educational Value** section
  - Short paragraph framing integration as engineering challenge:
    - wiring looms, sensor mounting, data interpretation.
- **Footer**
  - Links split into categories: Shop | Code & CAD | Support.
  - Shop: Greenpower store (kits), eChook shop (boards & prints).
  - Code & CAD: GitHub, Printables.
  - Support: Documentation, Community Forum.

### Mobile Considerations
- Stack sections vertically.
- Spoke cards full width.
- Large touch targets.

## Copy Drafts

### Headline
> Open Source Engineering & Telemetry Solutions

### Subheadline
> Hardware, data acquisition, and 3D printed components for makers and motorsport.

### Spoke Texts
- Greenpower: "Complete data logging systems for F24/F24+." 
- 3D Printing: "Cases, mounts, and custom parts."
- Future: "Stay tuned for new products."

### Educational Pitch
> The eChook Nano V2 hardware comes ready‑built, with teams needing to flash the provided open source Arduino code and integrate the hardware into their cars. Assemble the wiring loom, mount sensors securely, and use the results for data‑driven tuning to improve the cars performance.

### App Note
> The OMNI telemetry app is the officially recommended software (Android only). iOS is not supported.

## Style Guide Notes
- **Typography**: preserve existing site font (likely Helvetica/Arial?).
- **Colors**:
  - Primary: original site background and header color; keep same for continuity.
  - Accent: choose one or two modern hues (e.g. teal or orange) for buttons/links.
- **Spacing**:
  - Use consistent padding (e.g. 1rem, 2rem) and generous whitespace.
- **Buttons**:
  - Rounded corners, solid fill for primary, outline for secondary.
- **Breakpoints**: 480px, 768px, 1024px; mobile-first.


*This file can be updated as the design phase continues.*
