import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import App from "./App";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "My E-commerce Store",
    template: "%s | My E-commerce Store",
  },
  description: "Find the best products at great prices in our online store.",
  // openGraph: {
  //   title: "My E-commerce Store",
  //   description: "Find the best products at great prices in our online store.",
  //   url: "https://www.myecommercestore.com",
  //   siteName: "My E-commerce Store",
  //   images: [
  //     {
  //       url: "https://www.myecommercestore.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
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
  twitter: {
    title: "My E-commerce Store",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <App>
          <Header />
          {children}
          <BackToTop />
          <Footer />
        </App>
      </body>
    </html>
  );
}
