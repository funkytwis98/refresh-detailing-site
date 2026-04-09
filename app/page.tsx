"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "@/lib/supabase";

/* ------------------------------------------------------------------ */
/*  Fade-up animation wrapper                                         */
/* ------------------------------------------------------------------ */
function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                                */
/* ------------------------------------------------------------------ */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl tracking-wide text-white"
        >
          Refresh
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-[#999] hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-[#999] hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-sm text-[#999] hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-[#999] hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm bg-[#58b4e6] text-[#0a0a0a] px-5 py-2 rounded-full font-medium hover:bg-[#3a8fbf] transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile: just Book Now */}
        <a
          href="#contact"
          className="md:hidden text-sm bg-[#58b4e6] text-[#0a0a0a] px-5 py-2 rounded-full font-medium hover:bg-[#3a8fbf] transition-colors"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-6">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,180,230,0.08)_0%,_transparent_70%)]" />

      <div className="relative text-center max-w-3xl mx-auto">
        <FadeUp>
          <p className="text-sm tracking-[0.25em] uppercase text-[#58b4e6] mb-6">
            Mobile Detailing &bull; Chattanooga, TN
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-normal leading-[1.1] mb-6">
            A Detail That Comes
            <br />
            <span className="italic text-[#58b4e6]">To You</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-lg md:text-xl text-[#999] max-w-xl mx-auto mb-10">
            Premium mobile detailing for autos, RVs, and boats. We bring the
            shine to your driveway — no drop-off needed.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#58b4e6] text-[#0a0a0a] px-8 py-3.5 rounded-full font-medium text-base hover:bg-[#3a8fbf] transition-colors"
            >
              Book Your Detail
            </a>
            <a
              href="tel:4239334784"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/[0.06] transition-colors"
            >
              Call Now — (423) 933-4784
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "Autos",
    description:
      "Sedans, SUVs, trucks — full interior and exterior details that make your daily driver feel brand new.",
    icon: (
      <svg
        className="w-8 h-8 text-[#58b4e6]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-4.5 0V5.625c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v12m10.125-9h3.375"
        />
      </svg>
    ),
  },
  {
    title: "RVs",
    description:
      "Road trip ready. We handle the big rigs — full wash, wax, and interior deep clean for your home on wheels.",
    icon: (
      <svg
        className="w-8 h-8 text-[#58b4e6]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218"
        />
      </svg>
    ),
  },
  {
    title: "Boats",
    description:
      "From pontoons to ski boats — hull cleaning, interior refresh, and UV protection to keep you lake-ready.",
    icon: (
      <svg
        className="w-8 h-8 text-[#58b4e6]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m0 0a8.961 8.961 0 0 1 6.075 2.372L21 10.5H3l2.925-2.878A8.961 8.961 0 0 1 12 5.25Zm-9 15c1.5 1.5 3.5 2.25 6 2.25s4.5-.75 6-2.25c1.5 1.5 3 2.25 3 2.25M3 20.25s1.5-.75 3-2.25"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-sm tracking-[0.25em] uppercase text-[#58b4e6] text-center mb-4">
            What We Detail
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-center mb-16">
            Our Services
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={0.1 * (i + 1)}>
              <div className="group bg-[#141414] border border-[#222] rounded-2xl p-8 hover:border-[#58b4e6]/30 hover:bg-[#1a1a1a] transition-all duration-300">
                {/* Icon placeholder */}
                <div className="w-14 h-14 rounded-xl bg-[#58b4e6]/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-[#999] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */
const steps = [
  {
    number: "01",
    title: "Book Online or Call",
    description:
      "Fill out the form below or give us a call. Tell us about your vehicle and what it needs.",
  },
  {
    number: "02",
    title: "We Come to You",
    description:
      "We arrive at your location fully equipped — home, office, marina, wherever works best.",
  },
  {
    number: "03",
    title: "Enjoy the Shine",
    description:
      "Sit back while we work. You'll get a walkthrough when we're done so you can see every detail.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 px-6 border-t border-[#222]"
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-sm tracking-[0.25em] uppercase text-[#58b4e6] text-center mb-4">
            Simple Process
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-center mb-16">
            How It Works
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={0.1 * (i + 1)}>
              <div className="text-center md:text-left">
                <span className="inline-block font-[family-name:var(--font-playfair)] text-5xl text-[#58b4e6]/20 mb-4">
                  {step.number}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-[#999] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Refresh (About)                                                */
/* ------------------------------------------------------------------ */
function WhyRefresh() {
  return (
    <section id="about" className="py-28 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <p className="text-sm tracking-[0.25em] uppercase text-[#58b4e6] mb-4">
            Why Refresh
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl mb-8">
            Detailing Done Different
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-[#999] leading-relaxed mb-8">
            Refresh Detailing Service was started by Louis Ramirez with a simple
            idea: you shouldn&apos;t have to rearrange your day to get your car
            cleaned. We bring professional-grade equipment and premium products
            directly to your location — whether that&apos;s your driveway, your
            office parking lot, or your slip at the marina.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-lg text-[#999] leading-relaxed mb-12">
            Based in Chattanooga, TN, we take pride in treating every vehicle
            like it&apos;s our own. From a daily commuter that needs some love to
            an RV getting prepped for the season — we&apos;ve got you covered.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "500+", label: "Vehicles Detailed" },
              { stat: "5★", label: "Average Rating" },
              { stat: "100%", label: "Mobile Service" },
              { stat: "Same Day", label: "Availability" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#58b4e6] mb-1">
                  {item.stat}
                </p>
                <p className="text-sm text-[#999]">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact / Book Form                                                */
/* ------------------------------------------------------------------ */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle_type: "",
    service: "",
    address: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const { error } = await supabase.from("inbox_items").insert({
        type: "website_form",
        source: "refresh-detailing-website",
        client_id: "c2000000-0000-0000-0000-000000000002",
        status: "new",
        content: JSON.stringify(formData),
        created_at: new Date().toISOString(),
      });

      if (error) throw error;
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        vehicle_type: "",
        service: "",
        address: "",
        notes: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-[#141414] border border-[#222] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#58b4e6]/50 focus:ring-1 focus:ring-[#58b4e6]/50 transition-colors";

  if (status === "success") {
    return (
      <section id="contact" className="py-28 px-6 border-t border-[#222]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <div className="bg-[#141414] border border-[#222] rounded-2xl p-12">
              <div className="w-16 h-16 bg-[#58b4e6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#58b4e6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-3">
                Request Received!
              </h3>
              <p className="text-[#999] mb-6">
                We&apos;ll be in touch shortly to confirm your detail. If you
                need us sooner, give us a call.
              </p>
              <a
                href="tel:4239334784"
                className="inline-flex items-center justify-center border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/[0.06] transition-colors"
              >
                (423) 933-4784
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6 border-t border-[#222]">
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <p className="text-sm tracking-[0.25em] uppercase text-[#58b4e6] text-center mb-4">
            Get Started
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-center mb-4">
            Book Your Detail
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[#999] text-center mb-12">
            Fill out the form and we&apos;ll reach out to confirm your
            appointment. Or call us directly at{" "}
            <a
              href="tel:4239334784"
              className="text-[#58b4e6] hover:underline"
            >
              (423) 933-4784
            </a>
            .
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <select
                name="vehicle_type"
                required
                value={formData.vehicle_type}
                onChange={handleChange}
                className={`${inputClasses} ${!formData.vehicle_type ? "text-[#666]" : ""}`}
              >
                <option value="" disabled>
                  Vehicle Type
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV/Truck">SUV / Truck</option>
                <option value="RV">RV</option>
                <option value="Boat">Boat</option>
              </select>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={`${inputClasses} ${!formData.service ? "text-[#666]" : ""}`}
              >
                <option value="" disabled>
                  Service Needed
                </option>
                <option value="Full Detail">Full Detail</option>
                <option value="Exterior Only">Exterior Only</option>
                <option value="Interior Only">Interior Only</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            <input
              type="text"
              name="address"
              placeholder="Service Address (where should we come?)"
              required
              value={formData.address}
              onChange={handleChange}
              className={inputClasses}
            />

            <textarea
              name="notes"
              placeholder="Any notes? (optional)"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-[#58b4e6] text-[#0a0a0a] py-3.5 rounded-full font-medium text-base hover:bg-[#3a8fbf] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Request a Quote"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-[#222] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-playfair)] text-lg mb-1">
            Refresh Detailing Service
          </p>
          <p className="text-sm text-[#999]">
            Chattanooga, TN &amp; surrounding areas
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:4239334784"
            className="text-sm text-[#999] hover:text-white transition-colors"
          >
            (423) 933-4784
          </a>
          <a
            href="#contact"
            className="text-sm bg-[#58b4e6] text-[#0a0a0a] px-5 py-2 rounded-full font-medium hover:bg-[#3a8fbf] transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#222] text-center">
        <p className="text-xs text-[#666]">
          &copy; {new Date().getFullYear()} Refresh Detailing Service. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyRefresh />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
