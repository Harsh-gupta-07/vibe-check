"use client";
import { useRouter } from "next/navigation";

/**
 * PANIC EXIT — Safety escape hatch.
 * Navigates immediately to the incident report screen.
 */

export default function PanicButton({ small = false }: { small?: boolean }) {
  const router = useRouter();

  const handlePanic = () => {
    router.push("/report");
  };

  return (
    <button
      onClick={handlePanic}
      aria-label="Panic exit — leave the app immediately"
      className="flex items-center gap-1 font-label transition-all active:scale-95 hover:opacity-90"
      style={{
        background: "#FF3B30",
        color: "#ffffff",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: small ? 9 : 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: small ? "5px 9px" : "7px 13px",
        borderRadius: 9999,
        boxShadow: "0 0 14px rgba(255,59,48,0.4)",
        whiteSpace: "nowrap",
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: small ? 12 : 14, fontVariationSettings: "'FILL' 1" }}
      >
        warning
      </span>
      PANIC EXIT
    </button>
  );
}
