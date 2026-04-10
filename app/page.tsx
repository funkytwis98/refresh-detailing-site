"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "@/lib/supabase";

/* ═══════════════════════════════════════════════════════════════════ */
/*  ANIMATION PRIMITIVES                                              */
/* ═══════════════════════════════════════════════════════════════════ */

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  SHARED                                                            */
/* ═══════════════════════════════════════════════════════════════════ */

const WRAP = "max-w-[1200px] mx-auto px-[40px] max-sm:px-[24px]";

function Divider() {
  return (
    <div className={WRAP}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}

function SectionLabel({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <FadeUp delay={delay}>
      <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "#58b4e6", marginBottom: 16 }}>
        {children}
      </p>
    </FadeUp>
  );
}

function SectionTitle({ children, delay = 0.1 }: { children: React.ReactNode; delay?: number }) {
  return (
    <FadeUp delay={delay}>
      <h2
        className="font-[family-name:var(--font-playfair)]"
        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}
      >
        {children}
      </h2>
    </FadeUp>
  );
}

function SectionDesc({ children, delay = 0.2 }: { children: React.ReactNode; delay?: number }) {
  return (
    <FadeUp delay={delay}>
      <p style={{ fontSize: "1.05rem", color: "#a1a1a6", lineHeight: 1.65, maxWidth: 520 }}>
        {children}
      </p>
    </FadeUp>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  NAV                                                               */
/* ═══════════════════════════════════════════════════════════════════ */

function Nav() {
  const links = ["Services", "How It Works", "About", "Contact"];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,10,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className={`${WRAP} flex items-center justify-between`} style={{ height: 56 }}>
        <a href="#" className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#f5f5f7" }}>
          REFRESH
        </a>
        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              style={{ fontSize: "0.82rem", color: "#a1a1a6", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#f5f5f7"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#a1a1a6"; }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{ fontSize: "0.82rem", fontWeight: 600, background: "#f5f5f7", color: "#0a0a0a", borderRadius: 980, padding: "8px 20px", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}
          >
            Book Now
          </a>
        </div>
        <a
          href="#contact"
          className="md:hidden"
          style={{ fontSize: "0.82rem", fontWeight: 600, background: "#f5f5f7", color: "#0a0a0a", borderRadius: 980, padding: "8px 20px", textDecoration: "none" }}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  HERO                                                              */
/* ═══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a", paddingTop: 56 }}>
      <div style={{ textAlign: "center", maxWidth: 700, padding: "0 24px" }}>
        <FadeUp>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#58b4e6", marginBottom: 32 }}>
            Mobile Detailing &bull; Chattanooga, TN
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1
            className="font-[family-name:var(--font-playfair)]"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 400, letterSpacing: "0.06em", lineHeight: 0.95, marginBottom: 8, textTransform: "uppercase" }}
          >
            Refresh
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p
            className="font-[family-name:var(--font-playfair)]"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)", color: "#a1a1a6", letterSpacing: "0.12em", marginBottom: 28, textTransform: "uppercase" }}
          >
            Detailing Service
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p style={{ fontSize: "1.15rem", color: "#a1a1a6", fontWeight: 300, lineHeight: 1.6, maxWidth: 460, margin: "0 auto 48px" }}>
            Full and partial mobile detailing for autos, RVs, and boats. We come to you — wherever you are.
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: 16 }}>
            <a
              href="#contact"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#f5f5f7", color: "#0a0a0a", borderRadius: 980, padding: "16px 36px", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}
            >
              Book Your Detail
            </a>
            <a
              href="tel:4239334784"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid rgba(88,180,230,0.3)", color: "#58b4e6", borderRadius: 980, padding: "16px 36px", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "#58b4e6"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(88,180,230,0.3)"; }}
            >
              Call Now
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  SERVICES                                                          */
/* ═══════════════════════════════════════════════════════════════════ */

const svcData = [
  { title: "Autos", desc: "Sedans, SUVs, trucks — interior and exterior details that make your daily driver feel brand new.", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-4.5 0V5.625c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v12m10.125-9h3.375" },
  { title: "RVs", desc: "Road trip ready. Full wash, wax, and interior deep clean for your home on wheels.", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218" },
  { title: "Boats", desc: "From pontoons to ski boats — hull cleaning, interior refresh, and UV protection to keep you lake-ready.", icon: "M12 3v2.25m0 0a8.961 8.961 0 0 1 6.075 2.372L21 10.5H3l2.925-2.878A8.961 8.961 0 0 1 12 5.25Zm-9 15c1.5 1.5 3.5 2.25 6 2.25s4.5-.75 6-2.25c1.5 1.5 3 2.25 3 2.25M3 20.25s1.5-.75 3-2.25" },
];

function ServiceCard({ svc, i }: { svc: typeof svcData[0]; i: number }) {
  return (
    <FadeUp delay={0.1 * (i + 1)}>
      <div
        style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden", transition: "transform 0.3s, border-color 0.3s" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
      >
        <div style={{ aspectRatio: "4/3", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg style={{ width: 48, height: 48, color: "rgba(255,255,255,0.12)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
          </svg>
        </div>
        <div style={{ padding: 28 }}>
          <h3 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "1.35rem", marginBottom: 10, color: "#f5f5f7" }}>{svc.title}</h3>
          <p style={{ fontSize: "0.88rem", color: "#a1a1a6", lineHeight: 1.6 }}>{svc.desc}</p>
        </div>
      </div>
    </FadeUp>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: "120px 0", background: "#0a0a0a" }}>
      <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", paddingLeft: 40, paddingRight: 40 }}>
        <SectionLabel>What We Do</SectionLabel>
        <SectionTitle>Precision detailing for every vehicle.</SectionTitle>
        <SectionDesc>Whether it&apos;s your daily driver, weekend boat, or cross-country RV — we bring the detail to you with premium products and professional equipment.</SectionDesc>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24, marginTop: 64 }}>
          {svcData.map((s, i) => <ServiceCard key={s.title} svc={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  HOW IT WORKS                                                      */
/* ═══════════════════════════════════════════════════════════════════ */

const stepsData = [
  { n: "1", title: "Book Online or Call", desc: "Fill out the form below or give us a call. Tell us about your vehicle and what it needs." },
  { n: "2", title: "We Come to You", desc: "We arrive at your location fully equipped — home, office, marina, wherever works best." },
  { n: "3", title: "Enjoy the Shine", desc: "Sit back while we work. You\u2019ll get a walkthrough when we\u2019re done so you can see every detail." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "120px 0", background: "#0a0a0a", textAlign: "center" }}>
      <div className={WRAP}>
        <SectionLabel>Simple Process</SectionLabel>
        <SectionTitle>Three steps to spotless.</SectionTitle>
        <FadeUp delay={0.2}>
          <p style={{ fontSize: "1.05rem", color: "#a1a1a6", lineHeight: 1.65, maxWidth: 520, margin: "0 auto 64px" }}>
            We keep it simple so you don&apos;t have to think about it. Book, relax, and enjoy the results.
          </p>
        </FadeUp>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute" style={{ top: 36, left: "calc(16.666% + 36px)", right: "calc(16.666% + 36px)", height: 1, background: "rgba(255,255,255,0.08)" }} />

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 48 }}>
            {stepsData.map((s, i) => (
              <FadeUp key={s.n} delay={0.1 * (i + 1)}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", position: "relative", zIndex: 2 }}>
                    <span className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "1.5rem", color: "#58b4e6" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: 10, color: "#f5f5f7" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#a1a1a6", lineHeight: 1.6, maxWidth: 280, margin: "0 auto" }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  WHY REFRESH                                                       */
/* ═══════════════════════════════════════════════════════════════════ */

function WhyRefresh() {
  return (
    <section id="about" style={{ padding: "120px 0", background: "#0a0a0a", textAlign: "center" }}>
      <div className={WRAP} style={{ maxWidth: 800 }}>
        <SectionLabel>About</SectionLabel>
        <SectionTitle>Why Refresh?</SectionTitle>
        <FadeUp delay={0.2}>
          <p style={{ fontSize: "1.1rem", color: "#a1a1a6", lineHeight: 1.7, marginBottom: 28 }}>
            Refresh Detailing Service was started by Louis Ramirez with a simple idea: you shouldn&apos;t have to rearrange your day to get your car cleaned. We bring professional-grade equipment and premium products directly to your location — whether that&apos;s your driveway, your office parking lot, or your slip at the marina.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p style={{ fontSize: "1.1rem", color: "#a1a1a6", lineHeight: 1.7 }}>
            Based in Chattanooga, TN, we take pride in treating every vehicle like it&apos;s our own. From a daily commuter that needs some love to an RV getting prepped for the season — we&apos;ve got you covered.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  CONTACT FORM                                                      */
/* ═══════════════════════════════════════════════════════════════════ */

const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.78rem", color: "#a1a1a6", fontWeight: 500, marginBottom: 8 };
const fieldStyle: React.CSSProperties = { width: "100%", background: "#141414", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 16px", color: "#f5f5f7", fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s" };

function Contact() {
  const [fd, setFd] = useState({ name: "", phone: "", vehicle_type: "", service: "", address: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFd((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "#58b4e6"; };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const { error } = await supabase.from("inbox_items").insert({
        type: "website_form", source: "refresh-detailing-website",
        client_id: "c2000000-0000-0000-0000-000000000002",
        status: "new", content: JSON.stringify(fd), created_at: new Date().toISOString(),
      });
      if (error) throw error;
      setStatus("success");
      setFd({ name: "", phone: "", vehicle_type: "", service: "", address: "", notes: "" });
    } catch { setStatus("error"); }
  };

  if (status === "success") {
    return (
      <section id="contact" style={{ padding: "120px 0 160px", background: "#0a0a0a", textAlign: "center" }}>
        <div style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto", paddingLeft: 24, paddingRight: 24 }}>
          <FadeUp>
            <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "64px 40px" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(88,180,230,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg style={{ width: 32, height: 32, color: "#58b4e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "1.6rem", marginBottom: 12 }}>Request Received!</h3>
              <p style={{ color: "#a1a1a6", marginBottom: 24 }}>We&apos;ll be in touch shortly to confirm your detail.</p>
              <a href="tel:4239334784" style={{ color: "#58b4e6", border: "1px solid rgba(88,180,230,0.3)", borderRadius: 980, padding: "12px 28px", textDecoration: "none", display: "inline-block" }}>(423) 933-4784</a>
            </div>
          </FadeUp>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ padding: "120px 0 160px", background: "#0a0a0a", textAlign: "center" }}>
      <div style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto", paddingLeft: 24, paddingRight: 24 }}>
        <SectionLabel>Get Started</SectionLabel>
        <SectionTitle>Book your detail.</SectionTitle>
        <FadeUp delay={0.2}>
          <p style={{ fontSize: "1.05rem", color: "#a1a1a6", marginBottom: 48, lineHeight: 1.6 }}>
            Fill out the form and we&apos;ll reach out to confirm. Or call us at{" "}
            <a href="tel:4239334784" style={{ color: "#58b4e6", textDecoration: "none" }}>(423) 933-4784</a>.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <form onSubmit={submit} style={{ textAlign: "left" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input name="name" required placeholder="Your name" value={fd.name} onChange={set} onFocus={onFocus} onBlur={onBlur} style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input name="phone" type="tel" required placeholder="(423) 555-1234" value={fd.phone} onChange={set} onFocus={onFocus} onBlur={onBlur} style={fieldStyle} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Vehicle Type</label>
                <select name="vehicle_type" required value={fd.vehicle_type} onChange={set} onFocus={onFocus} onBlur={onBlur} style={{ ...fieldStyle, color: fd.vehicle_type ? "#f5f5f7" : "#555" }}>
                  <option value="" disabled>Select vehicle</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV/Truck">SUV / Truck</option>
                  <option value="RV">RV</option>
                  <option value="Boat">Boat</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Service</label>
                <select name="service" required value={fd.service} onChange={set} onFocus={onFocus} onBlur={onBlur} style={{ ...fieldStyle, color: fd.service ? "#f5f5f7" : "#555" }}>
                  <option value="" disabled>Select service</option>
                  <option value="Full Detail">Full Detail</option>
                  <option value="Exterior Only">Exterior Only</option>
                  <option value="Interior Only">Interior Only</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Address</label>
              <input name="address" required placeholder="Where should we come?" value={fd.address} onChange={set} onFocus={onFocus} onBlur={onBlur} style={fieldStyle} />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Notes</label>
              <textarea name="notes" rows={4} placeholder="Anything we should know? (optional)" value={fd.notes} onChange={set} onFocus={onFocus} onBlur={onBlur} style={{ ...fieldStyle, resize: "none" as const }} />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                disabled={status === "submitting"}
                style={{ maxWidth: 320, width: "100%", background: "#f5f5f7", color: "#0a0a0a", border: "none", borderRadius: 980, padding: "16px 36px", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s", opacity: status === "submitting" ? 0.6 : 1 }}
                onMouseEnter={(e) => { if (status !== "submitting") (e.target as HTMLElement).style.opacity = "0.88"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = status === "submitting" ? "0.6" : "1"; }}
              >
                {status === "submitting" ? "Sending..." : "Request a Quote"}
              </button>
            </div>
            {status === "error" && <p style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center", marginTop: 16 }}>Something went wrong. Please try again or call us directly.</p>}
          </form>
        </FadeUp>

        {/* OR divider + phone CTA */}
        <FadeUp delay={0.4}>
          <div style={{ margin: "48px 0 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontSize: "0.78rem", color: "#6e6e73", letterSpacing: "0.1em" }}>OR</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>
          <a href="tel:4239334784" className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "1.8rem", color: "#f5f5f7", textDecoration: "none", display: "inline-block", marginTop: 8 }}>
            (423) 933-4784
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  FOOTER                                                            */
/* ═══════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 0" }}>
      <div className={`${WRAP} flex flex-col md:flex-row items-center justify-between`} style={{ gap: 16 }}>
        <span className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "0.9rem", color: "#6e6e73", letterSpacing: "0.1em" }}>REFRESH</span>
        <span style={{ fontSize: "0.78rem", color: "#6e6e73" }}>Chattanooga, TN &amp; Surrounding Areas</span>
        <span style={{ fontSize: "0.78rem", color: "#6e6e73" }}>&copy; 2026 Refresh Detailing Service</span>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  PAGE                                                              */
/* ═══════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Nav />
      <main style={{ background: "#0a0a0a" }}>
        <Hero />
        <Divider />
        <Services />
        <Divider />
        <HowItWorks />
        <Divider />
        <WhyRefresh />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
