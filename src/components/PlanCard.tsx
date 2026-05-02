'use client';

import { useState } from 'react';
import { getWhatsAppLink } from '@/lib/services';

export default function PlanCard({ plan, service, recommendation }: {
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

      <div className="flex gap-2 w-full">
        <a
          href={getWhatsAppLink(
            service.name,
            `${plan.duration} / ${plan.screens}`,
            plan.price
          )}
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          onTouchStart={() => setShowTip(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl font-label-bold text-white transition-all active:scale-95 border text-sm"
          style={
            plan.popular
              ? { backgroundColor: service.color, borderColor: service.color }
              : { borderColor: `${service.color}50`, backgroundColor: `${service.color}10` }
          }
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Buy
        </a>
        <a
          href="https://m.me/100083546743661"
          target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-[#1877F2]/10 border border-[#1877F2]/30 hover:bg-[#1877F2] text-white hover:text-white font-label-bold rounded-xl transition-all active:scale-95 text-sm"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.923 1.523 5.517 3.868 7.227V22l3.528-1.928c.833.23 1.706.353 2.604.353 5.523 0 10-4.145 10-9.26S17.523 2 12 2zm1.096 12.338l-2.775-2.96-5.418 2.96 5.962-6.33 2.81 2.96 5.385-2.96-5.964 6.33z"/>
          </svg>
          Buy
        </a>
      </div>
    </div>
  );
}
