import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import { StrictMode } from 'react'


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
  title: "Choice Construction",
  description: "The best Consultancy in the business",
};

export default function RootLayout({ children }) {
  return (
    <StrictMode>
    <>
    <html lang="en">
      
        
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <Analytics/>
    </html>
    </>
    </StrictMode>
  );
}
