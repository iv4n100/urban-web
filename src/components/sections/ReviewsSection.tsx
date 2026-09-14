import { useReveal } from '../../hooks/useReveal';
import { reviews } from '../../data/landingMockData';
import { Star, Lock, Award, BadgeCheck, EyeOff } from 'lucide-react';

const trustItems = [
  { icon: Lock, label: 'Secure Payments' },
  { icon: BadgeCheck, label: 'Licensed & Insured' },
  { icon: EyeOff, label: 'No Hidden Fees' },
  { icon: Award, label: 'Award Winning' },
];

export default function ReviewsSection() {
  const headerRef = useReveal();
  const cardsRef = useReveal();
  const trustRef = useReveal();

  return (
    <section id="reviews" className="bg-[#F9F8F6] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <p className="text-xs font-semibold text-[#C8A96E] uppercase tracking-[0.2em] mb-3">
            Client stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#0C0C0C] tracking-tight">
            What our clients <em className="not-italic italic text-[#C8A96E]">say</em>
          </h2>
        </div>

        {/* Review cards */}
        <div ref={cardsRef} className="reveal grid md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-6 border border-black/5 shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0C0C0C]">{review.name}</p>
                  <p className="text-xs text-[#8A8A8A]">{review.location}</p>
                </div>
                <span className="ml-auto text-[10px] text-[#8A8A8A]">{review.date}</span>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className={j < review.rating ? 'text-[#C8A96E] fill-[#C8A96E]' : 'text-[#D1CFC9]'}
                  />
                ))}
              </div>

              <p className="text-sm text-[#5A5A5A] leading-relaxed italic">"{review.quote}"</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div ref={trustRef} className="reveal border-t border-black/8 pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#C8A96E]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#C8A96E]" />
                </div>
                <span className="text-xs font-semibold text-[#5A5A5A]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
