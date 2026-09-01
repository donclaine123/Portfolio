import type { Metadata } from "next";
import { Outfit, Playfair_Display, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
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
  icons: {
    icon: "/Portfolio/mark.png",
    shortcut: "/Portfolio/mark.png",
    apple: "/Portfolio/mark.png",
  },
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
      className={`${outfit.variable} ${playfair.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black font-sans antialiased selection:bg-black/10 selection:text-black">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
