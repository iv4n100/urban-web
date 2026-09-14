import { useReveal } from '../../hooks/useReveal';
import { howItWorks } from '../../data/landingMockData';

export default function HowItWorksSection() {
  const headingRef = useReveal();
  const stepsRef = useReveal();

  return (
    <section id="how" className="py-24 px-6 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            From search to driving away — a process built to save you time.
          </p>
        </div>

        <div ref={stepsRef} className="reveal relative flex flex-col md:flex-row gap-0">
          {howItWorks.map(({ step, title, desc }, i) => (
            <div key={step} className="flex flex-col md:flex-row flex-1 items-start md:items-stretch">
              {/* Step block */}
              <div className="flex flex-col items-center md:items-start flex-1 px-0 md:px-8 pb-12 md:pb-0">
                {/* Number + connector line */}
                <div className="flex items-center gap-4 w-full mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#c9a84c] flex items-center justify-center shrink-0">
                    <span className="text-[#c9a84c] font-bold text-lg leading-none">{step}</span>
                  </div>
                  {/* Connector (horizontal on md, vertical line on mobile) */}
                  {i < howItWorks.length - 1 && (
                    <div className="hidden md:block flex-1 border-t border-dashed border-white/10" />
                  )}
                  {i < howItWorks.length - 1 && (
                    <div className="block md:hidden w-px flex-1 border-l border-dashed border-white/10 ml-6" />
                  )}
                </div>

                <div className={`reveal-delay-${i + 1}`}>
                  <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
