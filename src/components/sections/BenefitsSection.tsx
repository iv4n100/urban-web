import {
  Shield, CircleDollarSign, PhoneCall,
  MapPin, CheckCircle, CalendarCheck,
} from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { benefits } from '../../data/landingMockData';

const iconMap: Record<string, React.ElementType> = {
  Shield, CircleDollarSign, PhoneCall, MapPin, CheckCircle, CalendarCheck,
};

export default function BenefitsSection() {
  const headingRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="benefits" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Urban?</h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            We've built every detail of the experience around you — so you can
            focus on the journey, not the paperwork.
          </p>
        </div>

        <div ref={gridRef} className="reveal grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map(({ id, icon, title, desc }, i) => {
            const Icon = iconMap[icon];
            return (
              <div
                key={id}
                className={`reveal-delay-${Math.min(i + 1, 5)} group bg-[#0a0e1a] border border-white/5 rounded-2xl p-8 hover:border-[#c9a84c]/20 transition-colors duration-300`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/15 transition-colors">
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
