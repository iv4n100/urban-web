import { useReveal } from '../../hooks/useReveal';
import { testimonials } from '../../data/landingMockData';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < rating ? '#c9a84c' : 'none'}
          stroke={i < rating ? '#c9a84c' : '#475569'}
          strokeWidth="1"
        >
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const headingRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="stories" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What our clients say
          </h2>
          <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
            Real experiences from people who chose to drive with Urban.
          </p>
        </div>

        <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-6">
          {testimonials.map(({ id, initials, name, location, rating, quote }, i) => (
            <div
              key={id}
              className={`reveal-delay-${i + 1} bg-[#0a0e1a] border border-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:border-[#c9a84c]/15 transition-colors duration-300`}
            >
              <Stars rating={rating} />

              <p className="text-slate-300 text-sm leading-relaxed italic flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#c9a84c] text-xs font-bold">{initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{name}</p>
                  <p className="text-slate-500 text-xs">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
