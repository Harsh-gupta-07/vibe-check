// Screen 4: Discovery Map (phone-frame-aware)
"use client";
import BottomNav from "@/app/components/BottomNav";
import PanicButton from "@/app/components/PanicButton";
import Link from "next/link";

export default function MapPage() {
  return (
    <div className="flex flex-col" style={{ background: "#131313", height: "100%" }}>
      {/* TopAppBar */}
      <header
        className="sticky top-0 w-full z-50 flex justify-between items-center px-5 shrink-0"
        style={{
          height: 56,
          background: "rgba(19,19,19,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <button style={{ color: "var(--primary)" }}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "var(--primary)",
          }}
        >
          VIBE CHECK
        </h1>
        <PanicButton small />
      </header>

      {/* Map canvas – fills remaining space */}
      <div className="relative flex-1" style={{ background: "var(--surface-container-lowest)", minHeight: 420 }}>
        {/* Grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(235,178,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(235,178,255,0.04) 1px, transparent 1px),
              radial-gradient(ellipse at 50% 50%, rgba(188,19,254,0.10) 0%, transparent 70%),
              radial-gradient(ellipse at 20% 80%, rgba(0,241,253,0.07) 0%, transparent 50%)`,
            backgroundSize: "32px 32px, 32px 32px, 100% 100%, 100% 100%",
          }}
        />
        {/* Street lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.14 }}>
          <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#9d8ba0" strokeWidth="1" />
          <line x1="0" y1="62%" x2="100%" y2="62%" stroke="#9d8ba0" strokeWidth="1" />
          <line x1="28%" y1="0" x2="28%" y2="100%" stroke="#9d8ba0" strokeWidth="1" />
          <line x1="58%" y1="0" x2="58%" y2="100%" stroke="#9d8ba0" strokeWidth="1" />
          <line x1="82%" y1="0" x2="82%" y2="100%" stroke="#9d8ba0" strokeWidth="1" />
        </svg>

        {/* Hot venue – purple pulse */}
        <div className="absolute z-20 flex flex-col items-center" style={{ top: "28%", left: "28%", transform: "translate(-50%,-50%)" }}>
          <div
            className="absolute rounded-full animate-ping opacity-20"
            style={{ inset: 0, background: "var(--primary)", boxShadow: "0 0 12px rgba(235,178,255,0.8)", animationDuration: "2s" }}
          />
          <Link href="/venue/1">
            <div
              className="relative flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: "rgba(235,178,255,0.2)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(235,178,255,0.5)",
                color: "var(--primary-fixed-dim)",
                boxShadow: "0 0 16px rgba(235,178,255,0.4)",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 700 }}>42 LIVE</span>
            </div>
          </Link>
          <div className="w-px h-3 mt-1 rounded-full" style={{ background: "linear-gradient(to bottom, rgba(235,178,255,0.8), transparent)" }} />
        </div>

        {/* Moderate venue */}
        <div className="absolute z-10 flex flex-col items-center" style={{ top: "44%", right: "22%", transform: "translate(50%,-50%)" }}>
          <Link href="/venue/2">
            <div
              className="relative flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer hover:border-white/30 transition-colors"
              style={{
                background: "rgba(19,19,19,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--on-surface)",
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>18 active</span>
            </div>
          </Link>
          <div className="w-px h-3 mt-1 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>

        {/* Cyan venue – super hot */}
        <div className="absolute z-10 flex flex-col items-center" style={{ bottom: "30%", left: "58%", transform: "translate(-50%,50%)" }}>
          <div
            className="absolute rounded-full animate-ping opacity-10"
            style={{ inset: 0, background: "var(--secondary-container)", boxShadow: "0 0 12px rgba(0,241,253,0.5)", animationDuration: "3s" }}
          />
          <Link href="/venue/3">
            <div
              className="relative flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: "rgba(0,241,253,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,241,253,0.3)",
                color: "var(--secondary-container)",
                boxShadow: "0 0 12px rgba(0,241,253,0.2)",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>graphic_eq</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 700 }}>128 VIBING</span>
            </div>
          </Link>
          <div className="w-px h-3 mt-1 rounded-full" style={{ background: "linear-gradient(to bottom, rgba(0,241,253,0.6), transparent)" }} />
        </div>

        {/* Floating Venue Preview Card */}
        <div className="absolute bottom-4 left-4 right-4 z-40">
          <Link href="/venue/1">
            <div
              className="relative overflow-hidden rounded-xl p-4 shadow-2xl cursor-pointer hover:scale-[1.01] transition-transform"
              style={{
                background: "rgba(19,19,19,0.85)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none"
                style={{ background: "rgba(188,19,254,0.2)", filter: "blur(40px)" }}
              />
              <div className="flex justify-between items-start mb-3 relative z-10">
                <div>
                  <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 20, fontWeight: 600, color: "var(--on-surface)" }}>
                    Neon Sanctuary
                  </h2>
                  <div className="flex gap-2 items-center mt-1">
                    {["TECHNO", "0.8 MI"].map((t, i) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: i === 0 ? "var(--primary)" : "var(--on-surface-variant)",
                          border: `1px solid ${i === 0 ? "rgba(235,178,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                          background: i === 0 ? "rgba(235,178,255,0.05)" : undefined,
                          borderRadius: 4,
                          padding: "2px 6px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ background: "linear-gradient(135deg, #1a0033, rgba(235,178,255,0.4))", border: "1px solid rgba(255,255,255,0.2)" }}
                />
              </div>
              <div className="flex items-center justify-between pt-3 relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-2" style={{ color: "var(--primary)" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>group</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700 }}>42 Active Now</span>
                </div>
                <Link href="/venue/1">
                  <button
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                    style={{
                      background: "var(--primary)",
                      color: "var(--on-primary)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    JOIN VIBE
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
