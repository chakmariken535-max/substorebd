import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Subscription Price Chart (BDT)',
  description:
    'Compare prices for all digital subscriptions in Bangladesh. Netflix, YouTube Premium, Free Fire, PUBG UC & more — all in BDT. SubStoreBD.',
  keywords: [
    'netflix price bangladesh 2024',
    'youtube premium price bd',
    'streaming subscription price bangladesh',
    'free fire diamond price bd',
    'pubg uc price bangladesh',
    'digital subscription price chart bd',
  ],
  alternates: { canonical: 'https://substorebd.com/pricing' },
  openGraph: {
    title: 'SubStoreBD Price Chart — All Subscriptions in BDT',
    description: 'Compare all digital subscription prices in Bangladesh. Cheapest BDT rates. Instant delivery.',
    url: 'https://substorebd.com/pricing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SubStoreBD Price Chart' }],
  },
};

export default function PricingPage() {
  // Convert services object to an array for easier mapping
  const pricingData = Object.values(services);

  return (
    <main className="pt-24 md:pt-32 pb-16 px-4 md:px-8 max-w-[1200px] mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">SubStoreBD Price Chart</h1>
        <p className="text-tertiary text-sm md:text-base max-w-2xl mx-auto">
          Get the best value for your favorite streaming services. Premium subscriptions at local competitive rates in BDT (৳).
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {pricingData.map((service) => (
          <div key={service.slug} className="glass-card rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col">
            {/* Service Header */}
            <div className="p-md flex items-center justify-between border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h2 className="font-headline-md text-white">{service.name}</h2>
              </div>
              <span className="text-label-sm font-label-bold px-3 py-1 rounded-full bg-white/10 text-tertiary">
                {service.plans.length} Options
              </span>
            </div>

            {/* Price List */}
            <div className="p-md space-y-3 flex-grow">
              <div className="grid grid-cols-3 text-label-sm font-label-bold text-tertiary px-4 mb-2">
                <span>Duration</span>
                <span>Type/Screens</span>
                <span className="text-right">Price</span>
              </div>
              
              {service.plans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-3 items-center p-4 rounded-xl transition-all group/row border ${
                    plan.popular ? 'bg-white/5 border-white/10 shadow-lg shadow-black/20' : 'border-transparent hover:bg-white/5'
                  }`}
                >
                  <span className="text-white font-body-md flex items-center gap-2">
                    {plan.duration}
                    {plan.popular && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                    )}
                  </span>
                  <span className="text-tertiary text-body-md">{plan.screens}</span>
                  <div className="text-right">
                    <span className={`font-headline-md font-bold text-xl ${plan.popular ? 'text-primary-container' : 'text-white'}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Action */}
            <div className="p-md border-t border-white/5 bg-white/2">
              <Link 
                href={service.slug === 'netflix' ? '/netflix' : `/service/${service.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/10 text-white font-label-bold transition-all active:scale-[0.98]"
              >
                Buy {service.name} Now
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Information Footer */}
      <div className="mt-xl glass p-lg rounded-2xl border-primary-container/20 border text-center">
        <h3 className="font-headline-md text-white mb-base flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary-container">info</span>
          Payment Information
        </h3>
        <p className="text-tertiary max-w-3xl mx-auto font-body-md">
          Prices are fixed in Bangladeshi Taka (BDT). We accept BKash, Nagad, and Rocket payments. 
          After purchase, you will receive your account credentials via WhatsApp or Email within 5-15 minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-lg">
          <Link href="whatsapp://send?phone=8801604929025" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-label-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-[#25D366]/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </Link>
          <Link href="https://m.me/100083546743661" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-label-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-[#1877F2]/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.923 1.523 5.517 3.868 7.227V22l3.528-1.928c.833.23 1.706.353 2.604.353 5.523 0 10-4.145 10-9.26S17.523 2 12 2zm1.096 12.338l-2.775-2.96-5.418 2.96 5.962-6.33 2.81 2.96 5.385-2.96-5.964 6.33z"/>
            </svg>
            Facebook
          </Link>
          <Link href="/support" className="px-6 py-3 border border-white/10 bg-white/5 text-white font-label-bold rounded-xl hover:bg-white/10 transition-all">
            How it Works
          </Link>
        </div>
      </div>
    </main>
  );
}
