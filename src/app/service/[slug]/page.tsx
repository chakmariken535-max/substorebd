'use client';

import { notFound } from 'next/navigation';
import { services, getWhatsAppLink, getRecommendationMessage } from '@/lib/services';
import HowToBuy from '@/components/HowToBuy';
import { use, useState } from 'react';

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services[slug];
  if (!service) notFound();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#131313] z-10" />
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        </div>
        <div className="container max-w-[1200px] mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            {service.badge && (
              <span
                className="inline-block px-4 py-1 rounded-full text-label-bold text-white text-sm font-bold uppercase tracking-widest"
                style={{ backgroundColor: service.color }}
              >
                {service.badge}
              </span>
            )}
            <h1 className="font-display-lg text-2xl md:text-5xl text-white font-black">{service.name}</h1>
            <p className="font-body-lg text-sm md:text-base text-gray-300 max-w-2xl mx-auto">{service.description}</p>
            <a
              href={getWhatsAppLink(service.name, 'Best Plan', 'Contact Us')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-label-bold text-white text-lg transition-all active:scale-95 shadow-xl"
              style={{ backgroundColor: service.color }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
        <h2 className="font-bold text-white text-lg md:text-2xl mb-6 text-center">What's Included</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {service.features.map((feature) => (
            <div key={feature} className="glass-card rounded-xl p-md flex flex-col items-center text-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${service.color}25` }}
              >
                <span className="material-symbols-outlined" style={{ color: service.color }}>
                  {service.icon}
                </span>
              </div>
              <p className="text-white font-body-md text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="font-bold text-white text-xl md:text-3xl">
            {service.name} Pricing — BDT (৳)
          </h2>
          <p className="text-tertiary mt-2 text-sm">Choose a plan and order instantly via WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {service.plans.map((plan, i) => {
            const recommendation = getRecommendationMessage(service.name, `${plan.duration} / ${plan.screens}`, plan.price, plan.popular);
            return (
              <PlanCard
                key={i}
                plan={plan}
                service={service}
                recommendation={recommendation}
              />
            );
          })}
        </div>
      </section>

      {/* How to Buy Component */}
      <section className="max-w-[800px] mx-auto px-8 py-xl mb-xl">
        <HowToBuy accentColor={service.color} />
      </section>
    </main>
  );
}

function PlanCard({ plan, service, recommendation }: {
  plan: { duration: string; screens: string; price: string; popular?: boolean };
  service: { name: string; color: string };
  recommendation: string;
}) {
  const [showTip, setShowTip] = useState(false);

  return (
    <div
      className={`relative glass-card rounded-2xl p-lg flex flex-col gap-6 text-center transition-all duration-300 hover:scale-[1.02] ${plan.popular ? 'ring-2' : ''}`}
      style={plan.popular ? { '--tw-ring-color': service.color } as React.CSSProperties : {}}
    >
      {plan.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-[10px] font-bold uppercase tracking-widest rounded-full"
          style={{ backgroundColor: service.color }}
        >
          Most Popular
        </div>
      )}

      <div>
        <p className="text-tertiary text-label-sm mb-1">{plan.duration}</p>
        <h3 className="font-headline-md text-white text-xl">{plan.screens}</h3>
      </div>

      <div className="text-4xl font-black text-white" style={{ color: plan.popular ? service.color : 'white' }}>
        {plan.price}
      </div>

      {/* Recommendation tip */}
      {showTip && (
        <div
          className="text-xs text-white/80 px-4 py-3 rounded-xl border border-white/10 leading-relaxed animate-pulse-once text-left"
          style={{ backgroundColor: `${service.color}20`, borderColor: `${service.color}40` }}
        >
          {recommendation}
        </div>
      )}

      <a
        href={getWhatsAppLink(
          service.name,
          `${plan.duration} / ${plan.screens}`,
          plan.price
        )}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onTouchStart={() => setShowTip(true)}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-label-bold text-white transition-all active:scale-95 border"
        style={
          plan.popular
            ? { backgroundColor: service.color, borderColor: service.color }
            : { borderColor: `${service.color}50`, backgroundColor: `${service.color}10` }
        }
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Buy Now on WhatsApp
      </a>
    </div>
  );
}
