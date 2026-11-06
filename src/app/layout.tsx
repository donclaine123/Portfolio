import type { Metadata } from "next";
import { Outfit, Playfair_Display, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markalexisbatis.vercel.app"),
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
    canonical: "https://markalexisbatis.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markalexisbatis.vercel.app",
    title: "Mark Alexis Batis | Full Stack Developer & Software Engineer",
    description:
      "Explore projects, technical skills, and experience of Mark Alexis Batis — Full Stack Developer & Computer Science Graduate.",
    siteName: "Mark Alexis Batis Portfolio",
    images: [
      {
        url: "https://markalexisbatis.vercel.app/mypicture.png",
        width: 800,
        height: 800,
        type: "image/png",
        alt: "Mark Alexis Batis — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Alexis Batis | Full Stack Developer & Software Engineer",
    description:
      "Explore projects, technical skills, and experience of Mark Alexis Batis — Full Stack Developer & Computer Science Graduate.",
    images: ["https://markalexisbatis.vercel.app/mypicture.png"],
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
    icon: [
      { url: "/icon.png?v=2" },
      { url: "/mypicture.png?v=2" },
    ],
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
  verification: {
    google: "google5bcf944fd2d85eac",
  },
  other: {
    "geo.region": "PH-00",
    "geo.placename": "Caloocan, Metro Manila, Philippines",
    "geo.position": "14.6534;120.9788",
    "ICBM": "14.6534, 120.9788",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://markalexisbatis.vercel.app/#website",
      url: "https://markalexisbatis.vercel.app",
      name: "Mark Alexis Batis Portfolio",
      description: "Official portfolio of Mark Alexis Batis — Full Stack Developer & Software Engineer.",
      publisher: {
        "@id": "https://markalexisbatis.vercel.app/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://markalexisbatis.vercel.app/#webpage",
      url: "https://markalexisbatis.vercel.app",
      name: "Mark Alexis Batis | Full Stack Developer & Software Engineer",
      isPartOf: {
        "@id": "https://markalexisbatis.vercel.app/#website",
      },
      description:
        "Official portfolio and project case studies of Mark Alexis Batis — Full Stack Developer & Computer Science Graduate.",
      mainEntity: {
        "@id": "https://markalexisbatis.vercel.app/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://markalexisbatis.vercel.app/#person",
      name: "Mark Alexis Batis",
      alternateName: ["donclaine123", "Alexis Batis"],
      url: "https://markalexisbatis.vercel.app",
      image: "https://markalexisbatis.vercel.app/mypicture.png",
      jobTitle: "Full Stack Developer",
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "AdministrativeArea",
          name: "Metro Manila, Philippines",
        },
        skills:
          "React, Next.js, TypeScript, Node.js, Express, Laravel, PostgreSQL, MySQL, Socket.IO, React Native, Mobile Development",
      },
      worksFor: {
        "@type": "Organization",
        name: "Independent / Freelance",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "St. Clare College of Caloocan",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Caloocan",
        addressRegion: "Metro Manila",
        addressCountry: "PH",
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
        "Laravel",
        "PHP",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Socket.IO",
        "REST APIs",
        "Stripe Payments",
        "Mobile App Development",
        "React Native",
        "Expo",
        "SQLite",
        "Android Widgets",
        "System Architecture",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Pocket — Penny Journal",
      operatingSystem: "Android",
      applicationCategory: "FinanceApplication",
      description:
        "Minimalist, distraction-free mobile expense tracker with 100% offline-first privacy, Android home screen widgets, and 3-second transaction logging.",
      url: "https://github.com/donclaine123/pocket",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://markalexisbatis.vercel.app/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Ecart — Modern E-Commerce Platform",
      operatingSystem: "Web",
      applicationCategory: "BusinessApplication",
      description:
        "Modern full-stack e-commerce web application with React 19, Laravel 11 REST API, Supabase PostgreSQL, and Stripe payment processing.",
      url: "https://myecart.vercel.app",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://markalexisbatis.vercel.app/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "QR Code Attendance & Monitoring System",
      operatingSystem: "Web",
      applicationCategory: "BusinessApplication",
      description:
        "Real-time faculty attendance tracking ecosystem powered by Socket.IO, Node.js, and PostgreSQL.",
      url: "https://employeattendance.vercel.app",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://markalexisbatis.vercel.app/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "EazyAttend Student Attendance System",
      operatingSystem: "Web",
      applicationCategory: "EducationalApplication",
      description:
        "Automated student presence verification web application with encrypted session-based authentication.",
      url: "https://eazyattend.netlify.app/",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://markalexisbatis.vercel.app/#person",
      },
    },
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
      <body className="min-h-full bg-white dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
