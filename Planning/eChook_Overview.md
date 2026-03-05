eChook: Brand & Landing Page Strategy

1. Quick Summary

eChook focuses on open-source engineering, data logging, and custom 3D printing. While currently heavily involved with the Greenpower Education Trust challenge, the company is expanding to include broader electronics and engineering products.

The primary goals for the www.echook.uk redesign are:

Consolidate the ecosystem: Create a clear starting point to route users efficiently to documentation, GitHub, Printables, Google Play, or the Greenpower store.

Establish a scalable architecture: Implement a "Hub and Spoke" design. This gives Greenpower its own dedicated section alongside 3D printing services, leaving room for future product lines to be added seamlessly.

2. Core Products

A. Greenpower Telemetry (The eChook Nano)

Current Version: eChook Nano V2 (SMD), utilizing the Arduino Nano Every.

The Engineering Challenge: The V2 board shifted from DIY component soldering to a more robust, largely assembled board. The educational focus is now on system integration. Users must build wiring looms, securely mount sensors (hall effect, current, temperature) in challenging physical environments, and design the overall system architecture.

Capabilities: Logs individual 12V battery voltages, current, throttle position, brake status, dual temperatures, and dual speeds.

Purchasing Channels: Full kits are available via the Greenpower Shop (SKU: GP1435). Bare boards and accessories are sold at shop.echook.uk.

B. 3D Printing & Physical Products

Standalone Pillar: 3D printing operates as a main offering via shop.echook.uk, catering to makers and teams without printer access. There is a natural overlap with the Greenpower product line.

Philosophy: Bridging the gap between digital electronics and physical implementation.

Distribution: Open-source Greenpower STL files are hosted on Printables. Physical parts are sold directly. Key products include the eChook Nano case and sensor mounts, alongside non-open-source models like Yamaha Clavinova piano foot covers and Honda CR125R L-Plate mounts.

C. Software & Telemetry Ecosystem

The App: The recommended software is the OMNI telemetry app (developed by the Banchory Greenpower Team), which combines hardware data with phone GPS.

Limitation: The app is currently Android-only; there is no iOS support.

Cloud/Live Data: Transmits data to eChook Private Live Data, Banchory's site, or dweet.io for real-time pit-wall analysis.

Open Source: The Arduino firmware (C++) is open-source and hosted on GitHub.

3. Key Challenges for the Redesign

Challenge 1: The "Hub and Spoke" Shift

Observation: The brand is transitioning from exclusively serving Greenpower to a broader maker and engineering focus.

Action: The homepage must introduce the broader eChook brand first, then provide clear pathways (spokes) for different user segments, such as "For Greenpower Teams" or "3D Printed Parts."

Challenge 2: Highlighting the Learning Value

Observation: Because the V2 board requires less soldering, users might perceive a drop in educational value compared to building a kit from scratch.

Action: The copy should frame integration as a primary engineering challenge. Emphasize that installing the eChook teaches applied motorsport skills: routing looms, calibrating sensors, managing signal noise, and interpreting data.

Challenge 3: App Identity and Limitations

Observation: Older documentation references the "eChook Companion App," while current systems rely on OMNI.

Action: The landing page should clearly establish OMNI as the official app. Furthermore, the Android-only limitation must be stated upfront to manage expectations and reduce support queries.

Challenge 4: The Fragmented Buying Journey

Observation: Users currently navigate between the Greenpower shop for full kits and the eChook shop for bare boards and prints.

Action: The landing page must clearly signpost what to buy and where to get it.

4. Proposed Landing Page Structure

Based on this strategy, the www.echook.uk landing page should follow this layout:

Hero Section (The Umbrella Brand): * Headline: Open Source Engineering & Telemetry Solutions.

Sub-headline: Hardware, data acquisition, and 3D printed components for makers and motorsport.

Category Routing (The Spokes):

Pathway A: Greenpower Telemetry. "Complete data logging systems for F24/F24+." -> Links to Greenpower sub-page.

Pathway B: 3D Printing Shop. "Cases, mounts, and custom parts." -> Links to shop.echook.uk.

Pathway C: [Future Products]. Reserved space for upcoming product lines.

The eChook System (Greenpower Focus):

Step 1. Hardware Integration: Install the Nano V2 and assemble the sensor loom.

Step 2. The App: Connect to the OMNI Android App via Bluetooth.

Step 3. Data Analysis: Stream live data to the pit wall for performance optimization.

Educational Value:

Highlight the applied learning involved in system assembly, data analysis, and hardware-software integration.

Clear Routing / Footer:

Shop: Greenpower Store (Kits) | eChook Shop (Boards & 3D Prints)

Code & CAD: GitHub | Printables

Support: Documentation | Community Forum

5. Conclusion

The redesign shifts the site from a single-product showcase to a category dispatcher. By treating Greenpower and 3D Printing as distinct operational blocks on the homepage, the architecture becomes future-proof. New product lines can be added as new blocks without disrupting the established user journeys for existing products.