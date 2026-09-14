import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-white tracking-tight">
              Urban<span className="text-[#C8A96E]">.</span>
            </span>
            <span className="text-xs text-white/30 uppercase tracking-widest">Rent a Car</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
            Premium, inspected vehicles with transparent pricing across Skopje and North Macedonia since 2014.
          </p>
          <p className="text-white/25 text-xs">
            Bul. Jane Sandanski 12, Skopje 1000<br />
            North Macedonia
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Browse Fleet', href: '/cars' },
              { label: 'Special Offers', href: '/#offers' },
              { label: 'Client Reviews', href: '/#reviews' },
              { label: 'How it Works', href: '/#reservation' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-white/40 hover:text-white/70 transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Contact</p>
          <ul className="flex flex-col gap-3 mb-8">
            <li>
              <a href="tel:+38970000000" className="text-sm text-white/40 hover:text-[#C8A96E] transition-colors">
                +389 70 000 000
              </a>
            </li>
            <li>
              <a href="mailto:info@urbanrentacar.mk" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                info@urbanrentacar.mk
              </a>
            </li>
          </ul>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Legal</p>
          <ul className="flex flex-col gap-3">
            {['Terms of Service', 'Privacy Policy'].map(label => (
              <li key={label}>
                <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/25">
          <p>© {year} Urban Rent a Car. All rights reserved.</p>
          <p>Skopje, North Macedonia</p>
        </div>
      </div>
    </footer>
  );
}
