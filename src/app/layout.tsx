import "@/styles/globals.css";

import {Inter} from "next/font/google";
import {Providers} from "@/app/providers";
import Navbar from "@/app/Navbar";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Places Kim Should Try",
  description: "A curated list of places in Brisbane City that Kim should try.",
  icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={"light"}>
    <body className={`font-sans ${inter.variable}`}>
    <Providers>
      <Navbar/>
      <div className={"container mx-auto"}>
        {children}
      </div>
    </Providers>
    </body>
    </html>
  );
}
