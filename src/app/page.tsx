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
      <section className="relative min-h-screen flex items-center pt-20 px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 via-background to-background z-10" />
          <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-[#E50914]/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-primary-container/10 rounded-full blur-[160px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-primary-container text-sm font-bold uppercase tracking-[0.2em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
              </span>
              Trusted by 10,000+ Customers
            </div>
            
            <h1 className="font-display-lg text-[clamp(48px,8vw,80px)] leading-[1.05] text-white font-black tracking-tighter">
              Premium Entertainment <br />
              <span className="text-[#E50914] inline-block mt-2 relative">
                Simplified.
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-[#E50914]/20 blur-sm rounded-full" />
              </span>
            </h1>
            
            <p className="font-body-lg text-xl md:text-2xl text-tertiary max-w-2xl leading-relaxed">
              Get instant access to Netflix, Crunchyroll, Prime Video, and Game Credits at the most affordable BDT prices in Bangladesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link 
                href="/services" 
                className="px-12 py-5 bg-primary-container text-on-primary-container rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary-container/40"
              >
                Explore Services
                <span className="material-symbols-outlined font-black">arrow_forward</span>
              </Link>
              <Link 
                href="/support" 
                className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all"
              >
                How to Buy
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {featured.map((item, i) => (
                <div 
                  key={item.name} 
                  className={`glass p-8 rounded-[32px] border border-white/5 space-y-6 hover:border-[#E50914]/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 ${i % 2 !== 0 ? 'mt-16' : ''}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-4xl" style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-white tracking-tight">{item.name}</h3>
                    <p className="text-tertiary font-medium">Starting {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
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
            <div key={stat.label} className="space-y-2 group">
              <div className="text-5xl font-black text-white tracking-tighter group-hover:text-primary-container transition-colors duration-500">{stat.value}</div>
              <div className="text-tertiary font-black uppercase tracking-[0.2em] text-[10px] opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-8 max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-display-md text-display-md text-white font-black tracking-tight">Why SubStoreBD?</h2>
          <p className="text-tertiary max-w-2xl mx-auto text-xl opacity-80">We provide the most reliable and fastest subscription service in the country.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: 'Instant Delivery', icon: 'bolt', desc: 'Get your account details within 5-15 minutes of payment verification.' },
            { title: 'Best BDT Rates', icon: 'payments', desc: 'No need for credit cards. Pay with bKash, Nagad or Rocket at local prices.' },
            { title: 'Full Warranty', icon: 'verified_user', desc: 'Every subscription comes with a replacement warranty for the full duration.' },
          ].map((feature) => (
            <div key={feature.title} className="space-y-8 group">
              <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:text-on-primary-container transition-all duration-700 shadow-xl">
                <span className="material-symbols-outlined text-5xl">{feature.icon}</span>
              </div>
              <div className="space-y-4">
                <h3 className="font-headline-md text-white text-3xl font-black tracking-tight">{feature.title}</h3>
                <p className="text-tertiary leading-relaxed text-lg opacity-80">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8">
        <div className="max-w-[1200px] mx-auto glass p-20 md:p-32 rounded-[64px] border border-white/10 relative overflow-hidden text-center space-y-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E50914]/20 rounded-full blur-[120px]" />
          
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="font-display-md text-[56px] md:text-[72px] leading-[1] text-white font-black tracking-tighter">
              Ready to upgrade your <br />
              <span className="text-primary-container">entertainment?</span>
            </h2>
            <p className="text-tertiary text-2xl opacity-80 max-w-xl mx-auto">
              Join thousands of happy subscribers and start watching today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
            <Link 
              href="/services" 
              className="px-16 py-6 bg-white text-black rounded-3xl font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl"
            >
              Get Started Now
            </Link>
            <Link 
              href="whatsapp://send?phone=8801623246317" 
              className="px-16 py-6 bg-[#25D366] text-white rounded-3xl font-black text-2xl flex items-center justify-center gap-4 hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-[#25D366]/40"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
