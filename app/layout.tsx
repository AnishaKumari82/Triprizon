import type { Metadata } from "next";
import{Poppins} from 'next/font/google';

// filepath: c:\Skills\WebDevelopment\next-js\travel_yt\app\layout.tsx



// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Responsivenav from "@/components/Home/Navbar/Responsivenav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";



const font = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Travel For YOu | Next Js 15",
  description: "TRAVEL landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${font.className} antialiased`}>
        <Responsivenav />

        {children}
        <Footer />
        <ScrollToTop />
       
      </body>
    </html>
  );
}
