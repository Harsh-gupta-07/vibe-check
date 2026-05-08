// Screen 9: Manage Interests
"use client";
import { useState } from "react";
import Link from "next/link";

const ALL_INTERESTS = [
  { category: "Music", items: ["Techno", "House", "DnB", "Ambient", "Hip-Hop", "R&B", "Electronic", "Jazz"] },
  { category: "Vibe", items: ["Dancing", "Mingling", "Chill", "Networking", "People Watching", "Bar Hopping"] },
  { category: "Scene", items: ["Underground", "Rooftop", "Speakeasy", "Live Music", "DJ Set", "Art House"] },
  { category: "Extras", items: ["Mixology", "Street Art", "Nightlife Photography", "Food & Drinks"] },
];

export default function InterestsPage() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["Techno", "Mixology", "Street Art", "Underground"])
  );
  const [saved, setSaved] = useState(false);

  const toggle = (item: string) => {
    const next = new Set(selected);
    if (next.has(item)) {
      next.delete(item);
    } else {
      next.add(item);
    }
    setSelected(next);
    setSaved(false);
  };

  return (
    <div className="min-h-dvh flex flex-col" style={{ background: "#131313" }}>
      {/* TopAppBar */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 w-full"
        style={{
          background: "rgba(19,19,19,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Link href="/profile">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors"
            style={{ color: "var(--primary)" }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </Link>
        <h1
          className="text-center flex-1"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 20, fontWeight: 600, color: "var(--primary)" }}
        >
          Manage Interests
        </h1>
        <div style={{ width: 40 }} />
      </header>

      <main className="flex-1 px-5 pt-6 pb-32 max-w-2xl mx-auto w-full">
        {/* Selected count */}
        <div className="flex items-center justify-between mb-6">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)" }}>
            Choose what defines your vibe. Others see these to find compatible matches.
          </p>
        </div>
        <div
          className="mb-6 px-4 py-2 rounded-full inline-flex items-center gap-2"
          style={{
            background: "rgba(235,178,255,0.1)",
            border: "1px solid rgba(235,178,255,0.2)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--primary)" }}>interests</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--primary)", letterSpacing: "0.08em" }}>
            {selected.size} SELECTED
          </span>
        </div>

        {/* Category Sections */}
        <div className="flex flex-col gap-8">
          {ALL_INTERESTS.map((cat) => (
            <div key={cat.category}>
              <h3
                className="mb-3 uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "var(--on-surface-variant)",
                  letterSpacing: "0.12em",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: 8,
                }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => {
                  const active = selected.has(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggle(item)}
                      className="px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
                      style={{
                        border: active ? "1px solid var(--primary)" : "1px solid var(--outline-variant)",
                        background: active ? "rgba(235,178,255,0.15)" : "transparent",
                        color: active ? "var(--primary-container)" : "var(--on-surface-variant)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        fontWeight: 500,
                        boxShadow: active ? "0 0 10px rgba(188,19,254,0.2)" : undefined,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {active && (
                        <span className="material-symbols-outlined" style={{ fontSize: 14, marginRight: 4, verticalAlign: "middle", fontVariationSettings: "'FILL' 1" }}>
                          check
                        </span>
                      )}
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Save Button */}
      <div
        className="sticky bottom-0 left-0 w-full px-5 pb-6 pt-4 z-40"
        style={{ background: "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.9) 60%, transparent 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          {saved ? (
            <div
              className="w-full py-4 rounded-xl flex items-center justify-center gap-2"
              style={{
                background: "rgba(0,241,253,0.1)",
                border: "1px solid rgba(0,241,253,0.3)",
                color: "var(--secondary-container)",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Interests Saved!
            </div>
          ) : (
            <button
              onClick={() => setSaved(true)}
              className="w-full py-4 rounded-xl transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "var(--primary-container)",
                color: "var(--on-primary-container)",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                boxShadow: "0 0 24px rgba(188,19,254,0.35)",
              }}
            >
              Save Interests
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
