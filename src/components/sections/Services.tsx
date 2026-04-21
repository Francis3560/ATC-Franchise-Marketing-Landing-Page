import React from 'react';
import { Clock, CreditCard, Users, ArrowDown } from 'lucide-react';

const services = [
  {
    tag: 'Credentialing',
    icon: Clock,
    description: 'Staff onboarded fast, compliantly, and completely — without the usual delays.',
    highlight: '60% faster turnaround',
    bullets: [
      'Primary source verification',
      'License & certification tracking',
      'Joint Commission alignment',
      'Ongoing re-credentialing management',
    ],
  },
  {
    tag: 'Payroll',
    icon: CreditCard,
    description: 'Fully managed payroll built for the ATC staffing model. Accurate, on time, every cycle.',
    highlight: '100% on-time accuracy',
    bullets: [
      'Weekly and daily payroll processing',
      'Tax compliance & filings',
      'Direct deposit & detailed reporting',
      'Multi-state payroll support',
    ],
  },
  {
    tag: 'Recruitment',
    icon: Users,
    description: 'Qualified healthcare staff placed faster, with stronger retention across the board.',
    highlight: '2x faster time-to-fill',
    bullets: [
      'RN, LPN, CNA & allied health',
      'Thorough screening & vetting',
      'ATC culture fit assessment',
      'Ongoing talent pipeline management',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.22em] mb-5">
            What we do
          </p>
          <h2 className="font-heading font-bold leading-[1.06] tracking-tight text-foreground text-[clamp(2.4rem,4.5vw,3.6rem)]">
            Three services.
            <br />
            <span className="text-primary">One trusted partner.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col p-8 rounded-2xl bg-muted/40 border border-foreground/5"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#ADD422] flex items-center justify-center mb-6 text-foreground/70">
                  <Icon size={22} />
                </div>

                {/* Service Tag */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {service.tag}
                </h3>
                
                {/* Service Description */}
                <p className="text-foreground/80 text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Highlight Badge */}
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20 mb-8">
                  <ArrowDown size={14} className="text-primary" />
                  <span className="text-primary text-[13px] font-bold tracking-tight">
                    {service.highlight}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5 mt-auto">
                  {service.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2.5">
                      <span className="text-primary text-[10px] mt-1.5">•</span>
                      <span className="text-muted-foreground text-[13.5px] leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}