import React from 'react';

const bullets = [
  {
    number: '01',
    title: 'No learning curve',
    description:
      'We know ATC platforms, compliance standards, and internal workflows before we start.',
  },
  {
    number: '02',
    title: 'Proven with ATC franchises',
    description:
      '4 active partners trust us with their most critical back-office operations right now.',
  },
  {
    number: '03',
    title: 'One partner, three services',
    description:
      'Credentialing, payroll, and recruitment — all under one accountable team.',
  },
  {
    number: '04',
    title: 'Scale without the overhead',
    description:
      'Grow your franchise headcount without growing your admin team — while achieving 64-70% cost savings through embedded operational support.',
  },
];

export default function WhyUs() {
  return (
    <section 
      id="why-us" 
      className="py-8 lg:py-12 bg-[#002238] dark:bg-white"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Heading */}
          <div>
            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
              The Difference
            </p>

            <h2 className="font-heading font-bold leading-[1.08] tracking-tight text-white dark:text-[#222222] text-[clamp(2.4rem,4.5vw,3.8rem)] mb-5">
              We&apos;re not a vendor.
              <br />
              We&apos;re <span className="text-primary">already inside.</span>
            </h2>

            <p className="text-[15px] text-white/75 dark:text-[#222222]/75 leading-[1.72] max-w-md mb-6">
              Most back-office partners spend weeks learning your systems. We already know them. We&apos;ve been embedded inside the ATC Healthcare network — which means <span className="font-bold text-white dark:text-[#222222]">we move at your speed, not ours.</span>
            </p>

            {/* Accent line */}
            <div className="w-14 h-[1.5px] bg-primary" />
          </div>

          {/* RIGHT: Numbered list */}
          <div className="flex flex-col">
            {bullets.map((item, i) => (
              <div
                key={i}
                className="border-t border-white/20 dark:border-[#BFC0C0] py-5 first:border-t-0"
              >
                <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-6">
                  {/* Number */}
                  <span className="flex items-center justify-center w-7 h-7 rounded bg-[#ADD422] text-[#002238] text-[11px] font-bold mt-1">
                    {item.number}
                  </span>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-heading font-bold text-[1.125rem] text-white dark:text-[#222222] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-white/60 dark:text-[#222222]/60 leading-[1.65] max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}