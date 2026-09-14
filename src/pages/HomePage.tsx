import { lazy, Suspense, useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ReservationSection from '../components/sections/ReservationSection';
import type { CarCategory } from '../data/landingMockData';

const CarResultsSection = lazy(() => import('../components/sections/CarResultsSection'));
const OffersSection     = lazy(() => import('../components/sections/OffersSection'));
const ReviewsSection    = lazy(() => import('../components/sections/ReviewsSection'));

interface SearchState {
  category: CarCategory;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  searched: boolean;
}

const SectionFallback = () => <div className="min-h-[200px]" />;

export default function HomePage() {
  const [searchState, setSearchState] = useState<SearchState>({
    category: 'Economy',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    searched: false,
  });

  const handleSearch = (params: { category: CarCategory; pickupDate: string; returnDate: string; pickupLocation: string }) => {
    setSearchState({ ...params, searched: true });
  };

  return (
    <main className="flex-1">
      <HeroSection />
      <ReservationSection onSearch={handleSearch} />

      {searchState.searched && (
        <Suspense fallback={<SectionFallback />}>
          <CarResultsSection
            category={searchState.category}
            pickupDate={searchState.pickupDate}
            returnDate={searchState.returnDate}
          />
        </Suspense>
      )}

      <Suspense fallback={<SectionFallback />}>
        <OffersSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ReviewsSection />
      </Suspense>
    </main>
  );
}
