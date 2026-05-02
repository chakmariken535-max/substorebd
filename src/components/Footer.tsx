import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 bg-black font-body-md text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-[1200px] mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logo-icon.png" alt="SubStoreBD" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">SubStore<span className="text-[#E50914]">BD</span></span>
          </div>
          <p className="text-gray-500 max-w-xs">Premium streaming subscriptions at the best BDT prices in Bangladesh. Netflix, Crunchyroll, Prime Video & more.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider">Company</h4>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">About Us</Link>
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Careers</Link>
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Press</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider">Resources</h4>
          <div className="flex flex-col gap-2">
            <Link href="/services" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Services</Link>
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Help Center</Link>
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">FAQ</Link>
            <Link href="/support" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Support</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-[#E50914] transition-colors cursor-pointer">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 px-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">© 2025 SubStoreBD. All rights reserved.</p>

          {/* Developer Credit */}
          <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl border border-white/10 group hover:border-[#E50914]/30 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E50914] to-[#ff6b35] flex items-center justify-center text-white text-xs font-black shrink-0">
              MC
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold leading-none mb-1">Developer</p>
              <p className="text-white font-bold text-sm leading-none">Madesh Chakma</p>
              <a
                href="mailto:madeshchakma@gmail.com"
                className="text-[10px] text-gray-500 hover:text-[#E50914] transition-colors"
              >
                madeshchakma@gmail.com
              </a>
            </div>
            <span className="material-symbols-outlined text-gray-600 group-hover:text-[#E50914] transition-colors text-base ml-1">code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
