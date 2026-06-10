import type { Metadata } from "next";
import { Outfit, Source_Serif_4, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mark Alexis Batis | Full Stack Developer & CS Graduate",
  description: "Mark Alexis Batis is a recent Computer Science graduate from St. Clare College of Caloocan specializing in full-stack web applications, Socket.IO, Node.js, and technical systems operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${sourceSerif.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAF8F5] text-stone-900 font-sans antialiased selection:bg-burgundy-500/10 selection:text-burgundy-900">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
