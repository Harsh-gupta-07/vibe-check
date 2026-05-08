// Admin: User Management
"use client";
import { useState } from "react";
import type { Metadata } from "next";

const USERS = [
  { id: "USR_001", handle: "ANON_8X29", joined: "May 1, 2026", checkins: 12, reports: 0, status: "active" },
  { id: "USR_002", handle: "ANON_J492", joined: "Apr 28, 2026", checkins: 5, reports: 1, status: "active" },
  { id: "USR_003", handle: "ANON_M100", joined: "Apr 15, 2026", checkins: 22, reports: 3, status: "suspended" },
  { id: "USR_004", handle: "ANON_P77F", joined: "May 3, 2026", checkins: 2, reports: 0, status: "active" },
  { id: "USR_005", handle: "ANON_ZZ01", joined: "Mar 12, 2026", checkins: 45, reports: 8, status: "banned" },
  { id: "USR_006", handle: "ANON_R38K", joined: "Apr 22, 2026", checkins: 7, reports: 0, status: "active" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const filtered = USERS.filter((u) => {
    const matchSearch = u.handle.toLowerCase().includes(search.toLowerCase()) || u.id.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || u.status === filter;
    return matchSearch && matchFilter;
  });

  const statusColor = (status: string) => {
    if (status === "active") return "var(--secondary-container)";
    if (status === "suspended") return "var(--tertiary)";
    return "var(--tertiary-container)";
  };

  return (
    <div className="px-10 pb-10 pt-6 max-w-7xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--on-surface)" }}>
            User Management
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)", marginTop: 4 }}>
            Search, suspend, ban, or restore platform users.
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors hover:bg-white/10"
          style={{
            border: "1px solid var(--outline-variant)",
            color: "var(--on-surface-variant)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.06em",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
          Export CSV
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-3 items-center">
        <div
          className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-lg"
          style={{
            background: "var(--surface-container)",
            border: "1px solid var(--outline-variant)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--on-surface-variant)" }}>search</span>
          <input
            className="flex-1 bg-transparent outline-none"
            placeholder="Search by handle or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface)" }}
          />
        </div>
        {["all", "active", "suspended", "banned"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 rounded-full capitalize transition-colors"
            style={{
              border: filter === f ? "1px solid var(--primary)" : "1px solid var(--outline-variant)",
              background: filter === f ? "rgba(235,178,255,0.1)" : "transparent",
              color: filter === f ? "var(--primary)" : "var(--on-surface-variant)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.06em",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Users Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {["User ID", "Handle", "Joined", "Check-ins", "Reports", "Status", "Actions"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "var(--on-surface-variant)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "var(--surface-container-high)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr
                key={user.id}
                className="transition-colors hover:bg-white/3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
              >
                <td className="px-4 py-3">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--on-surface-variant)" }}>
                    {user.id}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 600, color: "var(--on-surface)" }}>
                    {user.handle}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)" }}>
                    {user.joined}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, fontWeight: 600, color: "var(--on-surface)" }}>
                    {user.checkins}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    style={{
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: user.reports > 2 ? "var(--tertiary-container)" : user.reports > 0 ? "var(--tertiary)" : "var(--on-surface-variant)",
                    }}
                  >
                    {user.reports}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className="px-2 py-1 rounded-full"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: statusColor(user.status),
                      background: `${statusColor(user.status)}22`,
                      border: `1px solid ${statusColor(user.status)}44`,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 rounded-lg transition-colors hover:bg-white/10"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: "var(--on-surface-variant)",
                        border: "1px solid var(--outline-variant)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      View
                    </button>
                    {user.status === "active" && (
                      <button
                        className="px-3 py-1 rounded-lg transition-colors hover:bg-orange-950/30"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: "var(--tertiary)",
                          border: "1px solid rgba(255,180,170,0.3)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Suspend
                      </button>
                    )}
                    {user.status !== "banned" && (
                      <button
                        className="px-3 py-1 rounded-lg transition-colors hover:bg-red-950/30"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: "var(--error)",
                          border: "1px solid rgba(255,180,171,0.3)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Ban
                      </button>
                    )}
                    {user.status !== "active" && (
                      <button
                        className="px-3 py-1 rounded-lg transition-colors hover:bg-cyan-950/30"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: "var(--secondary-container)",
                          border: "1px solid rgba(0,241,253,0.3)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Restore
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--on-surface-variant)", letterSpacing: "0.06em", textAlign: "right" }}>
        {filtered.length} of {USERS.length} users shown
      </p>
    </div>
  );
}
