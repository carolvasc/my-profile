import type { Metadata } from "next";
import { Fraunces, Spline_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Spline_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carolina Vasconcelos | Portfólio",
  description:
    "Portfólio profissional com foco em engenharia de software, performance e acessibilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60rem_40rem_at_80%_-10%,rgba(182,74,47,0.12),transparent)]" />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
