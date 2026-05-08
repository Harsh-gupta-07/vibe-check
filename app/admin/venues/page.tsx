// Admin: Venue Management
"use client";
import { useState } from "react";

const VENUES = [
  { id: "VEN_001", name: "Neon Sanctuary", address: "42 Club Row, Downtown", genre: "Techno", geo: "150m", active: true, qr: true },
  { id: "VEN_002", name: "The Vault", address: "88 Arts District Blvd", genre: "House", geo: "200m", active: true, qr: true },
  { id: "VEN_003", name: "Sky Lounge", address: "1 Penthouse Ave, Uptown", genre: "Ambient", geo: "100m", active: true, qr: false },
  { id: "VEN_004", name: "Basement", address: "7 Industrial Way", genre: "DnB", geo: "250m", active: false, qr: true },
  { id: "VEN_005", name: "The Frequency", address: "22 East Side Strip", genre: "Electronic", geo: "180m", active: true, qr: true },
];

export default function AdminVenuesPage() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="px-10 pb-10 pt-6 max-w-7xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--on-surface)" }}>
            Venue Management
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--on-surface-variant)", marginTop: 4 }}>
            Create, edit, deactivate venues, and manage QR codes.
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:opacity-90"
          style={{
            background: "var(--primary-container)",
            color: "var(--on-primary-container)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            boxShadow: "0 0 16px rgba(188,19,254,0.25)",
          }}
        >
          <span className="material-symbols-outlined">add</span>
          Add Venue
        </button>
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {VENUES.map((venue) => (
          <div
            key={venue.id}
            className="glass-card rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            {/* Status dot */}
            <div className="absolute top-4 right-4">
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{
                  background: venue.active ? "var(--secondary-container)" : "var(--outline)",
                  boxShadow: venue.active ? "0 0 8px rgba(0,241,253,0.6)" : undefined,
                  animation: venue.active ? "live-pulse 2s ease-in-out infinite" : undefined,
                }}
              />
            </div>

            <div>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 20, fontWeight: 600, color: "var(--on-surface)" }}>
                {venue.name}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)", marginTop: 2 }}>
                {venue.address}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--primary)",
                  border: "1px solid rgba(235,178,255,0.2)",
                  background: "rgba(235,178,255,0.05)",
                  borderRadius: 4,
                  padding: "2px 8px",
                }}
              >
                {venue.genre}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--on-surface-variant)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  padding: "2px 8px",
                }}
              >
                📍 {venue.geo} radius
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: venue.active ? "var(--secondary-container)" : "var(--on-surface-variant)",
                  border: `1px solid ${venue.active ? "rgba(0,241,253,0.3)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: 4,
                  padding: "2px 8px",
                  textTransform: "uppercase",
                }}
              >
                {venue.active ? "Active" : "Inactive"}
              </span>
            </div>

            <div
              className="flex gap-2 pt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <button
                className="flex-1 py-1.5 rounded-lg text-center transition-colors hover:bg-white/5"
                style={{
                  border: "1px solid var(--outline-variant)",
                  color: "var(--on-surface-variant)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                }}
              >
                Edit
              </button>
              <button
                className="flex-1 py-1.5 rounded-lg text-center transition-colors hover:bg-purple-950/30"
                style={{
                  border: "1px solid rgba(235,178,255,0.2)",
                  color: "var(--primary)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                }}
              >
                {venue.qr ? "Re-gen QR" : "Gen QR"}
              </button>
              <button
                className="flex-1 py-1.5 rounded-lg text-center transition-colors hover:bg-red-950/20"
                style={{
                  border: "1px solid rgba(255,180,171,0.2)",
                  color: venue.active ? "var(--error)" : "var(--secondary-container)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                }}
              >
                {venue.active ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Venue Modal */}
      {showAdd && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{ background: "rgba(19,19,19,0.85)", backdropFilter: "blur(20px)" }}
        >
          <div
            className="w-full max-w-md p-6 flex flex-col gap-5 shadow-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
            }}
          >
            <div className="flex items-center justify-between">
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: "var(--on-surface)" }}>
                Add New Venue
              </h3>
              <button
                onClick={() => setShowAdd(false)}
                style={{ color: "var(--on-surface-variant)" }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {[
              { label: "Venue Name", placeholder: "e.g. Club Nebula" },
              { label: "Address", placeholder: "Full street address" },
              { label: "Geo Radius (meters)", placeholder: "e.g. 150" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <label
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: "var(--on-surface-variant)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {field.label}
                </label>
                <input
                  className="px-4 py-3 rounded-lg input-dark"
                  placeholder={field.placeholder}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 16 }}
                />
              </div>
            ))}
            <div className="flex gap-3">
              <button
                onClick={() => setShowAdd(false)}
                className="flex-1 py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  background: "var(--primary-container)",
                  color: "var(--on-primary-container)",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Create Venue
              </button>
              <button
                onClick={() => setShowAdd(false)}
                className="flex-1 py-3 rounded-lg transition-colors hover:bg-white/5"
                style={{
                  border: "1px solid var(--outline-variant)",
                  color: "var(--on-surface-variant)",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 16,
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
