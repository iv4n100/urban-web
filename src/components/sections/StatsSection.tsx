import { useReveal } from '../../hooks/useReveal';
import { stats } from '../../data/landingMockData';

export default function StatsSection() {
  const ref = useReveal();

  return (
    <section id="stats" className="bg-[#0f172a] border-y border-white/5">
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`text-center reveal-delay-${i + 1}`}
          >
            <p className="text-3xl md:text-4xl font-bold text-[#c9a84c] leading-none tabular-nums">
              {value}
            </p>
            <p className="text-slate-500 text-sm mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
