import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function CTASection() {
  const { openBooking } = useBooking();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const subject = encodeURIComponent("Discovery Meeting Request - ATC Franchise");
      const body = encodeURIComponent(`Hi Brian,\n\n I'd like to schedule a discovery meeting regarding our ATC franchise.\n\nMy contact email: ${email}\n\nBest regards,`);
      window.location.href = `mailto:brian@vizxglobal.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  return (
    <section id="book" className="relative overflow-hidden py-16 lg:py-20 bg-background">
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-xl mx-auto text-center">

          {/* Label */}
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.22em] mb-5">
            Get in touch
          </p>

          {/* Headline */}
          <h2 className="font-heading font-bold leading-[1.06] tracking-tight text-foreground text-[clamp(2.4rem,4.5vw,3.6rem)] mb-5">
            Let's talk about
            <br />
            <span className="text-primary">your franchise.</span>
          </h2>

          {/* Description */}
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8 max-w-sm mx-auto">
            15 minutes is all it takes to find the fit. No pitch — just a straight conversation about where we can help.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full h-12 px-4 rounded-xl text-[14px] bg-muted border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[14px] font-bold bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:bg-accent hover:-translate-y-[2px] hover:shadow-xl whitespace-nowrap flex-shrink-0"
              >
                Book a call →
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-heading font-bold text-xl text-foreground">
                Thanks! We'll be in touch.
              </p>
              <p className="text-[13.5px] text-muted-foreground">
                Check your inbox — we typically respond within 1 business day.
              </p>
            </div>
          )}

          {/* Email alternative */}
          <p className="text-[13px] text-muted-foreground mt-6">
            or reach us directly
            <br />
            <a href="mailto:brian@vizxglobal.com" className="text-primary hover:underline font-medium">
              brian@vizxglobal.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}