export type ItineraryId = 'islet' | 'isle-of-pines' | 'west-coast' | 'best-of-both' | 'relax-resort' | 'relax-island' | 'relax-retreat' | 'compare';

export interface Activity {
  time: string;
  title: string;
  badge?: string;
  description: string;
  tips?: string;
  highlights?: string[];
  locationKey?: string;
}

export interface DaySchedule {
  dayNumber: number;
  date: string;
  title: string;
  subtitle: string;
  summary: string;
  morning: Activity;
  lunch: {
    place: string;
    description: string;
    estCostAUD?: number;
    estCostXPF?: number;
  };
  afternoon: Activity;
  evening: Activity;
  dinner: {
    place: string;
    description: string;
    estCostAUD?: number;
    estCostXPF?: number;
  };
  dayEstCostAUD: number;
  dayEstCostXPF: number;
}

export interface Accommodation {
  name: string;
  type: string;
  location: string;
  nights: string;
  bedding: string;
  pricePerNightAUD: number;
  pricePerNightXPF: number;
  totalCostAUD: number;
  totalCostXPF: number;
  features: string[];
  pros: string[];
  cons: string[];
  bookingTip: string;
}

export interface SnorkelSpot {
  name: string;
  location: string;
  depth: string;
  marineLife: string[];
  kidFriendlyRating: 1 | 2 | 3 | 4 | 5;
  currentCaution: string;
  entryType: 'Walk-in beach' | 'Boat taxi' | 'Guided tour';
  bestTime: string;
  notes: string;
}

export interface BakeryOrFoodSpot {
  name: string;
  type: 'Bakery & Patisserie' | 'Bistro / Seafood' | 'Supermarket / Deli' | 'Casual Beach Cafe';
  location: string;
  specialty: string;
  recommendation: string;
  holidayNote?: string;
}

export interface BudgetItem {
  category: string;
  item: string;
  costXPF: number;
  costAUD: number;
  notes: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  deadline: string;
  category: 'booking' | 'gear' | 'docs' | 'apps';
  notes: string;
}

export interface ItineraryOption {
  id: 'islet' | 'isle-of-pines' | 'west-coast' | 'best-of-both' | 'relax-resort' | 'relax-island' | 'relax-retreat';
  optionNumber: number;
  category?: 'active' | 'relaxing';
  title: string;
  tagline: string;
  badge: string;
  heroImageGradient: string;
  baseLocation: string;
  hotelMoves: number;
  totalDrivingKm: number;
  avgDailyDrivingMins: number;
  cost5PaxXPF: number;
  cost5PaxAUD: number;
  costPerPersonAUD: number;
  idealFor: string;
  overviewSummary: string;
  keyHighlights: string[];
  flightInfo: {
    arrival: string;
    departure: string;
    domesticFlights?: string;
  };
  days: DaySchedule[];
  accommodations: Accommodation[];
  snorkelingSpots: SnorkelSpot[];
  diningSpots: BakeryOrFoodSpot[];
  budgetBreakdown: BudgetItem[];
  checklist: ChecklistItem[];
}

export interface LocationMarker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  pinClass: 'pin-blue' | 'pin-emerald' | 'pin-amber' | 'pin-purple' | 'pin-rose';
  emoji: string;
  info: string;
  itineraries: ('islet' | 'isle-of-pines' | 'west-coast' | 'best-of-both' | 'relax-resort' | 'relax-island' | 'relax-retreat')[];
}

export interface ComparisonFactor {
  category: 'logistics' | 'reef' | 'kids' | 'food' | 'budget';
  factor: string;
  islet: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
  isleOfPines: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
  westCoast: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
  bestOfBoth?: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
  relaxResort?: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
  relaxIsland?: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
  relaxRetreat?: {
    highlight?: boolean;
    badge?: string;
    text: string;
  };
}

export interface QuizOption {
  id: 'islet' | 'isle-of-pines' | 'west-coast' | 'best-of-both' | 'relax-resort' | 'relax-island' | 'relax-retreat';
  category?: 'active' | 'relaxing';
  icon: string;
  title: string;
  description: string;
  recommendationTitle: string;
  recommendationBody: string;
}
