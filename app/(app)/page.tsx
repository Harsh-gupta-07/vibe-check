// Screen 2: Welcome to Vibe Check (first screen users see)
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIBE CHECK – Discover the Frequency",
  description: "Social discovery at live venues. Anonymous, safe, real-time.",
};

export default function WelcomePage() {
  return (
    <div
      className="h-full relative overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#131313" }}
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.80) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(19,19,19,0.4) 0%, transparent 50%)",
          }}
        />
        {/* Dark nightclub ambient background */}
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(188,19,254,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(0,241,253,0.12) 0%, transparent 50%), #0a0a0a",
          }}
        />
      </div>

      {/* Content */}
      <main
        className="relative z-20 w-full max-w-md px-5 flex flex-col items-center justify-between page-enter"
        style={{ height: "100%", paddingBottom: 40, paddingTop: 60 }}
      >
        {/* Spacer */}
        <div className="flex-1" />

        {/* Brand Identity */}
        <div className="flex flex-col items-center justify-center text-center flex-1 gap-4">
          {/* Logo glow ring */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
            style={{
              background: "rgba(188,19,254,0.12)",
              boxShadow: "0 0 40px rgba(188,19,254,0.3)",
              border: "1px solid rgba(235,178,255,0.2)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 40,
                color: "var(--primary)",
                fontVariationSettings: "'FILL' 1",
              }}
            >
              local_fire_department
            </span>
          </div>

          <h1
            className="tracking-tighter"
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--primary)",
              textShadow: "0 0 24px rgba(235,178,255,0.4)",
            }}
          >
            VIBE CHECK
          </h1>
          <p
            className="max-w-[280px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              color: "var(--on-surface-variant)",
              lineHeight: 1.5,
            }}
          >
            Discover the frequency. Maintain your privacy. Control the room.
          </p>

          {/* Feature pills */}
          <div className="flex gap-2 flex-wrap justify-center mt-2 mb-2">
            {["🔒 Anonymous", "📍 Live Venues", "💬 Real-time Chat"].map(
              (f) => (
                <span
                  key={f}
                  className="font-label"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "var(--on-surface-variant)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 9999,
                    padding: "4px 12px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {f}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3 mt-auto">
          <Link href="/login" className="block">
            <button
              className="w-full py-4 rounded-lg font-headline transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                background: "var(--primary-container)",
                color: "var(--on-primary-container)",
                boxShadow: "0 0 24px rgba(188,19,254,0.35)",
              }}
            >
              Get Started
            </button>
          </Link>
          <p
            className="text-center text-xs mt-2"
            style={{
              color: "var(--on-surface-variant)",
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            18+ only · By continuing you agree to our Terms &amp; Privacy Policy
          </p>
        </div>
      </main>
    </div>
  );
}
