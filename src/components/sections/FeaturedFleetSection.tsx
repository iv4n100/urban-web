import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings2, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { mockVehicles, type VehicleCategory } from '../../data/landingMockData';

const categories: Array<VehicleCategory | 'All'> = ['All', 'Economy', 'Premium', 'SUV'];

export default function FeaturedFleetSection() {
  const [active, setActive] = useState<VehicleCategory | 'All'>('All');
  const headingRef = useReveal();
  const gridRef = useReveal();

  const visible = active === 'All'
    ? mockVehicles
    : mockVehicles.filter(v => v.category === active);

  return (
    <section id="fleet" className="py-24 px-6 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Fleet</h2>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Handpicked and maintained for every kind of journey.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#c9a84c] text-[#0a0e1a]'
                    : 'border border-white/10 text-slate-400 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((vehicle, i) => (
            <div
              key={vehicle.id}
              className={`reveal-delay-${i + 1} group bg-[#0f172a] border border-white/8 rounded-2xl overflow-hidden hover:border-[#c9a84c]/40 transition-colors duration-300`}
            >
              {/* Image placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${vehicle.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 select-none">
                  <span className="text-white/10 text-6xl font-black tracking-tighter leading-none">
                    {vehicle.make.split(' ')[0].toUpperCase()}
                  </span>
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30">
                  {vehicle.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-slate-500 text-xs mt-0.5 mb-4">{vehicle.year}</p>

                <div className="flex gap-4 text-xs text-slate-400 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Users size={13} />
                    {vehicle.seats} seats
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Settings2 size={13} />
                    {vehicle.transmission}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white tabular-nums">
                      {vehicle.pricePerDay.toLocaleString('mk-MK')}
                    </span>
                    <span className="text-slate-400 text-sm ml-1">MKD</span>
                    <p className="text-slate-500 text-xs mt-0.5">per day</p>
                  </div>
                  <Link
                    to="/cars"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#c9a84c] hover:bg-[#e2c37a] text-[#0a0e1a] text-sm font-semibold rounded-xl transition-colors duration-200"
                  >
                    View
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse all */}
        <div className="mt-10 text-center">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-medium hover:text-[#e2c37a] transition-colors"
          >
            Browse full fleet
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
