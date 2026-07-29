import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://da-siri-barbershop.ergest-troplini97.chatgpt.site"),
  title: "DA SIRI Barbershop | Il tuo stile, senza compromessi",
  description:
    "DA SIRI Barbershop: precisione, carattere e attenzione ai dettagli. Scopri il salone e contattaci su Instagram.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DA SIRI Barbershop",
    description: "Il tuo stile. Senza compromessi.",
    url: "/",
    siteName: "DA SIRI Barbershop",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/media/photos/salone.webp", width: 1419, height: 1536 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DA SIRI Barbershop",
    description: "Il tuo stile. Senza compromessi.",
    images: ["/media/photos/salone.webp"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: { icon: "/media/logo/favicon.png", shortcut: "/media/logo/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
