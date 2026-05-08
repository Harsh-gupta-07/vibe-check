// Admin: Live Analytics Dashboard
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nightwatch OS – Live Dashboard",
  description: "Real-time analytics and venue monitoring for Vibe Check platform",
};

const STAT_CARDS = [
  { label: "Active Users", value: "12.4k", delta: "+8%", icon: "person", color: "primary", up: true },
  { label: "Active Venues", value: "342", delta: "+2%", icon: "night_shelter", color: "secondary-container", up: true },
  { label: "Chat Initiation", value: "48%", icon: "chat_bubble", color: "primary", bar: 48 },
  { label: "Table Reveal Rate", value: "62%", icon: "visibility", color: "secondary-container", bar: 62 },
];

const LIVE_VENUES = [
  { name: "Neon Club", district: "Downtown", cap: 98, vibing: 42, status: "hot" },
  { name: "The Vault", district: "Arts District", cap: 85, vibing: 28, status: "active" },
  { name: "Sky Lounge", district: "Uptown", cap: 100, vibing: 15, status: "full" },
  { name: "Basement", district: "Industrial", cap: 45, vibing: 8, status: "low" },
  { name: "Cipher Club", district: "Midtown", cap: 72, vibing: 31, status: "active" },
  { name: "The Frequency", district: "East Side", cap: 60, vibing: 19, status: "active" },
];

export default function AdminDashboard() {
  return (
    <div className="px-10 pb-10 pt-6 max-w-7xl mx-auto w-full flex flex-col gap-4">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="flex items-center gap-2"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--on-surface)" }}
          >
            Live Pulse
            <span
              className="w-3 h-3 rounded-full live-dot inline-block"
              style={{ background: "var(--secondary-container)", boxShadow: "0 0 12px rgba(0,241,253,0.8)" }}
            />
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)", marginTop: 4 }}>
            Real-time ecosystem health and venue activity.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-1 px-4 py-2 rounded-full transition-colors hover:border-purple-500 hover:text-white"
            style={{
              border: "1px solid var(--outline-variant)",
              color: "var(--on-surface-variant)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>
            Filter City
          </button>
          <button
            className="flex items-center gap-1 px-4 py-2 rounded-full transition-colors hover:bg-white/10"
            style={{
              border: "1px solid var(--outline-variant)",
              color: "var(--on-surface-variant)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
            Export CSV
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CARDS.map((card) => (
          <div
            key={card.label}
            className="glass-card rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group transition-colors hover:border-purple-500/50"
            style={{ height: 128 }}
          >
            <div
              className="absolute top-0 right-0 w-16 h-16 rounded-bl-full transition-colors"
              style={{
                background: `rgba(${card.color === "primary" ? "188,19,254" : "0,241,253"},0.1)`,
                filter: "blur(20px)",
              }}
            />
            <div className="flex justify-between items-start z-10">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--on-surface-variant)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {card.label}
              </span>
              <span
                className="material-symbols-outlined"
                style={{ color: card.color === "primary" ? "var(--primary)" : "var(--secondary-container)" }}
              >
                {card.icon}
              </span>
            </div>
            <div className="z-10">
              {card.bar !== undefined ? (
                <>
                  <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: "var(--on-surface)" }}>
                    {card.value}
                  </span>
                  <div
                    className="w-full rounded-full mt-2 overflow-hidden"
                    style={{ height: 4, background: "var(--surface-container)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${card.bar}%`,
                        background: card.color === "primary" ? "var(--primary)" : "var(--secondary-container)",
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="flex items-end justify-between">
                  <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: "var(--on-surface)" }}>
                    {card.value}
                  </span>
                  {card.delta && (
                    <span
                      className="flex items-center"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--secondary-container)" }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_upward</span>
                      {card.delta}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap & Live Presence */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
        {/* Venue Heatmap */}
        <div className="lg:col-span-2 glass-card rounded-xl p-4 flex flex-col" style={{ height: 500 }}>
          <div className="flex justify-between items-center mb-4">
            <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-surface)" }}>
              Venue Heatmap
            </h3>
            <div className="flex gap-2">
              {["City View", "District"].map((v, i) => (
                <button
                  key={v}
                  className="px-3 py-1 rounded-md transition-colors"
                  style={{
                    background: i === 0 ? "var(--surface-variant)" : "transparent",
                    color: i === 0 ? "var(--on-surface)" : "var(--on-surface-variant)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    border: "1px solid var(--outline-variant)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div
            className="flex-1 rounded-lg relative overflow-hidden flex items-center justify-center"
            style={{
              background: "var(--surface-container-low)",
              border: "1px solid rgba(80,66,84,0.3)",
            }}
          >
            {/* Map texture */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, #353534 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Faux lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
              <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#9d8ba0" strokeWidth="1" />
              <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#9d8ba0" strokeWidth="1" />
              <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#9d8ba0" strokeWidth="1" />
              <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#9d8ba0" strokeWidth="1" />
            </svg>
            {/* Live Nodes */}
            <div className="absolute" style={{ top: "25%", left: "25%", width: 16, height: 16, background: "var(--primary)", borderRadius: 9999, boxShadow: "0 0 12px rgba(188,19,254,0.5)", animation: "live-pulse 2s ease-in-out infinite" }} />
            <div className="absolute" style={{ top: "50%", left: "50%", width: 24, height: 24, background: "var(--secondary-container)", borderRadius: 9999, boxShadow: "0 0 12px rgba(0,241,253,0.5)", animation: "live-pulse 2s ease-in-out infinite", animationDelay: "0.5s" }} />
            <div className="absolute" style={{ bottom: "33%", right: "25%", width: 12, height: 12, background: "var(--primary)", borderRadius: 9999, boxShadow: "0 0 12px rgba(188,19,254,0.5)", animation: "live-pulse 2s ease-in-out infinite", animationDelay: "1s" }} />
            <div className="absolute" style={{ top: "33%", right: "33%", width: 20, height: 20, background: "var(--tertiary-container)", borderRadius: 9999, boxShadow: "0 0 10px #e62721" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--on-surface-variant)",
                background: "rgba(32,31,31,0.8)",
                backdropFilter: "blur(8px)",
                borderRadius: 9999,
                border: "1px solid rgba(80,66,84,0.5)",
                padding: "8px 16px",
                zIndex: 10,
              }}
            >
              6 Active Venues Live
            </span>
          </div>
        </div>

        {/* Live Presence Table */}
        <div className="glass-card rounded-xl p-4 flex flex-col" style={{ height: 500 }}>
          <div className="flex justify-between items-center mb-4">
            <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-surface)" }}>
              Live Presence
            </h3>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--on-surface-variant)" }}>sort</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {LIVE_VENUES.map((v) => (
              <div
                key={v.name}
                className="rounded-lg p-3 flex items-center justify-between cursor-pointer transition-colors hover:bg-white/5"
                style={{
                  background: "var(--surface-container)",
                  border: "1px solid transparent",
                }}
              >
                <div>
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: "var(--on-surface)" }}>
                    {v.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: "var(--on-surface-variant)",
                      marginTop: 4,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {v.district}
                  </p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      color:
                        v.status === "full" ? "var(--tertiary-container)" :
                        v.status === "hot" ? "var(--secondary-container)" :
                        "var(--on-surface)",
                    }}
                  >
                    {v.cap}% Cap
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          v.status === "low" ? "var(--surface-variant)" : "var(--primary)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: "var(--on-surface-variant)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {v.vibing} Vibing
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
