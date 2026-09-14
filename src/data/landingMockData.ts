export const stats = [
  { value: '500+', label: 'Vehicles' },
  { value: '15K+', label: 'Happy Clients' },
  { value: '8', label: 'Locations' },
  { value: '10+', label: 'Years' },
];

export type CarCategory = 'Economy' | 'Business' | 'Premium' | 'SUV' | 'Electric';

export interface MockCar {
  id: string;
  make: string;
  model: string;
  year: number;
  category: CarCategory;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  pricePerDay: number;
  imageUrl: string;
  features: string[];
}

export const mockCarsByCategory: Record<CarCategory, MockCar[]> = {
  Economy: [
    { id: 'polo-2023', make: 'Volkswagen', model: 'Polo', year: 2023, category: 'Economy', seats: 5, transmission: 'Manual', pricePerDay: 1200, imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80', features: ['A/C', 'USB', 'Bluetooth'] },
    { id: 'corsa-2023', make: 'Opel', model: 'Corsa', year: 2023, category: 'Economy', seats: 5, transmission: 'Manual', pricePerDay: 1100, imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80', features: ['A/C', 'Radio'] },
    { id: 'i20-2024', make: 'Hyundai', model: 'i20', year: 2024, category: 'Economy', seats: 5, transmission: 'Automatic', pricePerDay: 1350, imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80', features: ['A/C', 'USB', 'Lane Assist'] },
  ],
  Business: [
    { id: 'a6-2024', make: 'Audi', model: 'A6', year: 2024, category: 'Business', seats: 5, transmission: 'Automatic', pricePerDay: 2800, imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', features: ['Leather', 'Navigation', 'Heated Seats'] },
    { id: 'e-class-2024', make: 'Mercedes', model: 'E-Class', year: 2024, category: 'Business', seats: 5, transmission: 'Automatic', pricePerDay: 3200, imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', features: ['Leather', 'Navigation', 'MBUX'] },
    { id: '5series-2023', make: 'BMW', model: '5 Series', year: 2023, category: 'Business', seats: 5, transmission: 'Automatic', pricePerDay: 3000, imageUrl: 'https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=600&q=80', features: ['Leather', 'iDrive', 'Heated Seats'] },
  ],
  Premium: [
    { id: 'bmw3-2024', make: 'BMW', model: 'M3', year: 2024, category: 'Premium', seats: 5, transmission: 'Automatic', pricePerDay: 4500, imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80', features: ['M Sport', 'Carbon Trim', 'Harman Kardon'] },
    { id: 'amg-2024', make: 'Mercedes', model: 'C63 AMG', year: 2024, category: 'Premium', seats: 5, transmission: 'Automatic', pricePerDay: 5200, imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80', features: ['AMG Performance', 'Burmester Sound', 'Night Package'] },
    { id: 'porsche-2023', make: 'Porsche', model: 'Cayenne', year: 2023, category: 'Premium', seats: 5, transmission: 'Automatic', pricePerDay: 6000, imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', features: ['Air Suspension', 'BOSE Sound', 'Sport Chrono'] },
  ],
  SUV: [
    { id: 'tucson-2023', make: 'Hyundai', model: 'Tucson', year: 2023, category: 'SUV', seats: 5, transmission: 'Automatic', pricePerDay: 2200, imageUrl: 'https://images.unsplash.com/photo-1519031684900-5d79ef7e3509?w=600&q=80', features: ['AWD', 'Panoramic Roof', 'Lane Assist'] },
    { id: 'rav4-2024', make: 'Toyota', model: 'RAV4', year: 2024, category: 'SUV', seats: 5, transmission: 'Automatic', pricePerDay: 2500, imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80', features: ['AWD', 'Hybrid', 'Toyota Safety Sense'] },
    { id: 'xc60-2024', make: 'Volvo', model: 'XC60', year: 2024, category: 'SUV', seats: 5, transmission: 'Automatic', pricePerDay: 3400, imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80', features: ['AWD', 'Bowers & Wilkins', 'Pilot Assist'] },
  ],
  Electric: [
    { id: 'tesla3-2024', make: 'Tesla', model: 'Model 3', year: 2024, category: 'Electric', seats: 5, transmission: 'Automatic', pricePerDay: 2400, imageUrl: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=600&q=80', features: ['Autopilot', 'Supercharging', '500km range'] },
    { id: 'mache-2024', make: 'Ford', model: 'Mustang Mach-E', year: 2024, category: 'Electric', seats: 5, transmission: 'Automatic', pricePerDay: 2200, imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80', features: ['Ford Co-Pilot', '450km range', 'Wireless CarPlay'] },
    { id: 'ioniq6-2024', make: 'Hyundai', model: 'IONIQ 6', year: 2024, category: 'Electric', seats: 5, transmission: 'Automatic', pricePerDay: 2000, imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80', features: ['V2L', '610km range', 'Remote Smart Parking'] },
  ],
};

export interface Offer {
  id: string;
  tag: string;
  title: string;
  description: string;
  discount: string;
  imageUrl: string;
  cta: string;
}

export const offers: Offer[] = [
  {
    id: 'weekend',
    tag: 'Limited',
    title: 'Weekend Escape',
    description: 'Book any car for Friday–Sunday and get a special weekend rate. Perfect for a quick getaway to Ohrid.',
    discount: '15% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    cta: 'Book Weekend Deal',
  },
  {
    id: 'adventure',
    tag: 'Popular',
    title: 'Adventure Ready',
    description: 'Rent any SUV for 5+ days and hit the mountains. Unlimited mileage included.',
    discount: '10% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    cta: 'Choose an SUV',
  },
  {
    id: 'electric',
    tag: 'Eco',
    title: 'Drive Green',
    description: 'Go electric this month. All EVs come with free charging at our Skopje locations.',
    discount: 'Free Charging',
    imageUrl: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80',
    cta: 'Browse EVs',
  },
];

export interface LoyaltyTier {
  name: string;
  color: string;
  perks: string[];
}

export const loyaltyTiers: LoyaltyTier[] = [
  { name: 'Silver', color: '#9CA3AF', perks: ['5% discount on all rentals', 'Priority support'] },
  { name: 'Gold', color: '#C8A96E', perks: ['10% discount', 'Free upgrades', 'Priority support'] },
  { name: 'Platinum', color: '#E2E8F0', perks: ['15% discount', 'Free upgrades', 'Dedicated concierge', 'Airport delivery'] },
];

export interface Review {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marija Todorovska',
    location: 'Skopje, MK',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
    rating: 5,
    quote: 'Rented a BMW for a weekend trip to Ohrid — the car was immaculate and the whole process took under 5 minutes. Will not use anyone else.',
    date: 'March 2025',
  },
  {
    id: 'r2',
    name: 'Stefan Krstevski',
    location: 'Bitola, MK',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    rating: 5,
    quote: 'Best rental experience in Macedonia. Fair pricing, clean car, and the team was incredibly responsive when I had a question.',
    date: 'February 2025',
  },
  {
    id: 'r3',
    name: 'Ana Milovska',
    location: 'Skopje, MK',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    rating: 5,
    quote: 'Finally a service with zero surprises. Transparent pricing, easy return, and the vehicle was exactly as described. Highly recommended.',
    date: 'January 2025',
  },
];

export const pickupLocations = [
  'Skopje City Center',
  'Skopje Airport',
  'Skopje Bus Station',
  'Ohrid',
  'Bitola',
  'Štip',
  'Veles',
  'Tetovo',
];

// Legacy exports — kept so older section files still compile
export type VehicleCategory = 'Economy' | 'Premium' | 'SUV';

export interface MockVehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  category: VehicleCategory;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  pricePerDay: number;
  gradient: string;
}

export const mockVehicles: MockVehicle[] = [
  { id: 'polo-2023', make: 'Volkswagen', model: 'Polo', year: 2023, category: 'Economy', seats: 5, transmission: 'Manual', pricePerDay: 1200, gradient: 'from-slate-800 to-slate-700' },
  { id: 'bmw3-2024', make: 'BMW', model: '3 Series', year: 2024, category: 'Premium', seats: 5, transmission: 'Automatic', pricePerDay: 3500, gradient: 'from-[#0f172a] to-[#1a1000]' },
  { id: 'tucson-2023', make: 'Hyundai', model: 'Tucson', year: 2023, category: 'SUV', seats: 5, transmission: 'Automatic', pricePerDay: 2400, gradient: 'from-slate-800 to-[#0a1a10]' },
];

export const benefits = [
  { id: 'insurance', icon: 'Shield', title: 'Full Coverage Included', desc: 'Every rental comes with comprehensive insurance. No add-ons, no surprises.' },
  { id: 'fees', icon: 'CircleDollarSign', title: 'Zero Hidden Fees', desc: 'The price you see is the price you pay. Transparent from start to finish.' },
  { id: 'support', icon: 'PhoneCall', title: '24/7 Roadside Assistance', desc: 'Our team is a call away, any time of day or night, anywhere in Macedonia.' },
  { id: 'locations', icon: 'MapPin', title: 'Flexible Pickup Points', desc: 'Pick up and return at any of our 8 locations across Skopje and beyond.' },
  { id: 'quality', icon: 'CheckCircle', title: 'Inspected & Cleaned', desc: 'Every vehicle is thoroughly inspected and detailed before each rental.' },
  { id: 'booking', icon: 'CalendarCheck', title: 'Book in Under 2 Minutes', desc: 'Simple, fast online reservation — no account required to get started.' },
];

export const howItWorks = [
  { step: 1, title: 'Search', desc: 'Enter your pickup location and rental dates to see available vehicles.' },
  { step: 2, title: 'Choose your car', desc: 'Browse our fleet, compare specs and pricing, and select what fits you.' },
  { step: 3, title: 'Drive away', desc: 'Complete the quick booking form, and pick up your car at the chosen point.' },
];

export const testimonials = [
  { id: 't1', initials: 'MT', name: 'Marija T.', location: 'Skopje', rating: 5, quote: 'Rented a BMW for a weekend trip to Ohrid. The car was immaculate and the whole process took less than five minutes. Will not use anyone else.' },
  { id: 't2', initials: 'SK', name: 'Stefan K.', location: 'Bitola', rating: 5, quote: "Best rental experience I've had in Macedonia. Fair pricing, clean car, and the team was incredibly responsive when I had a question." },
  { id: 't3', initials: 'AM', name: 'Ana M.', location: 'Skopje', rating: 4, quote: 'Finally a service with zero surprises. Transparent pricing, easy return, and the vehicle was exactly as described. Highly recommended.' },
];
