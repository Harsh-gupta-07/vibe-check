"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/map", label: "Map", icon: "map" },
  { href: "/scan", label: "Scan", icon: "qr_code_scanner" },
  { href: "/chat", label: "Chat", icon: "forum" },
  { href: "/profile", label: "Profile", icon: "person" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="w-full z-50 flex justify-around items-center h-16 px-4 shrink-0"
      style={{
        background: "rgba(32,31,31,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 -8px 24px rgba(0,0,0,0.5)",
        flexShrink: 0,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all ${
              active ? "nav-item-active px-4 py-1 scale-90" : "opacity-60 hover:opacity-80"
            }`}
            style={{ color: active ? "var(--primary-container)" : "var(--on-surface-variant)" }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="font-label text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
