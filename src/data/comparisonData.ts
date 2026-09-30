import { QuizOption, ComparisonFactor } from './types';

export const QUIZ_OPTIONS: QuizOption[] = [
  {
    id: 'islet',
    icon: '🧳',
    title: 'We hate packing & moving hotels',
    description: 'We want one comfortable apartment base, easy bakery walks, calm netted swimming across the street, and boat day-trips.',
    recommendationTitle: '⭐ Recommended: Option 1 — The Islet Explorer & Mainland Base',
    recommendationBody: 'Unpack once in Baie des Citrons! You enjoy the total convenience of private 2-bedroom kitchen apartments, zero domestic flight check-in stress, swimming across the street every afternoon, and day hops to Duck Island, Îlot Signal, and Phare Amédée.'
  },
  {
    id: 'isle-of-pines',
    icon: '🏝️',
    title: 'We want world-class tropical paradise',
    description: 'We want outrigger pirogues, postcard turquoise water, walk-in off-the-beach snorkeling, and natural tidal aquariums.',
    recommendationTitle: '⭐ Recommended: Option 2 — The Island Split (Nouméa + Isle of Pines)',
    recommendationBody: 'Take the 25-minute flight to the Isle of Pines! You experience the crown jewel of the South Pacific: mirror-calm Upi Bay on traditional wooden sailing pirogues, the waist-deep Piscine Naturelle aquarium, and Kanumera Bay’s coral reef right off the sand.'
  },
  {
    id: 'west-coast',
    icon: '🚙',
    title: 'We love road trips & open nature',
    description: 'We want complete self-drive freedom, beach chalet barbecues, 17 km calm lagoon, and coastal pine cliff hiking.',
    recommendationTitle: '⭐ Recommended: Option 3 — The West Coast Reef & Bush Road Trip',
    recommendationBody: 'Pick up your 7-seater SUV and explore Grande Terre! Step straight from your beachfront chalet into the 17 km wave-free Poé Lagoon, hike the dramatic Sentier des Trois Baies pine cliffs, and spot green turtles at the Shark Fault.'
  },
  {
    id: 'best-of-both',
    icon: '✨',
    title: 'We want gourmet food & Isle of Pines icons',
    description: 'We want the French bistros and apartment comfort of Nouméa, but want to fly 25 mins to see Piscine Naturelle and sail Upi Bay.',
    recommendationTitle: '⭐ Recommended: Option 4 — The Best of Both Worlds',
    recommendationBody: 'Base in Nouméa with an Isle of Pines express hop! You avoid dated, overpriced island resort rooms and mediocre food by keeping a prime Baie des Citrons apartment, while taking an easy 25-minute flight to experience the miraculous Piscine Naturelle, Upi Bay pirogues, and grilled rock lobster.'
  },
  {
    id: 'relax-resort',
    category: 'relaxing',
    icon: '🌺',
    title: 'Wife wants pure resort relaxation & gardens',
    description: 'We want 6 nights in one luxury beachfront resort suite, lush 3-hectare gardens, heated lagoon pool, Aquatonic spa, daily buffet breakfast, and quick boat hops to Duck Island.',
    recommendationTitle: '⭐ Recommended: Option 5 — The Grand Lagoon Resort & Spa Base',
    recommendationBody: 'Château Royal Beach Resort on Anse Vata is your answer! Unpack once in a 2-bedroom suite with 2 bathrooms and kitchen. Your wife steps straight out into 3 hectares of gardens, heated pools, and thalassotherapy spa, while Dad and the 9yo take 5-minute boat trips to Duck Island and Amédée.'
  },
  {
    id: 'relax-island',
    category: 'relaxing',
    icon: '🏝️',
    title: 'We want a private coral island sanctuary',
    description: 'We want to step out of our bungalow onto white sand, swim with wild green turtles off the beach every day, and lounge by a lagoon infinity pool with zero cars or city noise.',
    recommendationTitle: '⭐ Recommended: Option 6 — The Private Coral Island Sanctuary',
    recommendationBody: 'DoubleTree by Hilton Îlot Maître is the ultimate South Pacific island dream! Located on a 200-hectare marine reserve only 20 minutes from town, you stay in beachfront or overwater bungalows with turtles grazing right off the beach and daily breakfast included.'
  },
  {
    id: 'relax-retreat',
    category: 'relaxing',
    icon: '🌿',
    title: 'We want luxury nature, wellness spa & golf',
    description: 'We want a 5-star nature retreat in a UNESCO biosphere with Deep Nature Spa, calm Poé beach, and golf, blended with a second leg at Château Royal in Nouméa.',
    recommendationTitle: '⭐ Recommended: Option 7 — The Gentle Nature & Wellness Retreat',
    recommendationBody: 'Split your stay between the 5-star Sheraton Deva Spa & Golf Resort (3 nights in a traditional Melanesian bungalow) and Château Royal in Nouméa (3 nights). You get untamed UNESCO nature, world-class wellness, Poé lagoon paddling, and gourmet dining.'
  }
];

export const COMPARISON_FACTORS: ComparisonFactor[] = [
  {
    category: 'logistics',
    factor: 'Primary Style & Vibe',
    islet: {
      text: 'Relaxed urban coastal base with fast speedboat marine hops & ancient rainforest reserve.'
    },
    isleOfPines: {
      highlight: true,
      badge: 'MOST ICONIC',
      text: 'Postcard South Pacific dream; timeless, remote, and breathtaking lagoon beauty.'
    },
    westCoast: {
      text: 'Rugged coastal road trip, cowboy/bush heritage, and wide-open barrier lagoon.'
    },
    bestOfBoth: {
      highlight: true,
      badge: 'PERFECT BALANCE',
      text: 'Gourmet French mainland apartment hub paired with an iconic 25-minute flight to Isle of Pines.'
    },
    relaxResort: {
      highlight: true,
      badge: 'RESORT LUXURY',
      text: 'Premier 3-hectare tropical garden resort with heated lagoon pool, Aquatonic seawater spa, and direct beach.'
    },
    relaxIsland: {
      highlight: true,
      badge: 'ISLAND SANCTUARY',
      text: 'Robinson Crusoe tropical island escape on a 200-ha marine reserve with turtles swimming right off the sand.'
    },
    relaxRetreat: {
      highlight: true,
      badge: 'WELLNESS & NATURE',
      text: 'Serene 5-star nature retreat in UNESCO biosphere (Deva) combined with a luxury lagoon spa base in Nouméa.'
    }
  },
  {
    category: 'logistics',
    factor: 'Bases & Hotel Moves',
    islet: {
      highlight: true,
      badge: 'LEAST FRICTION',
      text: '1 Base: 6 nights in Nouméa (Baie des Citrons / Anse Vata). Unpack once.'
    },
    isleOfPines: {
      text: '2 Bases: 3 nights Isle of Pines + 3 nights Nouméa (requires 2 hotel transitions).'
    },
    westCoast: {
      text: '2 Bases: 3 nights Poé Beach + 3 nights Nouméa (requires 1 hotel transition).'
    },
    bestOfBoth: {
      highlight: true,
      badge: 'FLEXIBLE',
      text: '1 Primary Base: 6 nights in Baie des Citrons. 0 moves for day trip, or 1 optional overnight (leave luggage safe).'
    },
    relaxResort: {
      highlight: true,
      badge: 'ZERO MOVES',
      text: '1 Base: 6 nights in a 2-bedroom suite at Château Royal (Anse Vata). Unpack once, absolute relaxation.'
    },
    relaxIsland: {
      highlight: true,
      badge: 'ZERO MOVES',
      text: '1 Base: 6 nights on Îlot Maître in beachfront/garden bungalows (or optional 4N island + 2N mainland split).'
    },
    relaxRetreat: {
      text: '2 Luxury Bases: 3 nights Sheraton Deva + 3 nights Château Royal (1 easy paved highway move).'
    }
  },
  {
    category: 'reef',
    factor: 'Off-the-Beach Snorkeling',
    islet: {
      text: 'Mainland Nouméa is restricted to shark-netted zones. Reef snorkeling requires taking day water-taxis to outer islets (5–20 mins).'
    },
    isleOfPines: {
      highlight: true,
      badge: 'SUPERIOR REEF',
      text: 'Exceptional off-the-beach walk-in snorkeling at Piscine Naturelle and Kanumera with no netting needed.'
    },
    westCoast: {
      text: 'Shallow lagoon paddling off the sand; outer barrier reef pass (Shark Fault) reached by boat taxi.'
    },
    bestOfBoth: {
      highlight: true,
      badge: 'BEST OF BOTH',
      text: 'Waist-deep natural aquarium at Piscine Naturelle, plus wild sea turtles at Îlot Signal and outer reef at Phare Amédée.'
    },
    relaxResort: {
      text: '5-minute beach walk to Duck Island boat taxi; Phare Amédée day cruise & Îlot Signal turtle charter.'
    },
    relaxIsland: {
      highlight: true,
      badge: 'TURTLES OFF BEACH',
      text: 'Unmatched: Wild green sea turtles feed in shallow seagrass 15m from the beach and under overwater walkways.'
    },
    relaxRetreat: {
      text: 'Wave-free paddleboarding at 17 km Poé lagoon + Shark Fault turtle boat safari + Duck Island in Nouméa.'
    }
  },
  {
    category: 'kids',
    factor: 'Child Suitability (9 yo)',
    islet: {
      text: 'Calm netted beach across the road every afternoon; fast speedboats; easy ice creams and pizza.'
    },
    isleOfPines: {
      highlight: true,
      badge: 'MEMORABLE',
      text: 'Pirogue sailing, waist-deep natural aquarium swarming with friendly fish, sandbank wading.'
    },
    westCoast: {
      text: 'Stand-up paddleboarding in calm shallows; spotting turtles surfacing in surf; beach barbecues.'
    },
    bestOfBoth: {
      highlight: true,
      badge: 'HIGH ADVENTURE',
      text: 'Safe netted beach across from apartment every afternoon; scenic 25-min flight; traditional sailing pirogues; tame reef fish.'
    },
    relaxResort: {
      highlight: true,
      badge: 'FAMILY RESORT',
      text: 'Heated lagoon swimming pool, beachfront ice creams, safe netted beach, and 5-min boat to Duck Island.'
    },
    relaxIsland: {
      highlight: true,
      badge: 'UNFORGETTABLE',
      text: 'Safe shallow lagoon for swimming with wild turtles, infinity pool, transparent kayaks, and zero traffic.'
    },
    relaxRetreat: {
      text: 'Giant infinity pool, stand-up paddleboarding in calm shallows, horse riding, and glass-bottom reef boat.'
    }
  },
  {
    category: 'logistics',
    factor: 'Logistics & Transport',
    islet: {
      text: '7-seater rental car for the full 6 nights. 45 min highway drive from airport. Simple water taxi hops.'
    },
    isleOfPines: {
      text: 'Requires domestic flights (Air Calédonie Magenta ⇄ Isle of Pines, 25 mins). 20 kg baggage limits.'
    },
    westCoast: {
      highlight: true,
      badge: 'NO DOMESTIC FLIGHTS',
      text: '7-seater car rental directly from international airport terminal. RT1 highway driving (1h45m north, 2h south).'
    },
    bestOfBoth: {
      text: '7-seater rental SUV for mainland + 25-minute domestic flight (GEA ⇄ ILP). Leave heavy suitcases safely at apartment.'
    },
    relaxResort: {
      highlight: true,
      badge: 'EASIEST',
      text: '7-seater rental SUV directly from airport. Smooth 45-min highway drive. No domestic flights, no boat luggage limits.'
    },
    relaxIsland: {
      text: 'Private minivan from airport to marina + 20-minute resort catamaran transfer to Îlot Maître.'
    },
    relaxRetreat: {
      text: '7-seater rental SUV. 1h45m highway drive north to Deva; 2h scenic drive south to Nouméa on paved RT1.'
    }
  },
  {
    category: 'logistics',
    factor: 'Public Holiday (Wed 11 Nov)',
    islet: {
      text: 'Shops close in Nouméa. Planned day trip to Parc de la Rivière Bleue (open Wed–Sun) avoids closures.'
    },
    isleOfPines: {
      text: 'Village stores in Vao close, but pre-booked boat charters and lodge dining operate normally.'
    },
    westCoast: {
      text: 'Bourail town quiet; ideal day for scenic drive south stopping at historic Fort Teremba.'
    },
    bestOfBoth: {
      text: 'Escape mainland retail closures with an offshore speedboat charter to Îlot Signal turtle sanctuary (or return from island stay).'
    },
    relaxResort: {
      text: 'Zero impact: Mum enjoys Aquatonic seawater spa; Dad & 9yo take morning speedboat to Îlot Signal.'
    },
    relaxIsland: {
      highlight: true,
      badge: 'UNAFFECTED',
      text: 'Completely insulated from mainland closures: infinity pool, beach bar, and turtles operate normally.'
    },
    relaxRetreat: {
      text: 'Scenic, quiet highway drive from Deva south to Nouméa stopping at historic Fort Teremba.'
    }
  },
  {
    category: 'food',
    factor: 'Food & Self-Catering',
    islet: {
      highlight: true,
      badge: 'BEST BAKERIES',
      text: 'Superb French bakeries, gourmet delis, supermarkets, and oceanfront dining along Baie des Citrons.'
    },
    isleOfPines: {
      text: 'Lodge-based dining, fresh spiny lobster, traditional bougna; fewer grocery options.'
    },
    westCoast: {
      text: 'Chalet barbecues with local Bourail beef/venison; rural bakeries and farm markets.'
    },
    bestOfBoth: {
      highlight: true,
      badge: 'GOURMET STANDARD',
      text: 'Daily hot croissants, French bistros & wine every evening in Nouméa, plus fresh grilled lobster feast at Snack Kougny!'
    },
    relaxResort: {
      highlight: true,
      badge: 'PROVIDED BREAKFAST + BISTROS',
      text: 'Included hot & cold resort buffet breakfast daily + full suite kitchen + walk to 15+ top French bistros.'
    },
    relaxIsland: {
      text: 'Included daily buffet breakfast at L’Atelier; poolside bar & seafood buffets; evening boat to Nouméa for Chez Toto.'
    },
    relaxRetreat: {
      highlight: true,
      badge: '5-STAR BUFFETS',
      text: 'Included 5-star buffet breakfasts at Reef Restaurant (Deva) and Le Taom (Nouméa); fine dining on both legs.'
    }
  },
  {
    category: 'reef',
    factor: 'Scuba Diving Potential',
    islet: {
      text: 'High: Boulari Barrier Reef Pass and outer shipwrecks via Abyss Plongée.'
    },
    isleOfPines: {
      text: 'High: Kunié Scuba Centre dives to Vallée des Gorgones and freshwater caves.'
    },
    westCoast: {
      text: 'Medium-High: Bourail Dive takes divers to outer reef faults and passes.'
    },
    bestOfBoth: {
      text: 'High: Access to Boulari Pass and Nouméa barrier drop-offs via Abyss Plongée.'
    },
    relaxResort: {
      text: 'High: Easy departures to Boulari Pass and outer barrier reef shipwrecks via Abyss Plongée.'
    },
    relaxIsland: {
      text: 'Medium-High: Resort dive center arranges charters to outer barrier reef drop-offs.'
    },
    relaxRetreat: {
      text: 'Medium-High: Bourail Dive takes divers to outer reef faults; Abyss Plongée in Nouméa.'
    }
  },
  {
    category: 'budget',
    factor: 'Estimated Total Cost (5 Pax)',
    islet: {
      highlight: true,
      badge: 'LOWEST COST',
      text: '~418,000 XPF (~$5,725 AUD) — ~$1,145 AUD per person'
    },
    isleOfPines: {
      text: '~613,500 XPF (~$8,400 AUD) — ~$1,680 AUD per person (includes flights & island car)'
    },
    westCoast: {
      text: '~442,500 XPF (~$6,055 AUD) — ~$1,210 AUD per person'
    },
    bestOfBoth: {
      text: '~589,600 XPF (~$8,075 AUD) — ~$1,615 AUD per person (includes domestic flights & lobster feast)'
    },
    relaxResort: {
      text: '~512,000 XPF (~$7,010 AUD) — ~$1,402 AUD per person (includes 2-bed suite, SUV & breakfasts)'
    },
    relaxIsland: {
      text: '~625,000 XPF (~$8,560 AUD) — ~$1,712 AUD per person (includes 2 island bungalows & catamaran)'
    },
    relaxRetreat: {
      text: '~520,000 XPF (~$7,125 AUD) — ~$1,425 AUD per person (includes 5-star bungalow & suite)'
    }
  },
  {
    category: 'kids',
    factor: 'Rain / Weather Resilience',
    islet: {
      text: 'High: Nouméa museums, aquarium, cultural centers, movie theaters, shopping.'
    },
    isleOfPines: {
      text: 'Medium: Island activities are predominantly outdoor/marine; lodges are very relaxing.'
    },
    westCoast: {
      text: 'Medium-High: Bush exploration, caves, Fort Teremba, and Nouméa base options.'
    },
    bestOfBoth: {
      text: 'High: Mainland base provides cultural, aquarium, and shopping wet-weather backup; flight day can be shifted if needed.'
    },
    relaxResort: {
      highlight: true,
      badge: 'HIGHEST RESILIENCE',
      text: 'Exceptional: Heated indoor seawater Aquatonic spa, covered resort dining, aquarium, cinema, shopping.'
    },
    relaxIsland: {
      text: 'Medium: Island is outdoor-focused; overwater bungalow decks and resort restaurants are very cozy in rain.'
    },
    relaxRetreat: {
      text: 'High: Deep Nature Spa pavilion, indoor lounges, Fort Teremba, and Nouméa museums on second leg.'
    }
  },
  {
    category: 'logistics',
    factor: 'Bottom Line Verdict',
    islet: {
      text: 'Best for low-stress convenience and active families who want zero packing hassles.'
    },
    isleOfPines: {
      text: 'Best for bucket-list natural beauty and unforgettable childhood memories.'
    },
    westCoast: {
      text: 'Best for independent adventurers who love road-tripping and uncrowded nature.'
    },
    bestOfBoth: {
      highlight: true,
      badge: 'RECOMMENDED',
      text: 'Best for families who prioritize gourmet French dining and great accommodation, but insist on experiencing the iconic wonders of Isle of Pines.'
    },
    relaxResort: {
      highlight: true,
      badge: 'WIFE’S CHOICE: TOP PICK',
      text: 'Best for families where mum/wife wants real relaxation (gardens, heated pool, spa, breakfast) with easy reef access.'
    },
    relaxIsland: {
      highlight: true,
      badge: 'PURE ISLAND ESCAPE',
      text: 'Best for families wanting a dreamy tropical island sanctuary with wild turtles feeding 15 meters off the sand.'
    },
    relaxRetreat: {
      highlight: true,
      badge: 'WELLNESS & WILD UNESCO',
      text: 'Best for travelers seeking world-class golf, secluded biosphere wellness, and empty white sand beaches.'
    }
  }
];

export const DISTANCE_METRICS = [
  {
    name: 'Option 1: Islet Explorer',
    reach: 'Southern Lagoon & Grand Sud Rainforest (~70 km radius)',
    totalDriving: '~160 km',
    avgDailyDriving: '~25 mins',
    hotelMoves: '0 moves (Unpack once)',
    effortRating: 'EASIEST — Maximum leisure & beach time',
    highlight: true
  },
  {
    name: 'Option 2: Isle of Pines',
    reach: 'Nouméa + Isle of Pines (50 km offshore tropical gem)',
    totalDriving: '~110 km + 2 flights (25m)',
    avgDailyDriving: '~20 mins (+ 2 flights)',
    hotelMoves: '2 moves (Nouméa → Island → Nouméa)',
    effortRating: 'Balanced: Fast flights, supreme reef rewards',
    highlight: false
  },
  {
    name: 'Option 3: West Coast & Poé',
    reach: 'Over 40% of Grande Terre (170 km north along RT1)',
    totalDriving: '~380 km',
    avgDailyDriving: '~50 mins',
    hotelMoves: '1 move (Poé → Nouméa)',
    effortRating: 'Active: Scenic highways, wide lagoons, no flights',
    highlight: false
  },
  {
    name: 'Option 4: Best of Both Worlds',
    reach: 'Nouméa Southern Lagoon + 25-Min Isle of Pines Express Flight',
    totalDriving: '~150 km + 2 flights (25m)',
    avgDailyDriving: '~20 mins (+ 2 flights)',
    hotelMoves: '0 moves (or 1 optional overnight)',
    effortRating: 'PERFECT BALANCE — Gourmet comfort & iconic wonder',
    highlight: true
  },
  {
    name: 'Option 5: Lagoon Resort & Spa',
    reach: 'Nouméa Anse Vata Peninsula & Southern Islets (5–15 km radius)',
    totalDriving: '~110 km (only airport transfers & city drives)',
    avgDailyDriving: '~15 mins',
    hotelMoves: '0 moves (Unpack once for 6 nights)',
    effortRating: 'MOST RELAXING — 100% Resort luxury, heated pool & spa',
    highlight: true
  },
  {
    name: 'Option 6: Island Sanctuary',
    reach: 'Private 200-ha Coral Marine Reserve Islet (Îlot Maître)',
    totalDriving: '~90 km (airport to marina transfers)',
    avgDailyDriving: '~10 mins (+ 20m catamaran)',
    hotelMoves: '0 moves (Pure island immersion)',
    effortRating: 'MAXIMUM ZEN — Zero traffic, turtles off the beach',
    highlight: true
  },
  {
    name: 'Option 7: Nature & Wellness Retreat',
    reach: 'Domaine de Deva UNESCO Biosphere + Nouméa Anse Vata',
    totalDriving: '~360 km (smooth highway cruise)',
    avgDailyDriving: '~40 mins',
    hotelMoves: '1 gentle move (Deva → Nouméa)',
    effortRating: 'SERENE & BALANCED — 5-star spa, golf & lagoon',
    highlight: false
  }
];
