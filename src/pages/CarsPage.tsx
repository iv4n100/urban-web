import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { carApi } from '../services/api';
import CarCard from '../components/ui/CarCard';
import SearchBar from '../components/search/SearchBar';
import { Loader2 } from 'lucide-react';

export default function CarsPage() {
  const [searchParams] = useSearchParams();
  const pickupDate = searchParams.get('pickupDate') ?? '';
  const returnDate = searchParams.get('returnDate') ?? '';
  const pickupLocation = searchParams.get('pickupLocation') ?? undefined;
  const category = searchParams.get('category') ?? undefined;

  const { data: cars, isLoading, isError } = useQuery({
    queryKey: ['cars', { pickupDate, returnDate, pickupLocation, category }],
    queryFn: () => carApi.search({ pickupDate, returnDate, pickupLocation, category }),
    enabled: !!pickupDate && !!returnDate,
  });

  return (
    <main className="flex-1 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <SearchBar />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Available vehicles</h1>
        <p className="text-slate-400 text-sm mb-8">
          {pickupDate} — {returnDate}
          {pickupLocation ? ` · ${pickupLocation}` : ''}
        </p>

        {isLoading && (
          <div className="flex justify-center py-24">
            <Loader2 size={32} className="text-[#c9a84c] animate-spin" />
          </div>
        )}

        {isError && (
          <div className="text-center py-24 text-slate-500">
            Could not load vehicles. Please try again.
          </div>
        )}

        {cars && cars.length === 0 && (
          <div className="text-center py-24 text-slate-500">
            No vehicles available for the selected dates.
          </div>
        )}

        {cars && cars.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map(car => (
              <CarCard key={car.id} car={car} pickupDate={pickupDate} returnDate={returnDate} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
