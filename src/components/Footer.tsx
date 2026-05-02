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
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500">
        © 2024 SubStoreBD. All rights reserved.
      </div>
    </footer>
  );
}
