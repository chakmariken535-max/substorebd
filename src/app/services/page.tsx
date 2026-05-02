import Link from 'next/link';

const streaming = [
  { slug: 'netflix', name: 'Netflix Premium', image: '/images/netflix-hero.png', badge: '4K HDR', badgeColor: '#E50914', tags: ['4 Screens', 'Unlimited'], price: '280৳', priceLabel: '1 Screen / Month', iconColor: '#E50914', href: '/netflix' },
  { slug: 'youtube-premium', name: 'YouTube Premium', image: '/images/youtube-premium.jpg', badge: 'Ad-Free', badgeColor: '#FF0000', tags: ['Music Included', 'Background Play'], price: '120৳', priceLabel: '1 Month', iconColor: '#FF0000', href: '/service/youtube-premium' },
  { slug: 'prime-video', name: 'Amazon Prime', image: '/images/amazon-prime.jpg', badge: 'HD', badgeColor: '#00A8E1', tags: ['Prime Video', 'Music'], price: '120৳', priceLabel: '1 Screen / Month', iconColor: '#00A8E1', href: '/service/prime-video' },
  { slug: 'crunchyroll', name: 'Crunchyroll', image: '/images/crunchyroll.jpg', badge: 'Anime', badgeColor: '#F47521', tags: ['3 Screens', 'Offline View'], price: '160৳', priceLabel: '1 Screen / Month', iconColor: '#F47521', href: '/service/crunchyroll' },
  { slug: 'chorki', name: 'Chorki', image: '/images/chorki.jpg', badge: 'Bangla', badgeColor: '#8E24AA', tags: ['Local Content'], price: '170৳', priceLabel: '1 Month', iconColor: '#8E24AA', href: '/service/chorki' },
  { slug: 'ullu', name: 'Ullu Premium', image: '/images/ullu.jpg', badge: null, badgeColor: '', tags: ['Original Content'], price: '199৳', priceLabel: '1 Month', iconColor: '#FF6B35', href: '/service/ullu' },
  { slug: 'kooku', name: 'Kooku Premium', image: '/images/kooku.jpg', badge: null, badgeColor: '', tags: ['Movies'], price: '160৳', priceLabel: '1 Month', iconColor: '#FF4500', href: '/service/kooku' },
  { slug: 'bongo', name: 'Bongo', image: '/images/bongo.jpg', badge: null, badgeColor: '', tags: ['Live TV'], price: 'Ask Price', priceLabel: 'Starting from', iconColor: '#E91E63', href: '/service/bongo' },
  { slug: 'disney-plus-hotstar', name: 'Disney+ Hotstar', image: '/images/netflix-hero.png', badge: 'Movies', badgeColor: '#1F3C73', tags: ['Live Sports', 'Specials'], price: '190৳', priceLabel: '1 Month', iconColor: '#1F3C73', href: '/service/disney-plus-hotstar' },
];

const gaming = [
  { slug: 'pubg-mobile', name: 'PUBG Mobile UC', image: '/images/pubg-mobile.jpg', badge: 'Instant', badgeColor: '#EAB308', tags: ['660 UC', 'Global'], price: 'Ask Price', priceLabel: 'Game Credits', iconColor: '#EAB308', href: '/service/pubg-mobile' },
  { slug: 'free-fire', name: 'Free Fire Diamonds', image: '/images/free-fire.png', badge: 'Battle Royale', badgeColor: '#DC2626', tags: ['100+20 Bonus', 'UID Top-up'], price: 'Ask Price', priceLabel: 'Game Credits', iconColor: '#DC2626', href: '/service/free-fire' },
  { slug: 'mobile-legend', name: 'Mobile Legends', image: '/images/mobile-legend.jpg', badge: null, badgeColor: '', tags: ['Diamonds'], price: 'Ask Price', priceLabel: 'Game Credits', iconColor: '#3B82F6', href: '/service/mobile-legend' },
  { slug: 'efootball-coin', name: 'E Football Coin', image: '/images/pubg-mobile.jpg', badge: 'Game Credits', badgeColor: '#013369', tags: ['Coins'], price: '240৳', priceLabel: '130 Coins', iconColor: '#013369', href: '/service/efootball-coin' },
];

const social = [
  { slug: 'tango-coins', name: 'Tango Coins', image: '/images/coins-generic.png', badge: null, badgeColor: '', tags: ['Live Stream'], price: 'Ask Price', priceLabel: 'App Credits', iconColor: '#F97316', href: '/service/tango-coins' },
  { slug: 'bigo-diamonds', name: 'Bigo Diamonds', image: '/images/coins-generic.png', badge: null, badgeColor: '', tags: ['Bigo Live'], price: '145৳', priceLabel: 'Starting from', iconColor: '#A855F7', href: '/service/bigo-diamonds' },
  { slug: 'tiktok-coins', name: 'TikTok Coins', image: '/images/coins-generic.png', badge: null, badgeColor: '', tags: ['Gifts'], price: '310৳', priceLabel: '140 Coins', iconColor: '#EC4899', href: '/service/tiktok-coins' },
  { slug: 'telegram-premium', name: 'Telegram Premium', image: '/images/telegram-premium.png', badge: 'Premium', badgeColor: '#24A1DE', tags: ['4GB Uploads', 'Faster Speed'], price: '780৳', priceLabel: 'Starting from', iconColor: '#24A1DE', href: '/service/telegram-premium' },
];

function ProductCard({ item }: { item: typeof streaming[0] }) {
  return (
    <Link
      href={item.href}
      className="glass rounded-xl overflow-hidden group hover:scale-[1.02] hover:border-white/20 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <div className="relative h-40 sm:h-48">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent" />
        {item.badge && (
          <div
            className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider"
            style={{ backgroundColor: item.badgeColor }}
          >
            {item.badge}
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center border border-white/20">
            <span className="material-symbols-outlined text-white text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-bold text-white text-base mb-2 leading-tight">{item.name}</h2>
        <div className="flex flex-wrap items-center gap-1.5 mb-3 text-tertiary text-xs">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 border border-white/10 rounded">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
          <div>
            <span className="text-xs text-tertiary block">{item.priceLabel}</span>
            <span className="font-bold text-base" style={{ color: item.iconColor }}>{item.price}</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
            View
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 px-4 md:px-8 max-w-[1200px] mx-auto min-h-screen w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">Our Services</h1>
        <p className="text-tertiary text-sm md:text-base">Premium subscriptions at the best BDT prices — delivered instantly in Bangladesh.</p>
      </div>

      {/* Mobile: horizontal category tabs */}
      <div className="flex md:hidden gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {[
          { label: '📺 Streaming', href: '#streaming' },
          { label: '🎮 Gaming', href: '#gaming' },
          { label: '💎 Social', href: '#social' },
        ].map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className="shrink-0 px-4 py-2 rounded-full glass border border-white/10 text-white text-sm font-bold whitespace-nowrap hover:border-[#E50914]/50 transition-all"
          >
            {tab.label}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Sidebar — desktop only */}
        <aside className="hidden lg:block lg:col-span-1 space-y-4 sticky top-32">
          <div className="glass p-5 rounded-xl space-y-6">
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">stream</span> Streaming
              </h3>
              <div className="space-y-2">
                {['Netflix', 'YouTube Premium', 'Amazon Prime', 'Crunchyroll', 'Ullu', 'Kooku', 'Chorki', 'Bongo', 'Disney+ Hotstar'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5" />
                    <span className="text-sm text-tertiary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">sports_esports</span> Gaming
              </h3>
              <div className="space-y-2">
                {['PUBG Mobile', 'Free Fire', 'Mobile Legends', 'E Football'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5" />
                    <span className="text-sm text-tertiary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">payments</span> Social & Coins
              </h3>
              <div className="space-y-2">
                {['Tango Coins', 'Bigo Diamonds', 'TikTok Coins', 'Telegram Premium'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5" />
                    <span className="text-sm text-tertiary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Catalog Grid */}
        <div className="lg:col-span-3 space-y-10">
          {/* Streaming */}
          <div id="streaming">
            <h2 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#E50914]">stream</span> Streaming Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
              {streaming.map((item) => <ProductCard key={item.slug} item={item} />)}
            </div>
          </div>

          {/* Gaming */}
          <div id="gaming">
            <h2 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500">sports_esports</span> Gaming Credits
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
              {gaming.map((item) => <ProductCard key={item.slug} item={item} />)}
            </div>
          </div>

          {/* Social */}
          <div id="social">
            <h2 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-pink-500">payments</span> Social & Coins
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
              {social.map((item) => <ProductCard key={item.slug} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
