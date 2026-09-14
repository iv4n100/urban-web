import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { pickupLocations, type CarCategory } from '../../data/landingMockData';
import { MapPin, Calendar, Clock, RefreshCw, Search, Shield } from 'lucide-react';

const categories: { key: CarCategory; label: string; icon: string; from: string }[] = [
  { key: 'Economy',  label: 'Economy',  icon: '🚗', from: '1 100 MKD' },
  { key: 'Business', label: 'Business', icon: '💼', from: '2 400 MKD' },
  { key: 'Premium',  label: 'Premium',  icon: '⭐', from: '3 500 MKD' },
  { key: 'SUV',      label: 'SUV',      icon: '🚙', from: '2 200 MKD' },
  { key: 'Electric', label: 'Electric', icon: '⚡', from: '1 800 MKD' },
];

interface Props {
  onSearch: (params: { category: CarCategory; pickupDate: string; returnDate: string; pickupLocation: string }) => void;
}

export default function ReservationSection({ onSearch }: Props) {
  const ref = useReveal();
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [activeCategory, setActiveCategory] = useState<CarCategory>('Economy');
  const [sameReturn, setSameReturn] = useState(true);
  const [form, setForm] = useState({
    pickupLocation: pickupLocations[0],
    returnLocation: pickupLocations[0],
    pickupDate: tomorrow,
    returnDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
    pickupTime: '10:00',
    returnTime: '10:00',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ category: activeCategory, pickupDate: form.pickupDate, returnDate: form.returnDate, pickupLocation: form.pickupLocation });
    const el = document.getElementById('car-results');
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  return (
    <section id="reservation" className="relative min-h-screen flex items-center justify-center">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?w=1800&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/75" />
      </div>

      <div ref={ref} className="reveal relative w-full max-w-3xl mx-auto px-6 py-20">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs text-[#C8A96E] font-semibold uppercase tracking-[0.2em] mb-3">
            Book in under 2 minutes
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight">
            Find your <em className="not-italic italic text-[#C8A96E]">perfect car</em>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 pb-1">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-5 py-3 rounded-xl border text-xs font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#C8A96E] border-[#C8A96E] text-[#0C0C0C]'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] ${activeCategory === cat.key ? 'text-[#0C0C0C]/70' : 'text-white/50'}`}>
                from {cat.from}
              </span>
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSearch} className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
          {/* Locations */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Pickup location</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C8A96E]" />
                <select
                  value={form.pickupLocation}
                  onChange={e => {
                    const val = e.target.value;
                    setForm(p => ({ ...p, pickupLocation: val, returnLocation: sameReturn ? val : p.returnLocation }));
                  }}
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-8 pr-4 py-3 text-sm text-white outline-none focus:border-[#C8A96E]/60 appearance-none"
                >
                  {pickupLocations.map(l => <option key={l} value={l} className="bg-[#1a1a1a]">{l}</option>)}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-white/50">Return location</label>
                <button type="button" onClick={() => setSameReturn(p => !p)} className="flex items-center gap-1 text-[10px] text-white/40 hover:text-white/70 transition-colors">
                  <RefreshCw size={10} />
                  {sameReturn ? 'Different location' : 'Same as pickup'}
                </button>
              </div>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C8A96E]" />
                <select
                  value={sameReturn ? form.pickupLocation : form.returnLocation}
                  disabled={sameReturn}
                  onChange={e => setForm(p => ({ ...p, returnLocation: e.target.value }))}
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-8 pr-4 py-3 text-sm text-white outline-none focus:border-[#C8A96E]/60 appearance-none disabled:opacity-50"
                >
                  {pickupLocations.map(l => <option key={l} value={l} className="bg-[#1a1a1a]">{l}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Dates & Times */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Pickup date</label>
              <div className="relative">
                <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C8A96E]" />
                <input
                  type="date"
                  min={today}
                  value={form.pickupDate}
                  onChange={e => setForm(p => ({ ...p, pickupDate: e.target.value }))}
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-8 pr-2 py-3 text-sm text-white outline-none focus:border-[#C8A96E]/60 [color-scheme:dark]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Time</label>
              <div className="relative">
                <Clock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C8A96E]" />
                <input
                  type="time"
                  value={form.pickupTime}
                  onChange={e => setForm(p => ({ ...p, pickupTime: e.target.value }))}
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-8 pr-2 py-3 text-sm text-white outline-none focus:border-[#C8A96E]/60 [color-scheme:dark]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Return date</label>
              <div className="relative">
                <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C8A96E]" />
                <input
                  type="date"
                  min={form.pickupDate}
                  value={form.returnDate}
                  onChange={e => setForm(p => ({ ...p, returnDate: e.target.value }))}
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-8 pr-2 py-3 text-sm text-white outline-none focus:border-[#C8A96E]/60 [color-scheme:dark]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Time</label>
              <div className="relative">
                <Clock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C8A96E]" />
                <input
                  type="time"
                  value={form.returnTime}
                  onChange={e => setForm(p => ({ ...p, returnTime: e.target.value }))}
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-8 pr-2 py-3 text-sm text-white outline-none focus:border-[#C8A96E]/60 [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#C8A96E] hover:bg-[#d9bc87] text-[#0C0C0C] font-semibold py-4 rounded-xl transition-colors"
          >
            <Search size={16} />
            Search available cars
          </button>
        </form>

        {/* Trust pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Full Insurance', 'Free Cancellation', 'No Hidden Fees'].map(pill => (
            <span key={pill} className="flex items-center gap-1.5 text-xs text-white/60">
              <Shield size={11} className="text-[#C8A96E]" />
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
