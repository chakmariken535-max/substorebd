import { getWhatsAppLink } from '@/lib/services';
import HowToBuy from '@/components/HowToBuy';

export default function NetflixPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <img alt="Netflix Cinematic Backdrop" className="w-full h-full object-cover" src="/images/netflix-hero.png"/>
        </div>
        <div className="container max-w-[1200px] mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <span className="bg-primary-container px-3 py-1 rounded text-label-bold text-on-primary-container">PREMIUM</span>
              <span className="text-secondary font-label-bold">ULTRA HD 4K</span>
            </div>
            <h1 className="font-display-lg text-2xl md:text-5xl text-white font-black">Netflix Premium Subscription</h1>
            <p className="font-body-lg text-sm md:text-base text-tertiary-fixed-dim max-w-2xl mx-auto">Experience movies and TV shows in stunning 4K resolution with HDR on up to four screens simultaneously.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a href={getWhatsAppLink('Netflix', 'Best Plan', 'Contact Us')} className="inline-flex items-center gap-2 bg-[#25D366] text-white font-label-bold px-7 py-3 rounded-xl text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#25D366]/30">
                <span className="material-symbols-outlined">whatsapp</span>WhatsApp
              </a>
              <a href="https://m.me/100083546743661" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-label-bold px-7 py-3 rounded-xl text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#1877F2]/30">
                <span className="material-symbols-outlined">forum</span>Facebook
              </a>
              <a href="/pricing" className="border border-white/20 bg-white/5 backdrop-blur-md text-white font-label-bold px-7 py-3 rounded-xl text-base hover:bg-white/10 transition-all">Compare Plans</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Feature 1 */}
          <div className="md:col-span-2 glass-card rounded-xl p-md flex flex-col justify-between group overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>movie</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white">Unlimited Movies & TV Shows</h3>
              <p className="font-body-md text-tertiary">Access our entire library of exclusive originals, blockbuster films, and award-winning series with no hidden costs or ads.</p>
            </div>
            <div className="mt-8 relative h-40 rounded-lg overflow-hidden border border-white/10">
              <img alt="Library Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/netflix-library.png"/>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-card rounded-xl p-md flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}>4k</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white">4K + HDR Quality</h3>
            <p className="font-body-md text-tertiary">Crystal clear detail and vibrant colors for a true theatrical experience on your compatible devices.</p>
            <div className="w-full bg-white/5 rounded-lg p-sm border border-white/5">
              <div className="flex justify-between text-label-sm text-secondary mb-2">
                <span>Resolution Quality</span>
                <span>100%</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-full"></div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-card rounded-xl p-md flex items-center space-x-6">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">devices</span>
            </div>
            <div>
              <h4 className="font-label-bold text-white">4 Screens at a Time</h4>
              <p className="font-label-sm text-tertiary">Share the joy with family on multiple devices.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="glass-card rounded-xl p-md flex items-center space-x-6">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">download</span>
            </div>
            <div>
              <h4 className="font-label-bold text-white">Download & Go</h4>
              <p className="font-label-sm text-tertiary">Save your favorites for offline viewing anywhere.</p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="glass-card rounded-xl p-md flex items-center space-x-6">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">spatial_audio</span>
            </div>
            <div>
              <h4 className="font-label-bold text-white">Spatial Audio</h4>
              <p className="font-label-sm text-tertiary">Immersive sound without the need for extra gear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-[1200px] mx-auto px-8 py-xl">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-white">Netflix Pricing in BDT (৳)</h2>
          <p className="text-tertiary mt-2">1 Month plans — pay per screen, cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
          {[
            { screens: '1 Screen', price: '280৳', popular: false },
            { screens: '2 Screens', price: '550৳', popular: false },
            { screens: '3 Screens', price: '840৳', popular: true },
            { screens: '4 Screens', price: '1,100৳', popular: false },
            { screens: '5 Screens', price: '1,380৳', popular: false },
          ].map(({ screens, price, popular }) => (
            <div key={screens} className={`relative glass-card rounded-2xl p-md text-center flex flex-col gap-4 transition-all duration-300 hover:border-primary-container/60 ${popular ? 'border-primary-container/40 ring-1 ring-primary-container/30' : ''}`}>
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Popular
                </div>
              )}
              <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
              <div>
                <h3 className="font-headline-md text-white">{screens}</h3>
                <p className="text-tertiary text-label-sm mt-1">Per Month</p>
              </div>
              <div className="text-3xl font-black text-white">{price}</div>
              <div className="flex gap-2 w-full">
                <a
                  href={getWhatsAppLink('Netflix', `1 Month / ${screens}`, price)}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-primary-container/10 border border-primary-container/30 hover:bg-primary-container text-white hover:text-on-primary-container font-label-bold rounded-xl transition-all active:scale-95 text-sm"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Buy
                </a>
                <a
                  href="https://m.me/100083546743661"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#1877F2]/10 border border-[#1877F2]/30 hover:bg-[#1877F2] text-white hover:text-white font-label-bold rounded-xl transition-all active:scale-95 text-sm"
                >
                  <span className="material-symbols-outlined text-base">forum</span>
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[800px] mx-auto px-8 py-xl">
        <h2 className="font-headline-lg text-headline-lg text-white mb-lg text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="glass-card rounded-xl group" open>
            <summary className="flex justify-between items-center p-md cursor-pointer font-headline-md text-white list-none">
              How do I cancel my subscription?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="px-md pb-md text-tertiary border-t border-white/5 pt-md">
              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </div>
          </details>
          <details className="glass-card rounded-xl group">
            <summary className="flex justify-between items-center p-md cursor-pointer font-headline-md text-white list-none">
              What can I watch on Netflix?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="px-md pb-md text-tertiary border-t border-white/5 pt-md">
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </div>
          </details>
          <details className="glass-card rounded-xl group">
            <summary className="flex justify-between items-center p-md cursor-pointer font-headline-md text-white list-none">
              Is Netflix good for kids?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="px-md pb-md text-tertiary border-t border-white/5 pt-md">
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            </div>
          </details>
        </div>
      </section>

      {/* Related Plans */}
      <section className="max-w-[1200px] mx-auto px-8 py-xl mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-white mb-lg">More Plans</h2>
        <div className="glass-card rounded-2xl overflow-hidden border-white/10">
          <div className="grid grid-cols-4 text-label-sm font-label-bold text-tertiary p-4 border-b border-white/5 bg-white/5">
            <span>Duration</span>
            <span>Screens</span>
            <span>Price (৳)</span>
            <span>Action</span>
          </div>
          {[
            { duration: '1 Month', screens: '1 Screen', price: '280৳' },
            { duration: '1 Month', screens: '2 Screens', price: '550৳' },
            { duration: '1 Month', screens: '3 Screens', price: '840৳' },
            { duration: '1 Month', screens: '4 Screens', price: '1,100৳' },
            { duration: '1 Month', screens: '5 Screens', price: '1,380৳' },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 items-center p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
              <span className="text-white">{row.duration}</span>
              <span className="text-tertiary">{row.screens}</span>
              <span className="text-white font-bold">{row.price}</span>
              <a
                href={getWhatsAppLink('Netflix', `${row.duration} / ${row.screens}`, row.price)}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white font-label-bold rounded-lg transition-all text-sm w-fit"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* How to Buy Section */}
      <section className="max-w-[800px] mx-auto px-8 py-xl mb-xl">
        <HowToBuy accentColor="#E50914" />
      </section>
    </main>
  );
}
