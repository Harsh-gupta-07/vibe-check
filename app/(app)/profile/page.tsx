// Screen 8: User Profile & History
"use client";
import BottomNav from "@/app/components/BottomNav";
import PanicButton from "@/app/components/PanicButton";
import Link from "next/link";

const INTERESTS = ["Techno", "Mixology", "Street Art", "Underground", "House Music"];
const VENUE_HISTORY = [
  { name: "The Neon Void", date: "May 7", checkins: 3 },
  { name: "Subterranean", date: "Apr 28", checkins: 1 },
  { name: "Bass Collective", date: "Apr 12", checkins: 2 },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden" style={{ background: "#131313" }}>
      {/* TopAppBar */}
      <header
        className="w-full z-50 flex justify-between items-center px-5 shrink-0"
        style={{
          height: 56,
          background: "rgba(19,19,19,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors"
          style={{ color: "var(--primary)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>menu</span>
        </button>
        <h1 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: "var(--primary)" }}>
          VIBE CHECK
        </h1>
        <PanicButton small />
      </header>

      <main
        className="flex-1 overflow-y-auto pt-4 px-5 max-w-2xl mx-auto space-y-6"
        style={{ paddingBottom: 24, scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Profile Card */}
        <section
          className="glass-card rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 rounded-full mix-blend-screen pointer-events-none"
            style={{ background: "rgba(235,178,255,0.05)", filter: "blur(40px)" }}
          />
          <div className="w-24 h-24 rounded-full mb-4 relative">
            {/* Abstract avatar */}
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--primary-container), var(--secondary-container))",
                opacity: 0.8,
                animation: "glow-breathe 4s ease-in-out infinite",
              }}
            />
            <div
              className="absolute -bottom-2 -right-2 rounded-full p-1"
              style={{ background: "var(--surface-container)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 20, color: "var(--primary)", fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
          </div>
          <h2
            style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--primary)" }}
          >
            ANON_4829
          </h2>
          <p className="mt-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "var(--on-surface-variant)" }}>
            Verified Explorer
          </p>
        </section>

        {/* My Interests */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-background)" }}>
              My Interests
            </h3>
            <Link href="/interests">
              <button
                className="p-2 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ border: "1px solid var(--outline-variant)", color: "var(--primary)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>edit</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((interest) => (
              <span
                key={interest}
                style={{
                  padding: "6px 12px",
                  borderRadius: 9999,
                  border: "1px solid var(--outline-variant)",
                  color: "var(--on-surface-variant)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Venue History */}
        <section className="space-y-3">
          <div className="flex justify-between items-end mb-2">
            <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-background)" }}>
              Venue History
            </h3>
            <button style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--primary)", letterSpacing: "0.06em" }}>
              VIEW ALL
            </button>
          </div>
          <div className="space-y-1">
            {VENUE_HISTORY.map((v) => (
              <div
                key={v.name}
                className="glass-card rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "var(--on-surface)" }}>{v.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)" }}>
                    {v.date} · {v.checkins} Check-in{v.checkins > 1 ? "s" : ""}
                  </p>
                </div>
                <span className="material-symbols-outlined" style={{ color: "var(--outline)" }}>chevron_right</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Connections */}
          <section
            className="glass-card rounded-xl p-4 flex flex-col justify-between"
            style={{ aspectRatio: "1" }}
          >
            <div>
              <span className="material-symbols-outlined mb-2" style={{ fontSize: 32, color: "var(--secondary-container)", display: "block" }}>group</span>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 18, color: "var(--on-background)" }}>Connections</h3>
            </div>
            <div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 40, fontWeight: 800, color: "var(--secondary-container)" }}>42</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--on-surface-variant)", marginTop: 4 }}>Active Network</p>
            </div>
          </section>

          {/* Trust */}
          <section
            className="glass-card rounded-xl p-4 flex flex-col justify-between relative overflow-hidden"
            style={{ aspectRatio: "1" }}
          >
            <div
              className="absolute top-3 right-3 w-2 h-2 rounded-full live-dot"
              style={{ background: "var(--secondary-container)", boxShadow: "0 0 12px rgba(0,241,253,0.8)" }}
            />
            <div>
              <span className="material-symbols-outlined mb-2" style={{ fontSize: 32, color: "var(--primary)", display: "block" }}>shield</span>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 18, color: "var(--on-background)" }}>Reports</h3>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "var(--primary)", fontWeight: 600 }}>Impeccable</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "var(--on-surface-variant)", marginTop: 4 }}>0 Reports</p>
            </div>
          </section>
        </div>

        {/* Settings Options */}
        <section className="glass-card rounded-xl overflow-hidden" style={{ borderTop: "none" }}>
          {[
            { icon: "settings", label: "Preferences" },
            { icon: "notifications", label: "Notification Settings" },
            { icon: "help_outline", label: "Support" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full p-4 flex items-center gap-4 text-left transition-colors hover:bg-white/5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span className="material-symbols-outlined" style={{ color: "var(--on-surface-variant)" }}>{item.icon}</span>
              <span className="flex-grow" style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "var(--on-surface)" }}>{item.label}</span>
              <span className="material-symbols-outlined" style={{ color: "var(--outline)" }}>chevron_right</span>
            </button>
          ))}
          <button
            className="w-full p-4 flex items-center gap-4 text-left transition-colors hover:bg-red-950/30"
          >
            <span className="material-symbols-outlined" style={{ color: "var(--error)" }}>logout</span>
            <span className="flex-grow" style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "var(--error)" }}>Logout</span>
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
