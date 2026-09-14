import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, MapPin, Search } from 'lucide-react';
import type { SearchParams } from '../../types';

export default function SearchBar() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [params, setParams] = useState<SearchParams>({
    pickupDate: tomorrow,
    returnDate: '',
    pickupLocation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!params.pickupDate || !params.returnDate) return;
    const qs = new URLSearchParams(params as unknown as Record<string, string>).toString();
    navigate(`/cars?${qs}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-3"
    >
      <div className="flex items-center gap-2 flex-1 bg-white/5 rounded-xl px-4 py-3">
        <MapPin size={16} className="text-[#c9a84c] shrink-0" />
        <input
          type="text"
          placeholder="Pickup location"
          value={params.pickupLocation}
          onChange={e => setParams(p => ({ ...p, pickupLocation: e.target.value }))}
          className="bg-transparent text-sm text-white placeholder:text-slate-500 outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-2 flex-1 bg-white/5 rounded-xl px-4 py-3">
        <CalendarDays size={16} className="text-[#c9a84c] shrink-0" />
        <input
          type="date"
          min={today}
          value={params.pickupDate}
          onChange={e => setParams(p => ({ ...p, pickupDate: e.target.value }))}
          className="bg-transparent text-sm text-white outline-none w-full [color-scheme:dark]"
          required
        />
      </div>

      <div className="flex items-center gap-2 flex-1 bg-white/5 rounded-xl px-4 py-3">
        <CalendarDays size={16} className="text-[#c9a84c] shrink-0" />
        <input
          type="date"
          min={params.pickupDate || today}
          value={params.returnDate}
          onChange={e => setParams(p => ({ ...p, returnDate: e.target.value }))}
          className="bg-transparent text-sm text-white outline-none w-full [color-scheme:dark]"
          required
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e2c37a] text-[#0a0e1a] font-semibold px-8 py-3 rounded-xl transition-colors shrink-0"
      >
        <Search size={16} />
        Search
      </button>
    </form>
  );
}
