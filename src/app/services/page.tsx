import Link from 'next/link';

const streaming = [
  { slug: 'netflix', name: 'Netflix Premium', image: '/images/netflix-hero.png', badge: '4K HDR', badgeColor: '#E50914', tags: ['4 Screens', 'Unlimited'], price: '280৳', priceLabel: '1 Screen / Month', iconColor: '#E50914', href: '/netflix' },
  { slug: 'youtube-premium', name: 'YouTube Premium', image: '/images/youtube-premium.jpg', badge: 'Ad-Free', badgeColor: '#FF0000', tags: ['Music Included', 'Background Play'], price: 'Ask Price', priceLabel: 'Contact Us', iconColor: '#FF0000', href: '/service/youtube-premium' },
  { slug: 'prime-video', name: 'Amazon Prime', image: '/images/amazon-prime.jpg', badge: 'HD', badgeColor: '#00A8E1', tags: ['Prime Video', 'Music'], price: '120৳', priceLabel: '1 Screen / Month', iconColor: '#00A8E1', href: '/service/prime-video' },
  { slug: 'crunchyroll', name: 'Crunchyroll', image: '/images/crunchyroll.jpg', badge: 'Anime', badgeColor: '#F47521', tags: ['3 Screens', 'Offline View'], price: '160৳', priceLabel: '1 Screen / Month', iconColor: '#F47521', href: '/service/crunchyroll' },
  { slug: 'chorki', name: 'Chorki', image: '/images/chorki.jpg', badge: 'Bangla', badgeColor: '#8E24AA', tags: ['Local Content'], price: '170৳', priceLabel: '1 Month', iconColor: '#8E24AA', href: '/service/chorki' },
  { slug: 'ullu', name: 'Ullu Premium', image: '/images/ullu.jpg', badge: null, badgeColor: '', tags: ['Original Content'], price: 'Ask Price', priceLabel: 'Starting from', iconColor: '#FF6B35', href: '/service/ullu' },
  { slug: 'kooku', name: 'Kooku Premium', image: '/images/kooku.jpg', badge: null, badgeColor: '', tags: ['Movies'], price: 'Ask Price', priceLabel: 'Starting from', iconColor: '#FF4500', href: '/service/kooku' },
  { slug: 'bongo', name: 'Bongo', image: '/images/bongo.jpg', badge: null, badgeColor: '', tags: ['Live TV'], price: 'Ask Price', priceLabel: 'Starting from', iconColor: '#E91E63', href: '/service/bongo' },
];

const gaming = [
  { slug: 'pubg-mobile', name: 'PUBG Mobile UC', image: '/images/pubg-mobile.jpg', badge: 'Instant', badgeColor: '#EAB308', tags: ['660 UC', 'Global'], price: 'Ask Price', priceLabel: 'Game Credits', iconColor: '#EAB308', href: '/service/pubg-mobile' },
  { slug: 'free-fire', name: 'Free Fire Diamonds', image: '/images/free-fire.png', badge: 'Battle Royale', badgeColor: '#DC2626', tags: ['100+20 Bonus', 'UID Top-up'], price: 'Ask Price', priceLabel: 'Game Credits', iconColor: '#DC2626', href: '/service/free-fire' },
  { slug: 'mobile-legend', name: 'Mobile Legends', image: '/images/mobile-legend.jpg', badge: null, badgeColor: '', tags: ['Diamonds'], price: 'Ask Price', priceLabel: 'Game Credits', iconColor: '#3B82F6', href: '/service/mobile-legend' },
];

const social = [
  { slug: 'tango-coins', name: 'Tango Coins', image: '/images/coins-generic.png', badge: null, badgeColor: '', tags: ['Live Stream'], price: 'Ask Price', priceLabel: 'App Credits', iconColor: '#F97316', href: '/service/tango-coins' },
  { slug: 'bigo-diamonds', name: 'Bigo Diamonds', image: '/images/coins-generic.png', badge: null, badgeColor: '', tags: ['Bigo Live'], price: '145৳', priceLabel: 'Starting from', iconColor: '#A855F7', href: '/service/bigo-diamonds' },
  { slug: 'tiktok-coins', name: 'TikTok Coins', image: '/images/coins-generic.png', badge: null, badgeColor: '', tags: ['Gifts'], price: 'Ask Price', priceLabel: 'App Credits', iconColor: '#EC4899', href: '/service/tiktok-coins' },
  { slug: 'telegram-premium', name: 'Telegram Premium', image: '/images/telegram-premium.png', badge: 'Premium', badgeColor: '#24A1DE', tags: ['4GB Uploads', 'Faster Speed'], price: '780৳', priceLabel: 'Starting from', iconColor: '#24A1DE', href: '/service/telegram-premium' },
];

function ProductCard({ item }: { item: typeof streaming[0] }) {
  return (
    <Link
      href={item.href}
      className="glass rounded-xl overflow-hidden group hover:scale-[1.02] hover:border-white/20 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <div className="relative h-48">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent" />
        {item.badge && (
          <div
            className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider"
            style={{ backgroundColor: item.badgeColor }}
          >
            {item.badge}
          </div>
        )}
        {/* Hover overlay arrow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/20">
            <span className="material-symbols-outlined text-white">arrow_forward</span>
          </div>
        </div>
      </div>
      <div className="p-md flex flex-col flex-grow">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{item.name}</h2>
        <div className="flex flex-wrap items-center gap-2 mb-md text-tertiary text-label-sm">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 border border-white/10 rounded">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
          <div>
            <span className="text-label-sm text-tertiary block">{item.priceLabel}</span>
            <span className="text-headline-md font-bold" style={{ color: item.iconColor }}>{item.price}</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
            View Details
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-xl px-8 max-w-[1200px] mx-auto min-h-screen flex-grow w-full">
      <div className="mb-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Our Services</h1>
        <p className="text-tertiary font-body-lg">Premium streaming subscriptions at the best BDT prices — delivered instantly in Bangladesh.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter items-start">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 space-y-md sticky top-32">
          <div className="glass p-md rounded-xl space-y-lg">
            <div>
              <h3 className="font-label-bold text-label-bold text-on-surface mb-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">stream</span> STREAMING
              </h3>
              <div className="space-y-base">
                {['Netflix', 'YouTube Premium', 'Amazon Prime', 'Crunchyroll', 'Ullu', 'Kooku', 'Chorki', 'Bongo'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary-container focus:ring-primary-container" />
                    <span className="text-body-md text-tertiary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-label-bold text-label-bold text-on-surface mb-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">sports_esports</span> GAMING
              </h3>
              <div className="space-y-base">
                {['Free Fire', 'PUBG Mobile', 'Mobile Legend'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary-container focus:ring-primary-container" />
                    <span className="text-body-md text-tertiary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-label-bold text-label-bold text-on-surface mb-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">payments</span> SOCIAL & COINS
              </h3>
              <div className="space-y-base">
                {['Tango Coins', 'Bigo Diamonds', 'TikTok Coins', 'Telegram Premium'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary-container focus:ring-primary-container" />
                    <span className="text-body-md text-tertiary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white font-label-bold transition-all active:scale-95">
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Catalog Grid */}
        <div className="lg:col-span-3 space-y-xl">
          {/* Streaming */}
          <div>
            <h2 className="font-headline-md text-on-surface mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">stream</span> Streaming Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {streaming.map((item) => <ProductCard key={item.slug} item={item} />)}
            </div>
          </div>

          {/* Gaming */}
          <div>
            <h2 className="font-headline-md text-on-surface mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500">sports_esports</span> Gaming Credits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {gaming.map((item) => <ProductCard key={item.slug} item={item} />)}
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-headline-md text-on-surface mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-pink-500">payments</span> Social & Coins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {social.map((item) => <ProductCard key={item.slug} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
