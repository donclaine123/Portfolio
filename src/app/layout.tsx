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
  metadataBase: new URL("https://donclaine123.github.io/Portfolio"),
  title: {
    default: "Mark Alexis Batis | Full Stack Developer & Software Engineer",
    template: "%s | Mark Alexis Batis",
  },
  description:
    "Portfolio of Mark Alexis Batis — Full Stack Developer and Computer Science Graduate specializing in React, Next.js, Node.js, TypeScript, and real-time systems.",
  keywords: [
    "Mark Alexis Batis",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Node.js",
    "Philippines Developer",
    "Computer Science Graduate",
  ],
  authors: [{ name: "Mark Alexis Batis", url: "https://github.com/donclaine123" }],
  creator: "Mark Alexis Batis",
  publisher: "Mark Alexis Batis",
  alternates: {
    canonical: "https://donclaine123.github.io/Portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://donclaine123.github.io/Portfolio",
    title: "Mark Alexis Batis | Full Stack Developer & Software Engineer",
    description:
      "Explore projects, technical skills, and experience of Mark Alexis Batis — Full Stack Developer & Computer Science Graduate.",
    siteName: "Mark Alexis Batis Portfolio",
    images: [
      {
        url: "/Portfolio/mark.png",
        width: 800,
        height: 800,
        alt: "Mark Alexis Batis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Alexis Batis | Full Stack Developer & Software Engineer",
    description:
      "Explore projects, technical skills, and experience of Mark Alexis Batis — Full Stack Developer & Computer Science Graduate.",
    images: ["/Portfolio/mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Portfolio/mark.png",
    shortcut: "/Portfolio/mark.png",
    apple: "/Portfolio/mark.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Alexis Batis",
  url: "https://donclaine123.github.io/Portfolio",
  image: "https://donclaine123.github.io/Portfolio/mark.png",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Independent",
  },
  sameAs: [
    "https://github.com/donclaine123",
    "https://www.linkedin.com/in/mark-alexis-batis-4061b128a/",
    "https://www.facebook.com/micky.arkal/",
  ],
  knowsAbout: [
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "Socket.IO",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
