import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIBE CHECK – Social Discovery at Live Venues",
  description:
    "Discover who's around you at live venues. Anonymous, safe, and real-time social discovery for nightlife.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;800&family=Inter:wght@400;700&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col overflow-x-hidden" style={{ background: '#131313', color: '#e5e2e1' }}>
        {children}
      </body>
    </html>
  );
}
