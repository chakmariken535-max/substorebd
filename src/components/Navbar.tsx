import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1200px] mx-auto font-body-md antialiased">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/images/logo-icon.png" alt="SubStoreBD" className="h-10 w-auto group-hover:rotate-12 transition-transform duration-500" />
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-[#E50914] transition-colors">
            SubStore<span className="text-[#E50914] group-hover:text-white">BD</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/services" className="text-gray-400 font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
            Services
          </Link>
          <Link href="/pricing" className="text-gray-400 font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
            Pricing
          </Link>
          <Link href="/support" className="text-gray-400 font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
            Support
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link 
            href="whatsapp://send?phone=8801623246317"
            className="px-6 py-2 bg-primary-container text-on-primary-container font-label-bold rounded-lg active:scale-95 transform transition-transform shadow-lg shadow-primary-container/20 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
