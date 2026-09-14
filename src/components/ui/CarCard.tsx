import { Link } from 'react-router-dom';
import { Users, Fuel, Settings2 } from 'lucide-react';
import type { Car } from '../../types';

interface Props {
  car: Car;
  pickupDate: string;
  returnDate: string;
}

export default function CarCard({ car, pickupDate, returnDate }: Props) {
  const days = Math.max(
    1,
    Math.round((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / 86400000)
  );

  return (
    <div className="group bg-[#0f172a] border border-white/8 rounded-2xl overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300">
      <div className="relative h-48 bg-[#1e293b] overflow-hidden">
        {car.imageUrl ? (
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
            No image
          </div>
        )}
        <span className="absolute top-3 left-3 text-xs font-medium bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30 px-2 py-1 rounded-full">
          {car.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">
          {car.make} {car.model}
        </h3>
        <p className="text-slate-500 text-xs mb-4">{car.year}</p>

        <div className="flex gap-4 text-xs text-slate-400 mb-5">
          <span className="flex items-center gap-1.5">
            <Users size={13} /> {car.seats} seats
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 size={13} /> {car.transmission === 'AUTOMATIC' ? 'Auto' : 'Manual'}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={13} /> {car.fuelType}
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-white">
              {(car.pricePerDay * days).toFixed(0)}
              <span className="text-sm font-normal text-slate-400 ml-1">MKD</span>
            </p>
            <p className="text-xs text-slate-500">{days} day{days !== 1 ? 's' : ''} · {car.pricePerDay} MKD/day</p>
          </div>
          <Link
            to={`/cars/${car.id}?pickupDate=${pickupDate}&returnDate=${returnDate}`}
            className="bg-[#c9a84c] hover:bg-[#e2c37a] text-[#0a0e1a] text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
