import { useRef, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { mockCarsByCategory, type CarCategory, type MockCar } from '../../data/landingMockData';
import { ChevronLeft, ChevronRight, Users, Settings2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  category: CarCategory;
  pickupDate: string;
  returnDate: string;
}

function CarCard({ car, pickupDate, returnDate }: { car: MockCar; pickupDate: string; returnDate: string }) {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const days = Math.max(1, Math.round((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / 86400000));
  const total = car.pricePerDay * days;

  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-44 bg-[#E8E4D9]">
        {!imgLoaded && <div className="absolute inset-0 bg-gradient-to-br from-[#E8E4D9] to-[#D4CFC4] animate-pulse" />}
        <img
          src={car.imageUrl}
          alt={`${car.make} ${car.model}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        <span className="absolute top-3 left-3 bg-white/90 text-[#0C0C0C] text-[10px] font-semibold px-2 py-1 rounded-full">
          {car.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#0C0C0C] text-sm">{car.make} {car.model} <span className="text-[#8A8A8A] font-normal">{car.year}</span></h3>
        <div className="flex gap-3 text-[11px] text-[#8A8A8A] mt-1.5">
          <span className="flex items-center gap-1"><Users size={11} /> {car.seats}</span>
          <span className="flex items-center gap-1"><Settings2 size={11} /> {car.transmission}</span>
        </div>
        <div className="flex items-end justify-between mt-3 pt-3 border-t border-black/5">
          <div>
            <span className="text-lg font-bold text-[#0C0C0C]">{car.pricePerDay.toLocaleString()}</span>
            <span className="text-xs text-[#8A8A8A]"> MKD/day</span>
            {days > 1 && <div className="text-[10px] text-[#C8A96E] font-medium">{total.toLocaleString()} MKD total</div>}
          </div>
          <button
            onClick={() => navigate(`/cars/${car.id}?pickupDate=${pickupDate}&returnDate=${returnDate}`)}
            className="px-4 py-2 bg-[#0C0C0C] text-[#F9F8F6] text-xs font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CarResultsSection({ category, pickupDate, returnDate }: Props) {
  const ref = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const cars = mockCarsByCategory[category];

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section id="car-results" className="py-20 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#C8A96E] uppercase tracking-[0.15em] mb-2">
              {category} class
            </p>
            <h2 className="text-3xl font-light text-[#0C0C0C]">
              Available vehicles
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center rounded-xl border border-black/10 hover:bg-black/5 transition-colors">
              <ChevronLeft size={18} className="text-[#0C0C0C]" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center rounded-xl border border-black/10 hover:bg-black/5 transition-colors">
              <ChevronRight size={18} className="text-[#0C0C0C]" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto no-scrollbar pb-4">
          {cars.map(car => (
            <CarCard key={car.id} car={car} pickupDate={pickupDate} returnDate={returnDate} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/cars" className="inline-flex items-center gap-2 text-sm font-medium text-[#5A5A5A] hover:text-[#0C0C0C] transition-colors border-b border-[#5A5A5A]/30 pb-0.5">
            View full fleet
            <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
