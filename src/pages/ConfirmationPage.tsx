import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function ConfirmationPage() {
  const [searchParams] = useSearchParams();
  const reservationId = searchParams.get('reservationId');

  return (
    <main className="flex-1 flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-[#c9a84c]" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Reservation confirmed!</h1>
        <p className="text-slate-400 mb-2">
          Your deposit has been received and your vehicle is reserved.
        </p>
        {reservationId && (
          <p className="text-xs text-slate-600 mb-8">Reference: {reservationId}</p>
        )}
        <p className="text-slate-400 text-sm mb-8">
          We'll send a confirmation email with all the details. See you soon!
        </p>
        <Link
          to="/"
          className="inline-block bg-[#c9a84c] hover:bg-[#e2c37a] text-[#0a0e1a] font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
