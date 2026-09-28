import { LocationMarker } from './types';

export const LOCATIONS: LocationMarker[] = [
  // --- Nouméa & Southern Lagoon ---
  {
    id: 'citrons',
    name: 'Baie des Citrons Base & Netted Beach',
    lat: -22.2986,
    lng: 166.4357,
    pinClass: 'pin-blue',
    emoji: '🏖️',
    info: 'Your apartment base. Safe netted swimming beach directly opposite; casual French bistros.',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'vatanav',
    name: 'Anse Vata Beach (Water Taxi Pier)',
    lat: -22.3042,
    lng: 166.4468,
    pinClass: 'pin-emerald',
    emoji: '🚤',
    info: '5 min boat hop to Duck Island; waterfront promenade, ice creams and bakeries.',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'canard',
    name: 'Îlot Canard (Duck Island)',
    lat: -22.3135,
    lng: 166.4368,
    pinClass: 'pin-emerald',
    emoji: '🦆',
    info: 'Underwater marine nature trail with marked buoys. Ideal kid snorkeling with friendly marine life.',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'ouentoro',
    name: 'Ouen Toro Lookout',
    lat: -22.3117,
    lng: 166.4533,
    pinClass: 'pin-blue',
    emoji: '🔭',
    info: 'Panoramic 360° lookout over the southern lagoon barrier reef and historic WWII cannon emplacements.',
    itineraries: ['islet', 'west-coast']
  },
  {
    id: 'aquarium',
    name: 'Aquarium des Lagons',
    lat: -22.3015,
    lng: 166.4431,
    pinClass: 'pin-blue',
    emoji: '🐠',
    info: 'Living coral exhibits, fluorescent corals, nautilus, and rescued sea turtles.',
    itineraries: ['islet']
  },
  {
    id: 'portmoselle',
    name: 'Port Moselle Marina & Pontoon K',
    lat: -22.2745,
    lng: 166.4411,
    pinClass: 'pin-emerald',
    emoji: '⛵',
    info: 'Board high-speed water taxis to Îlot Signal; morning market with fresh tropical fruits and baguettes.',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'signal',
    name: 'Îlot Signal Turtle Sanctuary',
    lat: -22.2961,
    lng: 166.2922,
    pinClass: 'pin-emerald',
    emoji: '🐢',
    info: 'Pristine marine sanctuary. Snorkel along the reef drop-off with wild green turtles.',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'amedee',
    name: 'Phare Amédée Lighthouse & Outer Reef',
    lat: -22.4764,
    lng: 166.4678,
    pinClass: 'pin-rose',
    emoji: '🗼',
    info: 'Historic 1865 cast-iron lighthouse, giant clams, banded sea kraits, and glass-bottom boat tours.',
    itineraries: ['islet']
  },
  {
    id: 'boulari',
    name: 'Passe de Boulari (Barrier Reef)',
    lat: -22.5020,
    lng: 166.4400,
    pinClass: 'pin-blue',
    emoji: '🤿',
    info: 'Outer barrier reef canyon pass. Renowned for scuba diving with manta rays and reef sharks.',
    itineraries: ['islet']
  },
  {
    id: 'riviere',
    name: 'Parc Provincial de la Rivière Bleue',
    lat: -22.1039,
    lng: 166.6578,
    pinClass: 'pin-emerald',
    emoji: '🌲',
    info: 'Grand Sud rainforest reserve. Spot national flightless Cagou birds; mountain bike tracks.',
    itineraries: ['islet']
  },
  {
    id: 'kaori',
    name: 'Grand Kaori Ancient Tree',
    lat: -22.1080,
    lng: 166.6620,
    pinClass: 'pin-emerald',
    emoji: '🌳',
    info: 'Over 1,000 years old! Giant rainforest tree in the heart of Rivière Bleue.',
    itineraries: ['islet']
  },
  {
    id: 'foret',
    name: 'Forêt Noyée (Drowned Forest Kayak)',
    lat: -22.1480,
    lng: 166.6980,
    pinClass: 'pin-emerald',
    emoji: '🛶',
    info: 'Paddle kayaks through bleached paperbark trees submerged in the tranquil lake.',
    itineraries: ['islet']
  },
  {
    id: 'tjibaou',
    name: 'Tjibaou Cultural Centre',
    lat: -22.2561,
    lng: 166.4831,
    pinClass: 'pin-emerald',
    emoji: '🏛️',
    info: 'Renzo Piano’s Kanak architectural pavilions set in coastal mangroves.',
    itineraries: ['isle-of-pines', 'west-coast']
  },
  {
    id: 'latin',
    name: 'Quartier Latin Dining District',
    lat: -22.2725,
    lng: 166.4440,
    pinClass: 'pin-amber',
    emoji: '🍷',
    info: 'Historic French quarter with classic bistros (Chez Toto, L’Échappée Belle).',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'airport',
    name: 'La Tontouta International Airport (NOU)',
    lat: -22.0147,
    lng: 166.2131,
    pinClass: 'pin-purple',
    emoji: '✈️',
    info: 'International flight arrival (QF91 at 12:35 PM) & departure (QF92 at 1:50 PM).',
    itineraries: ['islet', 'isle-of-pines', 'west-coast']
  },
  {
    id: 'gea',
    name: 'Nouméa Magenta Domestic Airport (GEA)',
    lat: -22.2592,
    lng: 166.4719,
    pinClass: 'pin-purple',
    emoji: '🛫',
    info: 'Domestic terminal in Nouméa for 25-minute Air Calédonie flights to Isle of Pines.',
    itineraries: ['isle-of-pines']
  },

  // --- Isle of Pines (Option 2) ---
  {
    id: 'kanumera',
    name: 'Kanumera Bay & Sacred Rock',
    lat: -22.6625,
    lng: 167.4475,
    pinClass: 'pin-emerald',
    emoji: '🏖️',
    info: 'Your island bungalow base (Nataïwatch / Oure Lodge). Walk-in coral reef snorkeling right off the sand.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'kuto',
    name: 'Kuto Bay Sunset Beach',
    lat: -22.6583,
    lng: 167.4428,
    pinClass: 'pin-emerald',
    emoji: '🌅',
    info: 'Powder-fine white silica sand beach, 5 min walk from Kanumera. Spectacular sunset spot.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'stjoseph',
    name: 'St. Joseph Bay (Pirogue Pier)',
    lat: -22.6289,
    lng: 167.5097,
    pinClass: 'pin-blue',
    emoji: '⛵',
    info: 'Board traditional wooden Kanak sailing pirogues with local captains for the Upi Bay crossing.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'upi',
    name: "Baie d'Upi (Turquoise Lagoon)",
    lat: -22.6167,
    lng: 167.5167,
    pinClass: 'pin-blue',
    emoji: '🌊',
    info: 'Mirror-flat turquoise lagoon studded with majestic ancient limestone coral mushroom rocks.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'piscine',
    name: 'Piscine Naturelle (Natural Aquarium)',
    lat: -22.5894,
    lng: 167.5147,
    pinClass: 'pin-emerald',
    emoji: '🐠',
    info: 'World-famous wave-free natural tidal basin teeming with friendly reef fish and blue sea stars.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'kougny',
    name: 'Le Kou-Gny Beach Restaurant',
    lat: -22.5850,
    lng: 167.5120,
    pinClass: 'pin-amber',
    emoji: '🦞',
    info: 'Open-air beachfront lunch restaurant next to Oro Bay; famous for grilled spiny lobster.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'nokanhui',
    name: 'Îlot Nokanhui Sandbar Atoll',
    lat: -22.7233,
    lng: 167.5683,
    pinClass: 'pin-blue',
    emoji: '🏝️',
    info: 'Pristine offshore sandbank surrounded by fluorescent turquoise lagoon. Wading in crystal water.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'brosse',
    name: 'Îlot Brosse (Beach Barbecue)',
    lat: -22.7083,
    lng: 167.4667,
    pinClass: 'pin-amber',
    emoji: '🍖',
    info: 'Robinson Crusoe island day trip stop for freshly grilled rock lobster and sweet potatoes.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'cave',
    name: "Queen Hortense's Cave",
    lat: -22.6167,
    lng: 167.4667,
    pinClass: 'pin-emerald',
    emoji: '🌿',
    info: 'Lush limestone grotto covered in prehistoric giant ferns, stalactites, and streams.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'picnga',
    name: "Pic N'Ga Summit (262m)",
    lat: -22.6542,
    lng: 167.4608,
    pinClass: 'pin-emerald',
    emoji: '⛰️',
    info: 'Highest peak on the island. 1-hour return hike with 360° views across the barrier reef.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'vao',
    name: 'Vao Village Mission & Market',
    lat: -22.6644,
    lng: 167.4811,
    pinClass: 'pin-amber',
    emoji: '⛪',
    info: 'Main island settlement; historic 1860 mission church, local bakery, and fruit stalls.',
    itineraries: ['isle-of-pines']
  },
  {
    id: 'ilp',
    name: 'Isle of Pines Airport (ILP)',
    lat: -22.5992,
    lng: 167.4564,
    pinClass: 'pin-purple',
    emoji: '✈️',
    info: 'Island arrival runway. Collect rental car for the 12-min drive to Kanumera.',
    itineraries: ['isle-of-pines']
  },

  // --- West Coast & Poé (Option 3) ---
  {
    id: 'poe',
    name: 'Poé Beachfront Chalets Base',
    lat: -21.6167,
    lng: 165.3833,
    pinClass: 'pin-amber',
    emoji: '🏖️',
    info: 'Your beachfront chalet base on 17 km of calm, shallow lagoon. Step directly into wave-free water.',
    itineraries: ['west-coast']
  },
  {
    id: 'faille',
    name: 'The Shark Fault (Faille aux Requins)',
    lat: -21.6333,
    lng: 165.3333,
    pinClass: 'pin-blue',
    emoji: '🐢',
    info: 'Underwater canyon cutting through outer barrier reef. Snorkel with green turtles and rays via glass-bottom boat.',
    itineraries: ['west-coast']
  },
  {
    id: 'roche',
    name: 'Roche Percée & Bonhomme Landmark',
    lat: -21.6083,
    lng: 165.4542,
    pinClass: 'pin-amber',
    emoji: '🪨',
    info: 'Iconic pierced rock and wave-carved monolith; trailhead for the scenic Sentier des Trois Baies.',
    itineraries: ['west-coast']
  },
  {
    id: 'turtlebay',
    name: 'Turtle Bay (Baie des Tortues)',
    lat: -21.6150,
    lng: 165.4450,
    pinClass: 'pin-emerald',
    emoji: '🐢',
    info: 'Spectacular amphitheater of native columnar pines. Watch sea turtles surface in the turquoise surf below.',
    itineraries: ['west-coast']
  },
  {
    id: 'loversbay',
    name: "Lovers' Bay (Baie des Amoureux)",
    lat: -21.6180,
    lng: 165.4410,
    pinClass: 'pin-emerald',
    emoji: '🌲',
    info: 'Secluded cliff-sheltered cove along the Three Bays walking track.',
    itineraries: ['west-coast']
  },
  {
    id: 'deva',
    name: 'Domaine de Deva & Oua Koué Lookout',
    lat: -21.5750,
    lng: 165.3417,
    pinClass: 'pin-emerald',
    emoji: '🚵',
    info: '8,000-hectare protected dry forest estate. Mountain bike tracks and panoramic UNESCO lagoon lookouts.',
    itineraries: ['west-coast']
  },
  {
    id: 'bourail',
    name: 'Bourail Town (Supermarché Match & Bakery)',
    lat: -21.5706,
    lng: 165.4981,
    pinClass: 'pin-amber',
    emoji: '🛒',
    info: 'Historic Caldoche rural hub; butchery with local beef, bakery, and pharmacy.',
    itineraries: ['west-coast']
  },
  {
    id: 'teremba',
    name: 'Fort Teremba (Moindou)',
    lat: -21.7233,
    lng: 165.7167,
    pinClass: 'pin-purple',
    emoji: '🏰',
    info: '19th-century military fortress and penal settlement overlooking Mara Bay.',
    itineraries: ['west-coast']
  }
];

export const MAP_CONFIGS = {
  islet: {
    center: [-22.25, 166.45] as [number, number],
    zoom: 10,
    polylines: [
      {
        points: [
          [-22.0147, 166.2131], // Airport
          [-22.0800, 166.2400], // Païta
          [-22.2500, 166.4200], // Nouméa entrance
          [-22.2986, 166.4357]  // Baie des Citrons
        ] as [number, number][],
        color: '#0284c7',
        weight: 4,
        opacity: 0.8
      },
      {
        points: [
          [-22.2986, 166.4357], // Baie des Citrons
          [-22.2300, 166.5200], // Mont-Dore
          [-22.1800, 166.6000], // Col de Plum
          [-22.1480, 166.6980], // Lake & Drowned Forest
          [-22.1039, 166.6578]  // Park HQ
        ] as [number, number][],
        color: '#16a34a',
        weight: 4,
        opacity: 0.8
      },
      {
        points: [
          [-22.3042, 166.4468], // Anse Vata
          [-22.3135, 166.4368]  // Duck Island
        ] as [number, number][],
        color: '#0284c7',
        weight: 3,
        dashArray: '6, 6'
      },
      {
        points: [
          [-22.2745, 166.4411], // Port Moselle
          [-22.2961, 166.2922]  // Îlot Signal
        ] as [number, number][],
        color: '#0284c7',
        weight: 3,
        dashArray: '6, 6'
      }
    ]
  },
  'isle-of-pines': {
    center: [-22.45, 166.95] as [number, number],
    zoom: 9,
    polylines: [
      {
        points: [
          [-22.2592, 166.4719], // Magenta GEA
          [-22.5992, 167.4564]  // Isle of Pines ILP
        ] as [number, number][],
        color: '#7c3aed',
        weight: 3,
        dashArray: '8, 8',
        opacity: 0.9
      },
      {
        points: [
          [-22.5992, 167.4564], // Airport
          [-22.6167, 167.4667], // Cave
          [-22.6644, 167.4811], // Vao
          [-22.6625, 167.4475]  // Kanumera
        ] as [number, number][],
        color: '#0d9488',
        weight: 4,
        opacity: 0.85
      },
      {
        points: [
          [-22.6289, 167.5097], // St Joseph
          [-22.6167, 167.5167], // Upi Bay
          [-22.5894, 167.5147]  // Piscine Naturelle
        ] as [number, number][],
        color: '#0284c7',
        weight: 3,
        dashArray: '5, 5'
      }
    ]
  },
  'west-coast': {
    center: [-21.90, 165.90] as [number, number],
    zoom: 8,
    polylines: [
      {
        points: [
          [-22.0147, 166.2131], // Airport
          [-21.8700, 166.0400], // Bouloupari
          [-21.7100, 165.8300], // La Foa
          [-21.7233, 165.7167], // Moindou
          [-21.5706, 165.4981], // Bourail
          [-21.6167, 165.3833]  // Poé Beach
        ] as [number, number][],
        color: '#d97706',
        weight: 4,
        opacity: 0.85
      },
      {
        points: [
          [-21.6167, 165.3833], // Poé Beach
          [-21.5706, 165.4981], // Bourail
          [-21.7233, 165.7167], // Fort Teremba
          [-22.2500, 166.4200], // Nouméa
          [-22.2986, 166.4357]  // Baie des Citrons
        ] as [number, number][],
        color: '#0284c7',
        weight: 4,
        opacity: 0.85
      }
    ]
  },
  compare: {
    center: [-21.4, 165.8] as [number, number],
    zoom: 7,
    polylines: []
  }
};
