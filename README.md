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

4. **Option 4: The Best of Both Worlds — Nouméa Base + Isle of Pines Express (`#best-of-both`)**
   - **Base:** 5–6 nights Nouméa (Baie des Citrons) + 25-min domestic flight hop to Isle of Pines (Day Trip or 1-Night Overnight).
   - **Highlights:** Savor world-class French dining, patisseries, and apartment luxury in Nouméa every night, while experiencing the #1 South Pacific wonder: Upi Bay wooden pirogues, Piscine Naturelle aquarium, and grilled spiny rock lobster.
   - **Ideal for:** Families who demand excellent food and comfortable lodging, but refuse to miss the iconic natural wonders of the Isle of Pines.

5. **Option 5: The Grand Lagoon Resort & Spa Base (`#relax-resort`)**
   - **Base:** Nouméa Luxury Beachfront (Château Royal Beach Resort & Spa, Le Méridien Nouméa Resort & Spa, Hilton Nouméa La Promenade Residences, or Hôtel Le Lagon).
   - **Highlights:** 3 hectares of manicured tropical parkland, heated outdoor lagoon pool, indoor Aquatonic heated seawater hydrotherapy labyrinth, direct beach access, daily buffet breakfast included, 5-minute stroll to Duck Island water taxi, Phare Amédée day cruise.
   - **Ideal for:** Ultimate relaxation with zero packing/unpacking, lush gardens, spa pampering, and effortless reef excursions for dad and kids.

6. **Option 6: The Private Coral Island Sanctuary (`#relax-island`)**
   - **Base:** DoubleTree by Hilton Noumea Ilot Maitre Resort (200-hectare protected coral reef reserve, 20-min catamaran from Nouméa).
   - **Highlights:** Walk straight from garden or overwater villas into the sea; wild green sea turtles grazing 15 meters off the beach; infinity pool overlooking the lagoon; zero cars, zero traffic; sunset catamaran to Nouméa for French waterfront dinners.
   - **Ideal for:** Pure island escapism with resort comforts, crystal waters, and snorkeling right off your doorstep.

7. **Option 7: The Gentle Nature & Wellness Retreat (`#relax-retreat`)**
   - **Base:** 3 nights Sheraton New Caledonia Deva Spa & Golf Resort (Bourail) + 3 nights Château Royal Beach Resort (Nouméa).
   - **Highlights:** 8,000 hectares of UNESCO World Heritage biosphere reserve, traditional Melanesian bungalow architecture, Deep Nature Spa hydrotherapy, Dye Designs 18-hole golf, 17 km wave-free Poé lagoon paddling, followed by grand beachfront dining and Amédée lighthouse cruise in Nouméa.
   - **Ideal for:** Combining 5-star nature wellness, spa pampering, calm lagoon wading, and grand coastal dining with just 1 scenic drive.

8. **Multi-Factor Comparison Matrix & Priority Quiz (`#compare`)**
   - **Interactive Priority Quiz:** Instant match across all 7 travel styles and priorities.
   - **Master Archipelago Map:** Geographic scale comparison across Grande Terre, Ilot Maître, and Isle of Pines.
   - **Multi-Factor Side-by-Side Matrix:** Logistics, kid safety, snorkeling, bakeries, weather resilience, and total budget with view filter toggles (All 7, Relaxing Resorts, Active Touring).
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
