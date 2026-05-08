export const WHATSAPP_NUMBER = '8801604929025';

// Opens native WhatsApp app (not web). Falls back gracefully on desktop.
export function getWhatsAppLink(service: string, plan: string, price: string) {
  const msg = buildMessage(service, plan, price);
  return `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
}

// Fallback web link (used for non-mobile contexts like footer Contact Us)
export function getWhatsAppWebLink(service?: string, plan?: string, price?: string) {
  if (service && plan && price) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(service, plan, price))}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

function buildMessage(service: string, plan: string, price: string) {
  return `Hello SubStoreBD! 🎬\n\nI want to order:\n*Service:* ${service}\n*Plan:* ${plan}\n*Price:* ${price}\n\nPlease confirm my order. Thank you!`;
}

// Returns a personalized recommendation message shown on the Buy Now button popup/tooltip
export function getRecommendationMessage(serviceName: string, plan: string, price: string, popular?: boolean): string {
  if (popular) {
    return `🔥 Best seller! ${serviceName} (${plan}) — most customers pick this plan. Just ${price} via WhatsApp!`;
  }
  const lc = serviceName.toLowerCase();
  if (lc.includes('netflix')) {
    return `🎬 Perfect choice! Get Netflix ${plan} for just ${price}. Delivered in under 15 minutes.`;
  }
  if (lc.includes('crunchyroll')) {
    return `🌸 Anime lover? Crunchyroll ${plan} for ${price} — watch simulcasts the same day as Japan!`;
  }
  if (lc.includes('prime')) {
    return `📦 Great deal! Prime Video ${plan} for just ${price}. Movies, shows & live sports included.`;
  }
  if (lc.includes('youtube')) {
    return `▶️ Go ad-free! YouTube Premium ${plan} for ${price}. Background play & YouTube Music included.`;
  }
  if (lc.includes('chorki')) {
    return `🇧🇩 Local favorite! Chorki ${plan} for ${price}. Best Bangla dramas & exclusives.`;
  }
  if (lc.includes('bigo')) {
    return `💎 Gift your favorite streamer! Bigo ${plan} for ${price}. Instant top-up, no account needed.`;
  }
  if (lc.includes('telegram')) {
    return `⭐ Upgrade your Telegram! ${plan} for ${price}. 4GB uploads, faster downloads & no ads.`;
  }
  if (lc.includes('free fire') || lc.includes('pubg') || lc.includes('mobile legend')) {
    return `🎮 Level up! ${serviceName} ${plan} for ${price}. Instant delivery via UID — no login needed.`;
  }
  return `✅ Great pick! ${serviceName} ${plan} for ${price}. Order now and get it in minutes.`;
}

export interface Plan {
  duration: string;
  screens: string;
  price: string;
  popular?: boolean;
}

export interface Service {
  slug: string;
  name: string;
  color: string;
  icon: string;
  badge?: string;
  description: string;
  features: string[];
  plans: Plan[];
  image: string;
  catalogHref?: string;
}

export const services: Record<string, Service> = {
  netflix: {
    slug: 'netflix',
    name: 'Netflix',
    color: '#E50914',
    icon: 'movie',
    badge: '4K HDR',
    description: 'Watch unlimited movies and TV shows in stunning 4K Ultra HD with HDR on up to 5 screens simultaneously.',
    features: ['4K Ultra HD + HDR', 'Download for offline viewing', 'No ads, ever', 'Multi-screen support'],
    plans: [
      { duration: '1 Month', screens: '1 Screen', price: '280৳' },
      { duration: '1 Month', screens: '2 Screens', price: '550৳' },
      { duration: '1 Month', screens: '3 Screens', price: '840৳', popular: true },
      { duration: '1 Month', screens: '4 Screens', price: '1,100৳' },
      { duration: '1 Month', screens: '5 Screens', price: '1,380৳' },
    ],
    image: '/images/netflix-hero.png',
    catalogHref: '/netflix',
  },
  crunchyroll: {
    slug: 'crunchyroll',
    name: 'Crunchyroll',
    color: '#F47521',
    icon: 'animation',
    badge: 'Anime',
    description: 'Stream the largest anime library with new episodes simulcast right after Japan. Ad-free with offline downloads.',
    features: ['Largest anime library', 'Simulcast new episodes', 'Offline downloads', 'Ad-free streaming'],
    plans: [
      { duration: '1 Month', screens: '1 Screen', price: '160৳' },
      { duration: '1 Month', screens: '2 Screens', price: '300৳' },
      { duration: '1 Month', screens: '3 Screens', price: '460৳', popular: true },
      { duration: '6 Months', screens: '1 Screen', price: '900৳' },
      { duration: '1 Year', screens: '1 Screen', price: '1,500৳' },
    ],
    image: '/images/crunchyroll.jpg',
  },
  'prime-video': {
    slug: 'prime-video',
    name: 'Prime Video',
    color: '#00A8E1',
    icon: 'smart_display',
    badge: 'HD',
    description: 'Watch award-winning Amazon Originals, hit movies, and live sports. Stream in HD on any device.',
    features: ['Award-winning Originals', 'Live sports streaming', 'HD quality', 'Download & watch offline'],
    plans: [
      { duration: '1 Month', screens: '1 Screen', price: '120৳' },
      { duration: '3 Months', screens: '1 Screen', price: '340৳', popular: true },
      { duration: '6 Months', screens: '1 Screen', price: '600৳' },
      { duration: '12 Months', screens: '1 Screen', price: '1,300৳' },
    ],
    image: '/images/amazon-prime.jpg',
  },
  chorki: {
    slug: 'chorki',
    name: 'Chorki',
    color: '#8E24AA',
    icon: 'subscriptions',
    badge: 'Bangla',
    description: "Bangladesh's premier streaming platform with exclusive Bangla dramas, movies, and originals.",
    features: ['Exclusive Bangla originals', 'Latest dramas & movies', 'HD streaming', 'Mobile & TV support'],
    plans: [
      { duration: '1 Month', screens: '—', price: '170৳' },
      { duration: '2 Months', screens: '—', price: '330৳' },
      { duration: '3 Months', screens: '—', price: '490৳', popular: true },
      { duration: '4 Months', screens: '—', price: '650৳' },
      { duration: '6 Months', screens: '—', price: '1,000৳' },
      { duration: '1 Year', screens: '—', price: '1,800৳' },
    ],
    image: '/images/chorki.jpg',
  },
  'youtube-premium': {
    slug: 'youtube-premium',
    name: 'YouTube Premium',
    color: '#FF0000',
    icon: 'smart_display',
    badge: 'Ad-Free',
    description: 'Enjoy YouTube ad-free, with background play, downloads, and YouTube Music Premium included.',
    features: ['Ad-free videos', 'Background play', 'YouTube Music included', 'Download videos'],
    plans: [
      { duration: '1 Month', screens: '1 Account', price: '120৳' },
      { duration: '2 Months', screens: '1 Account', price: '240৳' },
      { duration: '3 Months', screens: '1 Account', price: '350৳', popular: true },
      { duration: '1 Year', screens: '1 Account', price: '1,300৳' }
    ],
    image: '/images/youtube-premium.jpg',
  },
  ullu: {
    slug: 'ullu',
    name: 'Ullu',
    color: '#FF6B35',
    icon: 'play_circle',
    badge: 'Original',
    description: 'Stream exclusive Ullu originals, web series, and bold entertainment content.',
    features: ['Exclusive originals', 'Web series', 'HD streaming', 'Multi-device'],
    plans: [
      { duration: '1 Month', screens: '1 Screen', price: '199৳' },
      { duration: '6 Months', screens: '1 Screen', price: '1,200৳', popular: true },
      { duration: '12 Months', screens: '1 Screen', price: '2,300৳' }
    ],
    image: '/images/ullu.jpg',
  },
  kooku: {
    slug: 'kooku',
    name: 'Kooku',
    color: '#FF4500',
    icon: 'movie_edit',
    badge: 'Movies',
    description: 'Watch exclusive Kooku web series, movies, and original content anytime.',
    features: ['Exclusive web series', 'Latest movies', 'HD quality', 'Mobile streaming'],
    plans: [
      { duration: '1 Month', screens: '1 Screen', price: '160৳' },
      { duration: '3 Months', screens: '1 Screen', price: '450৳', popular: true },
      { duration: '6 Months', screens: '1 Screen', price: '900৳' },
      { duration: '12 Months', screens: '1 Screen', price: '1,800৳' }
    ],
    image: '/images/kooku.jpg',
  },
  'disney-plus-hotstar': {
    slug: 'disney-plus-hotstar',
    name: 'Disney+ Hotstar',
    color: '#1F3C73',
    icon: 'star',
    badge: 'Movies',
    description: 'Stream live sports, Hotstar Specials, movies, and Disney blockbusters.',
    features: ['Live Sports', 'Hotstar Specials', 'Disney Blockbusters', 'HD quality'],
    plans: [
      { duration: '1 Month', screens: '1 Screen', price: '190৳' },
      { duration: '3 Months', screens: '1 Screen', price: '550৳', popular: true },
      { duration: '6 Months', screens: '1 Screen', price: '1,100৳' },
      { duration: '12 Months', screens: '1 Screen', price: '2,200৳' }
    ],
    image: '/images/netflix-hero.png', // Fallback, recommend changing later
  },
  bongo: {
    slug: 'bongo',
    name: 'Bongo',
    color: '#E91E63',
    icon: 'tv',
    badge: 'Live TV',
    description: 'Stream Bangladeshi live TV channels, movies, dramas, and exclusive content on any device.',
    features: ['Live TV channels', 'Bangla movies', 'Exclusive dramas', 'HD streaming'],
    plans: [{ duration: '1 Month', screens: '1 Screen', price: 'Ask Price' }],
    image: '/images/bongo.jpg',
  },
  'pubg-mobile': {
    slug: 'pubg-mobile',
    name: 'PUBG Mobile UC',
    color: '#F5A623',
    icon: 'shield',
    badge: 'Instant',
    description: 'Top up your PUBG Mobile account with Unknown Cash (UC) for outfits, weapons, and Battle Pass.',
    features: ['Instant delivery', 'All regions supported', 'UID top-up', 'Secure transaction'],
    plans: [
      { duration: 'Instant', screens: '60 UC', price: 'Ask Price' },
      { duration: 'Instant', screens: '325 UC', price: 'Ask Price' },
      { duration: 'Instant', screens: '660 UC', price: 'Ask Price' },
    ],
    image: '/images/pubg-mobile.jpg',
  },
  'free-fire': {
    slug: 'free-fire',
    name: 'Free Fire Diamonds',
    color: '#DC2626',
    icon: 'diamond',
    badge: 'Battle Royale',
    description: 'Top up your Free Fire account with diamonds. Buy costumes, pets, and exclusive items via UID.',
    features: ['Instant delivery', 'UID top-up', 'All packages', 'Secure transaction'],
    plans: [
      { duration: 'Instant', screens: '100+20 Diamonds', price: 'Ask Price' },
      { duration: 'Instant', screens: '310+31 Diamonds', price: 'Ask Price' },
    ],
    image: '/images/free-fire.png',
  },
  'mobile-legend': {
    slug: 'mobile-legend',
    name: 'Mobile Legends',
    color: '#3B82F6',
    icon: 'swords',
    badge: 'MOBA',
    description: 'Top up your Mobile Legends account with diamonds for heroes, skins, and exclusive items.',
    features: ['Instant delivery', 'Zone ID top-up', 'All packages', 'Secure transaction'],
    plans: [
      { duration: 'Instant', screens: '86 Diamonds', price: 'Ask Price' },
      { duration: 'Instant', screens: '172 Diamonds', price: 'Ask Price' },
    ],
    image: '/images/mobile-legend.jpg',
  },
  'efootball-coin': {
    slug: 'efootball-coin',
    name: 'E Football Coin',
    color: '#013369',
    icon: 'sports_soccer',
    badge: 'Game Credits',
    description: 'Top up your eFootball account with coins to sign players and unlock premium content.',
    features: ['Instant delivery', 'Global Top-up', 'Secure transaction', 'All packages'],
    plans: [
      { duration: 'Instant', screens: '130 Coins', price: '240৳' },
      { duration: 'Instant', screens: '260 Coins', price: '480৳' },
      { duration: 'Instant', screens: '300 Coins', price: '505৳', popular: true },
      { duration: 'Instant', screens: '550 Coins', price: '680৳' },
      { duration: 'Instant', screens: '1040 Coins', price: '1,234৳' }
    ],
    image: '/images/pubg-mobile.jpg', // Placeholder, recommend changing later
  },
  'tango-coins': {
    slug: 'tango-coins',
    name: 'Tango Coins',
    color: '#F97316',
    icon: 'payments',
    badge: 'Live Stream',
    description: 'Send virtual gifts to your favorite Tango live streamers with Tango Coins.',
    features: ['Instant delivery', 'Send gifts', 'Support streamers', 'All packages'],
    plans: [
      { duration: 'Instant', screens: '120 Coins', price: '165৳' },
      { duration: 'Instant', screens: '600 Coins', price: '750৳' },
      { duration: 'Instant', screens: '1200 Coins', price: '1,470৳' },
      { duration: 'Instant', screens: '2600 Coins', price: '2,890৳', popular: true },
      { duration: 'Instant', screens: '6500 Coins', price: '7,000৳' },
      { duration: 'Instant', screens: '1350 Coins', price: '14,500৳' },
    ],
    image: '/images/coins-generic.png',
  },
  'bigo-diamonds': {
    slug: 'bigo-diamonds',
    name: 'Bigo Diamonds',
    color: '#A855F7',
    icon: 'diamond',
    badge: 'Bigo Live',
    description: 'Buy Bigo Live diamonds to send virtual gifts to your favorite streamers instantly.',
    features: ['Instant delivery', 'Gift streamers', 'All packages', 'Secure top-up'],
    plans: [
      { duration: 'Instant', screens: '40 Diamonds', price: '145৳' },
      { duration: 'Instant', screens: '100 Diamonds', price: '310৳' },
      { duration: 'Instant', screens: '160 Diamonds', price: '450৳' },
      { duration: 'Instant', screens: '240 Diamonds', price: '700৳' },
      { duration: 'Instant', screens: '400 Diamonds', price: '1,200৳' },
      { duration: 'Instant', screens: '500 Diamonds', price: '1,450৳' },
      { duration: 'Instant', screens: '800 Diamonds', price: '2,250৳', popular: true },
      { duration: 'Instant', screens: '1000 Diamonds', price: '2,850৳' },
      { duration: 'Instant', screens: '2000 Diamonds', price: '5,600৳' },
      { duration: 'Instant', screens: '4000 Diamonds', price: '11,000৳' },
    ],
    image: '/images/coins-generic.png',
  },
  'tiktok-coins': {
    slug: 'tiktok-coins',
    name: 'TikTok Coins',
    color: '#EC4899',
    icon: 'stars',
    badge: 'Gifts',
    description: 'Buy TikTok coins to send gifts during live streams and support your favorite creators.',
    features: ['Instant delivery', 'Send live gifts', 'Support creators', 'All packages'],
    plans: [
      { duration: 'Instant', screens: '140 Coins', price: '310৳' },
      { duration: 'Instant', screens: '240 Coins', price: '410৳' },
      { duration: 'Instant', screens: '350 Coins', price: '650৳', popular: true },
      { duration: 'Instant', screens: '700 Coins', price: '1,290৳' },
      { duration: 'Instant', screens: '1400 Coins', price: '2,450৳' },
      { duration: 'Instant', screens: '3500 Coins', price: '4,950৳' },
      { duration: 'Instant', screens: '7000 Coins', price: '11,900৳' }
    ],
    image: '/images/coins-generic.png',
  },
  'telegram-premium': {
    slug: 'telegram-premium',
    name: 'Telegram Premium',
    color: '#24A1DE',
    icon: 'star',
    badge: 'Premium',
    description: 'Unlock Telegram Premium for 4GB file uploads, faster downloads, exclusive stickers, and more.',
    features: ['4GB file uploads', 'Faster downloads', 'Exclusive stickers', 'No ads'],
    plans: [
      { duration: '1 Month', screens: 'Personal Account', price: '780৳' },
      { duration: '6 Months', screens: 'Personal Account', price: '2,800৳', popular: true },
      { duration: '12 Months', screens: 'Personal Account', price: '4,200৳' },
    ],
    image: '/images/telegram-premium.png',
  },
};
