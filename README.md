# New Caledonia 6-Night Family Adventure Itineraries & Decision Tool

**Live Website:** [https://mklus.github.io/new-caledonia-itineraries/](https://mklus.github.io/new-caledonia-itineraries/)  
**GitHub Repository:** [https://github.com/mKlus/new-caledonia-itineraries](https://github.com/mKlus/new-caledonia-itineraries)

Realistic, active 6-night family holiday itineraries for New Caledonia (Sunday, 8 November – Saturday, 14 November 2026), customized for **4 adults and 1 active 9-year-old child** arriving on QF91 (12:35 PM) and departing on QF92 (1:50 PM).

Built with **React 19, TypeScript, Vite 6, Tailwind CSS v4, Lucide React, and Leaflet**.

---

## 🌴 Website Architecture

This single-page application (SPA) unifies 3 deep-dive itinerary options and an interactive decision guide:

1. **Option 1: The Islet Explorer & Mainland Base (`#islet`)**
   - **Base:** Nouméa (Baie des Citrons / Anse Vata). Unpack once.
   - **Highlights:** Duck Island snorkel trail, Îlot Signal turtle sanctuary, Phare Amédée lighthouse, Parc Provincial de la Rivière Bleue rainforest.
   - **Ideal for:** Families seeking zero hotel changes, easy bakery mornings, and fast speedboat marine hops.

2. **Option 2: The Island Split — Nouméa + Isle of Pines (`#isle-of-pines`)**
   - **Base:** 3 nights Isle of Pines (Kanumera/Oro) + 3 nights Nouméa (25-min domestic flight).
   - **Highlights:** Traditional Kanak outrigger pirogues in Upi Bay, waist-deep Piscine Naturelle aquarium, Nokanhui Atoll, Kuto Beach.
   - **Ideal for:** Bucket-list South Pacific beauty and premier off-the-beach snorkeling.

3. **Option 3: The West Coast Reef & Bush Road Trip (`#west-coast`)**
   - **Base:** 3 nights Poé Beach/Bourail + 3 nights Nouméa (self-drive along RT1).
   - **Highlights:** 17 km calm lagoon at Poé, green turtles at the Shark Fault, Sentier des Trois Baies pine cliff hike, Domaine de Deva lookouts.
   - **Ideal for:** Outdoor adventurers who love road-trip freedom, coastal hiking, and beach barbecues.

4. **12-Factor Comparison Matrix & Priority Quiz (`#compare`)**
   - **Interactive Priority Quiz:** Instant match based on your family's travel style.
   - **Master Archipelago Map:** Geographic scale comparison across Grande Terre and Isle of Pines.
   - **12-Factor Side-by-Side Matrix:** Logistics, kid safety, snorkeling, bakeries, weather resilience, and total budget.
   - **Dynamic Currency Converter:** Toggle between XPF, AUD, or both with live exchange rate adjustments.
   - **Persistent Checklist:** Pre-departure planning checklist stored in `localStorage`.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Mapping:** [Leaflet](https://leafletjs.com/) with OpenStreetMap tiles and custom emoji pins
- **CI/CD:** GitHub Actions automated deployment via `actions/deploy-pages`

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Type check and build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Automated GitHub Pages Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site whenever changes are pushed to `main`.

To enable GitHub Pages in your repository settings:
1. Go to `Settings` → `Pages`.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push to `main` to trigger the build.
