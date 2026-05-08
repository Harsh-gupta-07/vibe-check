// Screen 6: Anonymous Chat with Safety Controls — phone-frame-aware
"use client";
import { useState } from "react";
import BottomNav from "@/app/components/BottomNav";
import PanicButton from "@/app/components/PanicButton";
import Link from "next/link";

interface Message {
  id: number;
  sent: boolean;
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, sent: false, text: "Is the energy good by the main stage? I'm stuck near the bar.", time: "11:42 PM" },
  { id: 2, sent: true, text: "It's packed but the sound is insane. Definitely worth navigating through.", time: "11:44 PM" },
  { id: 3, sent: false, text: "Bet. I might head over. Are you with a group?", time: "11:45 PM" },
  { id: 4, sent: true, text: "Just me and one other right now. We're keeping it lowkey.", time: "11:46 PM" },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [showRevealPrompt, setShowRevealPrompt] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sent: true, text: input.trim(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    ]);
    setInput("");
  };

  return (
    /* Outer column: header + chat area + input bar + nav */
    <div className="flex flex-col" style={{ background: "#131313", minHeight: "100%" }}>

      {/* ── Top App Bar ─────────────────────────────────────── */}
      <header
        className="sticky top-0 w-full z-50 flex justify-between items-center px-4 shrink-0"
        style={{
          height: 56,
          background: "rgba(19,19,19,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <button
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/5 transition-colors"
          style={{ color: "var(--primary)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>menu</span>
        </button>
        <h1
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--primary)",
          }}
        >
          VIBE CHECK
        </h1>
        <PanicButton small />
      </header>

      {/* ── Contextual Header ─────────────────────────────────── */}
      <div
        className="px-4 pt-3 pb-3 shrink-0 relative overflow-hidden"
        style={{
          background: "rgba(32,31,31,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Neon bleed */}
        <div
          className="absolute -top-8 -left-8 w-28 h-28 rounded-full pointer-events-none"
          style={{ background: "rgba(0,241,253,0.2)", filter: "blur(28px)" }}
        />
        <div className="flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            {/* Abstract Avatar */}
            <div
              className="rounded-full flex items-center justify-center shrink-0"
              style={{
                width: 44,
                height: 44,
                background: "linear-gradient(135deg, var(--secondary-container), var(--surface-dim))",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 12px rgba(0,241,253,0.3)",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  background: "rgba(19,19,19,0.5)",
                  backdropFilter: "blur(4px)",
                  transform: "rotate(45deg)",
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "var(--on-surface)" }}>
                  ANON_8X2F
                </h2>
                <span
                  className="w-2 h-2 rounded-full live-dot"
                  style={{ background: "var(--secondary-container)", boxShadow: "0 0 8px rgba(0,241,253,0.8)" }}
                />
              </div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(212,192,215,0.7)", marginTop: 2, letterSpacing: "0.06em" }}>
                Matched 12m ago
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowRevealPrompt(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full transition-all hover:bg-white/5 shrink-0"
            style={{
              border: "1px solid var(--outline)",
              color: "var(--on-surface)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 15, color: "var(--outline)" }}>vpn_key</span>
            Reveal Table
          </button>
        </div>
      </div>

      {/* ── Messages (scrollable) ───────────────────────────── */}
      <div
        className="flex-1 overflow-y-auto flex flex-col gap-5 px-4 py-4"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 max-w-[82%] ${msg.sent ? "self-end" : "self-start"}`}
          >
            {!msg.sent && (
              <div
                className="rounded-full shrink-0 mt-auto"
                style={{
                  width: 28,
                  height: 28,
                  background: "linear-gradient(135deg, var(--secondary-container), var(--surface-dim))",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            )}
            <div
              className="px-3 py-2 rounded-2xl"
              style={{
                background: msg.sent ? "rgba(235,178,255,0.1)" : "var(--surface-container)",
                border: msg.sent ? "1px solid rgba(235,178,255,0.2)" : "1px solid rgba(255,255,255,0.05)",
                color: msg.sent ? "var(--primary-fixed-dim)" : "var(--on-surface)",
                borderBottomRightRadius: msg.sent ? 4 : undefined,
                borderBottomLeftRadius: !msg.sent ? 4 : undefined,
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.5 }}>{msg.text}</p>
              <span
                className="block mt-1"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  color: msg.sent ? "rgba(235,178,255,0.5)" : "rgba(212,192,215,0.5)",
                  textAlign: msg.sent ? "right" : "left",
                }}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div className="flex gap-2 max-w-[82%] self-start mt-1">
          <div
            className="px-3 py-2 rounded-2xl flex gap-1 items-center"
            style={{
              background: "var(--surface-container)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderBottomLeftRadius: 4,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 9999,
                  background: "rgba(0,241,253,0.5)",
                  animation: `bounce-dot 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 150}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Message Input (sticky at bottom of scroll area) ─── */}
      <div
        className="sticky bottom-0 w-full px-4 py-2 shrink-0"
        style={{
          background: "rgba(19,19,19,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex-1 flex items-center px-3 py-2"
            style={{
              background: "var(--surface-container-highest)",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <input
              className="w-full bg-transparent border-none outline-none"
              placeholder="Send a message..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface)" }}
            />
            <button className="ml-2 transition-colors shrink-0" style={{ color: "var(--on-surface-variant)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>mood</span>
            </button>
          </div>
          <button
            onClick={sendMessage}
            className="flex items-center justify-center shrink-0 rounded-full transition-all hover:scale-105"
            style={{
              width: 44,
              height: 44,
              background: "var(--primary-container)",
              color: "var(--on-primary-container)",
              boxShadow: "0 0 15px rgba(188,19,254,0.2)",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 20 }}>send</span>
          </button>
        </div>
      </div>

      <BottomNav />

      {/* ── Table Reveal Modal ─────────────────────────────── */}
      {showRevealPrompt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{ background: "rgba(19,19,19,0.8)", backdropFilter: "blur(20px)" }}
        >
          <div
            className="w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(235,178,255,0.1)", border: "1px solid rgba(235,178,255,0.2)" }}
              >
                <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontVariationSettings: "'FILL' 1" }}>vpn_key</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "var(--on-surface)" }}>
                  Table Reveal Request
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "var(--on-surface-variant)" }}>
                  Mutual consent required
                </p>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--on-surface-variant)", lineHeight: 1.5 }}>
              Both parties must agree to share table numbers. Your identity remains anonymous until you accept.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setShowRevealPrompt(false)}
                className="w-full py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--on-primary)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Send Request
              </button>
              <button
                onClick={() => setShowRevealPrompt(false)}
                className="w-full py-3 rounded-lg transition-colors hover:bg-white/5"
                style={{
                  border: "1px solid var(--outline-variant)",
                  color: "var(--on-surface-variant)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
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
