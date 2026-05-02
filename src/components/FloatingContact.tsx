'use client';
import Link from 'next/link';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:bottom-6 md:left-auto md:right-6 md:w-auto flex md:flex-col p-3 md:p-0 gap-2 z-[100] bg-black/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-t border-white/10 md:border-none">
      <Link
        href="whatsapp://send?phone=8801623246317"
        className="flex-1 md:flex-none flex items-center justify-center gap-2 py-3 px-5 bg-[#25D366] text-white font-bold rounded-xl md:rounded-full active:scale-95 transform transition-all shadow-xl shadow-[#25D366]/40 hover:bg-[#20b958]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm md:text-base whitespace-nowrap">WhatsApp</span>
      </Link>
      
      <Link
        href="https://m.me/100083546743661"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 md:flex-none flex items-center justify-center gap-2 py-3 px-5 bg-[#1877F2] text-white font-bold rounded-xl md:rounded-full active:scale-95 transform transition-all shadow-xl shadow-[#1877F2]/40 hover:bg-[#166fe5]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 shrink-0">
          <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.923 1.523 5.517 3.868 7.227V22l3.528-1.928c.833.23 1.706.353 2.604.353 5.523 0 10-4.145 10-9.26S17.523 2 12 2zm1.096 12.338l-2.775-2.96-5.418 2.96 5.962-6.33 2.81 2.96 5.385-2.96-5.964 6.33z"/>
        </svg>
        <span className="text-sm md:text-base whitespace-nowrap">Facebook</span>
      </Link>
    </div>
  );
}
