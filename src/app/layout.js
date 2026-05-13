import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mehedihasan.dev"),
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
  authors: [{ name: "Mehedi Hasan", url: "https://github.com/mehedi-hasan2006" }],
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
    url: "https://mehedihasan.dev",
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    yahoo: "YOUR_YAHOO_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://mehedihasan.dev",
    languages: {
      "en-US": "https://mehedihasan.dev/en",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
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
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <Navbar /> {children} <Footer />
      </body>
    </html>
  );
}
