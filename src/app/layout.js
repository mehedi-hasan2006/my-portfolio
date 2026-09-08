import {
  Geist,
  Geist_Mono,
  Hind_Siliguri,
  Inter,
  Noto_Sans_Bengali,
} from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import StructuredData from "../../components/StructuredData/StructuredData";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla-heading",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla-body",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-english",
});

export const metadata = {
  metadataBase: new URL("https://mdmehedi.vercel.app"),
  title: {
    default: "Mehedi Hasan | MERN Stack Developer & Portfolio",
    template: "%s | Mehedi Hasan",
  },
  description:
    "Mehedi Hasan is a passionate MERN Stack Developer from Bangladesh, specializing in React, Next.js, Node.js, and MongoDB. Explore my portfolio, projects, and skills.",
  keywords: [
    "Mehedi Hasan",
    "MERN Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Bangladesh Developer",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Dev Mehedi Hasan",
    "Computer Science Student",
    "Kurigram, Bangladesh",
  ],
  authors: [
    { name: "Mehedi Hasan", url: "https://github.com/mehedi-hasan2006" },
  ],
  creator: "Mehedi Hasan",
  publisher: "Mehedi Hasan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdmehedi.vercel.app/",
    siteName: "Mehedi Hasan Portfolio",
    title: "Mehedi Hasan | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer crafting beautiful, functional web experiences. Explore my projects, skills, and journey in web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehedi Hasan - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer crafting beautiful, functional web experiences.",
    creator: "@mehedihasan",
    images: ["/og-image.png"],
  },
  verification: {
    google: "uLuSmdoHcw3Pom1rjKZJeYEsjs4Z1lSzNnhIqQU1zIE",
  },
  alternates: {
    canonical: "https://mdmehedi.vercel.app",
    languages: {
      "en-US": "https://mdmehedi.vercel.app/en",
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Web Development Portfolio",
  other: {
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.variable} ${notoSansBengali.variable} ${inter.variable}  h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar /> {children} <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
