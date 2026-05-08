// Screen 3 (join_the_vibe): Phone Login / Registration
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [tab, setTab] = useState<"join" | "login">("join");
  const router = useRouter();

  return (
    <div
      className="h-full relative overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#131313" }}
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(188,19,254,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(0,241,253,0.08) 0%, transparent 50%), #0d0d0d",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.7) 60%, rgba(19,19,19,0.4) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <main
        className="w-full max-w-md px-5 relative z-10 flex flex-col items-center page-enter"
        style={{ paddingTop: 60, paddingBottom: 40 }}
      >
        {/* Brand */}
        <div className="mb-10 text-center">
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
        </div>

        {/* Glass Auth Card */}
        <div
          className="w-full flex flex-col gap-6 p-6"
          style={{
            background: "rgba(19,19,19,0.6)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 24,
            boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          {/* Toggle */}
          <div
            className="flex p-1"
            style={{
              background: "var(--surface-container-highest)",
              borderRadius: 9999,
            }}
          >
            {(["join", "login"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 py-2 px-4 transition-all"
                style={{
                  borderRadius: 9999,
                  background:
                    tab === t ? "var(--primary-container)" : "transparent",
                  color:
                    tab === t
                      ? "var(--on-primary-container)"
                      : "var(--on-surface-variant)",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  boxShadow:
                    tab === t ? "0 0 12px rgba(188,19,254,0.3)" : undefined,
                }}
              >
                {t === "join" ? "Join" : "Log In"}
              </button>
            ))}
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-2">
            <label
              className="font-label uppercase tracking-widest pl-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--on-surface-variant)",
              }}
            >
              Phone Number
            </label>
            <div
              className="flex overflow-hidden focus-within:ring-1 transition-all"
              style={{
                border: "1px solid var(--outline-variant)",
                background: "var(--surface-container)",
                borderRadius: 8,
                // @ts-expect-error CSS variable
                "--tw-ring-color": "var(--primary)",
              }}
            >
              <button
                className="flex items-center gap-1 px-4 py-3 transition-colors hover:bg-white/5"
                style={{
                  borderRight: "1px solid var(--outline-variant)",
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                }}
              >
                +1
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 20, color: "var(--on-surface-variant)" }}
                >
                  arrow_drop_down
                </span>
              </button>
              <input
                className="flex-1 bg-transparent border-none outline-none px-4 py-3"
                placeholder="(555) 000-0000"
                type="tel"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  color: "var(--on-surface)",
                }}
              />
            </div>
          </div>

          {/* Primary Action */}
          <button
            onClick={() => router.push("/onboarding")}
            className="w-full py-4 rounded-lg transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 20,
              fontWeight: 600,
              boxShadow: "0 0 16px rgba(235,178,255,0.2)",
            }}
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-1">
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <span
              className="font-label uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--on-surface-variant)",
              }}
            >
              Or
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-3">
            {[
              { icon: "ios", label: "Continue with Apple" },
              { icon: "account_circle", label: "Continue with Google" },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => router.push("/onboarding")}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors hover:bg-white/5"
                style={{
                  border: "1px solid var(--outline-variant)",
                  background: "var(--surface-container-low)",
                  color: "var(--on-surface)",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                <span className="material-symbols-outlined">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Explainer */}
        <div className="mt-10 max-w-sm text-center px-4">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "var(--on-surface-variant)",
              opacity: 0.8,
              lineHeight: 1.5,
            }}
          >
            Your real identity stays hidden. Choose your vibe, stay anonymous.
          </p>
        </div>
      </main>
    </div>
  );
}
