import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { carApi } from '../services/api';
import { Users, Fuel, Settings2, Check, Loader2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function CarDetailPage() {
  const { carId } = useParams<{ carId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pickupDate = searchParams.get('pickupDate') ?? '';
  const returnDate = searchParams.get('returnDate') ?? '';

  const [selectedExtras] = useState<string[]>([]);

  const { data: car, isLoading } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => carApi.getDetails(carId!),
    enabled: !!carId,
  });

  const days = Math.max(
    1,
    Math.round((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / 86400000)
  );

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center pt-24">
        <Loader2 size={32} className="text-[#c9a84c] animate-spin" />
      </div>
    );
  }

  if (!car) return null;

  const total = car.pricePerDay * days;

  return (
    <main className="flex-1 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to results
        </button>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Car image */}
          <div className="rounded-2xl overflow-hidden bg-[#0f172a] border border-white/8 h-80 lg:h-auto">
            {car.imageUrl ? (
              <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">No image</div>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="text-xs font-medium text-[#c9a84c] uppercase tracking-widest">{car.category}</span>
            <h1 className="text-3xl font-bold text-white mt-1 mb-2">{car.make} {car.model}</h1>
            <p className="text-slate-400 text-sm mb-6">{car.year}</p>

            <div className="flex gap-6 text-sm text-slate-300 mb-8">
              <span className="flex items-center gap-1.5"><Users size={15} /> {car.seats} seats</span>
              <span className="flex items-center gap-1.5"><Settings2 size={15} /> {car.transmission}</span>
              <span className="flex items-center gap-1.5"><Fuel size={15} /> {car.fuelType}</span>
            </div>

            {car.features?.length > 0 && (
              <div className="mb-8">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Features</p>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((f: string) => (
                    <span key={f} className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full">
                      <Check size={11} className="text-[#c9a84c]" /> {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing */}
            <div className="bg-[#0f172a] border border-white/8 rounded-2xl p-5 mb-6">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>{car.pricePerDay} MKD × {days} day{days !== 1 ? 's' : ''}</span>
                <span className="text-white">{total.toLocaleString()} MKD</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400 border-t border-white/5 pt-2">
                <span>Deposit (payable now)</span>
                <span className="text-[#c9a84c] font-semibold">{car.depositAmount.toLocaleString()} MKD</span>
              </div>
            </div>

            <button
              onClick={() =>
                navigate(
                  `/reserve/${car.id}?pickupDate=${pickupDate}&returnDate=${returnDate}&extras=${selectedExtras.join(',')}`
                )
              }
              className="w-full bg-[#c9a84c] hover:bg-[#e2c37a] text-[#0a0e1a] font-bold py-4 rounded-xl transition-colors text-sm"
            >
              Reserve — Pay {car.depositAmount.toLocaleString()} MKD deposit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
