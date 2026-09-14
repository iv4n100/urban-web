import { useParams, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { reservationApi } from '../services/api';
import { useState } from 'react';
import type { ReservationRequest } from '../types';
import { Loader2 } from 'lucide-react';

export default function ReservationPage() {
  const { carId } = useParams<{ carId: string }>();
  const [searchParams] = useSearchParams();
  const pickupDate = searchParams.get('pickupDate') ?? '';
  const returnDate = searchParams.get('returnDate') ?? '';
  const extras = searchParams.get('extras')?.split(',').filter(Boolean) ?? [];

  const [form, setForm] = useState({ customerName: '', customerEmail: '', customerPhone: '' });

  const mutation = useMutation({
    mutationFn: (req: ReservationRequest) => reservationApi.create(req),
    onSuccess: async (reservation) => {
      const session = await reservationApi.initiatePayment(reservation.id);
      window.location.href = session.redirectUrl;
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      carId: carId!,
      pickupDate,
      returnDate,
      extraIds: extras,
      ...form,
    });
  };

  const field = (label: string, key: keyof typeof form, type = 'text') => (
    <div>
      <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
      <input
        type={type}
        required
        value={form[key]}
        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#c9a84c]/60 transition-colors placeholder:text-slate-600"
      />
    </div>
  );

  return (
    <main className="flex-1 pt-24 pb-16 px-6">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-white mb-2">Your details</h1>
        <p className="text-slate-400 text-sm mb-8">
          {pickupDate} → {returnDate}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {field('Full name', 'customerName')}
          {field('Email address', 'customerEmail', 'email')}
          {field('Phone number', 'customerPhone', 'tel')}

          {mutation.isError && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={mutation.isPending}
            className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e2c37a] disabled:opacity-50 text-[#0a0e1a] font-bold py-4 rounded-xl transition-colors mt-2"
          >
            {mutation.isPending ? <Loader2 size={18} className="animate-spin" /> : null}
            Continue to payment
          </button>
        </form>
      </div>
    </main>
  );
}
