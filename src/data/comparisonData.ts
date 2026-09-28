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
  }
];
