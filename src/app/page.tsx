import Link from 'next/link';

export default function LandingPage() {
  const featured = [
    { name: 'Netflix', icon: 'movie', color: '#E50914', price: '280৳' },
    { name: 'YouTube', icon: 'play_circle', color: '#FF0000', price: 'Ask' },
    { name: 'Prime Video', icon: 'video_library', color: '#00A8E1', price: '120৳' },
    { name: 'Gaming UC', icon: 'sports_esports', color: '#EAB308', price: 'Best' },
  ];

  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 via-background to-background z-10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-container text-sm font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              Trusted by 10,000+ Customers
            </div>
            <h1 className="font-display-lg text-[64px] leading-[1.1] text-white font-black tracking-tighter">
              Premium Entertainment <br />
              <span className="text-[#E50914]">Simplified.</span>
            </h1>
            <p className="font-body-lg text-xl text-tertiary max-w-lg leading-relaxed">
              Get instant access to Netflix, Crunchyroll, Prime Video, and Game Credits at the most affordable BDT prices in Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/services" 
                className="px-10 py-5 bg-primary-container text-on-primary-container rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary-container/20"
              >
                Explore Services
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link 
                href="/support" 
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 active:scale-95 transition-all"
              >
                How to Buy
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {featured.map((item, i) => (
                <div 
                  key={item.name} 
                  className={`glass p-8 rounded-3xl border border-white/5 space-y-4 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${i % 2 !== 0 ? 'mt-12' : ''}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl" style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">{item.name}</h3>
                    <p className="text-tertiary">Starting {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Background shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-black/40 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Active Users', value: '10K+' },
            { label: 'Subscribers', value: '25K+' },
            { label: 'Success Rate', value: '99.9%' },
            { label: 'Support', value: '24/7' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-4xl font-black text-white tracking-tight">{stat.value}</div>
              <div className="text-tertiary font-label-bold uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-8 max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-display-md text-display-md text-white">Why SubStoreBD?</h2>
          <p className="text-tertiary max-w-2xl mx-auto text-lg">We provide the most reliable and fastest subscription service in the country.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Instant Delivery', icon: 'bolt', desc: 'Get your account details within 5-15 minutes of payment verification.' },
            { title: 'Best BDT Rates', icon: 'payments', desc: 'No need for credit cards. Pay with bKash, Nagad or Rocket at local prices.' },
            { title: 'Full Warranty', icon: 'verified_user', desc: 'Every subscription comes with a replacement warranty for the full duration.' },
          ].map((feature) => (
            <div key={feature.title} className="space-y-6 group">
              <div className="w-20 h-20 rounded-3xl bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
              </div>
              <h3 className="font-headline-md text-white text-2xl">{feature.title}</h3>
              <p className="text-tertiary leading-relaxed text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1200px] mx-auto glass p-16 rounded-[48px] border border-white/5 relative overflow-hidden text-center space-y-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-display-md text-[48px] leading-tight text-white font-black tracking-tighter">
              Ready to upgrade your <br /> entertainment?
            </h2>
            <p className="text-tertiary text-xl">
              Join thousands of happy subscribers and start watching today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link 
              href="/services" 
              className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all"
            >
              Get Started Now
            </Link>
            <Link 
              href="https://wa.me/01623246317" 
              className="px-12 py-5 bg-[#25D366] text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
