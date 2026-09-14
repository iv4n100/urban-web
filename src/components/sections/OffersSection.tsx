import { useReveal } from '../../hooks/useReveal';
import { offers, loyaltyTiers } from '../../data/landingMockData';
import { ArrowRight } from 'lucide-react';

export default function OffersSection() {
  const headerRef = useReveal();
  const cardsRef = useReveal();
  const tiersRef = useReveal();

  return (
    <section id="offers" className="bg-[#0C0C0C] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-14">
          <p className="text-xs font-semibold text-[#C8A96E] uppercase tracking-[0.2em] mb-3">
            Exclusive deals
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight">
            Special <em className="not-italic italic text-[#C8A96E]">offers</em>
          </h2>
        </div>

        {/* Offer cards */}
        <div ref={cardsRef} className="reveal grid md:grid-cols-3 gap-6 mb-20">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              {/* Background image */}
              <div className="relative h-64">
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#C8A96E] text-[#0C0C0C] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {offer.tag}
                  </span>
                  <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {offer.discount}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-semibold text-lg mb-1">{offer.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-4">{offer.description}</p>
                  <button className="flex items-center gap-1.5 text-[#C8A96E] text-xs font-semibold group-hover:gap-3 transition-all">
                    {offer.cta} <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty tiers */}
        <div ref={tiersRef} className="reveal">
          <div className="border-t border-white/8 pt-14">
            <p className="text-xs font-semibold text-[#C8A96E] uppercase tracking-[0.2em] mb-3 text-center">
              Urban Loyalty
            </p>
            <h3 className="text-2xl font-light text-white text-center mb-10">Earn rewards, drive more</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {loyaltyTiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border p-6 transition-colors hover:border-white/20`}
                  style={{ borderColor: `${tier.color}30`, background: `${tier.color}08` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tier.color }} />
                    <span className="text-sm font-semibold" style={{ color: tier.color }}>{tier.name}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.perks.map(perk => (
                      <li key={perk} className="text-xs text-white/60 flex items-start gap-2">
                        <span className="mt-0.5 text-[#C8A96E]">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
