import Link from 'next/link';

interface HowToBuyProps {
  accentColor?: string;
}

export default function HowToBuy({ accentColor = '#E50914' }: HowToBuyProps) {
  const steps = [
    { icon: 'touch_app', label: 'Click "Buy Now"', desc: 'Tap the button for your plan' },
    { icon: 'chat', label: 'Chat on WhatsApp', desc: 'Message us on 01604929025' },
    { icon: 'check_circle', label: 'Get Instant Access', desc: 'Delivered in 5–15 minutes' },
  ];

  return (
    <div className="glass rounded-2xl p-8 text-center border border-white/10">
      <h3 className="font-headline-md text-white mb-6 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined" style={{ color: accentColor }}>info</span>
        How to Order
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 text-center">
        {steps.map((step) => (
          <div key={step.icon} className="space-y-2 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" style={{ color: accentColor }}>
                {step.icon}
              </span>
            </div>
            <p className="text-white font-label-bold">{step.label}</p>
            <p className="text-tertiary text-sm leading-tight">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/support" className="inline-flex items-center gap-2 text-primary-container font-bold hover:underline">
          <span className="material-symbols-outlined text-sm">help</span>
          View Detailed Guide
        </Link>
        <span className="hidden sm:inline text-white/20">|</span>
        <Link href="/" className="inline-flex items-center gap-2 text-tertiary hover:text-white transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}
