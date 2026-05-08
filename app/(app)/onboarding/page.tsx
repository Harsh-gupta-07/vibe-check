// Screen 1: Onboarding / Profile Setup with Age Gate
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [otp, setOtp] = useState(["8", "4", "", "", "", ""]);
  const router = useRouter();

  const handleOtp = (i: number, val: string) => {
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
  };

  return (
    <div
      className="min-h-dvh flex items-center justify-center p-5 relative overflow-hidden"
      style={{ background: "#131313" }}
    >
      {/* Abstract Background */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          mixBlendMode: "screen",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(188,19,254,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(0,241,253,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Main Form */}
      <div className="relative z-10 w-full max-w-[400px] flex flex-col gap-6 page-enter">
        {/* Header */}
        <div className="text-center mb-2">
          <h1
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--primary)",
            }}
          >
            VIBE CHECK
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)" }}>
            Initialize your presence.
          </p>
        </div>

        {/* Setup Card */}
        <div
          className="glass-panel rounded-xl p-6 flex flex-col gap-6 shadow-2xl"
        >
          {/* OTP */}
          <div className="flex flex-col gap-2">
            <label
              className="uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--on-surface-variant)", letterSpacing: "0.1em" }}
            >
              Verify Identity
            </label>
            <div className="flex gap-2">
              {otp.map((v, i) => (
                <input
                  key={i}
                  className={`w-12 h-14 text-center rounded-lg input-dark transition-all ${i === 1 ? "glow-primary" : ""}`}
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 600,
                    border: i === 1 ? "1px solid var(--primary)" : undefined,
                  }}
                  maxLength={1}
                  type="text"
                  value={v}
                  onChange={(e) => handleOtp(i, e.target.value)}
                />
              ))}
            </div>
            <p
              className="text-right cursor-pointer hover:opacity-80"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--secondary-container)", letterSpacing: "0.08em" }}
            >
              RESEND CODE
            </p>
          </div>

          <div className="h-px" style={{ background: "rgba(255,255,255,0.1)" }} />

          {/* Profile Details */}
          <div className="flex flex-col gap-4">
            {/* Handle */}
            <div className="flex flex-col gap-1">
              <label
                className="flex justify-between items-end uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--on-surface-variant)", letterSpacing: "0.1em" }}
              >
                <span>Anonymous Handle</span>
                <span style={{ fontSize: 10, color: "var(--primary)", opacity: 0.8 }}>REQUIRED</span>
              </label>
              <div className="relative">
                <span
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)" }}
                >
                  @
                </span>
                <input
                  className="w-full pl-8 pr-3 py-3 rounded-lg input-dark"
                  placeholder="neon_ghost"
                  type="text"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 16 }}
                />
              </div>
            </div>

            {/* Age & Gender */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Age",
                  options: ["18 - 24", "25 - 34", "35 - 44", "45+"],
                },
                {
                  label: "Identity",
                  options: ["Male", "Female", "Non-binary", "Other", "Prefer not to say"],
                },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1">
                  <label
                    className="uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--on-surface-variant)", letterSpacing: "0.1em" }}
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-3 rounded-lg input-dark appearance-none"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: 16 }}
                    >
                      <option value="">Select</option>
                      {field.options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <span
                      className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ fontSize: 20, color: "var(--on-surface-variant)" }}
                    >
                      expand_more
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/map")}
            className="w-full py-4 mt-2 flex items-center justify-center gap-2 rounded-lg transition-colors hover:opacity-80"
            style={{
              background: "rgba(235,178,255,0.2)",
              color: "var(--primary-fixed-dim)",
              border: "1px solid rgba(235,178,255,0.5)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span>Enter Void</span>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </button>
        </div>
      </div>

      {/* 18+ Age Gate Overlay */}
      {showAgeGate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5 glass-overlay"
        >
          <div
            className="flex flex-col items-center text-center p-6 w-full max-w-[340px] shadow-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{
                background: "rgba(255,180,171,0.1)",
                border: "1px solid rgba(255,180,171,0.2)",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 32, color: "var(--error)", fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
            </div>
            <h2
              className="mb-3"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-surface)" }}
            >
              Age Verification Required
            </h2>
            <p
              className="mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)", lineHeight: 1.5 }}
            >
              VIBE CHECK is strictly for adults. You must be 18 years or older to enter. Falsifying your age will result in a permanent ban.
            </p>
            <div className="w-full flex flex-col gap-2">
              <button
                onClick={() => setShowAgeGate(false)}
                className="w-full py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--on-primary)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                I am 18 or older
              </button>
              <button
                className="w-full py-3 rounded-lg transition-colors hover:bg-white/5"
                style={{
                  background: "transparent",
                  border: "1px solid var(--outline-variant)",
                  color: "var(--on-surface-variant)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
