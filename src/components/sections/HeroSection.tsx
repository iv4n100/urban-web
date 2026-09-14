import { useReveal } from '../../hooks/useReveal';
import { stats } from '../../data/landingMockData';
import { ChevronDown, Star } from 'lucide-react';

export default function HeroSection() {
  const leftRef = useReveal();
  const rightRef = useReveal<HTMLDivElement>();

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#F9F8F6] flex flex-col justify-center pt-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f3f0e8]/60" />
        <div className="absolute top-20 right-[8%] w-72 h-72 rounded-full bg-[#C8A96E]/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div ref={leftRef} className="reveal order-2 lg:order-1">
            <p className="text-xs font-semibold text-[#C8A96E] uppercase tracking-[0.2em] mb-6">
              Premium Car Rentals · Skopje, MK
            </p>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-[#0C0C0C] leading-[1.08] mb-6 tracking-tight">
              Drive Without<br />
              <em className="not-italic italic font-medium text-[#C8A96E]">Compromise.</em>
            </h1>
            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-10 max-w-md">
              Handpicked, inspected vehicles with transparent pricing. Pick up in Skopje
              and explore all of North Macedonia without limitations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={scrollToReservation}
                className="px-8 py-4 bg-[#0C0C0C] text-[#F9F8F6] text-sm font-semibold rounded-xl hover:bg-[#1a1a1a] transition-colors"
              >
                Find your car
              </button>
              <a
                href="/cars"
                className="px-8 py-4 border border-[#0C0C0C]/15 text-[#0C0C0C] text-sm font-semibold rounded-xl hover:border-[#0C0C0C]/40 transition-colors text-center"
              >
                Browse fleet
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-[#0C0C0C]">{s.value}</div>
                  <div className="text-xs text-[#8A8A8A] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Car image + floating badge */}
          <div ref={rightRef} className="reveal reveal-delay-2 relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[520px] bg-[#E8E4D9]">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80"
                alt="Premium car"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Dark overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating trust badge */}
            <div className="absolute -bottom-5 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-lg shadow-black/8 border border-black/5">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#C8A96E] fill-[#C8A96E]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#0C0C0C]">Rated #1 in North Macedonia</p>
              <p className="text-[10px] text-[#8A8A8A] mt-0.5">Trustpilot · 1,240 reviews</p>
            </div>

            {/* Floating availability badge */}
            <div className="absolute top-5 -right-3 lg:-right-6 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/8 border border-black/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-[#0C0C0C]">Available now</span>
              </div>
              <p className="text-[10px] text-[#8A8A8A] mt-0.5">500+ vehicles ready</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToReservation}
        className="animate-chevron absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5 text-[#8A8A8A] text-xs"
        aria-label="Scroll to search"
      >
        <span>Search</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
