// Admin: Moderation Queue
"use client";
import { useState } from "react";

const REPORTS = [
  { id: "RPT_001", reporter: "ANON_8X29", reported: "ANON_ZZ01", reason: "Harassment", venue: "Neon Sanctuary", time: "2m ago", priority: "high" },
  { id: "RPT_002", reporter: "ANON_J492", reported: "ANON_M100", reason: "Inappropriate Content", venue: "The Vault", time: "14m ago", priority: "medium" },
  { id: "RPT_003", reporter: "ANON_P77F", reported: "ANON_ZZ01", reason: "Spamming", venue: "Sky Lounge", time: "32m ago", priority: "low" },
  { id: "RPT_004", reporter: "ANON_R38K", reported: "ANON_G99A", reason: "Underage User", venue: "Basement", time: "1h ago", priority: "high" },
  { id: "RPT_005", reporter: "ANON_T12C", reported: "ANON_B45D", reason: "Harassment", venue: "The Frequency", time: "2h ago", priority: "medium" },
];

const PRIORITY_COLORS: Record<string, string> = {
  high: "var(--tertiary-container)",
  medium: "var(--tertiary)",
  low: "var(--on-surface-variant)",
};

export default function AdminModerationPage() {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const active = REPORTS.filter((r) => !dismissed.has(r.id));

  return (
    <div className="px-10 pb-10 pt-6 max-w-7xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--on-surface)" }}>
            Moderation Queue
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)", marginTop: 4 }}>
            {active.length} active reports · Resolve to keep the environment safe.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="px-4 py-2 rounded-full flex items-center gap-2"
            style={{
              background: "rgba(230,39,33,0.1)",
              border: "1px solid rgba(230,39,33,0.3)",
              color: "var(--tertiary-container)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.06em",
            }}
          >
            <span className="w-2 h-2 rounded-full live-dot" style={{ background: "var(--tertiary-container)" }} />
            {active.filter((r) => r.priority === "high").length} HIGH PRIORITY
          </div>
        </div>
      </div>

      {/* Report Cards */}
      <div className="flex flex-col gap-3">
        {active.length === 0 ? (
          <div
            className="glass-card rounded-xl p-12 text-center"
          >
            <span className="material-symbols-outlined mb-4 block" style={{ fontSize: 48, color: "var(--secondary-container)", fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-surface)" }}>
              Queue Clear
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)", marginTop: 8 }}>
              All reports have been addressed.
            </p>
          </div>
        ) : (
          active.map((report) => (
            <div
              key={report.id}
              className="glass-card rounded-xl p-5 flex flex-col sm:flex-row justify-between gap-4 relative overflow-hidden"
            >
              {/* Priority indicator */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ background: PRIORITY_COLORS[report.priority] }}
              />
              <div className="pl-2">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-2 py-0.5 rounded-full uppercase"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: PRIORITY_COLORS[report.priority],
                      background: `${PRIORITY_COLORS[report.priority]}22`,
                      border: `1px solid ${PRIORITY_COLORS[report.priority]}44`,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {report.priority}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--on-surface-variant)" }}>
                    {report.id} · {report.time}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "var(--on-surface)" }}>
                  {report.reason}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)" }}>
                    Reporter: <span style={{ color: "var(--on-surface)" }}>{report.reporter}</span>
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)" }}>
                    Reported: <span style={{ color: "var(--error)", fontWeight: 600 }}>{report.reported}</span>
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)" }}>
                    Venue: <span style={{ color: "var(--on-surface)" }}>{report.venue}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col gap-2 justify-end shrink-0">
                <button
                  className="px-4 py-2 rounded-lg transition-colors hover:bg-red-950/30"
                  style={{
                    border: "1px solid rgba(255,180,171,0.3)",
                    color: "var(--error)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Ban User
                </button>
                <button
                  className="px-4 py-2 rounded-lg transition-colors hover:bg-orange-950/20"
                  style={{
                    border: "1px solid rgba(255,180,170,0.3)",
                    color: "var(--tertiary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Suspend
                </button>
                <button
                  onClick={() => setDismissed((prev) => new Set(prev).add(report.id))}
                  className="px-4 py-2 rounded-lg transition-colors hover:bg-white/5"
                  style={{
                    border: "1px solid var(--outline-variant)",
                    color: "var(--on-surface-variant)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
