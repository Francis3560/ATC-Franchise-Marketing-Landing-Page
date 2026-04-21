import React from 'react';
import { Quote } from 'lucide-react';

const stats = [
  { value: '60%',  label: 'Faster credentialing vs. industry average' },
  { value: '100%', label: 'On-time payroll, every single cycle' },
  { value: '2x',   label: 'Faster time-to-fill for clinical roles' },
  { value: '4',    label: 'ATC franchises actively supported today' },
];

const testimonial = {
  quote: "Working with the VizX team has been a truly collaborative experience. They don't just execute tasks but they take the time to understand our vision and work alongside us to bring it to life. Their support, responsiveness, and team-first mindset have made them a trusted extension of our internal team.",
  author: 'Cassidy Keith',
  role: 'VP · ATC Healthcare West',
  avatar: 'https://res.cloudinary.com/dvkt0lsqb/image/upload/v1776698710/Vizx_B2B_Posts_33_uaqzhk.png',
};

export default function Results() {
  return (
    <section id="results" className="py-12 lg:py-20 bg-[#002238] dark:bg-white">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
          Results that speak
        </p>

        {/* Heading */}
        <h2 className="font-heading font-bold leading-[1.06] tracking-tight text-white dark:text-[#222222] text-[clamp(2.4rem,4.5vw,3.6rem)] mb-5">
          Numbers from inside
          <br />
          <span className="text-primary">the ATC network.</span>
        </h2>

        {/* Descriptive text */}
        <p className="text-[15px] text-white/75 dark:text-[#222222]/75 leading-[1.7] max-w-2xl mb-10">
          These aren't generic benchmarks — they reflect what we've delivered for ATC franchise partners running the same model you run.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 rounded-2xl border border-white/10 dark:border-[#BFC0C0] bg-white/5 dark:bg-[#f4f4f5] transition-all duration-300 hover:border-primary/25 group"
                >
                  <span className="font-heading font-bold text-[2.6rem] leading-none mb-2 text-[#ADD422] dark:text-[#ADD422] group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-[12.5px] text-white/50 dark:text-[#222222]/50 leading-[1.45]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Testimonial card */}
          <div className="flex flex-col gap-5">
            {/* Testimonial card - slightly different dark or white depending on section */}
            <div className="relative rounded-2xl p-8 overflow-hidden shadow-xl bg-white/10 dark:bg-[#f4f4f5]/50 border border-white/10 dark:border-[#BFC0C0]">
              {/* Decorative dot grid */}
              <div
                className="pointer-events-none absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                }}
              />

              <Quote size={32} className="mb-5 text-[#ADD422]" />

              <p className="text-[14.5px] text-white dark:text-[#222222] leading-[1.75] mb-7">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <p className="font-heading font-bold text-[13.5px] text-white dark:text-[#222222] leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="text-[12px] text-white/50 dark:text-[#222222]/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Subtle primary glow at bottom */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-primary/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}