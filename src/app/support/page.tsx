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
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </Link>
            <Link
              href="https://www.facebook.com/share/18oT7nVZPU/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#1877F2] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#1877F2]/20"
            >
              <span className="material-symbols-outlined">forum</span>
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
