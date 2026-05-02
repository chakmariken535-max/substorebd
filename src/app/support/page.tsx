import Link from 'next/link';

export default function SupportPage() {
  const steps = [
    { id: '01', title: 'Choose Your Service', description: 'Browse our catalog and select the streaming service or game credit you want to purchase.', icon: 'grid_view', color: '#E50914' },
    { id: '02', title: 'Select Your Plan', description: 'Pick the plan or amount that suits your needs. Check the pricing in BDT and features included.', icon: 'format_list_bulleted', color: '#00A8E1' },
    { id: '03', title: 'Click "Buy Now"', description: 'Hit the Buy Now button. It will redirect you to our official WhatsApp for a seamless experience.', icon: 'ads_click', color: '#25D366' },
    { id: '04', title: 'Make Payment', description: 'Confirm your order on WhatsApp. We accept bKash, Nagad, and Rocket for your convenience.', icon: 'account_balance_wallet', color: '#D81B60' },
    { id: '05', title: 'Instant Delivery', description: 'Once payment is verified, your subscription or game credits will be delivered instantly via WhatsApp.', icon: 'speed', color: '#FFD700' },
  ];

  return (
    <main className="pt-24 md:pt-32 pb-16 px-4 md:px-8 max-w-[1200px] mx-auto min-h-screen w-full">
      {/* Header */}
      <div className="mb-10 md:mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">How to Buy</h1>
        <p className="text-tertiary text-sm md:text-base leading-relaxed">
          Follow these simple steps to get your favorite premium subscriptions in minutes.
          The easiest and safest way to buy in Bangladesh.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {steps.map((step) => (
          <div key={step.id} className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 relative group">
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center text-base font-black bg-black border border-white/10 shadow-xl group-hover:scale-110 transition-transform" style={{ color: step.color }}>
              {step.id}
            </div>
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-3xl" style={{ color: step.color }}>{step.icon}</span>
            </div>
            <h3 className="font-bold text-white text-base md:text-lg mb-2">{step.title}</h3>
            <p className="text-tertiary text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mt-12 md:mt-20 p-8 md:p-12 glass rounded-3xl border border-white/5 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-primary-container/10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Need more help?</h2>
          <p className="text-tertiary text-sm md:text-base mb-8 max-w-xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues regarding your purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="whatsapp://send?phone=8801623246317"
              className="px-6 py-4 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </Link>
            <Link
              href="https://m.me/100083546743661"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#1877F2] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#1877F2]/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.923 1.523 5.517 3.868 7.227V22l3.528-1.928c.833.23 1.706.353 2.604.353 5.523 0 10-4.145 10-9.26S17.523 2 12 2zm1.096 12.338l-2.775-2.96-5.418 2.96 5.962-6.33 2.81 2.96 5.385-2.96-5.964 6.33z"/>
              </svg>
              Facebook
            </Link>
            <Link
              href="/"
              className="px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">explore</span>
              Browse Services
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-16 md:mt-24 pb-8">
        <h2 className="text-xl md:text-3xl font-black text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { q: "How long does delivery take?", a: "Most orders are delivered within 5-15 minutes after payment verification." },
            { q: "Is it safe to buy from SubStoreBD?", a: "Absolutely. We are a trusted provider with hundreds of satisfied customers across Bangladesh." },
            { q: "What payment methods do you accept?", a: "We accept bKash, Nagad, and Rocket (Personal and Merchant)." },
            { q: "What if my account stops working?", a: "We provide full replacement warranty for the entire duration of your subscription." },
          ].map((faq, i) => (
            <div key={i} className="p-5 border-b border-white/5 hover:bg-white/5 transition-colors rounded-xl">
              <h4 className="font-bold text-white text-sm md:text-base mb-2 flex items-start gap-2">
                <span className="text-primary-container mt-0.5 material-symbols-outlined text-sm shrink-0">help</span>
                {faq.q}
              </h4>
              <p className="text-tertiary text-sm pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
