'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';

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
          <Link href="whatsapp://send?phone=8801623246317" className="px-6 py-3 bg-primary-container text-on-primary-container font-label-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-primary-container/20">
            Contact Support
          </Link>
          <Link href="/support" className="px-6 py-3 border border-white/10 bg-white/5 text-white font-label-bold rounded-xl hover:bg-white/10 transition-all">
            How it Works
          </Link>
        </div>
      </div>
    </main>
  );
}
