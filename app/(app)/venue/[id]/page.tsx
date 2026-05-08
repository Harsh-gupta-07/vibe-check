// Screen 5: Venue Detail + Profiles
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import BottomNav from "@/app/components/BottomNav";
import PanicButton from "@/app/components/PanicButton";
import Link from "next/link";

const VENUES: Record<string, { name: string; tags: string[]; active: number; capacity: number }> = {
  "1": { name: "Neon Sanctuary", tags: ["TECHNO", "0.8 MI"], active: 42, capacity: 68 },
  "2": { name: "The Underground", tags: ["HOUSE", "1.2 MI"], active: 18, capacity: 31 },
  "3": { name: "Bassment", tags: ["DUBSTEP", "0.3 MI"], active: 128, capacity: 82 },
};

const PROFILES = [
  {
    id: "1",
    handle: "ANON_8X29",
    vibe: "Matching Vibe",
    interests: "3 Shared Interests",
    gradient: "from-purple-900 via-[#8a2be2] to-cyan-500",
  },
  {
    id: "2",
    handle: "ANON_J492",
    vibe: "Both like Techno",
    interests: "",
    gradient: "from-cyan-900 to-purple-900",
  },
  {
    id: "3",
    handle: "ANON_M100",
    vibe: "2 Shared Vibes",
    interests: "",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    id: "4",
    handle: "ANON_P77F",
    vibe: "Matching Energy",
    interests: "1 Shared Interest",
    gradient: "from-purple-800 to-pink-900",
  },
];

const FILTERS = ["ALL PROFILES", "DANCING", "MINGLING", "NEARBY"];

export default function VenueDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : (params.id ?? "1");
  const venue = VENUES[id] ?? { name: "Unknown Venue", tags: [], active: 0, capacity: 0 };
  const [activeFilter, setActiveFilter] = useState("ALL PROFILES");

  return (
    <div
      className="flex flex-col flex-1 h-full overflow-hidden"
      style={{ background: "#131313" }}
    >
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
        <Link href="/map" style={{ color: "var(--primary)" }}>
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "var(--primary)",
          }}
        >
          VIBE CHECK
        </h1>
        <PanicButton small />
      </header>

      <main
        className="flex-1 overflow-y-auto w-full max-w-2xl mx-auto pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hero Section */}
        <div
          className="relative w-full overflow-hidden"
          style={{ marginBottom: 24 }}
        >
          {/* Background gradients */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #0a0015 0%, #1a0033 30%, #0a1a2e 70%, #001a1a 100%)",
            }}
          />
          {/* Neon accents */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 50%, rgba(188,19,254,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(0,241,253,0.2) 0%, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #131313 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 w-full px-5 pt-5 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-3 h-3 rounded-full live-dot"
                style={{
                  background: "var(--secondary-container)",
                  boxShadow: "0 0 12px rgba(0,241,253,0.8)",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "var(--secondary-container)",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                LIVE NOW
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--on-surface)",
                lineHeight: 1.1,
              }}
            >
              {venue.name}
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
              {venue.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "var(--on-surface-variant)",
                    border: "1px solid rgba(157,139,160,0.5)",
                    background: "rgba(19,19,19,0.5)",
                    backdropFilter: "blur(4px)",
                    borderRadius: 4,
                    padding: "2px 8px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5">
          {/* Real-Time Vibe (Bento Grid) */}
          <section className="mb-10">
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: "var(--on-surface)",
              }}
            >
              Real-Time Vibe
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Capacity Card */}
              <div
                className="rounded-xl p-4 flex flex-col justify-between aspect-square"
                style={{
                  background: "rgba(32,31,31,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex justify-between items-start">
                  <h4
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "var(--on-surface-variant)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Capacity
                  </h4>
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--outline)" }}
                  >
                    group
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      fontSize: 40,
                      fontWeight: 800,
                      color: "var(--primary)",
                    }}
                  >
                    82<span style={{ fontSize: 24 }}>%</span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden mt-2"
                    style={{
                      background: "var(--surface-bright)",
                      height: 8,
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div
                      style={{
                        width: "82%",
                        height: "100%",
                        background:
                          "linear-gradient(to right, var(--primary), var(--primary-fixed-dim))",
                        boxShadow: "0 0 8px rgba(235,178,255,0.5)",
                        borderRadius: 9999,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Energy Mix Card */}
              <div
                className="rounded-xl p-4 flex flex-col justify-between aspect-square"
                style={{
                  background: "rgba(32,31,31,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex justify-between items-start">
                  <h4
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "var(--on-surface-variant)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Energy Mix
                  </h4>
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--outline)" }}
                  >
                    equalizer
                  </span>
                </div>
                <div
                  className="flex items-end gap-1 w-full pb-1"
                  style={{ height: 96 }}
                >
                  {[
                    {
                      h: "70%",
                      color: "var(--primary-container)",
                      label: "HIGH",
                    },
                    {
                      h: "40%",
                      color: "var(--secondary-container)",
                      label: "MED",
                    },
                    { h: "20%", color: "var(--surface-bright)", label: "LOW" },
                  ].map((bar) => (
                    <div
                      key={bar.label}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-full rounded-t-md"
                        style={{
                          height: bar.h,
                          background: bar.color,
                          boxShadow: `0 0 12px ${bar.color}44`,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: "var(--on-surface-variant)",
                        }}
                      >
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Active Profiles */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "var(--on-surface)",
                }}
              >
                In The Room
              </h3>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--on-surface-variant)",
                  background: "var(--surface-bright)",
                  padding: "4px 10px",
                  borderRadius: 9999,
                }}
              >
                142 ACTIVE
              </span>
            </div>

            {/* Filter chips */}
            <div
              className="flex gap-2 overflow-x-auto pb-2 mb-4"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="whitespace-nowrap px-4 py-2 rounded-full transition-all"
                  style={{
                    border:
                      f === activeFilter
                        ? "1px solid var(--primary)"
                        : "1px solid var(--outline-variant)",
                    background:
                      f === activeFilter
                        ? "rgba(235,178,255,0.1)"
                        : "transparent",
                    color:
                      f === activeFilter
                        ? "var(--primary-container)"
                        : "var(--on-surface-variant)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    boxShadow:
                      f === activeFilter
                        ? "0 0 12px rgba(188,19,254,0.2)"
                        : undefined,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Profile List */}
            <div className="flex flex-col gap-2">
              {PROFILES.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center justify-between p-4 rounded-xl group transition-colors hover:bg-white/5"
                  style={{
                    background: "rgba(32,31,31,0.5)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Abstract Avatar */}
                    <div
                      className="rounded-full"
                      style={{
                        width: 56,
                        height: 56,
                        background: `linear-gradient(135deg, var(--primary-container), var(--secondary-container))`,
                        opacity: 0.8,
                        padding: 2,
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{
                          background: "var(--surface-dim)",
                          mixBlendMode: "screen",
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 9999,
                            background: "rgba(235,178,255,0.4)",
                            filter: "blur(4px)",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Hanken Grotesk', sans-serif",
                          fontSize: 18,
                          fontWeight: 600,
                          color: "var(--on-surface)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {profile.handle}
                      </div>
                      <div
                        className="flex items-center gap-1 mt-0.5"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 13,
                          color: "var(--secondary-fixed-dim)",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 14 }}
                        >
                          graphic_eq
                        </span>
                        {profile.vibe}
                      </div>
                      {profile.interests && (
                        <div
                          className="flex items-center gap-1"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 12,
                            color: "rgba(212,192,215,0.7)",
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 14 }}
                          >
                            bolt
                          </span>
                          {profile.interests}
                        </div>
                      )}
                    </div>
                  </div>
                  <Link href="/chat">
                    <button
                      className="p-2 rounded-full transition-all"
                      style={{
                        color: "var(--on-surface-variant)",
                        background: "rgba(58,57,57,0.5)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        chat_bubble
                      </span>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
