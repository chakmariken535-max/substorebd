import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8 max-w-[1200px] mx-auto font-body-md antialiased">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img src="/images/logo-icon.png" alt="SubStoreBD" className="h-8 md:h-10 w-auto group-hover:rotate-12 transition-transform duration-500" />
          <span className="text-lg md:text-2xl font-black tracking-tighter text-white group-hover:text-[#E50914] transition-colors">
            SubStore<span className="text-[#E50914] group-hover:text-white">BD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-400 font-medium hover:text-white transition-all duration-300">
            Services
          </Link>
          <Link href="/pricing" className="text-gray-400 font-medium hover:text-white transition-all duration-300">
            Pricing
          </Link>
          <Link href="/support" className="text-gray-400 font-medium hover:text-white transition-all duration-300">
            Support
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Mobile nav links */}
          <div className="flex md:hidden gap-3 items-center mr-1">
            <Link href="/" className="text-gray-400 text-xs font-bold hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-400 text-xs font-bold hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
