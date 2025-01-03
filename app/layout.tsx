import type { Metadata } from "next";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/custom/Header";
import PageTransition from "@/components/custom/PageTransition";
import StairTransition from "@/components/custom/StairTransition";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export const metadata: Metadata = {
  title: "Bereket Dinku",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <div className="relative z-50">
          <Header />
        </div>
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
