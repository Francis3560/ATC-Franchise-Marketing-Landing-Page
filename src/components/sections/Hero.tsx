import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const stats = [
  { value: '60%',  label: 'Faster credentialing vs. industry average' },
  { value: '100%', label: 'On-time payroll accuracy, every cycle' },
  { value: '2X',   label: 'Faster time-to-fill for clinical roles' },
  { value: '4',    label: 'Active ATC franchises trust us today' },
];

export default function Hero() {
  const { openBooking } = useBooking();
  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {/* Ambient radial glows - using theme colors */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 90%, rgba(239,95,36,0.05) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 10%, rgba(239,95,36,0.04) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 pt-14 pb-0">

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">

          {/* LEFT: Copy */}
          <div>
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="text-primary text-[7px] leading-none">●</span>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.22em]">
                ATC Franchise Partner Services
              </span>
            </div>

            {/* Headline — uses --font-heading from index.css */}
            <h1 className="font-heading font-bold leading-[1.06] tracking-tight mb-6 text-foreground text-[clamp(2.6rem,4.8vw,4rem)]">
              Already inside
              <br />
              your network.
              <br />
              <span className="text-primary">Ready day one.</span>
            </h1>

            {/* Body copy */}
            <p className="text-[15px] leading-[1.72] mb-8 max-w-[370px] text-muted-foreground">
              We currently support{' '}
              <strong className="text-foreground font-bold">
                4 ATC Healthcare franchises
              </strong>{' '}
              across credentialing, payroll, and recruitment. We know the
              ecosystem — so there&apos;s no learning curve, no ramp‑up,
              no gaps.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={openBooking}
                className="inline-flex items-center gap-2 h-11 px-7 rounded-lg bg-primary text-primary-foreground text-[14px] font-bold shadow-lg transition-all duration-200 hover:-translate-y-[2px] hover:shadow-xl hover:bg-accent"
              >
                Book a 15‑min call
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 h-11 px-1 text-[14px] font-semibold transition-opacity duration-200 hover:opacity-65 group text-foreground"
              >
                See how we help
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* RIGHT: Hero image */}
          <div className="hidden lg:block self-end">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/11]">
              <img
                src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1776797391/cq5dam.web.768.432_aocctv.jpg"
                alt="ATC Healthcare franchise partner team in consultation"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 60%, var(--background) 100%)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 pb-14">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-xl px-5 py-5 bg-muted">
              <p className="font-heading font-bold text-[2rem] leading-none mb-2 text-[#ADD422]">
                {stat.value}
              </p>
              <p className="text-[11.5px] leading-[1.45] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}