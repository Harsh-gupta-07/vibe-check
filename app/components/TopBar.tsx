"use client";
import Link from "next/link";
import PanicButton from "@/app/components/PanicButton";

interface TopBarProps {
  showBack?: boolean;
  backHref?: string;
  title?: string;
  showPanic?: boolean;
}

export default function TopBar({
  showBack = false,
  backHref = "/",
  title = "VIBE CHECK",
  showPanic = true,
}: TopBarProps) {
  return (
    <header
      className="sticky top-0 w-full z-50 flex justify-between items-center px-5 h-14"
      style={{
        background: "rgba(19,19,19,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        flexShrink: 0,
      }}
    >
      {showBack ? (
        <Link
          href={backHref}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors"
          style={{ color: "var(--primary)" }}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      ) : (
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors"
          style={{ color: "var(--primary)" }}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      )}

      <h1
        className="font-display tracking-tighter"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: "var(--primary)", fontSize: showBack ? 20 : 28, fontWeight: 800 }}
      >
        {title}
      </h1>

      {showPanic ? (
        <PanicButton small />
      ) : (
        <div className="w-10" />
      )}
    </header>
  );
}
