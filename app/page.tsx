"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "@/lib/supabase";

/* ------------------------------------------------------------------ */
/*  Fade-up animation wrapper  (threshold 0.15)                       */
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
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section divider                                                    */
/* ------------------------------------------------------------------ */
function Divider() {
  return <div className="w-full" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />;
}

/* ------------------------------------------------------------------ */
/*  Nav  — frosted glass, sticky                                       */
/* ------------------------------------------------------------------ */
function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(10,10,10,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl tracking-[0.04em] text-white"
        >
          REFRESH
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              className="text-[13px] text-[#999] hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] font-semibold transition-opacity duration-200 hover:opacity-[0.88]"
            style={{
              backgroundColor: "#f5f5f7",
              color: "#0a0a0a",
              borderRadius: 980,
              padding: "8px 20px",
            }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile: just Book Now */}
        <a
          href="#contact"
          className="md:hidden text-[13px] font-semibold transition-opacity duration-200 hover:opacity-[0.88]"
          style={{
            backgroundColor: "#f5f5f7",
            color: "#0a0a0a",
            borderRadius: 980,
            padding: "8px 20px",
          }}
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="relative text-center max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-[13px] tracking-[0.3em] uppercase text-[#58b4e6] mb-8">
            Mobile Detailing &bull; Chattanooga, TN
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1
            className="font-[family-name:var(--font-playfair)] font-normal uppercase leading-[0.95] mb-3"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "-0.02em" }}
          >
            Refresh
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-[#999] mb-10">
            Detailing Service
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="text-lg md:text-xl text-[#999] max-w-xl mx-auto mb-14 leading-relaxed">
            Premium mobile detailing for autos, RVs, and boats. We bring the
            shine to your driveway — no drop-off needed.
          </p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-semibold text-[15px] transition-opacity duration-200 hover:opacity-[0.88]"
              style={{
                backgroundColor: "#f5f5f7",
                color: "#0a0a0a",
                borderRadius: 980,
                padding: "18px 36px",
              }}
            >
              Book Your Detail
            </a>
            <a
              href="tel:4239334784"
              className="inline-flex items-center justify-center font-medium text-[15px] text-[#58b4e6] transition-opacity duration-200 hover:opacity-[0.7]"
              style={{
                border: "1px solid #58b4e6",
                borderRadius: 980,
                padding: "18px 36px",
                backgroundColor: "transparent",
              }}
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
      <svg className="w-10 h-10 text-white/[0.15]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-4.5 0V5.625c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v12m10.125-9h3.375" />
      </svg>
    ),
  },
  {
    title: "RVs",
    description:
      "Road trip ready. We handle the big rigs — full wash, wax, and interior deep clean for your home on wheels.",
    icon: (
      <svg className="w-10 h-10 text-white/[0.15]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218" />
      </svg>
    ),
  },
  {
    title: "Boats",
    description:
      "From pontoons to ski boats — hull cleaning, interior refresh, and UV protection to keep you lake-ready.",
    icon: (
      <svg className="w-10 h-10 text-white/[0.15]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 0a8.961 8.961 0 0 1 6.075 2.372L21 10.5H3l2.925-2.878A8.961 8.961 0 0 1 12 5.25Zm-9 15c1.5 1.5 3.5 2.25 6 2.25s4.5-.75 6-2.25c1.5 1.5 3 2.25 3 2.25M3 20.25s1.5-.75 3-2.25" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="px-6" style={{ padding: "120px 24px", backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[13px] tracking-[0.3em] uppercase text-[#58b4e6] text-center mb-5">
            What We Detail
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-center mb-20">
            Our Services
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={0.1 * (i + 1)}>
              <div
                className="group overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {/* Image placeholder area */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {service.icon}
                </div>
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#999] leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It Works  — numbered circles with connecting line              */
/* ------------------------------------------------------------------ */
const steps = [
  {
    number: "1",
    title: "Book Online or Call",
    description:
      "Fill out the form below or give us a call. Tell us about your vehicle and what it needs.",
  },
  {
    number: "2",
    title: "We Come to You",
    description:
      "We arrive at your location fully equipped — home, office, marina, wherever works best.",
  },
  {
    number: "3",
    title: "Enjoy the Shine",
    description:
      "Sit back while we work. You'll get a walkthrough when we're done so you can see every detail.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6" style={{ padding: "120px 24px", backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[13px] tracking-[0.3em] uppercase text-[#58b4e6] text-center mb-5">
            Simple Process
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-center mb-20">
            How It Works
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute"
            style={{
              top: 28,
              left: "calc(16.666% + 28px)",
              right: "calc(16.666% + 28px)",
              height: 1,
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          />

          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={0.12 * (i + 1)}>
                <div className="text-center">
                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8"
                    style={{
                      border: "2px solid #58b4e6",
                      backgroundColor: "#0a0a0a",
                    }}
                  >
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-[#58b4e6]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#999] leading-relaxed text-[15px] max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Refresh (About) — NO stats section                             */
/* ------------------------------------------------------------------ */
function WhyRefresh() {
  return (
    <section id="about" className="px-6" style={{ padding: "120px 24px", backgroundColor: "#0a0a0a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <p className="text-[13px] tracking-[0.3em] uppercase text-[#58b4e6] mb-5">
            Why Refresh
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl mb-10">
            Detailing Done Different
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-[#999] leading-[1.8] mb-8">
            Refresh Detailing Service was started by Louis Ramirez with a simple
            idea: you shouldn&apos;t have to rearrange your day to get your car
            cleaned. We bring professional-grade equipment and premium products
            directly to your location — whether that&apos;s your driveway, your
            office parking lot, or your slip at the marina.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-lg text-[#999] leading-[1.8]">
            Based in Chattanooga, TN, we take pride in treating every vehicle
            like it&apos;s our own. From a daily commuter that needs some love to
            an RV getting prepped for the season — we&apos;ve got you covered.
          </p>
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#141414",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: "14px 16px",
    color: "#f5f5f7",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#58b4e6";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
  };

  if (status === "success") {
    return (
      <section id="contact" className="px-6" style={{ padding: "120px 24px", backgroundColor: "#0a0a0a" }}>
        <div className="max-w-xl mx-auto text-center">
          <FadeUp>
            <div style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 64 }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: "rgba(88,180,230,0.1)" }}>
                <svg className="w-8 h-8 text-[#58b4e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Request Received!
              </h3>
              <p className="text-[#999] mb-8 leading-relaxed">
                We&apos;ll be in touch shortly to confirm your detail. If you
                need us sooner, give us a call.
              </p>
              <a
                href="tel:4239334784"
                className="inline-flex items-center justify-center font-medium text-[#58b4e6] transition-opacity duration-200 hover:opacity-[0.7]"
                style={{
                  border: "1px solid #58b4e6",
                  borderRadius: 980,
                  padding: "14px 28px",
                  backgroundColor: "transparent",
                }}
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
    <section id="contact" className="px-6" style={{ padding: "120px 24px", backgroundColor: "#0a0a0a" }}>
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <p className="text-[13px] tracking-[0.3em] uppercase text-[#58b4e6] text-center mb-5">
            Get Started
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-center mb-5">
            Book Your Detail
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[#999] text-center mb-14 text-[15px]">
            Fill out the form and we&apos;ll reach out to confirm your
            appointment. Or call us directly at{" "}
            <a href="tel:4239334784" className="text-[#58b4e6] hover:underline">
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputStyle}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputStyle}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <select
                name="vehicle_type"
                required
                value={formData.vehicle_type}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ ...inputStyle, color: formData.vehicle_type ? "#f5f5f7" : "#555" }}
              >
                <option value="" disabled>Vehicle Type</option>
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ ...inputStyle, color: formData.service ? "#f5f5f7" : "#555" }}
              >
                <option value="" disabled>Service Needed</option>
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={inputStyle}
            />

            <textarea
              name="notes"
              placeholder="Any notes? (optional)"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ ...inputStyle, resize: "none" as const }}
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full font-semibold text-[15px] transition-opacity duration-200 hover:opacity-[0.88] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#f5f5f7",
                color: "#0a0a0a",
                borderRadius: 980,
                padding: "18px 36px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {status === "submitting" ? "Sending..." : "Request a Quote"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center pt-2">
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
/*  Footer  — minimal                                                  */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-[family-name:var(--font-playfair)] text-lg tracking-[0.06em] uppercase mb-3">
          Refresh
        </p>
        <p className="text-[13px] text-[#666] mb-8">
          Chattanooga, TN
        </p>
        <p className="text-[12px] text-[#444]">
          &copy; 2026 Refresh Detailing Service
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
        <Divider />
        <Services />
        <Divider />
        <HowItWorks />
        <Divider />
        <WhyRefresh />
        <Divider />
        <Contact />
        <Divider />
      </main>
      <Footer />
    </>
  );
}
