import { useReveal } from '../../hooks/useReveal';

export default function CtaSection() {
  const ref = useReveal();

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#0a0e1a]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,168,76,0.08),transparent)]" />

      <div
        ref={ref}
        className="reveal relative max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Ready to hit<br />
          <span className="text-[#c9a84c]">the road?</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Search availability and book in under 2 minutes.
          No account. No commitment until you confirm.
        </p>
        <button
          onClick={scrollToSearch}
          className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e2c37a] text-[#0a0e1a] font-semibold px-10 py-4 rounded-xl transition-colors duration-200 text-base"
        >
          Find your car
        </button>
      </div>
    </section>
  );
}
