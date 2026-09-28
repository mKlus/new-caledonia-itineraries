# New Caledonia 6-Night Family Adventure Itineraries

Realistic, active 6-night family holiday itineraries for New Caledonia (Sunday, 8 November – Saturday, 14 November 2026), customized for **4 adults and 1 active 9-year-old child** arriving on QF91 (12:35 PM) and departing on QF92 (1:50 PM).

## 🌴 Website Architecture

This website provides a deep-dive review and side-by-side comparison across 4 pages:

1. **Option 1 (`index.html`):** *The Islet Explorer & Mainland Base*
   - Base: Nouméa (Baie des Citrons / Anse Vata). Unpack once.
   - Highlights: Duck Island snorkel trail, Îlot Signal turtle sanctuary, Phare Amédée lighthouse, Parc Provincial de la Rivière Bleue rainforest.
   - Ideal for: Families seeking zero hotel changes, easy bakery mornings, and fast speedboat marine hops.

2. **Option 2 (`option2-isle-of-pines.html`):** *The Island Split (Nouméa + Isle of Pines)*
   - Base: 3 nights Isle of Pines (Kanumera/Oro) + 3 nights Nouméa (25-min domestic flight).
   - Highlights: Traditional Kanak outrigger pirogues in Upi Bay, waist-deep Piscine Naturelle aquarium, Nokanhui Atoll, Kuto Beach.
   - Ideal for: Bucket-list South Pacific beauty and premier off-the-beach snorkeling.

3. **Option 3 (`option3-west-coast.html`):** *The West Coast Reef & Bush Road Trip*
   - Base: 3 nights Poé Beach/Bourail + 3 nights Nouméa (self-drive along RT1).
   - Highlights: 17 km calm lagoon at Poé, green turtles at the Shark Fault, Sentier des Trois Baies pine cliff hike, Domaine de Deva lookouts.
   - Ideal for: Outdoor adventurers who love road-trip freedom, coastal hiking, and beach barbecues.

4. **Comparison Matrix (`comparison.html`):**
   - 12-factor side-by-side matrix (budget, logistics, child safety, food, snorkeling, holiday impact).
   - Interactive Priority Quiz to find your family's best match.
   - Day-by-day comparison schedule and pre-departure checklist.

## 🚀 How to View Locally

Simply open `index.html` in any web browser:
```bash
open index.html
```
Or start a local lightweight web server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## 🌐 Publishing to GitHub & GitHub Pages

To publish this repository to your personal GitHub account and host it as a live website:

1. **Create and push to GitHub using the GitHub CLI:**
   ```bash
   gh repo create new-caledonia-itineraries --public --source=. --remote=origin --push
   ```
2. **Or manually push to an existing GitHub repository:**
   ```bash
   git remote add origin https://github.com/<your-username>/new-caledonia-itineraries.git
   git branch -M main
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to your repository on GitHub: `Settings` &rarr; `Pages`.
   - Under **Build and deployment** &rarr; **Branch**, select `main` and root (`/`), then click **Save**.
   - Your live website will be available at: `https://<your-username>.github.io/new-caledonia-itineraries/`
