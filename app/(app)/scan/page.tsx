// Screen 3b: QR Scanner
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/app/components/BottomNav";
import PanicButton from "@/app/components/PanicButton";

export default function ScanPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/map");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="flex flex-col flex-1 h-full relative overflow-hidden"
      style={{ background: "#131313" }}
    >
      {/* Simulated Camera Feed Background */}
      <div className="absolute inset-0 z-0" style={{ background: "#131313" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, transparent 20%, rgba(19,19,19,0.6) 60%, rgba(19,19,19,0.95) 100%)",
          }}
        />
        {/* Grid pattern to simulate camera feed */}
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(235,178,255,0.08) 40px, rgba(235,178,255,0.08) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(235,178,255,0.08) 40px, rgba(235,178,255,0.08) 41px)",
          }}
        />
      </div>

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
        <button style={{ color: "var(--primary)" }}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--primary)",
          }}
        >
          VIBE CHECK
        </h1>
        <PanicButton small />
      </header>

      {/* Main Scanner Canvas */}
      <main
        className="flex-grow z-10 flex flex-col items-center justify-center px-5 relative"
        style={{ paddingTop: 24, paddingBottom: 24 }}
      >
        {/* QR Reticle */}
        <div className="relative mb-8" style={{ width: 280, height: 280 }}>
          {/* Corner brackets */}
          {["tl", "tr", "bl", "br"].map((corner) => (
            <div
              key={corner}
              className="absolute"
              style={{
                width: 48,
                height: 48,
                top: corner.startsWith("t") ? 0 : undefined,
                bottom: corner.startsWith("b") ? 0 : undefined,
                left: corner.endsWith("l") ? 0 : undefined,
                right: corner.endsWith("r") ? 0 : undefined,
                borderTop: corner.startsWith("t")
                  ? "3px solid var(--secondary-container)"
                  : undefined,
                borderBottom: corner.startsWith("b")
                  ? "3px solid var(--secondary-container)"
                  : undefined,
                borderLeft: corner.endsWith("l")
                  ? "3px solid var(--secondary-container)"
                  : undefined,
                borderRight: corner.endsWith("r")
                  ? "3px solid var(--secondary-container)"
                  : undefined,
                borderTopLeftRadius: corner === "tl" ? 12 : undefined,
                borderTopRightRadius: corner === "tr" ? 12 : undefined,
                borderBottomLeftRadius: corner === "bl" ? 12 : undefined,
                borderBottomRightRadius: corner === "br" ? 12 : undefined,
                boxShadow: "0 0 12px rgba(0,241,253,0.3)",
              }}
            />
          ))}
          {/* Central targeting dot */}
          <div
            className="absolute inset-0 m-auto flex items-center justify-center rounded-full"
            style={{
              width: 48,
              height: 48,
              border: "1px solid rgba(0,241,253,0.2)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: 9999,
                background: "var(--secondary-container)",
                boxShadow: "0 0 8px rgba(0,241,253,0.8)",
              }}
            />
          </div>
          {/* Scanning zone */}
          <div
            className="absolute inset-2 rounded-lg"
            style={{
              background: "rgba(0,241,253,0.05)",
              mixBlendMode: "screen",
            }}
          />
          {/* Scanning line animation */}
          <div
            className="absolute left-2 right-2 h-0.5 rounded-full"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--secondary-container), transparent)",
              boxShadow: "0 0 8px rgba(0,241,253,0.6)",
              animation: "scan-line 4s ease-in-out infinite",
              top: "50%",
            }}
          />
        </div>

        {/* Info card */}
        <div
          className="text-center p-6 rounded-2xl shadow-2xl w-full max-w-sm"
          style={{
            background: "rgba(32,31,31,0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <span
            className="material-symbols-outlined mb-3 block"
            style={{
              fontSize: 32,
              color: "var(--primary)",
              fontVariationSettings: "'FILL' 0",
              filter: "drop-shadow(0 0 8px rgba(188,19,254,0.4))",
            }}
          >
            qr_code_scanner
          </span>
          <h2
            className="mb-2"
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 20,
              fontWeight: 600,
              color: "var(--on-primary-container)",
            }}
          >
            Scan the QR code at the venue entry
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "var(--on-surface-variant)",
            }}
          >
            Position the code inside the frame to check in to the venue and
            access the live menu.
          </p>
        </div>

        {/* Auto-redirect progress */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "var(--on-surface-variant)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Entering venue map…
          </p>
          <div
            className="w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(to right, var(--primary), var(--secondary-container))",
                animation: "fill-bar 1s linear forwards",
              }}
            />
          </div>
        </div>
      </main>

      <BottomNav />

      <style>{`
        @keyframes scan-line {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }
        @keyframes fill-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
