"use client";
import { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    /* Full-page desktop background */
    <div
      className="min-h-dvh w-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, rgba(188,19,254,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0,241,253,0.08) 0%, transparent 50%), #0a0a0a",
        padding: "24px 16px",
      }}
    >
      {/* Outer shell – phone body */}
      <div
        style={{
          width: 393,
          /* let it grow taller than viewport and scroll within */
          minHeight: 852,
          maxHeight: "calc(100dvh - 48px)",
          borderRadius: 52,
          background: "#1a1a1a",
          boxShadow:
            /* rim light */
            "0 0 0 1px rgba(255,255,255,0.12), " +
            /* inner shadow for depth */
            "inset 0 0 0 2px #2a2a2a, " +
            /* ambient glow */
            "0 32px 80px rgba(0,0,0,0.8), 0 0 40px rgba(188,19,254,0.08)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Side buttons (visual) */}
        {/* Volume up */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 120,
            width: 4,
            height: 32,
            borderRadius: "2px 0 0 2px",
            background: "#2e2e2e",
            boxShadow: "-1px 0 0 rgba(255,255,255,0.05)",
          }}
        />
        {/* Volume down */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 168,
            width: 4,
            height: 32,
            borderRadius: "2px 0 0 2px",
            background: "#2e2e2e",
            boxShadow: "-1px 0 0 rgba(255,255,255,0.05)",
          }}
        />
        {/* Power button */}
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 160,
            width: 4,
            height: 60,
            borderRadius: "0 2px 2px 0",
            background: "#2e2e2e",
            boxShadow: "1px 0 0 rgba(255,255,255,0.05)",
          }}
        />

        {/* Screen bezel */}
        <div
          style={{
            flex: 1,
            margin: 10,
            borderRadius: 44,
            background: "#131313",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 36,
              borderRadius: 20,
              background: "#000",
              zIndex: 9999,
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.05)",
            }}
          />

          {/* Status bar */}
          <div
            style={{
              height: 54,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "0 28px 8px",
              flexShrink: 0,
              position: "relative",
              zIndex: 100,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#e5e2e1",
                letterSpacing: "-0.01em",
              }}
            >
              9:41
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {/* Signal bars */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <rect x="0" y="7" width="3" height="5" rx="1" fill="#e5e2e1" />
                <rect x="4.5" y="5" width="3" height="7" rx="1" fill="#e5e2e1" />
                <rect x="9" y="2.5" width="3" height="9.5" rx="1" fill="#e5e2e1" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#e5e2e1" opacity="0.4" />
              </svg>
              {/* WiFi */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#e5e2e1" />
                <path d="M3.5 6.5C4.8 5.2 6.3 4.5 8 4.5s3.2.7 4.5 2" stroke="#e5e2e1" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M1 3.5C3 1.5 5.4.5 8 .5s5 1 7 3" stroke="#e5e2e1" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              </svg>
              {/* Battery */}
              <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                <div
                  style={{
                    width: 25,
                    height: 13,
                    borderRadius: 4,
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    padding: 2,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      borderRadius: 2,
                      background: "#e5e2e1",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 2,
                    height: 6,
                    borderRadius: "0 1px 1px 0",
                    background: "rgba(255,255,255,0.4)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scrollable content area */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              position: "relative",
              /* push content down under dynamic island area */
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {children}
          </div>

          {/* Home indicator bar */}
          <div
            style={{
              height: 34,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#131313",
            }}
          >
            <div
              style={{
                width: 134,
                height: 5,
                borderRadius: 3,
                background: "rgba(255,255,255,0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
