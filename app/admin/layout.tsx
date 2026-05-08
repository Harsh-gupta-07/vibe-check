"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin", label: "Live Dashboard", icon: "sensors", exact: true },
  { href: "/admin/venues", label: "Venue Management", icon: "night_shelter" },
  { href: "/admin/moderation", label: "Moderation Queue", icon: "gavel" },
  { href: "/admin/users", label: "User Management", icon: "group" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-dvh" style={{ background: "#131313" }}>
      {/* Sidebar */}
      <nav
        className="fixed left-0 top-0 h-screen w-64 flex flex-col py-6 px-4 z-50"
        style={{
          background: "var(--surface-container-lowest)",
          borderRight: "1px solid rgba(80,66,84,0.3)",
        }}
      >
        {/* Brand */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
              style={{
                background: "var(--primary-container)",
                color: "var(--on-primary-container)",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 14,
              }}
            >
              NA
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                Nightwatch OS
              </h1>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--on-surface-variant)",
                  letterSpacing: "0.08em",
                }}
              >
                Super Admin
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: active ? "var(--primary-container)" : "transparent",
                  color: active ? "var(--on-primary-container)" : "var(--on-surface-variant)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Bottom links */}
        <div className="flex flex-col gap-1 pt-4" style={{ borderTop: "1px solid rgba(80,66,84,0.3)" }}>
          <button
            className="w-full px-4 py-2 rounded-lg text-left transition-colors hover:bg-white/5"
            style={{
              background: "var(--surface-variant)",
              color: "var(--on-surface)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            System Status
          </button>
          {[
            { icon: "settings", label: "Settings" },
            { icon: "logout", label: "Logout", danger: true },
          ].map((item) => (
            <Link
              key={item.label}
              href="/"
              className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-white/5"
              style={{ color: item.danger ? "var(--error)" : "var(--on-surface-variant)", fontFamily: "'Inter', sans-serif", fontSize: 16 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header
          className="fixed top-0 z-40 flex justify-between items-center h-16 px-10"
          style={{
            left: 256,
            right: 0,
            background: "rgba(19,19,19,0.8)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(80,66,84,0.2)",
          }}
        >
          <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "var(--primary)" }}>
            Nightwatch OS
          </div>
          <div className="flex items-center gap-4">
            <button
              className="relative transition-colors hover:opacity-80"
              style={{ color: "var(--on-surface-variant)" }}
            >
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              className="relative transition-colors hover:opacity-80"
              style={{ color: "var(--on-surface-variant)" }}
            >
              <span className="material-symbols-outlined">notifications</span>
              <span
                className="absolute top-0 right-0 w-2 h-2 rounded-full"
                style={{ background: "var(--primary)", boxShadow: "0 0 12px rgba(188,19,254,0.5)" }}
              />
            </button>
            <div
              className="w-8 h-8 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--primary-container), var(--secondary-container))",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
          </div>
        </header>

        <div className="pt-16 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
