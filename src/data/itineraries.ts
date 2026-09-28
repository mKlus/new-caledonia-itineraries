import { ItineraryOption } from './types';

export const ITINERARIES: Record<'islet' | 'isle-of-pines' | 'west-coast', ItineraryOption> = {
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
  }
};
