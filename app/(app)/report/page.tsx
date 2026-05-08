// Screen 7: Report User
"use client";
import { useState } from "react";
import Link from "next/link";

const REASONS = [
  "Harassment or Bullying",
  "Spamming or Fake Profile",
  "Inappropriate Content",
  "Underage User",
  "Other",
];

export default function ReportPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
        <Link href="/chat">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors active:scale-95"
            style={{ color: "var(--primary)" }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </Link>
        <h1
          className="text-center flex-1"
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 20,
            fontWeight: 600,
            color: "var(--primary)",
          }}
        >
          Report Incident
        </h1>
        <div style={{ width: 40 }} />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-6 pb-24 flex flex-col gap-6 max-w-2xl mx-auto w-full">
        <div className="space-y-2">
          <h2
            style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-surface)" }}
          >
            What happened?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)" }}>
            Your report is anonymous. We take all reports seriously to ensure a safe environment.
          </p>
        </div>

        {/* Reason List */}
        <div className="flex flex-col gap-2">
          {REASONS.map((reason) => (
            <label
              key={reason}
              className="glass-panel p-4 rounded-xl flex items-center justify-between cursor-pointer transition-colors hover:bg-white/5 group"
              style={{ borderColor: selected === reason ? "rgba(235,178,255,0.3)" : undefined }}
            >
              <span
                className="transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 18,
                  color: selected === reason ? "var(--primary)" : "var(--on-surface)",
                }}
              >
                {reason}
              </span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  border: `2px solid ${selected === reason ? "var(--primary-container)" : "var(--outline)"}`,
                  background: selected === reason ? "var(--primary-container)" : "transparent",
                  transition: "all 0.15s",
                }}
              >
                {selected === reason && (
                  <div style={{ width: 8, height: 8, borderRadius: 9999, background: "#fff" }} />
                )}
              </div>
              <input
                type="radio"
                name="report_reason"
                className="sr-only"
                value={reason}
                checked={selected === reason}
                onChange={() => setSelected(reason)}
              />
            </label>
          ))}
        </div>

        {/* Additional Details */}
        <div className="flex flex-col gap-2 mt-2">
          <label
            htmlFor="details"
            className="uppercase tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--on-surface-variant)", letterSpacing: "0.1em" }}
          >
            Additional Details
          </label>
          <textarea
            id="details"
            rows={4}
            className="glass-panel w-full rounded-xl p-4 outline-none resize-none transition-all"
            placeholder="Please provide any specific details to help us investigate..."
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "var(--on-surface)",
              background: "rgba(26,26,26,0.8)",
            }}
          />
        </div>
      </main>

      {/* Submit Button */}
      <div
        className="sticky bottom-0 left-0 w-full px-5 pb-6 pt-4 z-40"
        style={{ background: "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.9) 60%, transparent 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          {submitted ? (
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
              Report Submitted
            </div>
          ) : (
            <button
              onClick={() => selected && setSubmitted(true)}
              className="w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "#FF3B30",
                color: "#ffffff",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                boxShadow: "0 0 20px rgba(255,59,48,0.3)",
                opacity: selected ? 1 : 0.5,
                cursor: selected ? "pointer" : "not-allowed",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              Submit Report
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
