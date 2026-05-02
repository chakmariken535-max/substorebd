import Link from 'next/link';

export default function SupportPage() {
  const steps = [
    {
      id: '01',
      title: 'Choose Your Service',
      description: 'Browse our catalog and select the streaming service or game credit you want to purchase. We offer Netflix, YouTube, Free Fire Diamonds, and more.',
      icon: 'grid_view',
      color: '#E50914'
    },
    {
      id: '02',
      title: 'Select Your Plan',
      description: 'Pick the specific plan or amount that suits your needs. Check the pricing in BDT and the features included in each package.',
      icon: 'format_list_bulleted',
      color: '#00A8E1'
    },
    {
      id: '03',
      title: 'Click "Buy Now"',
      description: 'Hit the Buy Now button on the product page. This will automatically redirect you to our official WhatsApp support for a seamless experience.',
      icon: 'ads_click',
      color: '#25D366'
    },
    {
      id: '04',
      title: 'Make Payment',
      description: 'Confirm your order with our representative on WhatsApp. We accept bKash, Nagad, and Rocket for your convenience.',
      icon: 'account_balance_wallet',
      color: '#D81B60'
    },
    {
      id: '05',
      title: 'Instant Delivery',
      description: 'Once payment is verified, your subscription details or game credits will be delivered to you instantly through WhatsApp or Email.',
      icon: 'speed',
      color: '#FFD700'
    }
  ];

  return (
    <main className="pt-32 pb-xl px-8 max-w-[1200px] mx-auto min-h-screen w-full">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">How to Buy</h1>
        <p className="text-tertiary font-body-lg">
          Follow these simple steps to get your favorite premium subscriptions in minutes. 
          The easiest and safest way to buy in Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black bg-black border border-white/10 text-white shadow-xl group-hover:scale-110 transition-transform" style={{ color: step.color }}>
              {step.id}
            </div>
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl" style={{ color: step.color }}>
                {step.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-4">{step.title}</h3>
            <p className="text-tertiary leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 glass rounded-3xl border border-white/5 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-primary-container/10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display-md text-on-surface mb-6">Need more help?</h2>
          <p className="text-tertiary font-body-lg mb-10 max-w-xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues regarding your purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://wa.me/01623246317" 
              className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <span className="material-symbols-outlined">chat</span>
              Chat on WhatsApp
            </Link>
            <Link 
              href="/" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">explore</span>
              Back to Catalog
            </Link>
          </div>
        </div>
      </div>
      
      <section className="mt-24 pb-12">
        <h2 className="font-headline-lg text-on-surface mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { q: "How long does delivery take?", a: "Most orders are delivered within 5-15 minutes after payment verification." },
            { q: "Is it safe to buy from SubStoreBD?", a: "Absolutely. We are a trusted provider with hundreds of satisfied customers across Bangladesh." },
            { q: "What payment methods do you accept?", a: "We accept bKash, Nagad, and Rocket (Personal and Merchant)." },
            { q: "What if my account stops working?", a: "We provide full replacement warranty for the entire duration of your subscription." }
          ].map((faq, i) => (
            <div key={i} className="p-6 border-b border-white/5 hover:bg-white/5 transition-colors rounded-xl">
              <h4 className="font-bold text-white mb-2 flex items-start gap-3">
                <span className="text-primary-container mt-1 material-symbols-outlined text-sm">help</span>
                {faq.q}
              </h4>
              <p className="text-tertiary pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
