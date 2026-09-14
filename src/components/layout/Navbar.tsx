import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-colors ${
      isHome
        ? 'bg-[#F9F8F6]/80 border-black/5'
        : 'bg-[#0a0e1a]/85 border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className={`text-xl font-bold tracking-tight ${isHome ? 'text-[#0C0C0C]' : 'text-white'}`}>
            Urban<span className="text-[#C8A96E]">.</span>
          </span>
          <span className={`text-xs font-medium uppercase tracking-widest hidden sm:block ${isHome ? 'text-[#5A5A5A]' : 'text-slate-500'}`}>
            Rent a Car
          </span>
        </Link>

        <nav className={`hidden md:flex items-center gap-8 text-sm ${isHome ? 'text-[#5A5A5A]' : 'text-slate-400'}`}>
          <a href="/#reservation" className="hover:text-[#C8A96E] transition-colors">Search</a>
          <a href="/#offers" className="hover:text-[#C8A96E] transition-colors">Offers</a>
          <a href="/#reviews" className="hover:text-[#C8A96E] transition-colors">Reviews</a>
          <Link to="/cars" className="hover:text-[#C8A96E] transition-colors">Browse Fleet</Link>
        </nav>

        <a
          href="tel:+38970000000"
          className="text-sm font-medium text-[#C8A96E] hover:text-[#d9bc87] transition-colors shrink-0"
        >
          +389 70 000 000
        </a>
      </div>
    </header>
  );
}
