import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Fraunces, Spline_Sans } from "next/font/google";
import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "pt-BR";

  return (
    <html lang={lang}>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60rem_40rem_at_80%_-10%,rgba(182,74,47,0.12),transparent)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
