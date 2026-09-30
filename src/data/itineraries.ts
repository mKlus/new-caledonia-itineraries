import { ItineraryOption } from './types';

export const ITINERARIES: Record<'islet' | 'isle-of-pines' | 'west-coast' | 'best-of-both' | 'relax-resort' | 'relax-island' | 'relax-retreat', ItineraryOption> = {
  islet: {
    id: 'islet',
    optionNumber: 1,
    title: 'The Islet Explorer & Mainland Base',
    tagline: 'Single Base Convenience with Speedboat Marine Hops',
    badge: '⭐ Option 1 — Zero Hotel Moves',
    heroImageGradient: 'from-sky-700 via-cyan-800 to-teal-900',
    baseLocation: 'Baie des Citrons / Anse Vata, Nouméa',
    hotelMoves: 0,
    totalDrivingKm: 160,
    avgDailyDrivingMins: 25,
    cost5PaxXPF: 418000,
    cost5PaxAUD: 5725,
    costPerPersonAUD: 1145,
    idealFor: 'Families seeking zero hotel packing hassles, easy bakery walks, safe netted beach swimming, and rapid speedboat trips to marine sanctuaries.',
    overviewSummary: 'Base the entire family in Nouméa’s premier southern bays. Unpack once in a private oceanfront apartment, step across to the calm shark-netted beach, and venture out on fast marine taxis to coral islets and Grand Sud rainforests.',
    keyHighlights: [
      'Unpack once: 6 nights in a spacious 2-bedroom kitchen apartment overlooking Baie des Citrons',
      'Safe swimming: Shark-netted beach directly across the street for easy morning & afternoon swims',
      'Marine nature trail: 5-minute water taxi to Duck Island (Îlot Canard) with underwater snorkel buoys',
      'Sea turtle sanctuary: High-speed charter to uninhabited Îlot Signal to swim with wild green turtles',
      'Phare Amédée: Iconic 1865 cast-iron lighthouse, outer reef glass-bottom boat, and Tahitian feast',
      'Rainforest exploration: Parc Provincial de la Rivière Bleue, spotting flightless Cagou birds and kayaking the Drowned Forest'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta (NOU) at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs NOU at 1:50 PM'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Arrival in Paradise & Baie des Citrons Sunset',
        subtitle: 'Airport Welcome, Apartment Check-in, Sunset Swim',
        summary: 'Land at La Tontouta on QF91, pick up your 7-seater rental vehicle, drive scenic RT1 to Nouméa, and enjoy your first French bakery treat and sunset swim.',
        morning: {
          time: '12:35 PM – 2:00 PM',
          title: 'Touchdown & 7-Seater Vehicle Pickup',
          description: 'Land on QF91 at La Tontouta (NOU). Clear customs, collect duty-free essentials, and pick up your 7-seater SUV at the airport terminal.',
          tips: 'Stock up on local SIM cards (OPT-NC tourist SIM) at the arrivals desk.'
        },
        lunch: {
          place: 'Airport Café / Roadside Boulangerie',
          description: 'Quick fresh ham-and-brie baguettes and cold drinks en route to Nouméa.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '3:00 PM – 5:30 PM',
          title: 'Apartment Settle-in & Netted Beach Swim',
          description: 'Check into your 2-bedroom apartment at Casa del Sole or Beaurivage overlooking Baie des Citrons. Change into swimwear and cross the road for a warm lagoon swim inside the protective shark net.',
          tips: 'The shark-net enclosure at Baie des Citrons is completely free, patrolled, and calm for children.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Promenade Stroll & Waterfront Welcome Dinner',
          description: 'Walk along the promenade as the sun sets over the lagoon. Enjoy French-Pacific cuisine and gelato at Amorino.',
          tips: 'Sunset is around 6:15 PM in November.'
        },
        dinner: {
          place: 'Le Bout du Monde / Les 3 Brasseurs',
          description: 'Casual marina dining with craft ales, woodfired flammekueche, and fresh grilled fish.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 220,
        dayEstCostXPF: 16100
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'Duck Island Marine Trail & Ouen Toro Panoramas',
        subtitle: '5-Minute Water Taxi Hop, Underwater Nature Trail, Coral Lookout',
        summary: 'Hop on an open-cockpit water taxi from Anse Vata across to Duck Island. Snorkel along marked buoys in crystal-clear water with colorful angelfish.',
        morning: {
          time: '8:30 AM – 12:30 PM',
          title: 'Îlot Canard (Duck Island) Snorkel Safari',
          description: 'Walk to Anse Vata taxi pier and take the 5-minute boat hop. Explore the marked underwater snorkel trail with bilingual educational signs describing living corals.',
          tips: 'Hire beach loungers under the thatched umbrellas or bring your own beach mats.'
        },
        lunch: {
          place: 'Le Canard Beach Restaurant',
          description: 'Fresh Poisson Cru (Tahitian lime-cured tuna with coconut milk) and burgers on Duck Island.',
          estCostAUD: 130,
          estCostXPF: 9500
        },
        afternoon: {
          time: '2:30 PM – 5:00 PM',
          title: 'Aquarium des Lagons & Ouen Toro Lookout',
          description: 'Return to Anse Vata and visit the world-famous Aquarium des Lagons to see fluorescent corals, giant groupers, and sea turtles, then drive up Ouen Toro for 360° lagoon views.',
          tips: 'The WWII cannons at Ouen Toro are great fun for a 9-year-old to explore.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Baie des Citrons Bistro Dining',
          description: 'Dine beachfront with fresh local fish carpaccio and artisanal pasta.',
          tips: 'Book an outdoor terrace table to enjoy the sea breeze.'
        },
        dinner: {
          place: 'L’Oustalet / Stone Grill',
          description: 'Hot stone seafood cooking and fresh French classics.',
          estCostAUD: 180,
          estCostXPF: 13100
        },
        dayEstCostAUD: 310,
        dayEstCostXPF: 22600
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Îlot Signal Turtle Reserve Speedboat Adventure',
        subtitle: 'Wild Green Sea Turtles, Coral Drop-offs, Island Heritage',
        summary: 'Board a dedicated water taxi from Port Moselle out to uninhabited Îlot Signal. Snorkel alongside resident wild green sea turtles over vibrant coral bommies.',
        morning: {
          time: '8:00 AM – 1:00 PM',
          title: 'Îlot Signal Marine Sanctuary Charter',
          description: '30-minute scenic speedboat ride past shipwrecks to Îlot Signal. Walk around the island trail and snorkel the sheltered reef wall with grazing turtles.',
          tips: 'No shops on the islet. Bring packed morning tea, 5L fresh water, sun hats, and lycra rashies.'
        },
        lunch: {
          place: 'Port Moselle Market Gourmet Picnic',
          description: 'Fresh baguettes, saucisson, imported French cheeses, and sweet mangoes picked up before boarding.',
          estCostAUD: 75,
          estCostXPF: 5500
        },
        afternoon: {
          time: '2:30 PM – 5:30 PM',
          title: 'Anse Vata Promenade & Rest Afternoon',
          description: 'Head back to the apartment for a relaxing afternoon siesta, board games, and an afternoon dip inside the shark net.',
          tips: 'Grab warm pain au chocolat from L’Atelier Gourmand.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Chez Toto in Quartier Latin',
          description: 'Head to Nouméa’s historic Latin Quarter for authentic French bistro cuisine.',
          tips: 'Order the duck confit and steak frites with peppercorn sauce.'
        },
        dinner: {
          place: 'Chez Toto (Quartier Latin)',
          description: 'Nouméa’s most celebrated authentic French family bistro.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 265,
        dayEstCostXPF: 19400
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Parc Provincial de la Rivière Bleue Rainforest',
        subtitle: 'Ancient 1,000-Year Kaori, Cagou Birds, Drowned Forest Kayak',
        summary: 'Armistice Day public holiday: Nouméa city shops are closed, making it the perfect day to explore the Grand Sud wilderness and mountain river pools.',
        morning: {
          time: '7:30 AM – 12:30 PM',
          title: 'Grand Sud Drive & Rivière Bleue Reserve',
          description: 'Drive southeast through red laterite earth to the lush southern rainforest. Meet national flightless Cagou birds wandering freely near the Grand Kaori tree.',
          tips: 'Rent mountain bikes at the park reception or take the park shuttle bus.'
        },
        lunch: {
          place: 'Riverside Rainforest Barbecue / Picnic',
          description: 'Pre-packed picnic with crusty sourdough, roasted chicken, French butter, and tropical fruit.',
          estCostAUD: 70,
          estCostXPF: 5100
        },
        afternoon: {
          time: '1:00 PM – 4:00 PM',
          title: 'Kayaking the Forêt Noyée (Drowned Forest)',
          description: 'Paddle kayaks through the eerie bleached tree trunks rising from the mirror lake of Lac de Yaté.',
          tips: 'Completely calm, flat water suitable for beginners and children.'
        },
        evening: {
          time: '6:30 PM – 8:30 PM',
          title: 'Relaxed Apartment Balcony Dinner',
          description: 'Return to Nouméa for a sunset drink on the balcony with gourmet cheeses and charcuterie.',
          tips: 'A restful evening after an active outdoor wilderness day.'
        },
        dinner: {
          place: 'Apartment Gourmet Spread / Local Pizzeria',
          description: 'Fresh pasta, gourmet salads, and wood-fired pizza.',
          estCostAUD: 95,
          estCostXPF: 6900
        },
        dayEstCostAUD: 165,
        dayEstCostXPF: 12000
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Phare Amédée Lighthouse & Outer Coral Barrier',
        subtitle: 'Glass-Bottom Boat, Giant Clams, Island Feast & Polynesian Dance',
        summary: 'Take the famous Mary D high-speed catamaran to Amédée Islet on the outer barrier reef. Climb 247 steps up the historic 1865 lighthouse.',
        morning: {
          time: '8:15 AM – 1:00 PM',
          title: 'Amédée Lighthouse Excursion',
          description: 'Catamaran cruise out to the marine reserve. Climb the 56m cast-iron lighthouse for breathtaking 360° views across the reef, followed by a glass-bottom boat tour.',
          tips: 'Look for harmless banded sea kraits resting under the shade trees.'
        },
        lunch: {
          place: 'Amédée Island Tropical Buffet Feast',
          description: 'Lavish island lunch buffet included with roasted meats, grilled fish, salads, and live Tahitian dance show.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        afternoon: {
          time: '1:30 PM – 4:30 PM',
          title: 'Outer Barrier Snorkeling & Coral Drop-off',
          description: 'Snorkel in crystal visibility with giant clams and parrotfish, then cruise back to Nouméa at 4:30 PM.',
          tips: 'All snorkel gear and glass-bottom rides are included in the day package.'
        },
        evening: {
          time: '7:00 PM – 9:00 PM',
          title: 'Baie des Citrons Casual Seafood',
          description: 'Relaxed waterfront dinner overlooking the shimmering bay.',
          tips: 'Aperitif cocktails and mocktails for the 9yo.'
        },
        dinner: {
          place: 'La Barca / Le Bilboquet Plage',
          description: 'Fresh local mahi-mahi, calamari, and gourmet pizzas.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 160,
        dayEstCostXPF: 11700
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Tjibaou Cultural Centre & Port Moselle Market',
        subtitle: 'Kanak Architecture, Mangrove Trail, Souvenir Shopping',
        summary: 'Explore Renzo Piano’s world-famous architectural tribute to Kanak heritage, shop for artisanal wood carvings, and enjoy a farewell celebration feast.',
        morning: {
          time: '8:30 AM – 12:00 PM',
          title: 'Port Moselle Market & City Sights',
          description: 'Visit the hexagonal pavilions of Port Moselle Market. Taste fresh pineapple juice, pick up vanilla beans from Lifou, and stroll Place des Cocotiers.',
          tips: 'The best day to purchase authentic Kanak woodcarvings and New Caledonian vanilla.'
        },
        lunch: {
          place: 'L’Échappée Belle (Quartier Latin)',
          description: 'Charming French creperie with savory galettes and sweet salted-caramel crepes.',
          estCostAUD: 110,
          estCostXPF: 8000
        },
        afternoon: {
          time: '1:30 PM – 4:30 PM',
          title: 'Tjibaou Cultural Centre & Coastal Mangrove Walk',
          description: 'Tour the striking 28m wooden soaring pavilions inspired by traditional Kanak huts. Walk the educational plant pathway explaining tribal traditions.',
          tips: 'Very engaging and peaceful cultural visit for adults and kids alike.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Celebration Farewell Dinner over the Lagoon',
          description: 'Celebrate an unforgettable 6 nights at Le Roof, built on stilts directly over the water.',
          tips: 'Look through the illuminated glass viewing hole in the floor to watch dolphins and reef sharks swimming below!'
        },
        dinner: {
          place: 'Le Roof (Overwater Restaurant)',
          description: 'Nouméa’s premier overwater dining experience with local rock oysters and lagoon fish.',
          estCostAUD: 240,
          estCostXPF: 17500
        },
        dayEstCostAUD: 350,
        dayEstCostXPF: 25500
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Morning Bakery Run & Departure on QF92',
        subtitle: 'Fresh Croissant Breakfast, Scenic Airport Drive, QF92 Departure',
        summary: 'Final morning swim in Baie des Citrons, fresh warm croissants, easy 45-minute drive to La Tontouta Airport, and depart on QF92 at 1:50 PM.',
        morning: {
          time: '7:30 AM – 10:30 AM',
          title: 'Final Bakery Breakfast & Packing Up',
          description: 'Early morning coffee and warm pastries from L’Atelier Gourmand. Pack luggage, check out of Casa del Sole, and load the 7-seater vehicle.',
          tips: 'Leave Nouméa by 10:30 AM to allow ample time for the 45-minute highway drive to La Tontouta.'
        },
        lunch: {
          place: 'Airport Terminal Lounge & Duty Free',
          description: 'Sandwiches, French chocolates, and coffee before boarding.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'Vehicle Return & QF92 Boarding',
          description: 'Return rental car with full tank at La Tontouta terminal. Check in bags for QF92 departing at 1:50 PM for Sydney/Brisbane.',
          tips: 'Duty-free shops sell French perfume, wines, and New Caledonian gourmet delicacies.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival Home',
          description: 'Relaxed flight back home with camera cards packed with South Pacific memories.',
          tips: 'Direct flight back to Australia.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 60,
        dayEstCostXPF: 4400
      }
    ],
    accommodations: [
      {
        name: 'Casa del Sole Apartments',
        type: 'Self-Contained 2-Bedroom Oceanfront Apartment',
        location: 'Baie des Citrons, Nouméa',
        nights: '6 Nights (Sun 8 Nov – Sat 14 Nov)',
        bedding: '1 King Bed + 2 Single Beds + Sofa Bed in Living Area',
        pricePerNightAUD: 310,
        pricePerNightXPF: 22600,
        totalCostAUD: 1860,
        totalCostXPF: 135600,
        features: ['Full Kitchen with Oven & Dishwasher', 'Washing Machine & Dryer', 'Large Oceanview Balcony', 'Outdoor Swimming Pool', 'Free Private Covered Parking'],
        pros: ['Directly opposite safe shark-netted swimming beach', 'Walking distance to 15+ cafes and restaurants', 'Self-catering keeps breakfast & lunch budgets low'],
        cons: ['Older style building, but spacious and clean'],
        bookingTip: 'Request a High Floor Ocean View apartment for stunning panoramic sunset views.'
      },
      {
        name: 'Hôtel Beaurivage',
        type: 'Family Connecting Rooms',
        location: 'Baie des Citrons, Nouméa',
        nights: 'Alternative Option',
        bedding: '2 Interconnecting Double/Twin Rooms',
        pricePerNightAUD: 280,
        pricePerNightXPF: 20400,
        totalCostAUD: 1680,
        totalCostXPF: 122400,
        features: ['Beachfront Location', 'Air Conditioning', 'Free High-Speed Wi-Fi', 'Continental Breakfast Option'],
        pros: ['Modern boutique feel', 'Steps to the sand'],
        cons: ['No full kitchen (refrigerator & kettle only)'],
        bookingTip: 'Book early for interconnecting family layout.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'Îlot Canard (Duck Island)',
        location: 'Anse Vata (5 min water taxi)',
        depth: '1 – 4 meters',
        marineLife: ['Green sea turtles', 'Clownfish in anemones', 'Banded butterflyfish', 'Blue sea stars'],
        kidFriendlyRating: 5,
        currentCaution: 'Minimal current within the buoyed zone. Wave-free and sheltered.',
        entryType: 'Walk-in beach',
        bestTime: 'Morning (9:00 AM – 12:00 PM) before afternoon sea breezes pick up.',
        notes: 'Has a designated underwater educational trail with interpretive buoys. Flotation noodles can be hired.'
      },
      {
        name: 'Îlot Signal Turtle Reserve',
        location: 'Port Moselle (30 min boat charter)',
        depth: '1 – 8 meters',
        marineLife: ['Wild green sea turtles', 'Blacktip reef sharks (docile)', 'Giant trevally', 'Pristine staghorn corals'],
        kidFriendlyRating: 4,
        currentCaution: 'Mild drift current along the reef wall drop-off; easy drift snorkel for kids with fins.',
        entryType: 'Walk-in beach',
        bestTime: 'High tide morning for maximum water clarity over coral gardens.',
        notes: 'Uninhabited reserve. Turtles feed on seagrass beds 20m from the white sand beach.'
      },
      {
        name: 'Phare Amédée Outer Reef',
        location: 'Outer Barrier Reef (45 min catamaran)',
        depth: '2 – 10 meters',
        marineLife: ['Giant clams (Tridacna)', 'Banded sea kraits', 'Parrotfish', 'Eagle rays'],
        kidFriendlyRating: 5,
        currentCaution: 'Very calm within the lighthouse reef flat; outer drop-off monitored by tour crew.',
        entryType: 'Boat taxi',
        bestTime: 'Midday glass-bottom boat tour followed by afternoon snorkel off the pier.',
        notes: 'Supervised marine playground with lifesavers and rescue boats present.'
      }
    ],
    diningSpots: [
      {
        name: 'L’Atelier Gourmand',
        type: 'Bakery & Patisserie',
        location: 'Baie des Citrons Promenade',
        specialty: 'Artisanal butter croissants, pain au chocolat, almond croissants, fresh crusty baguettes',
        recommendation: 'Walk over at 7:00 AM every morning for hot croissants straight out of the deck oven.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa',
        specialty: 'Confit de canard, steak tartare, escargots de Bourgogne, homemade tarte tatin',
        recommendation: 'Nouméa’s most authentic, warm French bistro. Book 2 days ahead for dinner.'
      },
      {
        name: 'Le Roof',
        type: 'Bistro / Seafood',
        location: 'Anse Vata (Overwater)',
        specialty: 'Lagoon coral trout, local rock oysters, vanilla-crusted prawns, chocolate lava cake',
        recommendation: 'Dine over the water and watch dolphins and spotted eagle rays circle beneath the central floor cutout.'
      },
      {
        name: 'Supermarché Port Moselle & Johnston Supermarket',
        type: 'Supermarket / Deli',
        location: 'Downtown / Marina',
        specialty: 'French cheeses (Brie, Camembert, Roquefort), saucisson, French butter, Bonne Maman jams',
        recommendation: 'Stock the apartment fridge on Sunday afternoon for effortless breakfasts and picnic lunches.',
        holidayNote: 'Closed on Wednesday 11 Nov (Armistice Day) — do your main shop on Sunday or Tuesday!'
      }
    ],
    budgetBreakdown: [
      { category: 'Accommodation', item: '6 Nights 2-Bed Oceanfront Apartment (Casa del Sole)', costXPF: 135600, costAUD: 1860, notes: '5 pax in private 2-bed apartment' },
      { category: 'Vehicle & Fuel', item: '7-Seater SUV Rental (6 days) + Fuel & Tolls', costXPF: 68000, costAUD: 930, notes: 'Collected and returned at La Tontouta' },
      { category: 'Marine Charters', item: 'Duck Island Taxi + Îlot Signal Turtle Charter', costXPF: 44000, costAUD: 605, notes: 'Round-trip boat transfers for 5 pax' },
      { category: 'Amédée Excursion', item: 'Phare Amédée Day Cruise (Buffet, Show, Glass-Bottom)', costXPF: 62000, costAUD: 850, notes: 'Special family day excursion package' },
      { category: 'Parks & Culture', item: 'Rivière Bleue Park, Kayaks, Aquarium, Tjibaou', costXPF: 24400, costAUD: 335, notes: 'Entry tickets and equipment hire' },
      { category: 'Food & Dining', item: 'Bakeries, Supermarket Groceries, 4 Bistro Dinners', costXPF: 84000, costAUD: 1145, notes: 'Balanced mix of self-catering and dining out' }
    ],
    checklist: [
      { id: 'c1', task: 'Book Casa del Sole 2-Bedroom Ocean View Apartment', deadline: '3–6 Months Prior', category: 'booking', notes: 'Limited inventory for high-floor family units' },
      { id: 'c2', task: 'Reserve 7-seater SUV rental at La Tontouta (Point Rouge / Hertz / Europcar)', deadline: '3 Months Prior', category: 'booking', notes: '7-seaters sell out fast in November' },
      { id: 'c3', task: 'Book Mary D Phare Amédée Day Excursion', deadline: '2 Months Prior', category: 'booking', notes: 'Sails select days; ensure Thursday booking' },
      { id: 'c4', task: 'Reserve Îlot Signal Water Taxi (Nautile Port Moselle)', deadline: '1 Month Prior', category: 'booking', notes: 'Confirm departure time (8:00 AM recommended)' },
      { id: 'c5', task: 'Pack full-foot snorkel fins, child life vest / float noodle, UV rash guards', deadline: '1 Week Prior', category: 'gear', notes: 'South Pacific sun is intense; reef-safe sunscreen essential' },
      { id: 'c6', task: 'Download offline Google Maps for New Caledonia & French phrasebook', deadline: '3 Days Prior', category: 'apps', notes: 'Mobile reception is great in Nouméa, patchy in Rivière Bleue' }
    ]
  },

  'isle-of-pines': {
    id: 'isle-of-pines',
    optionNumber: 2,
    title: 'The Island Split (Nouméa + Isle of Pines)',
    tagline: 'World-Class Tropical Lagoon Paradise & Marine Splendor',
    badge: '🏝️ Option 2 — The Iconic Jewel',
    heroImageGradient: 'from-emerald-700 via-teal-800 to-cyan-900',
    baseLocation: '3 Nights Isle of Pines + 3 Nights Nouméa',
    hotelMoves: 2,
    totalDrivingKm: 110,
    avgDailyDrivingMins: 20,
    cost5PaxXPF: 613500,
    cost5PaxAUD: 8400,
    costPerPersonAUD: 1680,
    idealFor: 'Families wanting iconic postcard beauty, traditional wooden pirogue sailing, waist-deep natural tidal aquariums, and premier off-the-beach snorkeling.',
    overviewSummary: 'The classic South Pacific dream. Fly 25 minutes across turquoise lagoons to the Isle of Pines (Kunié). Stay in beachfront bungalows at Kanumera Bay, sail Upi Bay on outrigger canoes, wade in Piscine Naturelle, and return to Nouméa for French dining.',
    keyHighlights: [
      'Piscine Naturelle: A wave-free, natural tidal saltwater aquarium swarming with docile butterflyfish and blue sea stars',
      'Upi Bay Pirogues: Glide silently across mirrored turquoise waters on traditional wooden sailing outriggers with local Kanak captains',
      'Kanumera Bay: Walk straight off the white silica sand into coral gardens surrounding Sacred Rock',
      'Nokanhui Sandbar: Wade in blinding white sandbars surrounded by fluorescent cyan water',
      'Queen Hortense’s Cave: Walk through lush prehistoric fern grottos and stalactites',
      'Balanced luxury: 3 nights tropical island escape + 3 nights Nouméa urban comfort'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs La Tontouta at 1:50 PM',
      domesticFlights: 'Air Calédonie: Nouméa Magenta (GEA) ⇄ Isle of Pines (ILP) — 25 mins'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Arrival in Nouméa & Beachfront Evening',
        subtitle: 'Settle in Nouméa for Night 1, Sunset at Baie des Citrons',
        summary: 'Land on QF91, take an airport transfer or rental vehicle to Baie des Citrons, enjoy an afternoon swim in the shark-netted bay, and rest before your morning island flight.',
        morning: {
          time: '12:35 PM – 2:30 PM',
          title: 'Airport Welcome & Nouméa Transfer',
          description: 'Arrive at La Tontouta (NOU). Transfer south to your oceanfront apartment at Baie des Citrons.',
          tips: 'Leave large heavy suitcases in Nouméa storage if preferred, traveling light to Isle of Pines.'
        },
        lunch: {
          place: 'Boulangerie L’Atelier Gourmand',
          description: 'Ham, brie, and salad baguettes by the beach.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '3:30 PM – 5:30 PM',
          title: 'Baie des Citrons Swim & Gear Check',
          description: 'Unpack beach essentials and take a refreshing dip inside the shark-netted enclosure.',
          tips: 'Check everyone’s snorkel masks and reef shoes for the week.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Waterfront Welcome Dinner',
          description: 'Casual French dinner overlooking the bay.',
          tips: 'Early bedtime for the morning flight to Isle of Pines.'
        },
        dinner: {
          place: 'Les 3 Brasseurs',
          description: 'Fresh woodfired flammekueche, artisan brews, and crisp salads.',
          estCostAUD: 150,
          estCostXPF: 11000
        },
        dayEstCostAUD: 205,
        dayEstCostXPF: 15000
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'Fly to Isle of Pines & Kanumera Bay Snorkeling',
        subtitle: '25-Min Flight over Coral Reefs, Sacred Rock, Fine White Sand',
        summary: 'Fly from Magenta Domestic Airport to Isle of Pines. Check into your tropical bungalow at Kanumera Bay and snorkel directly off the powder-white sand.',
        morning: {
          time: '9:00 AM – 11:30 AM',
          title: 'Flight to Isle of Pines & Bungalow Check-in',
          description: 'Board the 25-minute Air Calédonie turboprop flight. Marvel at the coral atolls below. Collect your island rental car at Isle of Pines Airport (ILP) and drive to Kanumera.',
          tips: 'Sit on the right side of the plane for the best aerial views of the barrier reef.'
        },
        lunch: {
          place: 'Nataïwatch / Oure Lodge Restaurant',
          description: 'Fresh grilled fish burger and tropical fruit salad overlooking the bay.',
          estCostAUD: 120,
          estCostXPF: 8800
        },
        afternoon: {
          time: '1:30 PM – 5:00 PM',
          title: 'Kanumera Bay Coral Snorkel & Kuto Beach Sunset',
          description: 'Step directly into the calm lagoon at Kanumera Bay. Snorkel around the perimeter of the Sacred Rock, then walk across the isthmus to Kuto Bay to watch the sunset.',
          tips: 'Sacred Rock itself is culturally tapu (do not climb it), but snorkeling around the coral base is magnificent.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Traditional Kanak Island Dinner',
          description: 'Dine on fresh seafood under towering columnar pines.',
          tips: 'Order the freshly caught lagoon fish with coconut milk.'
        },
        dinner: {
          place: 'Le Kou-Bugny / Nataïwatch Table d’Hôtes',
          description: 'Island cuisine with grilled prawns, sweet yams, and French wine.',
          estCostAUD: 180,
          estCostXPF: 13100
        },
        dayEstCostAUD: 300,
        dayEstCostXPF: 21900
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Traditional Pirogue Sailing & Piscine Naturelle',
        subtitle: 'Upi Bay Outrigger, Forest Trail, Natural Tidal Aquarium',
        summary: 'Sail across mirror-calm Upi Bay on an authentic wooden Kanak outrigger pirogue. Walk through a native pine forest trail into the world-famous Piscine Naturelle.',
        morning: {
          time: '8:00 AM – 12:30 PM',
          title: 'Upi Bay Pirogue Sailing & Piscine Naturelle',
          description: 'Board traditional wooden sailing pirogues at St. Joseph Bay. Drift between colossal limestone mushroom rocks. Arrive at Oro Bay and walk 30 mins along the forested river trail to the Natural Aquarium.',
          tips: 'Bring reef water shoes for the short forest stream crossing.'
        },
        lunch: {
          place: 'Le Kou-Gny Beach Restaurant',
          description: 'Famous open-air beachfront restaurant tucked under the pines. Grilled Isle of Pines rock lobster and sweet potatoes.',
          estCostAUD: 220,
          estCostXPF: 16000
        },
        afternoon: {
          time: '2:00 PM – 4:30 PM',
          title: 'Natural Aquarium Snorkel & Return Shuttle',
          description: 'Wade into the wave-free saltwater pool. Docile reef fish swim right up to your mask in waist-deep water. Return via island shuttle to Kanumera.',
          tips: 'Absolutely perfect and completely wave-safe for a 9-year-old child.'
        },
        evening: {
          time: '6:30 PM – 8:30 PM',
          title: 'Relaxed Kanumera Bay Night',
          description: 'Stargaze under some of the clearest, unpolluted night skies in the southern hemisphere.',
          tips: 'Look for the Southern Cross and the Milky Way stretching across the lagoon.'
        },
        dinner: {
          place: 'Oure Tera Beachfront Terrace',
          description: 'French-Melanesian fine dining with ocean views.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 410,
        dayEstCostXPF: 29900
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Nokanhui Sandbank Atoll & Queen Hortense’s Cave',
        subtitle: 'Offshore Sandbank Excursion, Robinson Crusoe BBQ, Fern Grotto',
        summary: 'Boat tour out to the blinding white sandbar of Îlot Nokanhui. Feast on grilled rock lobster at Îlot Brosse, then explore the lush Queen Hortense Cave.',
        morning: {
          time: '8:30 AM – 1:30 PM',
          title: 'Îlot Nokanhui & Îlot Brosse Day Charter',
          description: 'Speedboat cruise to the remote sandbar atoll of Nokanhui. Walk in ankle-deep turquoise lagoon water, followed by a beachfront barbecue on Îlot Brosse.',
          tips: 'Wear high-factor SPF sun protection; there is zero shade on the Nokanhui sandbar.'
        },
        lunch: {
          place: 'Îlot Brosse Beach Barbecue',
          description: 'Included fresh grilled lobster, whole reef fish, and roasted sweet potatoes.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        afternoon: {
          time: '2:30 PM – 5:00 PM',
          title: 'Queen Hortense’s Cave & Vao Village',
          description: 'Drive inland to explore the massive limestone cave filled with prehistoric giant ferns and stalactites. Visit the historic 1860 church in Vao village.',
          tips: 'The cave is cool and sheltered from midday heat.'
        },
        evening: {
          time: '6:30 PM – 8:30 PM',
          title: 'Farewell Isle of Pines Dinner',
          description: 'Cocktails and fresh seafood at Kuto Bay.',
          tips: 'Final sunset walk on Kuto’s flour-fine white silica sand.'
        },
        dinner: {
          place: 'Le Kou-Bugny Beach Bistro',
          description: 'Woodfired pizzas and local lagoon fish.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 160,
        dayEstCostXPF: 11700
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Return to Nouméa & Quartier Latin Celebration',
        subtitle: 'Scenic Morning Flight, Nouméa Apartment Settle-in, French Bistro',
        summary: 'Catch your morning return flight to Nouméa Magenta. Check back into your Baie des Citrons apartment, enjoy an afternoon swim, and feast at Chez Toto.',
        morning: {
          time: '9:30 AM – 12:00 PM',
          title: 'Flight Back to Nouméa & Check-in',
          description: 'Return island car at ILP and fly 25 mins back to Magenta. Transfer to your apartment in Baie des Citrons.',
          tips: 'Rest and recharge afternoon.'
        },
        lunch: {
          place: 'Crêperie Le Menhir (Anse Vata)',
          description: 'Savory buckwheat galettes and sweet cider.',
          estCostAUD: 90,
          estCostXPF: 6600
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Baie des Citrons Beach Swim & Shopping',
          description: 'Relaxed swim in the netted enclosure. Browse local French boutiques along the promenade.',
          tips: 'Great time to buy French cosmetics, children’s books, or souvenirs.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Celebration Dinner at Chez Toto',
          description: 'Indulge in authentic French duck confit and steak frites in Quartier Latin.',
          tips: 'Nouméa’s favorite family-run French restaurant.'
        },
        dinner: {
          place: 'Chez Toto (Quartier Latin)',
          description: 'Classic French dining at its absolute finest.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 280,
        dayEstCostXPF: 20500
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Îlot Signal Turtle Reserve & Overwater Dinner',
        subtitle: 'Wild Turtle Snorkeling, Tjibaou Architecture, Le Roof Overwater',
        summary: 'Take a morning speedboat to Îlot Signal to swim with green turtles. Tour Tjibaou Cultural Centre, then dine over the water at Le Roof.',
        morning: {
          time: '8:00 AM – 1:00 PM',
          title: 'Îlot Signal Speedboat Turtle Charter',
          description: 'Head out from Port Moselle Pontoon K to Îlot Signal. Snorkel along the sheltered reef wall with grazing green turtles.',
          tips: 'Pack a bakery picnic lunch to enjoy under the island shade gazebos.'
        },
        lunch: {
          place: 'Îlot Signal Shaded Picnic',
          description: 'Artisanal baguettes, charcuterie, and fresh fruit.',
          estCostAUD: 65,
          estCostXPF: 4700
        },
        afternoon: {
          time: '2:00 PM – 5:00 PM',
          title: 'Tjibaou Cultural Centre',
          description: 'Explore the stunning soaring wooden pavilions designed by Renzo Piano in honor of Kanak heritage.',
          tips: 'A peaceful, world-class architectural highlight.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Grand Farewell Dinner at Le Roof',
          description: 'Dine on stilts directly above the lagoon with dolphins playing below.',
          tips: 'Book well in advance to secure a table next to the viewing portal.'
        },
        dinner: {
          place: 'Le Roof (Overwater Anse Vata)',
          description: 'Nouméa’s iconic overwater dining experience.',
          estCostAUD: 250,
          estCostXPF: 18200
        },
        dayEstCostAUD: 315,
        dayEstCostXPF: 22900
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Morning Bakery Walk & Departure on QF92',
        subtitle: 'Final Croissant Breakfast, Airport Drive, QF92 at 1:50 PM',
        summary: 'Warm croissants, final packing, 45-minute drive to La Tontouta International Airport, and board QF92 back to Australia.',
        morning: {
          time: '7:30 AM – 10:30 AM',
          title: 'Breakfast & Airport Drive',
          description: 'Early morning coffee and warm pastries from L’Atelier Gourmand. Check out and drive north along RT1 to La Tontouta Airport.',
          tips: 'Allow 45 minutes for the drive and arrive by 11:30 AM.'
        },
        lunch: {
          place: 'La Tontouta Terminal Café',
          description: 'Quick sandwiches and refreshments before boarding.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'QF92 Boarding & Homeward Flight',
          description: 'Return car, clear immigration, and board QF92 departing at 1:50 PM.',
          tips: 'Pick up duty-free French wines and chocolate.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival in Australia',
          description: 'Arrive home refreshed after an epic South Pacific family journey.',
          tips: 'Direct flight home.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 55,
        dayEstCostXPF: 4000
      }
    ],
    accommodations: [
      {
        name: 'Hôtel Kou-Bugny / Nataïwatch Bungalows',
        type: 'Family Beachfront Bungalow (Isle of Pines)',
        location: 'Kuto / Kanumera Bay, Isle of Pines',
        nights: '3 Nights (Mon 9 Nov – Thu 12 Nov)',
        bedding: 'Family Chalet (1 Double + 3 Single Beds)',
        pricePerNightAUD: 380,
        pricePerNightXPF: 27700,
        totalCostAUD: 1140,
        totalCostXPF: 83100,
        features: ['Steps to the sand', 'Air Conditioning', 'Private Bathroom & Veranda', 'On-site Restaurant & Bar', 'Tropical Garden Setting'],
        pros: ['Walk directly onto Kanumera and Kuto beaches', 'Tranquil authentic island setting', 'No need for daily road transfers'],
        cons: ['Simple island amenities; slower Wi-Fi (great for digital detox)'],
        bookingTip: 'Book early as family bungalows on the Isle of Pines are strictly limited.'
      },
      {
        name: 'Casa del Sole Apartments',
        type: '2-Bedroom Oceanfront Apartment (Nouméa)',
        location: 'Baie des Citrons, Nouméa',
        nights: '3 Nights Total (Sun 8 Nov [1N] + Thu 12 & Fri 13 Nov [2N])',
        bedding: '1 King + 2 Singles + Sofa Bed',
        pricePerNightAUD: 310,
        pricePerNightXPF: 22600,
        totalCostAUD: 930,
        totalCostXPF: 67800,
        features: ['Full Kitchen', 'Washing Machine', 'Oceanview Balcony', 'Opposite Netted Beach'],
        pros: ['Leave heavy luggage securely in Nouméa while flying to Isle of Pines', 'Walk to restaurants'],
        cons: ['Requires splitting stay across two bookings'],
        bookingTip: 'Inform reception that you are returning after 3 nights to coordinate luggage storage.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'Piscine Naturelle (Natural Aquarium)',
        location: 'Oro Bay, Isle of Pines',
        depth: '1 – 3 meters',
        marineLife: ['Picasso triggerfish', 'Blue sea stars', 'Threadfin butterflyfish', 'Schools of silver mullet'],
        kidFriendlyRating: 5,
        currentCaution: 'Completely zero waves and no currents. Wave energy is broken by offshore reef barrier.',
        entryType: 'Walk-in beach',
        bestTime: 'High tide for deep crystal water; low tide for wading.',
        notes: 'World-famous natural tidal lagoon. Friendly fish swim right up to child snorkel masks.'
      },
      {
        name: 'Kanumera Bay & Sacred Rock',
        location: 'Kanumera Beach, Isle of Pines',
        depth: '1 – 5 meters',
        marineLife: ['Brain corals', 'Moray eels', 'Anemonefish', 'Parrotfish', 'Eagle rays in deep bay'],
        kidFriendlyRating: 5,
        currentCaution: 'Very calm. Mild current only on outer seaward side of the rock.',
        entryType: 'Walk-in beach',
        bestTime: 'Early morning or mid-afternoon.',
        notes: 'Walk straight in off the flour-white sand without any boat transfer.'
      },
      {
        name: 'Îlot Nokanhui Sandbar Reef',
        location: 'Offshore Isle of Pines Atoll',
        depth: '1 – 6 meters',
        marineLife: ['Green sea turtles', 'Stingrays', 'Leopard rays', 'Pristine outer reef corals'],
        kidFriendlyRating: 4,
        currentCaution: 'Open ocean swell on outside reef; sheltered in inner sandbar shallows.',
        entryType: 'Guided tour',
        bestTime: 'Morning charter departure with calm winds.',
        notes: 'Postcard South Pacific lagoon scenery.'
      }
    ],
    diningSpots: [
      {
        name: 'Le Kou-Gny Beach Restaurant',
        type: 'Bistro / Seafood',
        location: 'Oro Bay, Isle of Pines',
        specialty: 'Grilled Isle of Pines spiny rock lobster, garlic butter, roasted sweet yams',
        recommendation: 'Must be reserved in the morning before starting your pirogue trip.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa',
        specialty: 'Authentic French bistro cooking: confit duck, steak frites, chocolate mousse',
        recommendation: 'Celebration dinner on return to Nouméa on Thursday evening.'
      },
      {
        name: 'Le Roof Overwater Restaurant',
        type: 'Bistro / Seafood',
        location: 'Anse Vata, Nouméa',
        specialty: 'Lagoon fish, oysters, fine French wines',
        recommendation: 'Watch marine life through the floor glass portal.'
      }
    ],
    budgetBreakdown: [
      { category: 'Flights (Domestic)', item: 'Air Calédonie Flights (Nouméa ⇄ Isle of Pines for 5 pax)', costXPF: 165000, costAUD: 2260, notes: 'Includes 20kg checked bags per person' },
      { category: 'Accommodation', item: '3N Island Bungalow + 3N Nouméa 2-Bed Apartment', costXPF: 150900, costAUD: 2070, notes: 'Combined accommodation for 5 pax' },
      { category: 'Island Excursions', item: 'Upi Bay Pirogue + Piscine Naturelle + Nokanhui Tour', costXPF: 92000, costAUD: 1260, notes: 'Traditional canoe charter and island boat tour' },
      { category: 'Vehicle & Transfers', item: 'Car Rental on Isle of Pines (3 days) + Nouméa airport car', costXPF: 72000, costAUD: 985, notes: 'SUV / minivan mobility on both islands' },
      { category: 'Signal Charter', item: 'Îlot Signal Turtle Reserve Speedboat (Nouméa)', costXPF: 32000, costAUD: 440, notes: 'Return speedboat transfer' },
      { category: 'Food & Dining', item: 'Lobster feast, bakeries, groceries, 3 restaurant dinners', costXPF: 101600, costAUD: 1385, notes: 'Higher island dining costs balanced with groceries' }
    ],
    checklist: [
      { id: 'c1', task: 'Book Air Calédonie Flights (GEA ⇄ ILP) early', deadline: '4–6 Months Prior', category: 'booking', notes: 'Flights sell out rapidly during peak November season' },
      { id: 'c2', task: 'Reserve Family Bungalow at Nataïwatch or Kou-Bugny', deadline: '4–6 Months Prior', category: 'booking', notes: 'Strictly limited family bungalow inventory on Isle of Pines' },
      { id: 'c3', task: 'Book Upi Bay Traditional Sailing Pirogue Charter', deadline: '2 Months Prior', category: 'booking', notes: 'Organize via your lodge or local piroguiers' },
      { id: 'c4', task: 'Reserve Nokanhui & Brosse Atoll Speedboat Charter', deadline: '1 Month Prior', category: 'booking', notes: 'Confirm lobster lunch inclusion' },
      { id: 'c5', task: 'Check domestic flight 20kg baggage allowances', deadline: '2 Weeks Prior', category: 'docs', notes: 'Pack light for the island, leaving heavy luggage in Nouméa' }
    ]
  },

  'west-coast': {
    id: 'west-coast',
    optionNumber: 3,
    title: 'The West Coast Reef & Bush Road Trip',
    tagline: 'Self-Drive Freedom, 17 km Calm Lagoon & Bush Heritage',
    badge: '🚙 Option 3 — Road Trip Freedom',
    heroImageGradient: 'from-amber-700 via-orange-800 to-stone-900',
    baseLocation: '3 Nights Poé Beach/Bourail + 3 Nights Nouméa',
    hotelMoves: 1,
    totalDrivingKm: 380,
    avgDailyDrivingMins: 50,
    cost5PaxXPF: 442500,
    cost5PaxAUD: 6055,
    costPerPersonAUD: 1210,
    idealFor: 'Independent adventurers who love road trips, beach chalet barbecues, wide-open barrier lagoons, coastal pine cliff hiking, and zero domestic flights.',
    overviewSummary: 'Explore the real New Caledonia on a road trip north along RT1. Stay in beachfront chalets directly on the 17 km calm lagoon of Poé Beach. Hike the Three Bays pine trails, spot turtles at the Shark Fault, and finish with 3 nights in Nouméa.',
    keyHighlights: [
      'Poé Beachfront Chalets: Step straight from your deck onto 17 km of shallow, wave-free turquoise lagoon',
      'The Shark Fault (Faille aux Requins): Snorkel the dramatic outer barrier reef pass with green turtles and rays',
      'Sentier des Trois Baies: Dramatic coastal walk past Roche Percée, Turtle Bay, and columnar pine amphitheaters',
      'Domaine de Deva: 8,000 hectares of dry forest trails, mountain biking, and panoramic UNESCO lookouts',
      'Zero domestic flights: Collect 7-seater SUV at the international terminal and hit the open highway',
      'Caldoche cowboy culture: Experience rural heritage, Bourail beef barbecues, and historic Fort Teremba'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs La Tontouta at 1:50 PM'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Highway North to Poé Beachfront Chalets',
        subtitle: 'Airport SUV Pickup, Drive RT1 North, Chalet Sunset Swim',
        summary: 'Collect your 7-seater SUV at La Tontouta and drive directly north along RT1 without entering Nouméa. Arrive at Poé Beach and step into the shallow calm lagoon.',
        morning: {
          time: '12:35 PM – 2:00 PM',
          title: 'Airport SUV Collection',
          description: 'Land on QF91 at La Tontouta. Collect your 7-seater SUV directly from the terminal rental desk.',
          tips: 'La Tontouta is 45km north of Nouméa, perfectly positioned for driving straight north to Bourail!'
        },
        lunch: {
          place: 'Bouloupari Roadside Bakery / Snack',
          description: 'Fresh quiche, chicken baguettes, and cold drinks en route.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '2:30 PM – 5:00 PM',
          title: 'Drive to Poé & Chalet Check-in',
          description: 'Drive 1h 45m along smooth sealed RT1 highway through acacia plains and rolling hills to Poé Beach. Settle into your beachfront chalet at Poé Chalets or Sheraton Deva.',
          tips: 'Stop at Supermarché Match in Bourail town to buy steak and barbecue supplies for the chalets.'
        },
        evening: {
          time: '5:30 PM – 8:30 PM',
          title: 'Lagoon Sunset & Chalet Barbecue',
          description: 'Watch the sunset over the lagoon while grilling local Bourail beef steaks on your private deck barbecue.',
          tips: 'Relaxing family dinner under the stars with zero restaurant fuss.'
        },
        dinner: {
          place: 'Chalet Deck Barbecue',
          description: 'Fresh grilled steaks, garden salads, French baguettes, and wine.',
          estCostAUD: 95,
          estCostXPF: 6900
        },
        dayEstCostAUD: 150,
        dayEstCostXPF: 10900
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'The Shark Fault Marine Safari & Deva Lookouts',
        subtitle: 'Glass-Bottom Boat to Outer Reef, Green Turtles, Scenic Lookouts',
        summary: 'Take a boat taxi to the Shark Fault on the outer barrier reef. Snorkel with green turtles and rays, then explore the scenic lookouts of Domaine de Deva.',
        morning: {
          time: '8:30 AM – 12:30 PM',
          title: 'The Shark Fault (Faille aux Requins) Snorkel Trip',
          description: 'Board the Poé glass-bottom boat to the outer reef fault. Snorkel in crystal visibility over dramatic coral canyons with resident green turtles, eagle rays, and harmless reef sharks.',
          tips: 'Lifejackets and snorkel gear provided on board.'
        },
        lunch: {
          place: 'Snack l’Alizé (Poé Beach)',
          description: 'Beachfront crepes, paninis, and cold coconut water.',
          estCostAUD: 85,
          estCostXPF: 6200
        },
        afternoon: {
          time: '2:00 PM – 5:00 PM',
          title: 'Domaine de Deva & Oua Koué Lookout',
          description: 'Explore the 8,000-hectare protected dry forest estate. Walk or drive up to the Oua Koué lookout for jaw-dropping views across the UNESCO World Heritage lagoon barrier.',
          tips: 'Rent mountain bikes near the Deva entrance for family cycling trails.'
        },
        evening: {
          time: '6:30 PM – 8:30 PM',
          title: 'Beach Chalet Sunset Dining',
          description: 'Another glorious sunset over Poé Lagoon.',
          tips: 'Warm tropical evenings perfect for beach walks with headlamps searching for ghost crabs.'
        },
        dinner: {
          place: 'Le Reef Restaurant (Sheraton Deva) / Chalet BBQ',
          description: 'Pacific-French buffet or casual chalet barbecue.',
          estCostAUD: 170,
          estCostXPF: 12400
        },
        dayEstCostAUD: 255,
        dayEstCostXPF: 18600
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Sentier des Trois Baies & Roche Percée',
        subtitle: 'Pine Cliff Coastal Walk, Turtle Bay, Bonhomme Rock Landmark',
        summary: 'Hike the iconic Three Bays coastal trail through tunnels of native columnar pines overlooking turquoise surf. Watch turtles surfacing in the waves.',
        morning: {
          time: '8:00 AM – 12:00 PM',
          title: 'Sentier des Trois Baies Coastal Hike',
          description: 'Walk from Roche Percée (iconic pierced rock and Bonhomme monolith) through a pine forest to Turtle Bay and Lovers’ Bay. Look down from the cliffs to spot wild green turtles swimming in the surf.',
          tips: 'Easy 2-hour coastal walk with wooden boardwalks suitable for a 9yo.'
        },
        lunch: {
          place: 'Bistrot de la Roche (Roche Percée)',
          description: 'Casual French cafe serving fresh fish tacos, burgers, and salads.',
          estCostAUD: 110,
          estCostXPF: 8000
        },
        afternoon: {
          time: '1:30 PM – 5:00 PM',
          title: 'Poé Lagoon Stand-Up Paddle & Kayaking',
          description: 'Rent paddleboards or sit-on-top kayaks directly on Poé Beach. Glide over the calm turquoise shallows.',
          tips: 'Water is waist-deep for hundreds of meters out, completely wave-free.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Farewell West Coast Dinner',
          description: 'Celebration dinner at a local Bourail bistro.',
          tips: 'Sample locally reared New Caledonian venison or beef.'
        },
        dinner: {
          place: 'Le Bivouac / Le Capricorne (Bourail)',
          description: 'Authentic Caldoche cuisine and local meats.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 270,
        dayEstCostXPF: 19700
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Drive South via Historic Fort Teremba to Nouméa',
        subtitle: '19th-Century Fortress, Mara Bay Views, Baie des Citrons Check-in',
        summary: 'Armistice Day public holiday: Drive south along RT1, touring the historic penal fortress of Fort Teremba. Arrive in Nouméa and settle into your Baie des Citrons apartment.',
        morning: {
          time: '8:30 AM – 12:30 PM',
          title: 'Scenic Drive South & Fort Teremba Tour',
          description: 'Check out of Poé and drive south to Moindou. Tour the restored 19th-century military fort and museum overlooking Mara Bay.',
          tips: 'Fort Teremba is open on public holidays; self-guided audio tours bring the convict history to life.'
        },
        lunch: {
          place: 'La Foa Roadside Café / Packed Picnic',
          description: 'Fresh baguettes, roasted chicken, and fruit in La Foa village park.',
          estCostAUD: 65,
          estCostXPF: 4700
        },
        afternoon: {
          time: '1:30 PM – 5:00 PM',
          title: 'Arrive in Nouméa & Netted Beach Swim',
          description: 'Arrive in Nouméa and check into Casa del Sole at Baie des Citrons. Take an afternoon swim in the shark net.',
          tips: 'Enjoy the transition from quiet rural bush to lively coastal city.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Promenade Dining at Baie des Citrons',
          description: 'Waterfront dining and Italian gelato at Amorino.',
          tips: 'Lively holiday evening promenade atmosphere.'
        },
        dinner: {
          place: 'Les 3 Brasseurs / Le Bout du Monde',
          description: 'Casual marina dining with woodfired pizzas and salads.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 225,
        dayEstCostXPF: 16400
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Îlot Signal Turtle Reserve Speedboat Adventure',
        subtitle: 'Port Moselle Speedboat, Wild Green Turtles, Quartier Latin Dinner',
        summary: 'Board a water taxi to Îlot Signal. Snorkel along the reef wall with green turtles, followed by sunset views from Ouen Toro and dinner at Chez Toto.',
        morning: {
          time: '8:00 AM – 1:00 PM',
          title: 'Îlot Signal Turtle Reserve Excursion',
          description: 'Fast speedboat charter out to uninhabited Îlot Signal. Snorkel with wild sea turtles in pristine turquoise water.',
          tips: 'Pack sun hats, rashies, and beach snacks.'
        },
        lunch: {
          place: 'Port Moselle Market Fresh Baguettes',
          description: 'Picnic on the island with fresh French cheeses and tropical fruit.',
          estCostAUD: 70,
          estCostXPF: 5100
        },
        afternoon: {
          time: '2:30 PM – 5:30 PM',
          title: 'Ouen Toro Lookout & Aquarium des Lagons',
          description: 'Panoramic 360° lookout views, followed by an educational visit to the aquarium.',
          tips: 'See living nautilus and giant corals.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Authentic French Dinner at Chez Toto',
          description: 'Classic French bistro dinner in Quartier Latin.',
          tips: 'Reserve in advance.'
        },
        dinner: {
          place: 'Chez Toto (Quartier Latin)',
          description: 'Confit duck, escargot, steak frites, and creme brulee.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 260,
        dayEstCostXPF: 19000
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Duck Island Coral Trail & Overwater Farewell Dinner',
        subtitle: 'Anse Vata Water Taxi, Underwater Nature Trail, Le Roof Finale',
        summary: 'Hop across to Duck Island for the marked coral snorkel trail. Tour Tjibaou Cultural Centre, and celebrate your trip at Le Roof overwater restaurant.',
        morning: {
          time: '8:30 AM – 12:30 PM',
          title: 'Îlot Canard (Duck Island) Snorkeling',
          description: '5-minute water taxi hop from Anse Vata. Snorkel along the underwater trail with educational markers.',
          tips: 'Relaxing morning on beach loungers under thatched umbrellas.'
        },
        lunch: {
          place: 'Le Canard Beach Restaurant',
          description: 'Fresh Poisson Cru (Tahitian lime tuna) and fries on the islet.',
          estCostAUD: 130,
          estCostXPF: 9500
        },
        afternoon: {
          time: '2:00 PM – 5:00 PM',
          title: 'Tjibaou Cultural Centre & Souvenir Markets',
          description: 'Marvel at the soaring wooden architecture and shop for vanilla beans and woodcarvings.',
          tips: 'Pick up last-minute holiday gifts.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Grand Overwater Finale at Le Roof',
          description: 'Dine above the illuminated coral lagoon with dolphins swimming past.',
          tips: 'A magical final evening for the whole family.'
        },
        dinner: {
          place: 'Le Roof (Overwater Anse Vata)',
          description: 'Premier overwater dining experience with local seafood.',
          estCostAUD: 250,
          estCostXPF: 18200
        },
        dayEstCostAUD: 380,
        dayEstCostXPF: 27700
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Morning Bakery Walk & Departure on QF92',
        subtitle: 'Warm Baguettes, Easy Airport Drive, QF92 at 1:50 PM',
        summary: 'Final morning coffee and pastries, 45-minute highway drive to La Tontouta Airport, and depart on QF92 at 1:50 PM.',
        morning: {
          time: '7:30 AM – 10:30 AM',
          title: 'Bakery Breakfast & Packing',
          description: 'Fresh warm croissants from L’Atelier Gourmand. Pack luggage, check out of Casa del Sole, and load the 7-seater SUV.',
          tips: 'Depart Nouméa by 10:30 AM.'
        },
        lunch: {
          place: 'Airport Terminal Café',
          description: 'Sandwiches and coffee before boarding.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'Vehicle Return & QF92 Flight',
          description: 'Return SUV with full fuel tank at La Tontouta terminal. Check in for QF92 departing at 1:50 PM.',
          tips: 'Duty-free shopping inside departures lounge.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival in Australia',
          description: 'Smooth flight home with wonderful memories of New Caledonia.',
          tips: 'Direct flight home.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 55,
        dayEstCostXPF: 4000
      }
    ],
    accommodations: [
      {
        name: 'Poé Beachfront Chalets / Sheraton Deva',
        type: 'Beachfront Family Chalet (Poé Beach)',
        location: 'Plage de Poé / Domaine de Deva, Bourail',
        nights: '3 Nights (Sun 8 Nov – Wed 11 Nov)',
        bedding: 'Family Chalet (1 Double + 3 Single Beds / Sofa Bed)',
        pricePerNightAUD: 320,
        pricePerNightXPF: 23400,
        totalCostAUD: 960,
        totalCostXPF: 70200,
        features: ['Direct Beachfront Access', 'Private Deck Barbecue', 'Kitchenette with Fridge & Stovetop', 'Air Conditioning', 'Free Parking'],
        pros: ['Step directly from your deck into the 17 km calm lagoon', 'Private barbecue dinners under the stars', 'Close to Three Bays hiking trails'],
        cons: ['Requires buying groceries in Bourail town (15 mins away)'],
        bookingTip: 'Book a direct beachfront unit to enjoy unrestricted lagoon views.'
      },
      {
        name: 'Casa del Sole Apartments',
        type: '2-Bedroom Oceanfront Apartment (Nouméa)',
        location: 'Baie des Citrons, Nouméa',
        nights: '3 Nights (Wed 11 Nov – Sat 14 Nov)',
        bedding: '1 King + 2 Singles + Sofa Bed',
        pricePerNightAUD: 310,
        pricePerNightXPF: 22600,
        totalCostAUD: 930,
        totalCostXPF: 67800,
        features: ['Full Kitchen', 'Washing Machine', 'Oceanview Balcony', 'Opposite Netted Beach'],
        pros: ['Only 1 hotel transition for the entire week', 'Close to restaurants and boat piers'],
        cons: ['Requires driving south on Wednesday afternoon'],
        bookingTip: 'Request ocean view high floor.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'The Shark Fault (Faille aux Requins)',
        location: 'Outer Barrier Reef off Poé Beach',
        depth: '2 – 8 meters',
        marineLife: ['Green sea turtles', 'Spotted eagle rays', 'White-tip reef sharks (harmless)', 'Huge gorgonian sea fans'],
        kidFriendlyRating: 4,
        currentCaution: 'Glass-bottom boat anchors in sheltered side of the fault; calm guided drift.',
        entryType: 'Boat taxi',
        bestTime: 'Morning tour when sea surface is glassy.',
        notes: 'Spectacular underwater canyon cutting through the barrier reef.'
      },
      {
        name: 'Poé Lagoon Shallows',
        location: 'Directly off Poé Beach',
        depth: '0.5 – 1.5 meters',
        marineLife: ['Juvenile reef fish', 'Cowries', 'Sea cucumbers', 'Seagrass beds with feeding turtles'],
        kidFriendlyRating: 5,
        currentCaution: 'Zero current and zero waves. Ideal for young children and paddleboards.',
        entryType: 'Walk-in beach',
        bestTime: 'High tide for swimming; low tide for beachcombing.',
        notes: '17 km of continuous protected lagoon.'
      },
      {
        name: 'Îlot Signal Turtle Sanctuary (Nouméa)',
        location: 'Port Moselle (30 min boat)',
        depth: '1 – 8 meters',
        marineLife: ['Green sea turtles', 'Coral trout', 'Butterflyfish', 'Pristine staghorns'],
        kidFriendlyRating: 5,
        currentCaution: 'Sheltered reef slope with mild current.',
        entryType: 'Walk-in beach',
        bestTime: 'Morning high tide.',
        notes: 'Visited on Day 5 from the Nouméa base.'
      }
    ],
    diningSpots: [
      {
        name: 'Supermarché Match & Boucherie Bourail',
        type: 'Supermarket / Deli',
        location: 'Bourail Town Centre',
        specialty: 'Prime local Bourail beef steaks, venison sausages, fresh baguettes, French cheeses',
        recommendation: 'Stock up on Sunday afternoon for your chalet deck barbecues at Poé.'
      },
      {
        name: 'Bistrot de la Roche',
        type: 'Casual Beach Cafe',
        location: 'Roche Percée, Bourail',
        specialty: 'Fresh grilled fish tacos, steak frites, cold draft beer, fruit smoothies',
        recommendation: 'Perfect lunch stop right at the trailhead of the Sentier des Trois Baies hike.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa',
        specialty: 'Confit duck, escargot, steak frites, and creme brulee',
        recommendation: 'Celebration dinner on Thursday evening after returning to Nouméa.'
      },
      {
        name: 'Le Roof Overwater Restaurant',
        type: 'Bistro / Seafood',
        location: 'Anse Vata, Nouméa',
        specialty: 'Lagoon coral trout, local rock oysters, fine wine',
        recommendation: 'Overwater grand finale dinner on Friday night.'
      }
    ],
    budgetBreakdown: [
      { category: 'Accommodation', item: '3N Poé Beach Chalet + 3N Nouméa 2-Bed Apartment', costXPF: 138000, costAUD: 1890, notes: 'Combined accommodation for 5 pax' },
      { category: 'Vehicle & Fuel', item: '7-Seater SUV Rental (6 days) + Highway Fuel (380km)', costXPF: 78000, costAUD: 1070, notes: 'Direct airport terminal collection and return' },
      { category: 'Marine Charters', item: 'Shark Fault Glass-Bottom Boat + Îlot Signal Charter + Duck Is.', costXPF: 68000, costAUD: 930, notes: 'Reef excursions in Poé and Nouméa' },
      { category: 'Parks & Heritage', item: 'Fort Teremba, Domaine de Deva, Aquarium, Tjibaou', costXPF: 22500, costAUD: 310, notes: 'Historic and cultural admission tickets' },
      { category: 'Food & Dining', item: 'Chalet barbecues, groceries, bakeries, 3 restaurant dinners', costXPF: 136000, costAUD: 1855, notes: 'Mix of self-catering barbecues and dining out' }
    ],
    checklist: [
      { id: 'c1', task: 'Book Poé Beachfront Chalet (Plage de Poé)', deadline: '3–6 Months Prior', category: 'booking', notes: 'Limited beachfront inventory at Poé' },
      { id: 'c2', task: 'Reserve 7-Seater SUV at La Tontouta Airport', deadline: '3 Months Prior', category: 'booking', notes: 'Essential for luggage and family road trip' },
      { id: 'c3', task: 'Book Poé Shark Fault Glass-Bottom Boat Safari', deadline: '1 Month Prior', category: 'booking', notes: 'Subject to weather/tides, best booked for Monday morning' },
      { id: 'c4', task: 'Reserve Îlot Signal Turtle Charter from Nouméa', deadline: '1 Month Prior', category: 'booking', notes: 'Scheduled for Thursday morning' },
      { id: 'c5', task: 'Bring sturdy walking sneakers & water shoes', deadline: '1 Week Prior', category: 'gear', notes: 'Needed for Sentier des Trois Baies pine cliff walk' }
    ]
  },

  'best-of-both': {
    id: 'best-of-both',
    optionNumber: 4,
    title: 'The Best of Both Worlds (Nouméa Base + Isle of Pines Express)',
    tagline: 'Gourmet French Mainland Hub with an Iconic 25-Min Isle of Pines Flight',
    badge: '✨ Option 4 — Best of Both Worlds',
    heroImageGradient: 'from-indigo-800 via-sky-800 to-teal-800',
    baseLocation: '5–6 Nights Nouméa (Baie des Citrons) + Isle of Pines Express (Day Trip or 1-Night)',
    hotelMoves: 0,
    totalDrivingKm: 150,
    avgDailyDrivingMins: 20,
    cost5PaxXPF: 589600,
    cost5PaxAUD: 8075,
    costPerPersonAUD: 1615,
    idealFor: 'Families who love French gastronomy, artisan bakeries, and high-standard apartment comfort, but refuse to miss the world-class spectacle of Piscine Naturelle and Upi Bay.',
    overviewSummary: 'The golden middle ground. Stay in a spacious 2-bedroom oceanfront apartment in Nouméa’s Baie des Citrons—unpack once, swim at the safe shark-netted beach, and feast in world-class French bistros every evening. On Tuesday, take a 25-minute domestic flight across the turquoise lagoon to the Isle of Pines to sail traditional wooden outrigger pirogues in Upi Bay, snorkel the natural aquarium of Piscine Naturelle, and indulge in fresh grilled rock lobster, without being stuck in overpriced, mediocre island hotels.',
    keyHighlights: [
      'Piscine Naturelle & Upi Bay: Experience the #1 natural wonder of the South Pacific via a seamless 25-min domestic flight',
      'Gourmet French Dining Every Night: Savor duck confit, fresh crêpes, artisanal baguettes, and fine wine in Nouméa’s premier dining district',
      'Zero Hotel Frustration: Avoid aged, overpriced island resort rooms by basing at a top-tier Baie des Citrons oceanfront apartment',
      'Wild Green Sea Turtles: High-speed boat charter to uninhabited Îlot Signal with guaranteed turtle swimming',
      'Phare Amédée Day Cruise: Climb the historic 1865 cast-iron lighthouse and snorkel outer barrier reef drop-offs',
      'Flexible Express Format: Choose between a zero-move 1-day fly-in/fly-out or a 1-night overnight stay'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta (NOU) at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs NOU at 1:50 PM',
      domesticFlights: 'Air Calédonie: Nouméa Magenta (GEA) ⇄ Isle of Pines (ILP) — 25 mins'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Arrival in Paradise & Baie des Citrons Sunset',
        subtitle: 'Airport Welcome, Apartment Check-in, Sunset Netted Swim',
        summary: 'Land on QF91 at La Tontouta, pick up your 7-seater SUV, drive the scenic RT1 to Nouméa, settle into your Baie des Citrons oceanfront apartment, and enjoy your first French bistro dinner.',
        morning: {
          time: '12:35 PM – 2:00 PM',
          title: 'Touchdown & 7-Seater Vehicle Pickup',
          description: 'Land on QF91 at La Tontouta (NOU). Clear customs, collect duty-free French wines, and pick up your 7-seater SUV at the terminal.',
          tips: 'Buy local OPT-NC tourist SIM cards at the arrivals counter.'
        },
        lunch: {
          place: 'Airport Café / Roadside Boulangerie',
          description: 'Fresh ham-and-brie baguettes and cold drinks en route to Nouméa.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '3:00 PM – 5:30 PM',
          title: 'Apartment Settle-in & Netted Beach Swim',
          description: 'Check into your 2-bedroom apartment at Casa del Sole overlooking Baie des Citrons. Change into swimwear and cross the road for a warm lagoon swim inside the protective shark net.',
          tips: 'The shark-net enclosure at Baie des Citrons is free, lifeguard-patrolled, and calm for children.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Promenade Stroll & Waterfront Welcome Dinner',
          description: 'Walk along the promenade as the sun sets over the lagoon. Enjoy craft beer, woodfired flammekueche, and gelato at Amorino.',
          tips: 'Sunset is around 6:15 PM in November.'
        },
        dinner: {
          place: 'Le Bout du Monde / Les 3 Brasseurs',
          description: 'Casual marina dining with craft ales, woodfired flammekueche, and fresh grilled fish.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 220,
        dayEstCostXPF: 16100
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'Duck Island Marine Trail & Ouen Toro Panoramas',
        subtitle: '5-Minute Water Taxi Hop, Underwater Nature Trail, French Bistro',
        summary: 'Take a 5-minute water taxi from Anse Vata to Duck Island for underwater trail snorkeling with clownfish and sea turtles, followed by the Aquarium des Lagons and dinner at Chez Toto.',
        morning: {
          time: '8:30 AM – 12:30 PM',
          title: 'Îlot Canard (Duck Island) Snorkel Safari',
          description: 'Walk to Anse Vata taxi pier and take the 5-minute boat hop. Explore the marked underwater snorkel trail with bilingual educational signs describing living corals.',
          tips: 'Hire beach loungers under thatched umbrellas or bring your own beach mats.'
        },
        lunch: {
          place: 'Le Canard Beach Restaurant',
          description: 'Fresh Poisson Cru (Tahitian lime-cured tuna with coconut milk) on Duck Island.',
          estCostAUD: 130,
          estCostXPF: 9500
        },
        afternoon: {
          time: '2:30 PM – 5:00 PM',
          title: 'Aquarium des Lagons & Ouen Toro Lookout',
          description: 'Return to Anse Vata and visit the world-famous Aquarium des Lagons to see fluorescent corals, giant groupers, and sea turtles, then drive up Ouen Toro for 360° lagoon views.',
          tips: 'The WWII cannons at Ouen Toro are great fun for a 9-year-old to explore.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Authentic French Bistro Dinner in Quartier Latin',
          description: 'Feast on authentic French duck confit, steak frites, and homemade tarte tatin at Chez Toto.',
          tips: 'Nouméa’s most beloved family-run bistro; essential to book 2 days in advance.'
        },
        dinner: {
          place: 'Chez Toto (Quartier Latin)',
          description: 'Warm French bistro atmosphere with classic provincial cuisine.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 320,
        dayEstCostXPF: 23400
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Isle of Pines Express: Upi Bay Pirogue & Piscine Naturelle',
        subtitle: '25-Min Flight to Paradise, Wooden Outrigger Sailing, Lobster Feast',
        summary: 'Early 25-minute flight from Nouméa Magenta to Isle of Pines. Sail across mirrored turquoise Upi Bay on a traditional wooden pirogue, walk the pine trail to the natural aquarium at Piscine Naturelle, and feast on fresh grilled lobster.',
        morning: {
          time: '6:45 AM – 12:00 PM',
          title: 'Flight to Isle of Pines & Traditional Outrigger Pirogue',
          description: 'Short 10-minute taxi to Nouméa Magenta (GEA) for the 7:20 AM Air Calédonie flight to Isle of Pines (ILP, 25 mins). Transfer to St. Joseph Bay and board a traditional wooden sailing pirogue with a local Kanak captain. Glide silently across mirrored turquoise waters past ancient coral limestone towers.',
          tips: 'Pirogues are very stable and peaceful for kids; bring water shoes and dry bags.'
        },
        lunch: {
          place: 'Le Kou-Gny Beach Restaurant (Oro Bay)',
          description: 'Famous fresh grilled Isle of Pines spiny rock lobster with garlic butter and roasted sweet yams right on the beach.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        afternoon: {
          time: '1:30 PM – 4:30 PM',
          title: 'Piscine Naturelle Aquarium Snorkel',
          description: 'Wade into the calm, wave-free tidal pool framed by soaring columnar pines. Schools of butterflyfish, mullet, and iridescent blue sea stars swim right up to child snorkel masks in waist-deep water.',
          tips: 'Completely sheltered from ocean swell—ideal and 100% safe for a 9-year-old.'
        },
        evening: {
          time: '5:30 PM – 9:00 PM',
          title: 'Evening Return to Nouméa (or Optional 1-Night Stay)',
          description: 'Option A (Day Trip): Catch the 5:45 PM return flight to Nouméa Magenta, back in your Baie des Citrons apartment in 15 mins for dinner. Option B (1-Night): Check into Kou-Bugny/Ouré Tera for a sunset stroll on Kuto Beach.',
          tips: 'Day-trip travelers return to the comfort of their primary apartment; 1-night travelers enjoy sunset on Kuto Bay.'
        },
        dinner: {
          place: 'Marmite et Tire-Bouchon (Nouméa) / Kou-Bugny (Island)',
          description: 'Gourmet French seafood and wines in Nouméa or casual beachfront dining on the island.',
          estCostAUD: 180,
          estCostXPF: 13100
        },
        dayEstCostAUD: 340,
        dayEstCostXPF: 24800
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Îlot Signal Turtle Reserve & Holiday Promenade',
        subtitle: 'Wild Green Sea Turtles, Coral Drop-offs, Island Holiday Atmosphere',
        summary: 'Take a morning high-speed boat charter to uninhabited Îlot Signal. Snorkel along the reef wall with grazing green turtles, followed by a shaded island picnic and a relaxed holiday afternoon in Baie des Citrons.',
        morning: {
          time: '8:00 AM – 1:00 PM',
          title: 'Îlot Signal Turtle Reserve Speedboat Charter',
          description: 'Board a dedicated water taxi from Port Moselle Pontoon K to Îlot Signal. Snorkel directly off the white sand beach into the seagrass beds to swim alongside wild green sea turtles.',
          tips: 'Pack artisanal baguettes, charcuterie, and pastries picked up Tuesday, as shops close for Armistice Day.'
        },
        lunch: {
          place: 'Îlot Signal Beach Gazebo Picnic',
          description: 'Artisanal French baguette picnic with Brie, saucisson, and fresh tropical fruit.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '2:30 PM – 5:30 PM',
          title: 'Baie des Citrons Relaxed Beach Afternoon',
          description: 'Return to Nouméa. (For 1-Night island guests, fly back on the afternoon flight from ILP to GEA). Enjoy a leisurely afternoon swim in the shark-netted bay, gelato at Amorino, and coffee.',
          tips: 'Public holiday afternoon creates a festive, relaxed beachfront buzz along the promenade.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Waterfront Sunset Dining at Baie des Citrons',
          description: 'Relaxed bistro dinner overlooking the bay with fresh grilled lagoon fish and stone-cooked steaks.',
          tips: 'Book an outdoor terrace table to catch the evening sea breeze.'
        },
        dinner: {
          place: 'L’Oustalet / Stone Grill Baie des Citrons',
          description: 'Hot stone seafood cooking, steak frites, and artisanal desserts.',
          estCostAUD: 170,
          estCostXPF: 12400
        },
        dayEstCostAUD: 230,
        dayEstCostXPF: 16800
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Phare Amédée Outer Barrier Reef Day Cruise',
        subtitle: 'Cast-Iron Lighthouse, Outer Barrier Reef, Tahitian Feast & Show',
        summary: 'Full-day catamaran cruise to Amédée Island. Climb the 247 steps of the 1865 lighthouse, take a glass-bottom boat over outer barrier coral bommies, and feast on a Polynesian buffet with live cultural dance.',
        morning: {
          time: '8:15 AM – 12:30 PM',
          title: 'Mary D Catamaran to Phare Amédée',
          description: 'Board the Mary D catamaran at Port Moselle. Cruise 45 mins to the marine reserve. Climb the 247 winding steps of the historic lighthouse for panoramic views of the turquoise reef pass. Board the glass-bottom boat tour to see giant clams and turtles.',
          tips: 'Lighthouse stairs are very safe and exciting for a 9yo.'
        },
        lunch: {
          place: 'Amédée Island Tropical Buffet Feast',
          description: 'Lavish island lunch buffet included with roasted meats, grilled fish, salads, and live Tahitian dance show.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        afternoon: {
          time: '1:30 PM – 4:30 PM',
          title: 'Outer Barrier Snorkeling & Coral Drop-off',
          description: 'Snorkel in crystal visibility with giant clams and parrotfish, then cruise back to Nouméa at 4:30 PM.',
          tips: 'All snorkel gear and glass-bottom rides are included in the day package.'
        },
        evening: {
          time: '7:00 PM – 9:00 PM',
          title: 'Baie des Citrons Casual Italian / Seafood',
          description: 'Relaxed waterfront dinner overlooking the shimmering bay.',
          tips: 'Aperitif cocktails for adults and mocktails for the 9yo.'
        },
        dinner: {
          place: 'La Barca / Le Bilboquet Plage',
          description: 'Fresh local mahi-mahi, calamari, and gourmet pizzas.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 160,
        dayEstCostXPF: 11700
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Rivière Bleue Rainforest & Grand Finale at Le Roof',
        subtitle: 'Ancient Kauri Trees, Cagou Bird Spotting, Overwater Farewell Feast',
        summary: 'Drive your 7-seater SUV into the Grand Sud red-earth wilderness of Parc Provincial de la Rivière Bleue. Spot rare flightless Cagou birds, kayak the Drowned Forest, and celebrate with an overwater dinner at Le Roof.',
        morning: {
          time: '8:00 AM – 12:30 PM',
          title: 'Parc Provincial de la Rivière Bleue & Grand Kaori',
          description: 'Scenic 1h15m drive through red laterite soils into the pristine rainforest reserve. Walk to the 1,000-year-old Grand Kaori tree and walk the lush bird trail to spot the national flightless Cagou bird in the wild.',
          tips: 'Cagou birds are docile and often walk right alongside the walking tracks.'
        },
        lunch: {
          place: 'Forest Riverside Picnic / Le Ponton',
          description: 'Fresh pastries and savory baguettes enjoyed by the crystal mountain river pools.',
          estCostAUD: 65,
          estCostXPF: 4700
        },
        afternoon: {
          time: '1:30 PM – 4:00 PM',
          title: 'Forêt Noyée (Drowned Forest) Kayaking',
          description: 'Paddle sit-on-top family kayaks through the hauntingly beautiful flooded paperbark forest of Lake Yaté.',
          tips: 'Lifejackets provided; water is wave-free and peaceful for children.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Celebration Farewell Dinner over the Lagoon',
          description: 'Celebrate an unforgettable 6 nights at Le Roof, built on stilts directly over the water. Watch dolphins and spotted eagle rays through the illuminated glass viewing hole in the dining room floor!',
          tips: 'Book well ahead to request a prime table next to the central marine observation portal.'
        },
        dinner: {
          place: 'Le Roof (Overwater Restaurant, Anse Vata)',
          description: 'Nouméa’s premier overwater dining experience with local rock oysters, vanilla prawns, and lagoon coral trout.',
          estCostAUD: 250,
          estCostXPF: 18200
        },
        dayEstCostAUD: 315,
        dayEstCostXPF: 22900
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Morning Bakery Run & Departure on QF92',
        subtitle: 'Warm Croissants, Scenic Highway Drive, QF92 Departure at 1:50 PM',
        summary: 'Final morning swim in Baie des Citrons, fresh warm croissants from L’Atelier Gourmand, easy 45-minute drive to La Tontouta Airport, and depart on QF92 at 1:50 PM.',
        morning: {
          time: '7:30 AM – 10:30 AM',
          title: 'Final Bakery Breakfast & Packing Up',
          description: 'Early morning coffee and warm pastries from L’Atelier Gourmand. Pack luggage, check out of Casa del Sole, and load the 7-seater vehicle.',
          tips: 'Leave Nouméa by 10:30 AM to allow ample time for the 45-minute highway drive to La Tontouta.'
        },
        lunch: {
          place: 'Airport Terminal Lounge & Duty Free',
          description: 'Sandwiches, French chocolates, and coffee before boarding.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'Vehicle Return & QF92 Boarding',
          description: 'Return rental car with full tank at La Tontouta terminal. Check in bags for QF92 departing at 1:50 PM for Sydney/Brisbane.',
          tips: 'Duty-free shops sell French perfume, wines, and New Caledonian gourmet delicacies.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival Home',
          description: 'Relaxed flight back home with camera cards packed with South Pacific memories.',
          tips: 'Direct flight back to Australia.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 60,
        dayEstCostXPF: 4400
      }
    ],
    accommodations: [
      {
        name: 'Casa del Sole Apartments',
        type: 'Self-Contained 2-Bedroom Oceanfront Apartment (Nouméa)',
        location: 'Baie des Citrons, Nouméa',
        nights: '5 or 6 Nights Base (Sun 8 Nov – Sat 14 Nov)',
        bedding: '1 King Bed + 2 Single Beds + Sofa Bed in Living Area',
        pricePerNightAUD: 310,
        pricePerNightXPF: 22600,
        totalCostAUD: 1860,
        totalCostXPF: 135600,
        features: ['Full Kitchen with Oven & Dishwasher', 'Washing Machine & Dryer', 'Large Oceanview Balcony', 'Outdoor Swimming Pool', 'Free Private Covered Parking'],
        pros: ['Directly opposite safe shark-netted swimming beach', 'Walking distance to 15+ cafes and restaurants', 'Unpack once or keep luggage secured during island express'],
        cons: ['Older style building, but spacious and clean'],
        bookingTip: 'Request a High Floor Ocean View apartment for stunning sunset panoramas over the bay.'
      },
      {
        name: 'Hôtel Kou-Bugny / Ouré Tera Resort',
        type: 'Optional 1-Night Boutique Island Bungalow (Isle of Pines)',
        location: 'Kuto / Kanumera Bay, Isle of Pines',
        nights: 'Optional 1 Night (Tue 10 Nov – Wed 11 Nov)',
        bedding: 'Family Bungalow / 2 Adjoining Rooms',
        pricePerNightAUD: 420,
        pricePerNightXPF: 30600,
        totalCostAUD: 420,
        totalCostXPF: 30600,
        features: ['Beachfront Location', 'Air Conditioning', 'Private Veranda', 'Tropical Gardens'],
        pros: ['Watch the sunset on Kuto beach silica sand', 'Only 1 night so no food or lodging fatigue'],
        cons: ['Adds 1 overnight stay cost if selecting the 1-night variant over the day-trip variant'],
        bookingTip: 'Book early; leave main suitcases at Casa del Sole and bring only a small overnight backpack.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'Piscine Naturelle (Natural Aquarium)',
        location: 'Oro Bay, Isle of Pines (25-min flight from GEA)',
        depth: '1 – 3 meters',
        marineLife: ['Picasso triggerfish', 'Blue sea stars', 'Threadfin butterflyfish', 'Schools of silver mullet'],
        kidFriendlyRating: 5,
        currentCaution: 'Completely zero waves and no currents. Natural coral barrier breaks all ocean energy.',
        entryType: 'Walk-in beach',
        bestTime: 'Midday high tide for deep crystal water; low tide for wading.',
        notes: 'World-famous natural tidal lagoon. Friendly fish swim right up to child snorkel masks.'
      },
      {
        name: 'Îlot Signal Turtle Reserve',
        location: 'Port Moselle (30 min boat charter)',
        depth: '1 – 8 meters',
        marineLife: ['Wild green sea turtles', 'Docile blacktip reef sharks', 'Giant trevally', 'Pristine staghorn corals'],
        kidFriendlyRating: 4,
        currentCaution: 'Mild drift current along the reef wall drop-off; easy drift snorkel for kids with fins.',
        entryType: 'Walk-in beach',
        bestTime: 'High tide morning for maximum water clarity over coral gardens.',
        notes: 'Uninhabited reserve. Turtles feed on seagrass beds 20m from the white sand beach.'
      },
      {
        name: 'Phare Amédée Outer Reef',
        location: 'Outer Barrier Reef (45 min catamaran)',
        depth: '2 – 10 meters',
        marineLife: ['Giant clams (Tridacna)', 'Banded sea kraits', 'Parrotfish', 'Eagle rays'],
        kidFriendlyRating: 5,
        currentCaution: 'Very calm within the lighthouse reef flat; outer drop-off monitored by tour crew.',
        entryType: 'Boat taxi',
        bestTime: 'Midday glass-bottom boat tour followed by afternoon snorkel off the pier.',
        notes: 'Supervised marine playground with lifesavers and rescue boats present.'
      },
      {
        name: 'Îlot Canard (Duck Island)',
        location: 'Anse Vata (5 min water taxi)',
        depth: '1 – 4 meters',
        marineLife: ['Green sea turtles', 'Clownfish in anemones', 'Banded butterflyfish', 'Blue sea stars'],
        kidFriendlyRating: 5,
        currentCaution: 'Minimal current within the buoyed zone. Wave-free and sheltered.',
        entryType: 'Walk-in beach',
        bestTime: 'Morning (9:00 AM – 12:00 PM) before afternoon sea breezes pick up.',
        notes: 'Has a designated underwater educational trail with interpretive buoys. Flotation noodles can be hired.'
      }
    ],
    diningSpots: [
      {
        name: 'L’Atelier Gourmand',
        type: 'Bakery & Patisserie',
        location: 'Baie des Citrons Promenade',
        specialty: 'Artisanal butter croissants, pain au chocolat, almond croissants, fresh crusty baguettes',
        recommendation: 'Walk over at 7:00 AM every morning for hot croissants straight out of the deck oven.'
      },
      {
        name: 'Le Kou-Gny Beach Restaurant',
        type: 'Bistro / Seafood',
        location: 'Oro Bay, Isle of Pines',
        specialty: 'Grilled Isle of Pines spiny rock lobster, garlic butter, roasted sweet yams',
        recommendation: 'The quintessential island lunch feast. Must be reserved in advance for Tuesday.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa',
        specialty: 'Confit de canard, steak tartare, escargots de Bourgogne, homemade tarte tatin',
        recommendation: 'Nouméa’s most authentic, warm French bistro. Book 2 days ahead for dinner.'
      },
      {
        name: 'Le Roof Overwater Restaurant',
        type: 'Bistro / Seafood',
        location: 'Anse Vata, Nouméa',
        specialty: 'Lagoon coral trout, local rock oysters, vanilla-crusted prawns, chocolate lava cake',
        recommendation: 'Dine over the water and watch dolphins and spotted eagle rays circle beneath the central floor cutout.'
      },
      {
        name: 'Supermarché Port Moselle & Johnston Supermarket',
        type: 'Supermarket / Deli',
        location: 'Downtown / Marina',
        specialty: 'French cheeses (Brie, Camembert, Roquefort), saucisson, French butter, Bonne Maman jams',
        recommendation: 'Stock the apartment fridge on Sunday afternoon for effortless breakfasts and picnic lunches.',
        holidayNote: 'Closed on Wednesday 11 Nov (Armistice Day) — do your main shop on Sunday or Tuesday!'
      }
    ],
    budgetBreakdown: [
      { category: 'Flights (Domestic)', item: 'Air Calédonie Flights (Nouméa Magenta ⇄ Isle of Pines, 5 pax)', costXPF: 165000, costAUD: 2260, notes: '25-minute scenic hop for all 5 passengers' },
      { category: 'Accommodation', item: '6 Nights 2-Bed Oceanfront Apartment (Casa del Sole)', costXPF: 135600, costAUD: 1860, notes: 'High-standard apartment base with kitchen & laundry' },
      { category: 'Vehicle & Fuel', item: '7-Seater SUV Rental (6 days) + Fuel & Tolls', costXPF: 68000, costAUD: 930, notes: 'Full 6 days mobility on mainland Grande Terre' },
      { category: 'Isle of Pines Day Tour', item: 'Upi Bay Pirogue + Piscine Naturelle Transfers + Lobster Lunch', costXPF: 54000, costAUD: 740, notes: 'Authentic sailing pirogue charter & fresh rock lobster' },
      { category: 'Marine Charters', item: 'Phare Amédée Day Cruise + Îlot Signal Turtle Charter', costXPF: 75000, costAUD: 1025, notes: 'Two premier marine reserves with buffet & charters' },
      { category: 'Food & Dining', item: 'Artisan bakeries, gourmet groceries, 4 French bistro dinners', costXPF: 92000, costAUD: 1260, notes: 'Superior dining quality in Nouméa dining district' }
    ],
    checklist: [
      { id: 'c1', task: 'Book Casa del Sole 2-Bedroom Ocean View Apartment', deadline: '3–6 Months Prior', category: 'booking', notes: 'Retain primary base for all 6 nights (leave luggage safe)' },
      { id: 'c2', task: 'Book Air Calédonie Flights (GEA ⇄ ILP) for Tuesday morning', deadline: '4 Months Prior', category: 'booking', notes: 'Book 7:20 AM outbound and 5:45 PM return (or Wed return)' },
      { id: 'c3', task: 'Reserve Upi Bay Traditional Sailing Pirogue & Lobster Lunch at Snack Kougny', deadline: '2 Months Prior', category: 'booking', notes: 'Essential to lock in pirogue captain and lobster catch' },
      { id: 'c4', task: 'Book Mary D Phare Amédée Day Excursion (Thursday)', deadline: '2 Months Prior', category: 'booking', notes: 'Sails Thursday; includes island buffet feast' },
      { id: 'c5', task: 'Reserve Îlot Signal Water Taxi for Wednesday morning', deadline: '1 Month Prior', category: 'booking', notes: 'Escape public holiday closures on the mainland' },
      { id: 'c6', task: 'Reserve Chez Toto & Le Roof for evening celebrations', deadline: '2–3 Weeks Prior', category: 'booking', notes: 'Nouméa’s most popular French dining spots' }
    ]
  },

  'relax-resort': {
    id: 'relax-resort',
    optionNumber: 5,
    category: 'relaxing',
    title: 'The Grand Lagoon Resort & Spa Base',
    tagline: '6 Nights in Tropical Gardens & Heated Seawater Pools at Anse Vata',
    badge: '🌺 Option 5 — Premier Resort & Spa',
    heroImageGradient: 'from-teal-800 via-emerald-800 to-cyan-950',
    baseLocation: 'Pointe Magnin / Anse Vata, Nouméa (100% Single Base, 0 moves)',
    hotelMoves: 0,
    totalDrivingKm: 110,
    avgDailyDrivingMins: 15,
    cost5PaxXPF: 512000,
    cost5PaxAUD: 7010,
    costPerPersonAUD: 1402,
    idealFor: 'Couples and families where wife/mum wants true relaxation—sprawling tropical gardens, heated swimming pools, beach strolls, daily included breakfast buffet, and thalassotherapy spa treatments—while dad and the 9yo can take effortless 5-to-15-minute boat trips to Duck Island and Îlot Signal.',
    overviewSummary: 'The quintessential relaxing holiday. Unpack once for the entire 6 nights in a premier 2-bedroom oceanfront or garden suite. Every morning starts effortlessly with an included hot & cold tropical breakfast buffet overlooking the lagoon. Spend unhurried days lounging on poolside sunbeds, enjoying the heated seawater Aquatonic spa labyrinth, or strolling the Anse Vata beach promenade. When adventure calls, Duck Island’s coral trail is just a 5-minute beach walk to the water taxi, and Phare Amédée offers a hassle-free catamaran day cruise. In the evenings, stroll directly from your room to fine French bistros or dine beachfront under the palms.',
    keyHighlights: [
      'Zero packing stress: 6 nights in a spacious 2-bedroom suite with 2 bathrooms and private kitchen',
      'Lush 3-hectare park & heated pools: Step straight out of your suite into tropical gardens, heated lagoon pool, and beach loungers',
      'Provided resort breakfast daily: Lavish buffet with fresh croissants, tropical fruits, juices, and made-to-order eggs',
      'Aquatonic Seawater Spa & Thalassotherapy: Heated indoor seawater hydro-massage pools, massages, and wellness treatments',
      'Effortless kid & dad snorkeling: 5-minute beach walk to Duck Island boat taxi; Phare Amédée barrier reef day cruise',
      'Waterfront promenade dining: Stroll to 15+ authentic French bistros, wine bars, and beach cafes along Anse Vata'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta (NOU) at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs NOU at 1:50 PM'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Arrival in Paradise & Settle into Resort Luxury',
        subtitle: 'Airport Pickup, Château Royal Check-in, Garden & Pool Settle-in',
        summary: 'Touch down at La Tontouta on QF91, pick up your 7-seater SUV, and drive scenic RT1 to Château Royal Resort on Anse Vata. Unpack once for the week, step out into the 3-hectare tropical gardens, and sip cocktails by the heated pool.',
        morning: {
          time: '12:35 PM – 2:00 PM',
          title: 'Arrival & Seamless 7-Seater Pickup',
          description: 'Touch down at La Tontouta Airport. Collect duty-free champagne and chocolates, pick up your 7-seater SUV directly at the terminal arrivals hall.',
          tips: 'Pick up an OPT tourist SIM at the arrivals counter for smooth Google Maps navigation.'
        },
        lunch: {
          place: 'Airport Café / Roadside Boulangerie',
          description: 'Crusty Parisian ham-and-brie baguettes and cold drinks on the drive south.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '3:00 PM – 5:30 PM',
          title: 'Suite Settle-in & Garden Walk to Pool',
          description: 'Check into your 2-bedroom suite at Château Royal Beach Resort & Spa. Unpack suitcases once for the entire 6 nights. Walk through the private 3-hectare coconut park to the heated lagoon pool overlooking the ocean.',
          tips: 'Ground-floor and terrace suites allow stepping directly out onto lush lawns.'
        },
        evening: {
          time: '6:00 PM – 8:30 PM',
          title: 'Sunset Cocktails at Le Deck & Waterfront Dinner',
          description: 'Watch the sunset over the lagoon with a cold glass of French rosé at Le Deck poolside bar, followed by casual dining overlooking the palm trees.',
          tips: 'Sunset is around 6:15 PM in November.'
        },
        dinner: {
          place: 'Le Deck Pool Bar & Grill (Château Royal)',
          description: 'Beachside dining with fresh grilled coral trout, gourmet burgers, and French wines.',
          estCostAUD: 170,
          estCostXPF: 12400
        },
        dayEstCostAUD: 225,
        dayEstCostXPF: 16400
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'Lazy Resort Morning & Duck Island Snorkel Safari',
        subtitle: 'Buffet Breakfast, 5-Min Beach Hop, Heated Pool & Spa Relaxation',
        summary: 'Start with a lavish resort breakfast buffet at Le Taom. Mum lounges poolside with a book, while Dad and the 9yo take an easy 5-minute beach walk to the water taxi for 2 hours of snorkeling at Duck Island.',
        morning: {
          time: '8:00 AM – 12:00 PM',
          title: 'Resort Breakfast & Duck Island Hop (Dad & 9yo)',
          description: 'Enjoy tropical fruits, hot pastries, and barista coffee at the included resort breakfast. Dad & 9yo stroll 5 minutes down the sand to Anse Vata pier for a 5-min boat to Duck Island to snorkel the marked coral trail. Mum relaxes undisturbed on poolside sun loungers.',
          tips: 'Duck Island has calm, wave-free waters with clownfish and sea turtles.'
        },
        lunch: {
          place: 'Le Taom Terrace / Poolside Burgers',
          description: 'Reunite by the resort pool for Poisson Cru (Tahitian tuna) and woodfired snacks.',
          estCostAUD: 110,
          estCostXPF: 8000
        },
        afternoon: {
          time: '2:30 PM – 5:30 PM',
          title: 'Aquatonic Seawater Spa & Beachfront Stroll',
          description: 'Mum indulges in the 300 m² indoor heated seawater labyrinth pool with hydro-massage beds and geysers. The family gathers for an afternoon swim in the calm sea directly in front of the resort.',
          tips: 'Aquatonic is on-site at Château Royal; entry tokens are easily booked at reception.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Authentic French Bistro in Quartier Latin',
          description: 'Take a short 8-minute taxi into Quartier Latin for an unforgettable French dinner at Chez Toto.',
          tips: 'Book 2 days ahead; don’t miss the homemade tarte tatin.'
        },
        dinner: {
          place: 'Chez Toto (Quartier Latin)',
          description: 'Nouméa’s favorite French bistro: duck confit, steak frites, and fine Bordeaux.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 300,
        dayEstCostXPF: 21900
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Effortless Phare Amédée Lighthouse Lagoon Cruise',
        subtitle: 'Catamaran Day Trip, Glass-Bottom Boat, Polynesian Buffet & Show',
        summary: 'A completely hassle-free day excursion. Board the Mary D catamaran for Amédée Island: glass-bottom boat coral viewing, lighthouse climb, lavish island buffet feast with Tahitian dance, and sun loungers under thatched umbrellas.',
        morning: {
          time: '8:15 AM – 12:30 PM',
          title: 'Mary D Catamaran to Phare Amédée Marine Reserve',
          description: 'Short 8-minute drive to Port Moselle. Cruise 45 mins on the luxury catamaran to Amédée Island. Take the glass-bottom boat to see giant clams and turtles, or climb the 247 steps of the 1865 lighthouse for panoramic 360° reef views.',
          tips: 'Glass-bottom boat requires zero swimming—perfect for pure relaxation.'
        },
        lunch: {
          place: 'Amédée Island Tropical Buffet Feast',
          description: 'Lavish island lunch buffet included with roasted meats, fresh fish, salads, and live Tahitian dance show.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        afternoon: {
          time: '1:30 PM – 4:30 PM',
          title: 'Shaded Thatched Gazebos & Reef Snorkeling',
          description: 'Mum naps on beach loungers under shaded palm umbrellas with a cool sea breeze. Dad & 9yo snorkel the pier drop-off with docile banded sea kraits and parrotfish. Cruise back to Nouméa at 4:30 PM.',
          tips: 'All snorkel gear and deckchairs are included in the day pass.'
        },
        evening: {
          time: '6:30 PM – 8:30 PM',
          title: 'Casual Waterfront Dinner at Anse Vata',
          description: 'Stroll along the Anse Vata promenade for a relaxed Italian dinner overlooking the bay.',
          tips: 'Aperol spritz for adults and gelato for the 9-year-old.'
        },
        dinner: {
          place: 'La Barca / Le Bilboquet Plage',
          description: 'Fresh local calamari, woodfired pizzas, and lagoon fish carpaccio.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 160,
        dayEstCostXPF: 11700
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Spa Day for Mum & Wild Green Turtle Morning',
        subtitle: 'Thalassotherapy Pampering, Îlot Signal Turtle Charter, Pool Sunsets',
        summary: 'Shops on the mainland close for Armistice Day, creating a quiet holiday vibe. Mum enjoys a luxury spa treatment and pool day; Dad & 9yo take a high-speed speedboat out to swim with green turtles at Îlot Signal.',
        morning: {
          time: '8:30 AM – 1:00 PM',
          title: 'Spa Circuit (Mum) & Îlot Signal Turtles (Dad & 9yo)',
          description: 'Mum enjoys a tranquil morning at Château Royal’s Aquatonic spa with massage and facial treatments. Dad & 9yo take a 25-min speedboat charter from Port Moselle to Îlot Signal to swim alongside wild green turtles in waist-deep water.',
          tips: 'Îlot Signal is an uninhabited nature reserve—turtles feed on seagrass 20m from the sand.'
        },
        lunch: {
          place: 'Island Picnic / Poolside Terrace',
          description: 'Fresh baguettes and French cheeses packed Tuesday, enjoyed poolside.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '2:30 PM – 5:30 PM',
          title: 'Heated Pool, Tropical Gardens & Gelato',
          description: 'The whole family reunites at Château Royal’s heated lagoon pool. Relax on daybeds under palm fronds, stroll down to Amorino for artisan French gelato, and take a sunset dip.',
          tips: 'The heated pool remains comfortable and warm in the late afternoon breeze.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Hot Stone Cooking at Baie des Citrons',
          description: 'Short 3-minute drive to Baie des Citrons for a fun waterfront dinner cooking fresh seafood and beef on hot volcanic stones.',
          tips: 'Fun, interactive dining experience that kids love.'
        },
        dinner: {
          place: 'Stone Grill / L’Oustalet',
          description: 'Hot volcanic stone cooking with fresh tuna steaks, prawns, and prime French beef.',
          estCostAUD: 180,
          estCostXPF: 13100
        },
        dayEstCostAUD: 240,
        dayEstCostXPF: 17500
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Gentle Coastal Culture & Overwater Dining',
        subtitle: 'Aquarium des Lagons, Ouen Toro Lookouts, Le Roof Overwater Dinner',
        summary: 'A slow-paced morning visiting the world-renowned Aquarium des Lagons and panoramic Ouen Toro lookouts, an afternoon of poolside relaxation and stand-up paddleboarding, and overwater dining at Le Roof.',
        morning: {
          time: '9:30 AM – 12:30 PM',
          title: 'Aquarium des Lagons & Ouen Toro Panoramas',
          description: 'A 5-minute drive to the Aquarium des Lagons to see fluorescent deep-sea corals, nautilus, and sea turtles up close in air-conditioned comfort. Drive up the headland of Ouen Toro for 360° panoramas across the barrier reef.',
          tips: 'Very relaxed and peaceful morning visit with zero walking fatigue.'
        },
        lunch: {
          place: 'Crêperie Le Menhir (Anse Vata)',
          description: 'Authentic Breton buckwheat galettes, savory crepes, and sweet salted caramel.',
          estCostAUD: 95,
          estCostXPF: 6900
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Resort Beach Stand-Up Paddleboard & Pool Nap',
          description: 'Hire a stand-up paddleboard on the calm beach right outside the resort. Mum enjoys an afternoon sunbath and book on the manicured lawns under the shade of coastal banyan trees.',
          tips: 'Anse Vata is sheltered from heavy ocean swell, making paddling effortless.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Iconic Overwater Dining at Le Roof',
          description: 'Dine on stilts directly over the lagoon at Le Roof. Peer through the illuminated glass viewing portal in the floor to watch dolphins and spotted eagle rays gliding underneath your table!',
          tips: 'Book well in advance to request a table next to the central marine observation portal.'
        },
        dinner: {
          place: 'Le Roof (Overwater Restaurant, Anse Vata)',
          description: 'Nouméa’s premier overwater dining experience with local rock oysters, vanilla-crusted prawns, and lagoon coral trout.',
          estCostAUD: 250,
          estCostXPF: 18200
        },
        dayEstCostAUD: 345,
        dayEstCostXPF: 25100
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Pure Resort Indulgence & Grand Farewell',
        subtitle: 'Resort Morning, Souvenir Shopping, Marmite et Tire-Bouchon Feast',
        summary: 'A 100% stress-free day. Sleep in, enjoy late breakfast, browse local French boutiques, relax by the pool, and celebrate an incredible week with a farewell dinner at Marmite et Tire-Bouchon.',
        morning: {
          time: '9:00 AM – 12:30 PM',
          title: 'Late Breakfast, Garden Stroll & Boutique Shopping',
          description: 'Enjoy a leisurely breakfast buffet on the terrace. Stroll the palm-lined boutiques of Anse Vata and Baie des Citrons for French linens, local vanilla beans, and Pacific souvenirs.',
          tips: 'No schedule, no alarms—wake up entirely naturally.'
        },
        lunch: {
          place: 'Bistrot de la Baie / Beach Cafe',
          description: 'Crisp salads, croque-monsieur, and iced coffees overlooking the sparkling bay.',
          estCostAUD: 90,
          estCostXPF: 6600
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Final Afternoon Poolside Sun & Aquatonic Dip',
          description: 'Soak in the warm South Pacific sun on your poolside lounger. Take a final rejuvenating soak in the Aquatonic seawater pools while the 9yo splashes in the heated lagoon pool.',
          tips: 'Order a cocktail from Le Deck to toast an extraordinary, restful holiday.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Celebration Farewell Dinner at Marmite et Tire-Bouchon',
          description: 'Celebrate the final evening at one of Nouméa’s finest French dining rooms, renowned for warm hospitality, fresh seafood, and impeccable French cellar pairings.',
          tips: 'The chocolate souffle and lobster cassolette are legendary.'
        },
        dinner: {
          place: 'Marmite et Tire-Bouchon (Baie des Citrons)',
          description: 'Exquisite French-Pacific fine dining with local seafood, duck breast, and artisanal wines.',
          estCostAUD: 240,
          estCostXPF: 17500
        },
        dayEstCostAUD: 330,
        dayEstCostXPF: 24100
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Leisurely Breakfast & Departure on QF92',
        subtitle: 'Final Buffet Breakfast, Single-Suite Packing, Smooth Airport Drive',
        summary: 'Final buffet breakfast at Le Taom, effortless packing from your single suite, an easy 45-minute highway drive to La Tontouta Airport, and depart on QF92 at 1:50 PM.',
        morning: {
          time: '8:00 AM – 10:30 AM',
          title: 'Final Resort Breakfast & Easy Pack-up',
          description: 'Linger over fresh croissants, tropical fruit, and cafe au lait. Because you stayed in one place all week, packing takes just 20 minutes. Check out at 10:30 AM.',
          tips: 'Leave Nouméa by 10:45 AM to allow ample time for the 45-min highway drive.'
        },
        lunch: {
          place: 'La Tontouta Airport Lounge & Duty Free',
          description: 'Sandwiches, French chocolates, and coffee before boarding.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'Vehicle Return & QF92 Boarding',
          description: 'Return your 7-seater SUV with a full tank at the terminal. Browse duty-free French cosmetics and wines. Board QF92 departing at 1:50 PM.',
          tips: 'Direct flight home to Australia.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival Home Rested & Rejuvenated',
          description: 'Arrive home relaxed, refreshed, and with unforgettable memories of the South Pacific.',
          tips: 'Direct flight home.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 55,
        dayEstCostXPF: 4000
      }
    ],
    accommodations: [
      {
        name: 'Château Royal Beach Resort & Spa',
        type: 'Superior or Prestige 2-Bedroom Oceanview Suite',
        location: 'Pointe Magnin / Anse Vata Beach, Nouméa',
        nights: '6 Nights (Sun 8 Nov – Sat 14 Nov)',
        bedding: '1 King Bed (Master) + 1 King or 2 Singles (2nd Bed) + Double Sofa Bed (Living)',
        pricePerNightAUD: 525,
        pricePerNightXPF: 38300,
        totalCostAUD: 3150,
        totalCostXPF: 229800,
        features: [
          '3-Hectare Tropical Garden Park',
          'Heated Outdoor Lagoon Pool & Sun Loungers',
          'Aquatonic Seawater Spa & Hydro-Massage Pools',
          'Full Gourmet Kitchen (Oven, Dishwasher, Nespresso)',
          '2 Full Bathrooms with Walk-in Showers',
          'Large Private Balcony Overlooking Gardens/Lagoon',
          'Direct Beachfront Walkway to Anse Vata'
        ],
        pros: [
          'All 5 guests stay together in one spacious 90m² suite',
          'Daily buffet breakfast included at Le Taom',
          'Step right out into tropical gardens or heated pool',
          '5-minute beach walk to Duck Island boat taxi'
        ],
        cons: ['High demand during November; must be booked well in advance'],
        bookingTip: 'Request a Prestige Suite on higher floors for panoramic reef views, or ground floor for direct lawn access.'
      },
      {
        name: 'Le Domaine Nouméa / Le Méridien Resort & Spa',
        type: '2 Interconnecting Deluxe Resort Rooms (or 2-Bedroom Suite)',
        location: 'Pointe Magnin, Anse Vata, Nouméa',
        nights: 'Alternative 5-Star Luxury Resort Option',
        bedding: '1 King Room connecting to 1 Twin Room (2 Double Beds) + Extra Bed',
        pricePerNightAUD: 650,
        pricePerNightXPF: 47400,
        totalCostAUD: 3900,
        totalCostXPF: 284400,
        features: [
          'Nouméa’s Largest Freeform Resort Swimming Pool',
          'Deep Nature Spa Pavilions & Heated Jacuzzi',
          'Direct Sand Access on Pointe Magnin Beach',
          'Coconut Palm Groves & Manicured Lawns',
          'Watersports Center (SUP, Kayaks, Windsurf on beach)',
          'Celebrated French Breakfast Buffet at Le Sextant'
        ],
        pros: [
          'Full 5-star resort service and pampering',
          'Separate rooms give adults maximum privacy',
          'Beachside lunch at Le Faré thatched restaurant'
        ],
        cons: ['Standard rooms do not have full kitchens (refrigerator and kettle only)'],
        bookingTip: 'Book guaranteed interconnecting rooms through Marriott Bonvoy.'
      },
      {
        name: 'Hilton Noumea La Promenade Residences',
        type: '2-Bedroom Oceanfront Apartment Residence',
        location: 'Central Promenade, Anse Vata, Nouméa',
        nights: 'Self-Contained Apartment-Resort Alternative',
        bedding: '1 King Bed + 2 Single Beds + Double Sofa Bed',
        pricePerNightAUD: 420,
        pricePerNightXPF: 30600,
        totalCostAUD: 2520,
        totalCostXPF: 183600,
        features: [
          'Expansive Private Oceanview Terrace',
          'Resort Swimming Pool & Sun Deck',
          'Full Kitchen with Dishwasher & Large Fridge',
          'In-Room Washing Machine & Dryer',
          'Direct Access to Anse Vata Shopping Arcade & Cafes'
        ],
        pros: [
          'Right in the heart of Anse Vata cafes and dining',
          'Very cost-effective for 5 guests',
          'Easy walk to taxi boats and beach'
        ],
        cons: ['Located across the promenade road from the beach rather than inside private gardens'],
        bookingTip: 'Request an Oceanfront Deluxe unit for the widest panoramic balcony.'
      },
      {
        name: 'Hôtel Le Lagon Nouméa',
        type: '2-Bedroom Family Suite with Spa Bath',
        location: '100m from Anse Vata Beach, Nouméa',
        nights: 'Boutique Wellness Hotel Alternative',
        bedding: '1 Queen Bed + 2 Single Beds + Daybed',
        pricePerNightAUD: 340,
        pricePerNightXPF: 24800,
        totalCostAUD: 2040,
        totalCostXPF: 148800,
        features: [
          'Heated Outdoor Swimming Pool',
          'Institut de Beauté & Day Spa',
          'Complimentary Yoga, Pilates & Aqua-gym Classes',
          'Heated Jacuzzi & Sauna',
          'Spacious Balcony with Kitchenette'
        ],
        pros: [
          'Exceptional wellness facilities and friendly boutique hospitality',
          'Great value for a family suite',
          'Free wellness activities included daily'
        ],
        cons: ['100 meters set back from the beach (not direct beachfront frontage)'],
        bookingTip: 'Book directly for complimentary spa circuit passes.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'Îlot Canard (Duck Island)',
        location: 'Anse Vata (5 min walk from resort to water taxi)',
        depth: '1 – 4 meters',
        marineLife: ['Green sea turtles', 'Clownfish in anemones', 'Banded butterflyfish', 'Blue sea stars'],
        kidFriendlyRating: 5,
        currentCaution: 'Minimal current within the buoyed zone. Wave-free and sheltered.',
        entryType: 'Walk-in beach',
        bestTime: 'Morning (9:00 AM – 12:00 PM) while mum relaxes poolside.',
        notes: 'Has a designated underwater educational trail with interpretive buoys. Flotation noodles can be hired.'
      },
      {
        name: 'Phare Amédée Outer Barrier Reef',
        location: 'Outer Barrier Reef (45 min catamaran from Port Moselle)',
        depth: '2 – 10 meters',
        marineLife: ['Giant clams (Tridacna)', 'Banded sea kraits', 'Parrotfish', 'Eagle rays'],
        kidFriendlyRating: 5,
        currentCaution: 'Very calm within the lighthouse reef flat; outer drop-off monitored by tour crew.',
        entryType: 'Boat taxi',
        bestTime: 'Midday glass-bottom boat tour followed by afternoon snorkel off the pier.',
        notes: 'Completely supervised marine playground with lifesavers and rescue boats present.'
      },
      {
        name: 'Îlot Signal Turtle Reserve',
        location: 'Port Moselle (25 min speedboat charter)',
        depth: '1 – 8 meters',
        marineLife: ['Wild green sea turtles', 'Docile blacktip reef sharks', 'Giant trevally', 'Pristine staghorn corals'],
        kidFriendlyRating: 4,
        currentCaution: 'Mild drift current along the reef wall drop-off; easy drift snorkel for kids with fins.',
        entryType: 'Walk-in beach',
        bestTime: 'High tide morning for maximum water clarity over coral gardens.',
        notes: 'Uninhabited reserve. Turtles feed on seagrass beds 20m from the white sand beach.'
      }
    ],
    diningSpots: [
      {
        name: 'Le Taom Restaurant (Château Royal)',
        type: 'Bistro / Seafood',
        location: 'Pointe Magnin, Anse Vata',
        specialty: 'Included daily hot & cold breakfast buffet, tropical fruit spreads, fresh French pastries, and oceanfront dinners',
        recommendation: 'Start every morning with fresh coffee on the outdoor deck overlooking the lagoon.'
      },
      {
        name: 'Le Deck Pool Bar & Grill',
        type: 'Casual Beach Cafe',
        location: 'Château Royal Poolside',
        specialty: 'Poolside burgers, fresh grilled mahi-mahi, chilled rosé, and South Pacific cocktails',
        recommendation: 'Grab afternoon drinks and light lunch without leaving your poolside sun lounger.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa',
        specialty: 'Authentic French bistro classics: duck confit, steak frites, escargots de Bourgogne, homemade tarte tatin',
        recommendation: 'Nouméa’s most authentic, warm French bistro. Book 2 days ahead for dinner.'
      },
      {
        name: 'Le Roof Overwater Restaurant',
        type: 'Bistro / Seafood',
        location: 'Anse Vata (Overwater Pier)',
        specialty: 'Lagoon coral trout, local rock oysters, vanilla-crusted prawns, chocolate lava cake',
        recommendation: 'Dine over the water and watch dolphins and spotted eagle rays circle beneath the central floor cutout.'
      },
      {
        name: 'Marmite et Tire-Bouchon',
        type: 'Bistro / Seafood',
        location: 'Baie des Citrons Promenade',
        specialty: 'Fine French-Pacific cuisine, lobster cassolette, duck breast with vanilla sauce, grand cru wines',
        recommendation: 'The perfect celebration dinner for your final Friday night.'
      }
    ],
    budgetBreakdown: [
      { category: 'Accommodation', item: '6 Nights 2-Bed Luxury Suite at Château Royal Resort (with Breakfast)', costXPF: 229800, costAUD: 3150, notes: '5 pax in private 90m² oceanfront suite' },
      { category: 'Vehicle & Fuel', item: '7-Seater SUV Rental (6 days) + Fuel & Parking', costXPF: 64000, costAUD: 875, notes: 'Collected and returned at La Tontouta' },
      { category: 'Amédée Excursion', item: 'Mary D Phare Amédée Day Cruise (Buffet, Show, Glass-Bottom)', costXPF: 62000, costAUD: 850, notes: 'Full day family package with lunch buffet' },
      { category: 'Marine Charters', item: 'Duck Island Water Taxi + Îlot Signal Turtle Charter', costXPF: 42000, costAUD: 575, notes: 'Quick, zero-friction boat transfers' },
      { category: 'Spa & Wellness', item: 'Aquatonic Seawater Labyrinth Passes & Spa Treatment for Mum', costXPF: 26000, costAUD: 360, notes: 'Thalassotherapy circuit and wellness pampering' },
      { category: 'Food & Dining', item: '5 Restaurant Dinners, Lunches & Poolside Cocktails (Breakfast included)', costXPF: 88200, costAUD: 1200, notes: 'Relaxed dining out with breakfasts provided' }
    ],
    checklist: [
      { id: 'c1', task: 'Book Château Royal 2-Bedroom Superior/Prestige Suite with Breakfast', deadline: '3–6 Months Prior', category: 'booking', notes: 'Limited inventory for 2-bedroom units; high demand' },
      { id: 'c2', task: 'Reserve 7-seater SUV rental at La Tontouta Airport', deadline: '3 Months Prior', category: 'booking', notes: 'Guarantees easy luggage transport for 5 pax' },
      { id: 'c3', task: 'Book Mary D Phare Amédée Day Excursion (Tuesday)', deadline: '2 Months Prior', category: 'booking', notes: 'Sails Tuesday; includes island buffet feast' },
      { id: 'c4', task: 'Book Aquatonic Seawater Spa Treatment for Mum (Wednesday morning)', deadline: '1 Month Prior', category: 'booking', notes: 'Reserve massage or facial in advance' },
      { id: 'c5', task: 'Reserve Îlot Signal Water Taxi for Wednesday morning', deadline: '1 Month Prior', category: 'booking', notes: 'Guarantees boat charter for turtle snorkeling' },
      { id: 'c6', task: 'Reserve Chez Toto and Le Roof for evening celebrations', deadline: '2 Weeks Prior', category: 'booking', notes: 'Popular dinner tables fill quickly' }
    ]
  },

  'relax-island': {
    id: 'relax-island',
    optionNumber: 6,
    category: 'relaxing',
    title: 'The Private Coral Island Sanctuary',
    tagline: '6 Nights on a Protected Coral Marine Reserve with Overwater & Beach Bungalows',
    badge: '🏝️ Option 6 — Island Sanctuary',
    heroImageGradient: 'from-cyan-800 via-blue-900 to-indigo-950',
    baseLocation: 'DoubleTree by Hilton Îlot Maître (200-ha Marine Reserve Islet, 20 mins from Nouméa)',
    hotelMoves: 0,
    totalDrivingKm: 90,
    avgDailyDrivingMins: 10,
    cost5PaxXPF: 625000,
    cost5PaxAUD: 8560,
    costPerPersonAUD: 1712,
    idealFor: 'Families dreaming of an idyllic, slow-paced South Pacific island escape where you step right out of your bungalow onto white sand or over crystal turquoise water, swim with docile wild green turtles off the beach every afternoon, and lounge beside an oceanfront infinity pool.',
    overviewSummary: 'Escape Grande Terre completely. A short 20-minute private hotel boat transfer transports you to Îlot Maître, a tranquil 200-hectare marine sanctuary surrounded by white coral sand and turquoise lagoon. Stay in beachfront or tropical garden bungalows under coconut palms. Your wife can step right out into the sand, relax on poolside daybeds with cocktails, and watch the waves lap against the shore. Your 9-year-old and you can walk straight into the knee-deep water where wild green sea turtles graze on seagrass beds right off the beach. Daily buffet breakfast is served at L’Atelier, and scheduled boat shuttles allow easy half-day visits to mainland Nouméa for French dining or shopping.',
    keyHighlights: [
      'Exclusive island paradise: 20-minute boat ride from Nouméa into a 200-hectare pristine marine reserve',
      'Wild green sea turtles off the beach: Snorkel directly from the sand or overwater walkways with resident sea turtles',
      'Lagoon infinity pool & beach bar: Oceanfront pool with swim-up cocktails, sun loungers, and warm tropical breezes',
      'Provided island breakfast buffet: Daily breakfast at L’Atelier with tropical fruits, pastries, and ocean panoramas',
      'Overwater & beach bungalow living: Fall asleep to the gentle sound of the tide; zero cars, zero traffic, zero noise',
      'Flexible town excursions: Scheduled 20-min boat shuttles to Port Moselle for market visits and French bistro dinners'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs La Tontouta at 1:50 PM'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Arrival & Private Boat Transfer to Îlot Maître',
        subtitle: 'Airport Transfer, Port Moselle Boat Hop, Check into Island Bungalows',
        summary: 'Land on QF91, take a comfortable 45-minute private transfer to Port Moselle Marina, and board the DoubleTree catamaran for the scenic 20-minute cruise to Îlot Maître. Step onto the island jetty, unpack your sandals, and toast the sunset.',
        morning: {
          time: '12:35 PM – 2:30 PM',
          title: 'Arrival & Transfer to Marina',
          description: 'Land on QF91 at La Tontouta Airport. Meet your private minivan transfer for the smooth 45-minute highway drive to Port Moselle Marina in Nouméa.',
          tips: 'Pick up any duty-free French wine at the airport to enjoy on your private bungalow deck.'
        },
        lunch: {
          place: 'Marina Waterfront Cafe (Port Moselle)',
          description: 'Quick espresso, pain au chocolat, and fresh baguettes while waiting for the resort boat.',
          estCostAUD: 50,
          estCostXPF: 3600
        },
        afternoon: {
          time: '3:30 PM – 5:30 PM',
          title: 'Catamaran Hop to Îlot Maître & Bungalow Check-in',
          description: 'Board the 20-minute resort catamaran. Arrive at Îlot Maître’s turquoise lagoon. Check into your deluxe beachfront or garden bungalows nestled under coconut palms. Change into swimwear and take your first plunge in the oceanfront infinity pool.',
          tips: 'Look over the jetty railings—you will likely spot sea turtles before you even reach your room!'
        },
        evening: {
          time: '6:00 PM – 9:00 PM',
          title: 'Island Sunset Cocktails & Welcome Feast',
          description: 'Sip fresh passionfruit cocktails at the Sunset Beach Bar, followed by a lavish seafood buffet at L’Atelier restaurant overlooking the shimmering lagoon.',
          tips: 'The sunsets over the western barrier reef are completely unobstructed.'
        },
        dinner: {
          place: 'L’Atelier Restaurant (Îlot Maître)',
          description: 'Pacific seafood buffet with fresh oysters, local lagoon fish, salads, and French desserts.',
          estCostAUD: 210,
          estCostXPF: 15300
        },
        dayEstCostAUD: 260,
        dayEstCostXPF: 18900
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'Wild Green Sea Turtles Off the Beach',
        subtitle: 'Island Buffet Breakfast, Walk-In Turtle Snorkeling, Infinity Pool',
        summary: 'A day of pure island bliss. Wake up to gentle waves, enjoy breakfast at L’Atelier, and walk straight into the transparent water to swim with wild green sea turtles feeding on the seagrass right off the beach.',
        morning: {
          time: '8:30 AM – 12:00 PM',
          title: 'Island Breakfast & Walk-in Turtle Snorkel',
          description: 'Linger over tropical fruit and hot croissants at L’Atelier. Step directly onto the white sand in front of your bungalow. Put on snorkel masks and wade out 15 meters—wild green sea turtles graze peacefully on the seagrass beds.',
          tips: 'Completely wave-free and shallow—even a 9-year-old can stand up in the water next to turtles.'
        },
        lunch: {
          place: 'Sunset Beach Bar & Grill',
          description: 'Grilled fish skewers, tropical salads, and woodfired flatbreads right by the sand.',
          estCostAUD: 120,
          estCostXPF: 8800
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Oceanfront Infinity Pool & Overwater Walkway Stroll',
          description: 'Mum reclines on poolside daybeds with a book and cold drink. Take an afternoon stroll along the overwater bungalow wooden boardwalks to spot spotted eagle rays and coral fish swimming in the crystal water.',
          tips: 'High tide brings schools of trevally and parrotfish right beneath the wooden walkways.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Beachside Stargazing & Island Dining',
          description: 'Dine under the stars listening to the gentle lapping of the tide. Because there are no city lights on the islet, the southern night skies are dazzling.',
          tips: 'Spot the Southern Cross and the Milky Way stretching across the lagoon.'
        },
        dinner: {
          place: 'L’Atelier Terrace Dining',
          description: 'A la carte French-Melanesian cuisine with local tuna carpaccio and beef tenderloin.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 310,
        dayEstCostXPF: 22700
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Lagoon Water Sports & Coral Garden Safari',
        subtitle: 'Stand-Up Paddleboarding, Transparent Kayaks, Outer Coral Bommies',
        summary: 'Paddle transparent kayaks across the turquoise lagoon to view living corals below, relax with afternoon massages, and enjoy an evening cocktail cruise.',
        morning: {
          time: '9:00 AM – 12:30 PM',
          title: 'Transparent Kayaking & SUP Paddle',
          description: 'Hire transparent kayaks from the water sports hut. Glide over coral gardens and seagrass beds without even getting wet. The 9-year-old can paddle safely in the sheltered lee of the island.',
          tips: 'The lagoon around Îlot Maître is a protected marine reserve; fishing is strictly prohibited.'
        },
        lunch: {
          place: 'Poolside Lounge / Room Service',
          description: 'Fresh club sandwiches, burgers, and tropical fruit platters served to your deck.',
          estCostAUD: 100,
          estCostXPF: 7300
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Island Massage & Quiet Beach Time',
          description: 'Mum enjoys an outdoor open-air massage under thatched garden cabanas. Dad & 9yo explore the outer coral bommies at the reef edge with snorkel guides.',
          tips: 'Afternoon high tide offers the clearest underwater visibility.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Sunset Cocktails & Island Barbecue',
          description: 'Watch the sun sink into the South Pacific with live acoustic guitar music at the beach bar.',
          tips: 'Warm tropical island night ambiance.'
        },
        dinner: {
          place: 'Beach BBQ Feast at L’Atelier',
          description: 'Grilled rock lobster tails, prawns, and steaks with tropical salads and desserts.',
          estCostAUD: 220,
          estCostXPF: 16100
        },
        dayEstCostAUD: 320,
        dayEstCostXPF: 23400
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Midweek Island Escape & Peace',
        subtitle: 'Zero Holiday Hassles, Lazy Infinity Pool Dips, Turtle Encounters',
        summary: 'While mainland shops are closed for the public holiday, life on Îlot Maître is completely unaffected. Enjoy unhurried breakfasts, warm pool swims, and lazy hammock afternoons.',
        morning: {
          time: '9:00 AM – 12:30 PM',
          title: 'Lazy Breakfast & Island Hammock Time',
          description: 'Wake up late with no alarms. Read a book in the beach hammocks strung between coconut palms. Wade into the water for a mid-morning swim with the resident green sea turtles.',
          tips: 'The island is tranquil and self-contained; mainland holiday closures don’t matter at all.'
        },
        lunch: {
          place: 'Sunset Beach Bar',
          description: 'Light lunch with grilled calamari, fresh salads, and chilled French beer.',
          estCostAUD: 95,
          estCostXPF: 6900
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Snorkel Trail & Sun Lounger Nap',
          description: 'Explore the marine nature trail around the eastern tip of the island. Return for an afternoon nap on the shaded sun loungers beside the infinity pool.',
          tips: 'Bring waterproof cameras to capture turtles surfacing next to your mask.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'French Wine & Island Dining',
          description: 'Romantic island dinner overlooking the calm lagoon waters.',
          tips: 'Light trade winds keep insects away and the air comfortably warm.'
        },
        dinner: {
          place: 'L’Atelier Dining Room',
          description: 'Fresh grilled coral trout with vanilla emulsion, roasted potatoes, and chocolate mousse.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 285,
        dayEstCostXPF: 20800
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Mainland Evening Excursion: French Bistro in Nouméa',
        subtitle: 'Island Day, 20-Min Evening Boat Hop, Dinner at Chez Toto',
        summary: 'Spend the day relaxing on the island, then catch the 5:30 PM resort boat shuttle to Nouméa for an authentic French bistro dinner at Chez Toto in Quartier Latin, returning on the 9:00 PM evening boat.',
        morning: {
          time: '8:30 AM – 1:00 PM',
          title: 'Morning Lagoon Swim & Pool Relaxation',
          description: 'Enjoy a leisurely breakfast and spend the morning swimming in the pool or walking the perimeter of the island (a 25-minute scenic stroll along the white sand).',
          tips: 'Low tide exposes beautiful sandbars perfect for child beachcombing.'
        },
        lunch: {
          place: 'L’Atelier Deck',
          description: 'Fresh Poisson Cru with lime, coconut milk, and crusty bread.',
          estCostAUD: 100,
          estCostXPF: 7300
        },
        afternoon: {
          time: '2:30 PM – 5:00 PM',
          title: 'Rest & Change for Town Excursion',
          description: 'Relax in your air-conditioned bungalow. Freshen up and get dressed for an evening out in town. Board the 5:30 PM scheduled boat shuttle to Port Moselle Marina.',
          tips: 'A 20-minute boat ride takes you directly into downtown Nouméa.'
        },
        evening: {
          time: '6:00 PM – 9:30 PM',
          title: 'Celebration French Bistro Dinner at Chez Toto',
          description: 'Short 5-minute stroll from Port Moselle into Quartier Latin for dinner at Chez Toto. Feast on duck confit, escargots, and steak frites before boarding the 9:00 PM return boat back to the island.',
          tips: 'Experience Nouméa’s premier dining without giving up your private island base!'
        },
        dinner: {
          place: 'Chez Toto (Quartier Latin, Nouméa)',
          description: 'Authentic French dining in Nouméa’s historic quarter.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 290,
        dayEstCostXPF: 21200
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Final Day of Island Bliss & Overwater Dinner',
        subtitle: 'Turtle Snorkel Finale, Sunset Beach Walk, Island Grand Farewell',
        summary: 'A glorious final full day on the island. Final swim with the green sea turtles, afternoon relaxation beside the infinity pool, and a celebration farewell dinner overlooking the water.',
        morning: {
          time: '9:00 AM – 12:30 PM',
          title: 'Final Morning Snorkel with Wild Turtles',
          description: 'Take one last unforgettable morning swim with the resident turtles. The water is crystalline and calm. The 9-year-old can take GoPro photos of turtles grazing just under the surface.',
          tips: 'Turtles are most active in the morning when the water is glassy calm.'
        },
        lunch: {
          place: 'Sunset Beach Bar',
          description: 'Light lunch and cold fruit smoothies by the pool.',
          estCostAUD: 85,
          estCostXPF: 6200
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Poolside Daybed & Afternoon Packing',
          description: 'Lounge on the daybeds for a restful afternoon. Slowly pack bags with no rush. Watch the sun dip toward the western horizon for the final island sunset.',
          tips: 'Take family photos on the overwater bungalow wooden jetty at golden hour.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Island Farewell Celebration Feast',
          description: 'Celebrate the final night with an overwater celebration dinner at L’Atelier with fine French wine, seafood, and decadent desserts.',
          tips: 'Toast an incredible week of true South Pacific relaxation.'
        },
        dinner: {
          place: 'L’Atelier (Îlot Maître)',
          description: 'Grand seafood banquet with lobster, champagne, and tropical desserts.',
          estCostAUD: 240,
          estCostXPF: 17500
        },
        dayEstCostAUD: 325,
        dayEstCostXPF: 23700
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Morning Island Boat Transfer & Departure',
        subtitle: 'Breakfast, 20-Min Boat to Mainland, Highway Transfer, QF92 at 1:50 PM',
        summary: 'Final island breakfast, board the 10:00 AM resort catamaran to Port Moselle, meet your private minivan transfer to La Tontouta Airport, and depart on QF92 at 1:50 PM.',
        morning: {
          time: '8:00 AM – 10:30 AM',
          title: 'Final Breakfast & Island Catamaran Transfer',
          description: 'Enjoy a leisurely breakfast at L’Atelier. Check out and board the 10:00 AM resort catamaran back to Port Moselle Marina (20 mins). Meet your private airport minivan waiting at the pier.',
          tips: 'Arrive at La Tontouta Airport by 11:45 AM for easy check-in.'
        },
        lunch: {
          place: 'La Tontouta Terminal Café & Duty Free',
          description: 'Quick sandwiches, coffee, and duty-free French chocolates before boarding.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'QF92 Boarding & Homeward Flight',
          description: 'Clear customs and board QF92 departing at 1:50 PM for Australia.',
          tips: 'Direct flight home.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival Home',
          description: 'Arrive home completely refreshed from your tropical island sanctuary.',
          tips: 'Direct flight.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 55,
        dayEstCostXPF: 4000
      }
    ],
    accommodations: [
      {
        name: 'DoubleTree by Hilton Nouméa Îlot Maître Resort',
        type: '2 Deluxe Beach or Garden Bungalows (or Overwater Villa)',
        location: 'Îlot Maître Coral Reserve (20 min boat from Nouméa)',
        nights: '6 Nights (Sun 8 Nov – Sat 14 Nov)',
        bedding: '1 King Bungalow + 1 Twin Bungalow (2 Double Beds) — accommodating all 5 pax',
        pricePerNightAUD: 720,
        pricePerNightXPF: 52500,
        totalCostAUD: 4320,
        totalCostXPF: 315000,
        features: [
          '200-Hectare Protected Marine Reserve Setting',
          'Wild Green Sea Turtles Swimming 15m from the Beach',
          'Oceanfront Lagoon Infinity Pool & Sun Deck',
          'Private Sun Terraces on Each Bungalow',
          'L’Atelier Oceanfront Restaurant & Sunset Beach Bar',
          'Water Sports Hut (Transparent Kayaks, Paddleboards)'
        ],
        pros: [
          'Pure 100% tropical island escape with zero cars or city noise',
          'Step right out of your bungalow onto white sand or into the pool',
          'Included daily breakfast buffet at L’Atelier',
          'Incredible off-the-beach snorkeling for kids and adults'
        ],
        cons: ['Dining is on the island unless taking the 20-minute boat shuttle to town'],
        bookingTip: 'Book 2 adjoining garden or beach bungalows, or upgrade 1 to an Overwater Bungalow for the ultimate luxury.'
      },
      {
        name: 'The Island & Mainland Split (Hilton + Château Royal)',
        type: '4 Nights Island Bungalows + 2 Nights Luxury Suite in Nouméa',
        location: 'Îlot Maître (Sun–Thu) + Anse Vata, Nouméa (Thu–Sat)',
        nights: '4 Nights Island + 2 Nights Mainland',
        bedding: '2 Island Bungalows followed by 2-Bedroom Oceanfront Suite',
        pricePerNightAUD: 620,
        pricePerNightXPF: 45200,
        totalCostAUD: 3720,
        totalCostXPF: 271200,
        features: [
          '4 Nights Robinson Crusoe Island Living with Turtles & Pool',
          '2 Nights Gourmet Dining, Boutiques & Aquatonic Spa in Nouméa',
          'Zero Domestic Flights Required (Easy 20-min boat transfer)',
          'All breakfasts included at both resorts'
        ],
        pros: [
          'The ultimate balance of pure island relaxation and gourmet mainland dining',
          'Lets you experience both the island sanctuary and Nouméa’s famous French bistros'
        ],
        cons: ['Requires 1 hotel move on Thursday morning'],
        bookingTip: 'Coordinate boat transfer directly with Château Royal check-in time.'
      },
      {
        name: 'Hôtel Beaurivage & Multi-Day Îlot Maître Day Passes',
        type: '2 Beachfront Rooms in Nouméa + Daily Island Speedboat Access',
        location: 'Baie des Citrons (Mainland Base) + Daily Îlot Maître Access',
        nights: 'Budget-Friendly Alternative Option',
        bedding: '2 Interconnecting Beachfront Rooms',
        pricePerNightAUD: 380,
        pricePerNightXPF: 27700,
        totalCostAUD: 2280,
        totalCostXPF: 166200,
        features: [
          'Beachfront Hotel directly opposite Baie des Citrons netted beach',
          'Daily speedboat passes to DoubleTree Îlot Maître pool & turtle beaches',
          'Walk to 20+ French bistros and bakeries in Nouméa',
          'Lower overall accommodation cost'
        ],
        pros: [
          'Cost-effective while still enjoying the private island pool and turtles during the day',
          'Ultimate freedom of dining every evening in Nouméa'
        ],
        cons: ['Must take the 20-minute boat back to town every afternoon (not sleeping on the island)'],
        bookingTip: 'Book multi-day island excursion passes at Port Moselle.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'Îlot Maître Marine Reserve (Beachfront Shallows)',
        location: 'Directly in front of DoubleTree bungalows',
        depth: '1 – 3 meters',
        marineLife: ['Wild green sea turtles', 'Threadfin butterflyfish', 'Blue sea stars', 'Cowry shells'],
        kidFriendlyRating: 5,
        currentCaution: 'Completely zero waves. Calm sandy shallows ideal for children and beginners.',
        entryType: 'Walk-in beach',
        bestTime: 'Morning high tide for crystal water directly off the sand.',
        notes: 'Dozens of resident turtles graze on the seagrass beds just 15 meters from the beach.'
      },
      {
        name: 'Îlot Maître Outer Coral Garden & Reef Edge',
        location: 'Western tip of Îlot Maître (5 min swim from jetty)',
        depth: '2 – 6 meters',
        marineLife: ['Staghorn coral gardens', 'Parrotfish', 'Harmless blacktip reef sharks', 'Eagle rays'],
        kidFriendlyRating: 4,
        currentCaution: 'Mild current on outer drop-off; stay within the buoyed marine reserve area.',
        entryType: 'Walk-in beach',
        bestTime: 'Midday high tide.',
        notes: 'Spectacular coral diversity protected from fishing for over 25 years.'
      },
      {
        name: 'Overwater Bungalow Boardwalk Lagoon',
        location: 'Beneath DoubleTree overwater villas',
        depth: '1 – 2.5 meters',
        marineLife: ['Stingrays', 'Schools of silver mullet', 'Needlefish', 'Juvenile reef fish'],
        kidFriendlyRating: 5,
        currentCaution: 'Wave-free lagoon basin.',
        entryType: 'Walk-in beach',
        bestTime: 'Late afternoon as rays cruise the shallows.',
        notes: 'Look down from the wooden walkways or jump right in from your villa steps.'
      }
    ],
    diningSpots: [
      {
        name: 'L’Atelier Restaurant (Îlot Maître)',
        type: 'Bistro / Seafood',
        location: 'DoubleTree Resort Main Pavilion',
        specialty: 'Included daily hot & cold breakfast buffet, Pacific seafood banquets, grilled coral trout, French wines',
        recommendation: 'Dine on the open-air wooden deck listening to the waves.'
      },
      {
        name: 'Sunset Beach Bar & Grill',
        type: 'Casual Beach Cafe',
        location: 'DoubleTree Poolside & Beach',
        specialty: 'Poolside cocktails, woodfired flatbreads, grilled burgers, fresh fruit smoothies',
        recommendation: 'Order drinks right to your poolside sun lounger as the sun dips below the horizon.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa (Evening Excursion)',
        specialty: 'Confit de canard, steak tartare, escargots de Bourgogne, homemade tarte tatin',
        recommendation: 'Catch the 5:30 PM boat shuttle into town on Thursday for a quintessential French bistro feast.'
      },
      {
        name: 'Le Roof Overwater Restaurant',
        type: 'Bistro / Seafood',
        location: 'Anse Vata, Nouméa (Optional Town Dinner)',
        specialty: 'Lagoon fish, rock oysters, vanilla-crusted prawns, central marine floor cutout',
        recommendation: 'Watch dolphins gliding beneath the floor cutout.'
      }
    ],
    budgetBreakdown: [
      { category: 'Accommodation', item: '6 Nights 2 Deluxe Bungalows at DoubleTree Îlot Maître (with Breakfast)', costXPF: 315000, costAUD: 4320, notes: '2 private bungalows accommodating all 5 guests' },
      { category: 'Boat & Land Transfers', item: 'Private Airport Minivan + Return Resort Catamaran Transfers (5 pax)', costXPF: 58000, costAUD: 795, notes: 'Seamless round-trip airport and island boat transfers' },
      { category: 'Water Sports & Snorkel', item: 'Transparent Kayaks, Stand-Up Paddleboard Hire & Snorkel Sets', costXPF: 24000, costAUD: 330, notes: 'Island water sports equipment' },
      { category: 'Mainland Excursion Boat', item: 'Evening Return Boat Shuttles to Nouméa for French Bistro Dinner', costXPF: 32000, costAUD: 440, notes: 'Scheduled resort boat shuttles for 5 pax' },
      { category: 'Food & Dining', item: 'Island Dinners, Poolside Lunches, Cocktails & Chez Toto Dinner (Breakfasts included)', costXPF: 196000, costAUD: 2675, notes: 'Resort dining and celebratory dinner in town' }
    ],
    checklist: [
      { id: 'c1', task: 'Book DoubleTree by Hilton Îlot Maître 2 Bungalows with Breakfast', deadline: '3–6 Months Prior', category: 'booking', notes: 'Limited bungalow inventory on the private island' },
      { id: 'c2', task: 'Confirm Resort Catamaran Transfer Times from Port Moselle', deadline: '2 Months Prior', category: 'booking', notes: 'Coordinate with QF91 flight arrival time' },
      { id: 'c3', task: 'Arrange Airport Minivan Transfer from La Tontouta to Port Moselle', deadline: '1 Month Prior', category: 'booking', notes: 'Hassle-free 45-min highway transfer for 5 pax' },
      { id: 'c4', task: 'Reserve Table at Chez Toto for Thursday evening excursion', deadline: '2 Weeks Prior', category: 'booking', notes: 'Coordinate with 5:30 PM / 9:00 PM boat shuttle' },
      { id: 'c5', task: 'Pack reef-safe sunscreen, polarized sunglasses, and rash guards', deadline: '1 Week Prior', category: 'gear', notes: 'The South Pacific sun on white sand is intense' }
    ]
  },

  'relax-retreat': {
    id: 'relax-retreat',
    optionNumber: 7,
    category: 'relaxing',
    title: 'The Gentle Nature & Wellness Retreat',
    tagline: '3 Nights UNESCO Biosphere Resort (Deva/Poé) + 3 Nights Nouméa Lagoon Spa',
    badge: '🌿 Option 7 — Nature & Wellness',
    heroImageGradient: 'from-amber-800 via-emerald-800 to-teal-900',
    baseLocation: '3 Nights Bourail (Domaine de Deva) + 3 Nights Nouméa (Anse Vata) (1 Gentle Move)',
    hotelMoves: 1,
    totalDrivingKm: 360,
    avgDailyDrivingMins: 40,
    cost5PaxXPF: 520000,
    cost5PaxAUD: 7125,
    costPerPersonAUD: 1425,
    idealFor: 'Families who love luxury nature retreats, wellness spas, uncrowded white beaches, and world-class golf—blended with relaxed urban dining and barrier reef boat hops.',
    overviewSummary: 'Experience the tranquility of New Caledonia’s wild west coast without roughing it. Spend the first 3 nights at the 5-star Sheraton New Caledonia Deva Spa & Golf Resort, nestled inside an 8,000-hectare UNESCO-protected natural biosphere reserve. Stay in authentic high-ceilinged Melanesian family bungalows. Your wife can indulge at the award-winning Deep Nature Spa, relax beside the massive beachfront infinity pool, or take gentle horse rides and nature walks through the dry forest. Your 9-year-old can paddleboard in the wave-free 17 km Poé lagoon or spot green turtles at the Shark Fault. On Wednesday, enjoy a leisurely scenic drive south to Nouméa, checking into Château Royal for 3 nights of thalassotherapy spa pools, Phare Amédée lighthouse cruises, and French bistro dining.',
    keyHighlights: [
      '5-star UNESCO biosphere retreat: 3 nights at Sheraton Deva amidst 8,000 hectares of protected hills and white sand beaches',
      'Traditional Melanesian bungalow living: Luxurious high-ceilinged bungalows crafted with local woods and private garden decks',
      'Deep Nature Spa & Golf: World-class wellness treatments, heated outdoor jacuzzis, and an 18-hole Dye Design championship golf course',
      '17 km wave-free Poé lagoon: Transparent shallow waters perfect for child paddleboarding and sunset beach walks',
      'Provided 5-star buffet breakfasts: Full hot breakfast spreads at Reef Restaurant (Deva) and Le Taom (Château Royal)',
      'Gentle two-resort split: Only 1 hotel transition along a smooth paved highway, ending with Nouméa gourmet bistros'
    ],
    flightInfo: {
      arrival: 'Sun 8 Nov: QF91 arrives La Tontouta at 12:35 PM',
      departure: 'Sat 14 Nov: QF92 departs La Tontouta at 1:50 PM'
    },
    days: [
      {
        dayNumber: 1,
        date: 'Sunday, 8 Nov 2026',
        title: 'Arrival & Scenic Drive to 5-Star Sheraton Deva',
        subtitle: 'Airport Pickup, RT1 Highway Drive North, Traditional Bungalow Settle-in',
        summary: 'Land on QF91 at La Tontouta, pick up your 7-seater SUV, and drive an easy 1h45m north on smooth highway RT1 directly to Sheraton Deva. Check into your traditional Melanesian family bungalow, walk to the massive beachfront infinity pool, and enjoy a cocktail as deer graze on the nearby hills.',
        morning: {
          time: '12:35 PM – 2:00 PM',
          title: 'Arrival & 7-Seater Vehicle Pickup',
          description: 'Land on QF91 at La Tontouta Airport. Pick up your 7-seater SUV at the terminal. Because La Tontouta is already 45 mins north of Nouméa, driving north to Deva is fast and effortless (1h45m on paved RT1).',
          tips: 'Stock up on road snacks and bottled water at Bouloupari bakery en route.'
        },
        lunch: {
          place: 'Bouloupari Artisan Bakery (RT1)',
          description: 'Warm quiches, ham-and-cheese croissants, and fresh baguettes on the drive north.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '3:45 PM – 6:00 PM',
          title: 'Sheraton Deva Settle-in & Infinity Pool Dip',
          description: 'Arrive at the 5-star Sheraton Deva. Check into your high-ceilinged traditional Melanesian bungalow surrounded by banyan trees. Step out onto your private wooden deck, change into swimwear, and head to the giant infinity pool directly facing the UNESCO lagoon.',
          tips: 'The architectural design of the bungalows is inspired by traditional Kanak huts with soaring wooden beams.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Sunset Dining at Sand Beach Grill',
          description: 'Enjoy cocktails and fresh local seafood with your feet almost in the sand at the Sand Beach Grill.',
          tips: 'Listen for the calls of wild rusa deer in the dry forest hills behind the resort.'
        },
        dinner: {
          place: 'Sand Beach Grill (Sheraton Deva)',
          description: 'Beachfront grilled local venison steaks, fresh reef fish, and French wines.',
          estCostAUD: 190,
          estCostXPF: 13900
        },
        dayEstCostAUD: 245,
        dayEstCostXPF: 17900
      },
      {
        dayNumber: 2,
        date: 'Monday, 9 Nov 2026',
        title: 'Deep Nature Spa Morning & Shark Fault Turtle Safari',
        subtitle: '5-Star Buffet Breakfast, Thalassotherapy Spa, Glass-Bottom Boat Reef Safari',
        summary: 'Start with a lavish buffet breakfast at Reef Restaurant. Mum enjoys a 2-hour massage and jacuzzi circuit at the Deep Nature Spa; Dad and the 9yo take a glass-bottom boat tour to the Shark Fault to snorkel with wild green sea turtles.',
        morning: {
          time: '8:30 AM – 12:30 PM',
          title: 'Deep Nature Spa (Mum) & Shark Fault Safari (Dad & 9yo)',
          description: 'Mum enjoys a serene morning at the Deep Nature Spa pavilion with heated outdoor jacuzzi and relaxing massage. Dad & 9yo take a 10-minute drive to Poé Beach to board the glass-bottom boat safari out to the Shark Fault to snorkel with green sea turtles and harmless reef sharks.',
          tips: 'The Shark Fault boat trip is safe, supervised, and includes child-sized lifejackets and fins.'
        },
        lunch: {
          place: 'Bistrot de la Roche (Roche Percée)',
          description: 'Relaxed cafe lunch near the iconic Bonhomme rock landmark.',
          estCostAUD: 95,
          estCostXPF: 6900
        },
        afternoon: {
          time: '2:30 PM – 5:30 PM',
          title: 'Calm Poé Beach Paddleboarding & Pool Relaxation',
          description: 'Reunite at the resort. The 17 km Poé lagoon is completely wave-free and shallow—ideal for child stand-up paddleboarding. Mum relaxes poolside on padded daybeds.',
          tips: 'Stand-up paddleboards and kayaks are free for Sheraton resort guests.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Melanesian Seafood Dinner at Reef Restaurant',
          description: 'Dine in the grand high-ceilinged timber dining room overlooking the illuminated pool.',
          tips: 'Sample the traditional Bougna (chicken or fish baked in banana leaves with coconut milk).'
        },
        dinner: {
          place: 'Reef Restaurant (Sheraton Deva)',
          description: 'Fine buffet and a la carte dining featuring local Pacific ingredients.',
          estCostAUD: 200,
          estCostXPF: 14600
        },
        dayEstCostAUD: 295,
        dayEstCostXPF: 21500
      },
      {
        dayNumber: 3,
        date: 'Tuesday, 10 Nov 2026',
        title: 'Gentle Deva Nature Walks & 18-Hole Championship Golf',
        subtitle: 'Morning Horse Riding or Forest Walk, Golf Course, Infinity Pool Sunset',
        summary: 'Explore the 8,000-hectare Domaine de Deva. Mum takes a gentle morning nature stroll or scenic horse trail ride; Dad can play 9 holes on the Dye Design championship golf course; afternoon together by the pool.',
        morning: {
          time: '8:30 AM – 12:00 PM',
          title: 'Deva Nature Exploration & Dye Design Golf',
          description: 'Gentle walking trails lead through dry forest lookouts with panoramic lagoon views. Optional gentle horse riding through the forest trails, or 9 holes of golf on the ocean-facing course.',
          tips: 'The trails are flat, shaded, and very easy for all fitness levels.'
        },
        lunch: {
          place: 'Poolside Snack Bar (Sheraton Deva)',
          description: 'Fresh woodfired pizzas, tropical fruit smoothies, and crisp French salads.',
          estCostAUD: 90,
          estCostXPF: 6600
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Private Bungalow Deck Siesta & Beach Walk',
          description: 'Unwind with an afternoon siesta on your private bungalow veranda. Take a late afternoon beach walk along the empty white silica sands of Poé as the sun begins to set.',
          tips: 'Poé beach is one of the longest, most peaceful natural beaches in the South Pacific.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Farewell Deva Dinner & Stargazing',
          description: 'Final dinner at Sheraton Deva. Stargaze beside the unlit beach—the southern sky is ablaze with stars.',
          tips: 'Zero light pollution makes the Milky Way visible to the naked eye.'
        },
        dinner: {
          place: 'Sand Beach Grill',
          description: 'Gourmet burgers, grilled mahi-mahi, and French desserts.',
          estCostAUD: 170,
          estCostXPF: 12400
        },
        dayEstCostAUD: 260,
        dayEstCostXPF: 19000
      },
      {
        dayNumber: 4,
        date: 'Wednesday, 11 Nov 2026 (Armistice Day)',
        title: 'Scenic Drive South & Check into Château Royal Resort',
        subtitle: 'Fort Teremba Historic Stop, Nouméa Arrival, Aquatonic Spa Settle-in',
        summary: 'Enjoy breakfast at Deva, then take a relaxed 2-hour highway drive south to Nouméa, stopping at historic Fort Teremba. Check into your 2-bedroom suite at Château Royal Beach Resort & Spa and relax in the heated seawater spa pools.',
        morning: {
          time: '9:00 AM – 12:30 PM',
          title: 'Leisurely Drive South & Fort Teremba',
          description: 'Check out of Sheraton Deva. Drive south along paved RT1. Stop at the historic 19th-century Fort Teremba to view the restored military fortress and coastal lookouts. Arrive in Nouméa by 12:30 PM.',
          tips: 'Because Wednesday is a public holiday, highway traffic is quiet and pleasant.'
        },
        lunch: {
          place: 'La Foa Roadside Bistro / Bakery Picnic',
          description: 'Fresh quiches, fruit tarts, and baguette sandwiches.',
          estCostAUD: 60,
          estCostXPF: 4400
        },
        afternoon: {
          time: '1:30 PM – 5:00 PM',
          title: 'Château Royal Check-in & Aquatonic Seawater Spa',
          description: 'Check into your 2-bedroom suite at Château Royal on Anse Vata. Unpack and head straight down to the Aquatonic heated seawater hydro-massage labyrinth to soothe tired muscles after the drive.',
          tips: 'Heated to 32°C, the seawater spa labyrinth is deeply relaxing for adults.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Baie des Citrons Sunset Bistro Dinner',
          description: 'Short 3-minute drive to Baie des Citrons for a relaxed French dinner overlooking the illuminated bay.',
          tips: 'Enjoy a stroll along the beachfront promenade after dinner.'
        },
        dinner: {
          place: 'Stone Grill / L’Oustalet',
          description: 'Hot volcanic stone cooking with fresh prawns, steaks, and French wines.',
          estCostAUD: 180,
          estCostXPF: 13100
        },
        dayEstCostAUD: 240,
        dayEstCostXPF: 17500
      },
      {
        dayNumber: 5,
        date: 'Thursday, 12 Nov 2026',
        title: 'Phare Amédée Lighthouse Barrier Reef Cruise',
        subtitle: 'Catamaran Day Excursion, Glass-Bottom Boat, Polynesian Buffet & Show',
        summary: 'A completely hassle-free day excursion to Phare Amédée: climb the historic 1865 cast-iron lighthouse, view giant clams from the glass-bottom boat, enjoy an included Tahitian feast, and relax under shaded palm umbrellas.',
        morning: {
          time: '8:15 AM – 12:30 PM',
          title: 'Mary D Catamaran to Phare Amédée',
          description: 'Short 8-minute drive to Port Moselle. Cruise 45 mins on the luxury catamaran to Amédée Island. Take the glass-bottom boat to see giant clams and turtles, or climb the 247 steps of the 1865 lighthouse for panoramic 360° reef views.',
          tips: 'All equipment and activities are fully included in the day package.'
        },
        lunch: {
          place: 'Amédée Island Tropical Buffet Feast',
          description: 'Lavish island lunch buffet included with roasted meats, grilled fish, salads, and live Tahitian dance show.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        afternoon: {
          time: '1:30 PM – 4:30 PM',
          title: 'Shaded Thatched Gazebos & Reef Snorkeling',
          description: 'Mum naps on beach loungers under shaded palm umbrellas with a cool sea breeze. Dad & 9yo snorkel the pier drop-off with docile banded sea kraits and parrotfish. Cruise back to Nouméa at 4:30 PM.',
          tips: 'Supervised marine playground with lifesavers on duty.'
        },
        evening: {
          time: '6:30 PM – 9:00 PM',
          title: 'Casual Waterfront Dinner at Anse Vata',
          description: 'Relaxed dinner along the palm-lined Anse Vata promenade.',
          tips: 'Fresh seafood pizzas and local beer.'
        },
        dinner: {
          place: 'La Barca / Le Bilboquet Plage',
          description: 'Fresh local mahi-mahi, calamari, and gourmet pizzas.',
          estCostAUD: 160,
          estCostXPF: 11700
        },
        dayEstCostAUD: 160,
        dayEstCostXPF: 11700
      },
      {
        dayNumber: 6,
        date: 'Friday, 13 Nov 2026',
        title: 'Duck Island Snorkel & Overwater Grand Finale',
        subtitle: 'Duck Island 5-Min Hop, Aquarium des Lagons, Le Roof Farewell Feast',
        summary: 'Morning boat hop to Duck Island for coral trail snorkeling, an afternoon of heated pool relaxation at Château Royal, and an unforgettable farewell dinner over the water at Le Roof.',
        morning: {
          time: '9:00 AM – 12:30 PM',
          title: 'Duck Island Marine Nature Trail Hop',
          description: 'Walk 5 minutes down the sand to the taxi boat pier. 5-minute boat hop across to Duck Island. Snorkel along the marked underwater trail with clownfish, blue sea stars, and angelfish.',
          tips: 'Hire thatched umbrella sun loungers on Duck Island.'
        },
        lunch: {
          place: 'Le Canard Beach Cafe (Duck Island)',
          description: 'Fresh Poisson Cru (lime-cured tuna with coconut milk) and burgers on the island.',
          estCostAUD: 110,
          estCostXPF: 8000
        },
        afternoon: {
          time: '2:00 PM – 5:30 PM',
          title: 'Château Royal Heated Pool & Sunset Packing',
          description: 'Return to the resort for an unhurried afternoon by the heated lagoon pool. Relax with cold drinks as the sun begins to set over the barrier reef.',
          tips: 'Order a cocktail from Le Deck to toast an extraordinary, restful holiday.'
        },
        evening: {
          time: '6:30 PM – 9:30 PM',
          title: 'Grand Farewell Dinner at Le Roof (Overwater)',
          description: 'Celebrate an unforgettable 6 nights at Le Roof, built on stilts directly over the water. Watch dolphins and spotted eagle rays circle beneath the illuminated glass viewing portal in the dining room floor!',
          tips: 'Nouméa’s most iconic dining experience.'
        },
        dinner: {
          place: 'Le Roof (Overwater Restaurant, Anse Vata)',
          description: 'Local rock oysters, vanilla-crusted prawns, lagoon coral trout, and fine French wines.',
          estCostAUD: 250,
          estCostXPF: 18200
        },
        dayEstCostAUD: 360,
        dayEstCostXPF: 26200
      },
      {
        dayNumber: 7,
        date: 'Saturday, 14 Nov 2026',
        title: 'Final Bakery Breakfast & Departure on QF92',
        subtitle: 'Resort Breakfast, 45-Min Highway Drive, QF92 Boarding at 1:50 PM',
        summary: 'Final buffet breakfast at Château Royal, easy 45-minute drive to La Tontouta International Airport, vehicle drop-off, and depart on QF92 at 1:50 PM.',
        morning: {
          time: '8:00 AM – 10:30 AM',
          title: 'Final Breakfast & Suite Checkout',
          description: 'Enjoy a leisurely breakfast on the terrace at Le Taom. Pack luggage and check out at 10:30 AM. Smooth 45-minute highway drive north to La Tontouta Airport.',
          tips: 'Arrive at the airport by 11:30 AM.'
        },
        lunch: {
          place: 'Airport Terminal Café & Duty Free',
          description: 'Sandwiches, French chocolates, and coffee before boarding.',
          estCostAUD: 55,
          estCostXPF: 4000
        },
        afternoon: {
          time: '11:30 AM – 1:50 PM',
          title: 'Vehicle Return & QF92 Boarding',
          description: 'Return your 7-seater SUV with a full tank at the terminal. Browse duty-free French cosmetics and wines. Board QF92 departing at 1:50 PM.',
          tips: 'Direct flight home to Australia.'
        },
        evening: {
          time: 'Afternoon / Evening',
          title: 'Arrival Home Rested & Restored',
          description: 'Arrive home completely refreshed with wonderful South Pacific memories.',
          tips: 'Direct flight.'
        },
        dinner: {
          place: 'In-Flight / Home',
          description: 'Qantas in-flight meal service.',
          estCostAUD: 0,
          estCostXPF: 0
        },
        dayEstCostAUD: 55,
        dayEstCostXPF: 4000
      }
    ],
    accommodations: [
      {
        name: 'Sheraton New Caledonia Deva Spa & Golf Resort',
        type: 'Traditional 2-Bedroom Melanesian Bungalow (or 2 Connecting Rooms)',
        location: 'Domaine de Deva, Bourail (Direct Poé Beach frontage)',
        nights: '3 Nights (Sun 8 Nov – Wed 11 Nov)',
        bedding: '1 King Bed + 2 Double/Single Beds — accommodating 5 pax',
        pricePerNightAUD: 560,
        pricePerNightXPF: 40800,
        totalCostAUD: 1680,
        totalCostXPF: 122400,
        features: [
          '8,000-Hectare UNESCO Natural Biosphere Reserve Setting',
          'Traditional High-Ceilinged Melanesian Timber Bungalows',
          'Giant Beachfront Infinity Swimming Pool',
          'Deep Nature Spa Pavilions & Outdoor Jacuzzis',
          '18-Hole Dye Design Championship Golf Course',
          'Direct Access to 13 km of White Sand at Poé Beach',
          'Complimentary Stand-Up Paddleboards & Sea Kayaks'
        ],
        pros: [
          'Supreme tranquil luxury surrounded by nature and wild deer',
          'Full 5-star buffet breakfast included at Reef Restaurant',
          'Uncrowded beach walks and transparent shallow lagoon waters',
          'World-class wellness spa on-site'
        ],
        cons: ['2h15m highway drive from Nouméa (smooth paved RT1 highway)'],
        bookingTip: 'Request a Traditional Bungalow with ocean or lagoon view for maximum privacy.'
      },
      {
        name: 'Château Royal Beach Resort & Spa',
        type: 'Superior or Prestige 2-Bedroom Oceanview Suite',
        location: 'Pointe Magnin / Anse Vata, Nouméa',
        nights: '3 Nights (Wed 11 Nov – Sat 14 Nov)',
        bedding: '1 King Bed + 1 King/Twin + Double Sofa Bed',
        pricePerNightAUD: 525,
        pricePerNightXPF: 38300,
        totalCostAUD: 1575,
        totalCostXPF: 114900,
        features: [
          '3-Hectare Tropical Park on Anse Vata Lagoon',
          'Heated Outdoor Swimming Pool & Sun Deck',
          'Aquatonic Seawater Hydro-Massage Spa Labyrinth',
          'Full Gourmet Kitchen & 2 Full Bathrooms',
          '5-Minute Beach Walk to Duck Island Water Taxi'
        ],
        pros: [
          'The perfect luxury urban base for the second half of the trip',
          'Walking distance to 15+ authentic French bistros',
          'Daily buffet breakfast included at Le Taom'
        ],
        cons: ['Requires splitting stay across two premier resorts (1 move on Wednesday)'],
        bookingTip: 'Book both resorts on breakfast-inclusive packages.'
      },
      {
        name: 'Hôtel Évasion en Province Nord / Sarramea',
        type: 'Lush Mountain Rainforest Bungalow Chalets',
        location: 'Sarramea (1h30m north of Nouméa)',
        nights: 'Rainforest Wellness Alternative Option',
        bedding: 'Family Bungalow (1 Queen + 3 Single Beds)',
        pricePerNightAUD: 260,
        pricePerNightXPF: 18900,
        totalCostAUD: 780,
        totalCostXPF: 56700,
        features: [
          'Hidden in Pristine Tropical Mountain Rainforest',
          'Natural Freshwater River Swimming Pools (Trou d’Eau)',
          'Outdoor Swimming Pool & Shaded Garden Terraces',
          'Organic Table d’Hôte Melanesian Dining'
        ],
        pros: [
          'Total quietude and cool mountain air',
          'Authentic immersion in New Caledonia’s lush interior'
        ],
        cons: ['Mountain setting with river swimming rather than ocean/lagoon beach'],
        bookingTip: 'Great for travelers who love rainforest hiking and mountain tranquility.'
      },
      {
        name: 'Domaine de Poé Beachfront Chalets',
        type: '2-Bedroom Self-Contained Beachfront Wooden Chalet',
        location: 'Plage de Poé, Bourail',
        nights: 'Casual Coastal Chalet Alternative Option',
        bedding: '1 King + 2 Singles + Sofa Bed',
        pricePerNightAUD: 240,
        pricePerNightXPF: 17500,
        totalCostAUD: 720,
        totalCostXPF: 52500,
        features: [
          'Steps from the White Sand of Poé Beach',
          'Private Wooden Deck with Gas BBQ',
          'Full Kitchen & Dining Area',
          'Wave-Free Shallow Lagoon Swimming'
        ],
        pros: [
          'Charming casual beach lifestyle right on the sand',
          'Self-catering barbecues under the stars'
        ],
        cons: ['Self-catering; no included resort breakfast buffet or spa on-site'],
        bookingTip: 'Book well in advance as beachfront chalets are limited.'
      }
    ],
    snorkelingSpots: [
      {
        name: 'The Shark Fault (Faille aux Requins)',
        location: 'Poé Barrier Reef (10 min boat from Poé Beach)',
        depth: '2 – 10 meters',
        marineLife: ['Green sea turtles', 'Docile blacktip reef sharks', 'Stingrays', 'Vibrant outer corals'],
        kidFriendlyRating: 4,
        currentCaution: 'Sheltered within the fault; glass-bottom boat provides surface viewing for non-swimmers.',
        entryType: 'Boat taxi',
        bestTime: 'Morning charter departure with calm winds.',
        notes: 'Spectacular underwater pass cutting through the barrier reef.'
      },
      {
        name: 'Plage de Poé Lagoon Shallows',
        location: 'Directly in front of Sheraton Deva and Poé chalets',
        depth: '0.5 – 2 meters',
        marineLife: ['Needlefish', 'Juvenile trevally', 'Blue sea stars', 'Clam beds'],
        kidFriendlyRating: 5,
        currentCaution: 'Completely zero waves. Flat transparent lagoon basin ideal for small children.',
        entryType: 'Walk-in beach',
        bestTime: 'High tide for swimming and paddleboarding.',
        notes: '17 km of unbroken wave-free lagoon.'
      },
      {
        name: 'Phare Amédée Outer Reef',
        location: 'Outer Barrier Reef, Nouméa (Mary D day cruise)',
        depth: '2 – 10 meters',
        marineLife: ['Giant clams (Tridacna)', 'Banded sea kraits', 'Parrotfish', 'Eagle rays'],
        kidFriendlyRating: 5,
        currentCaution: 'Calm within lighthouse reef flat.',
        entryType: 'Boat taxi',
        bestTime: 'Midday cruise visit.',
        notes: 'Visited during the Nouméa leg of the trip.'
      },
      {
        name: 'Îlot Canard (Duck Island)',
        location: 'Anse Vata, Nouméa (5 min boat taxi)',
        depth: '1 – 4 meters',
        marineLife: ['Clownfish', 'Sea turtles', 'Butterflyfish', 'Coral gardens'],
        kidFriendlyRating: 5,
        currentCaution: 'Sheltered and calm within marked buoy trail.',
        entryType: 'Walk-in beach',
        bestTime: 'Morning high tide.',
        notes: 'Visited from Château Royal during the second leg.'
      }
    ],
    diningSpots: [
      {
        name: 'Reef Restaurant (Sheraton Deva)',
        type: 'Bistro / Seafood',
        location: 'Domaine de Deva, Bourail',
        specialty: 'Included daily 5-star breakfast buffet, Pacific seafood banquets, traditional Bougna',
        recommendation: 'Dine in the soaring Melanesian grand hall overlooking the illuminated infinity pool.'
      },
      {
        name: 'Sand Beach Grill (Sheraton Deva)',
        type: 'Casual Beach Cafe',
        location: 'Poé Beachfront, Deva',
        specialty: 'Grilled Bourail venison steaks, fresh lagoon fish, beachfront cocktails, woodfired pizzas',
        recommendation: 'Sunset drinks with your feet in the sand listening to the ocean breeze.'
      },
      {
        name: 'Le Taom Restaurant (Château Royal)',
        type: 'Bistro / Seafood',
        location: 'Pointe Magnin, Anse Vata, Nouméa',
        specialty: 'Included daily breakfast buffet, French pastries, tropical fruit, oceanfront dining',
        recommendation: 'Enjoy breakfast on the garden terrace for your second leg in Nouméa.'
      },
      {
        name: 'Chez Toto',
        type: 'Bistro / Seafood',
        location: 'Quartier Latin, Nouméa',
        specialty: 'Authentic French duck confit, steak frites, and homemade tarte tatin',
        recommendation: 'Nouméa’s favorite family-run French bistro.'
      },
      {
        name: 'Le Roof Overwater Restaurant',
        type: 'Bistro / Seafood',
        location: 'Anse Vata, Nouméa',
        specialty: 'Overwater fine dining, lagoon fish, oysters, central floor viewing portal with dolphins',
        recommendation: 'Grand finale dinner on Friday night.'
      }
    ],
    budgetBreakdown: [
      { category: 'Accommodation', item: '3N Sheraton Deva Bungalow + 3N Château Royal Suite (Breakfasts included)', costXPF: 237300, costAUD: 3255, notes: 'Two premier 5-star resort bases for 5 pax' },
      { category: 'Vehicle & Highway Fuel', item: '7-Seater SUV Rental (6 days) + Highway Fuel (360 km)', costXPF: 76000, costAUD: 1040, notes: 'Comfortable highway cruiser for Grande Terre' },
      { category: 'Deva & Poé Excursions', item: 'Poé Shark Fault Boat Safari + Horse Riding / SUP Hire', costXPF: 42000, costAUD: 575, notes: 'Reef and biosphere excursions' },
      { category: 'Phare Amédée Cruise', item: 'Mary D Catamaran Day Cruise (Buffet, Show & Glass-Bottom)', costXPF: 62000, costAUD: 850, notes: 'Day excursion from Nouméa base' },
      { category: 'Spa & Wellness', item: 'Deep Nature Spa Treatment (Deva) + Aquatonic Passes (Nouméa)', costXPF: 28000, costAUD: 385, notes: 'Two premier spa experiences for mum' },
      { category: 'Food & Dining', item: 'Resort Dinners, French Bistros & Lunches (Breakfasts included)', costXPF: 74700, costAUD: 1020, notes: 'High-standard dining with breakfasts provided' }
    ],
    checklist: [
      { id: 'c1', task: 'Book Sheraton Deva Traditional 2-Bedroom Bungalow with Breakfast', deadline: '3–6 Months Prior', category: 'booking', notes: 'Bungalows in high demand during November' },
      { id: 'c2', task: 'Book Château Royal 2-Bedroom Suite for second leg (Wed–Sat)', deadline: '3–6 Months Prior', category: 'booking', notes: 'Ensure breakfast is included' },
      { id: 'c3', task: 'Reserve 7-Seater SUV at La Tontouta Airport', deadline: '3 Months Prior', category: 'booking', notes: 'Direct airport terminal collection and return' },
      { id: 'c4', task: 'Book Deep Nature Spa treatments at Deva & Aquatonic at Château Royal', deadline: '1 Month Prior', category: 'booking', notes: 'Reserve treatments for Monday and Wednesday' },
      { id: 'c5', task: 'Book Poé Shark Fault Glass-Bottom Boat Safari', deadline: '1 Month Prior', category: 'booking', notes: 'Best scheduled for Monday morning' },
      { id: 'c6', task: 'Book Mary D Phare Amédée Day Cruise for Thursday', deadline: '1 Month Prior', category: 'booking', notes: 'Sails Thursday from Port Moselle' }
    ]
  }

};
