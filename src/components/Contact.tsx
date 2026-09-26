import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import travelBg from '../assets/images/travel_cinematic_1790437423832.jpg';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const { theme } = useTheme();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: initialService || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const serviceOptions = [
    'AI Product Ads & Commercials',
    'AI Cinematic Videos',
    'Social Media Videos',
    'Custom AI Video Solutions',
    'Brand & Fashion Visuals',
    'Creative Direction & Concept'
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-[#060D17]">
      {/* Background Cinematic Visual (Traveler atop mountain peak from Alps Odyssey) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src={travelBg}
          alt="Cinematic background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_32%] opacity-70 md:opacity-85 mix-blend-luminosity filter brightness-90 contrast-110"
        />
        {/* Directional and radial gradients to blend softly and guarantee legible text/form */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D17] via-[#060D17]/75 to-[#060D17]/95 lg:from-[#060D17] lg:via-[#060D17]/40 lg:to-[#060D17]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-transparent to-[#060D17]/90" />
        <div className="absolute inset-0 bg-[#060D17]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy & Signature Handwriting */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            {/* Tagline / Kicker */}
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#38BDF8] uppercase mb-4">
              LET'S WORK TOGETHER
            </span>

            {/* Main Headline */}
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6">
              Ready to Create <br className="hidden sm:inline" />
              Something <span className="text-[#38BDF8]">Amazing?</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mb-10">
              Have a project in mind? Whether it's a product ad, brand video, or a creative idea,
              I'd love to hear from you. Let's turn your vision into a stunning AI video.
            </p>

            {/* Handwritten Signature Stamp */}
            <div className="pt-2 select-none">
              <div className="inline-block transform -rotate-6">
                <div className="font-handwriting text-3xl sm:text-4xl text-[#38BDF8] leading-[1.1] font-bold tracking-wide drop-shadow-[0_2px_12px_rgba(56,189,248,0.35)]">
                  <div>Your Vision</div>
                  <div className="pl-3 sm:pl-4">My Creativity</div>
                </div>
                {/* Hand-drawn brush flourish underline */}
                <svg
                  className="w-32 sm:w-44 h-4 text-[#38BDF8] ml-2 mt-1 drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C42 3 105 2 157 11"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 12C56 7 118 7 148 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Glassmorphic Inquiry Form */}
          <div className="lg:col-span-6 w-full flex justify-end">
            <div className="w-full max-w-xl bg-[#091220]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl shadow-black/80">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        service: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-[#38BDF8] text-[#38BDF8] text-xs font-semibold uppercase tracking-wider hover:bg-[#38BDF8] hover:text-[#05070A] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#060D17]/95 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#060D17]/95 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#060D17]/95 border border-white/10 text-sm text-white focus:outline-none focus:border-[#38BDF8] transition-colors appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled className="text-slate-500 bg-[#060D17]">
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#060D17] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-[#060D17]/95 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                    />
                  </div>

                  {/* Row 4: Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-full bg-[#38BDF8] hover:bg-[#0ea5e9] text-[#05070A] font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] disabled:opacity-50"
                    >
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-4 h-4 translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
