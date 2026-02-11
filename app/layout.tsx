import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Jost } from "next/font/google";
import "./globals.css";

const jostFont = Jost({
  variable: "--font-jost",
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
  const theme =
    cookieStore.get("theme")?.value === "minimalist" ? "minimalist" : "classic";

  return (
    <html lang={lang} data-theme={theme}>
      <body className={`${jostFont.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
          <div className="classic-glow pointer-events-none fixed inset-0 bg-[radial-gradient(60rem_40rem_at_80%_-10%,rgba(182,74,47,0.12),transparent)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
