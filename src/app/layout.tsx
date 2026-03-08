import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import QuickScanSummary from "@/components/QuickScanSummary";
import TechMatrix from "@/components/TechMatrix";
import ExperienceEngine from "@/components/experienceData";
import CredentialVault from "@/components/education";
import ConversionFooter from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustaqeem CV",
  description: "Personal CV/Portfolio of Mustaqeem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <QuickScanSummary />
        <TechMatrix />
        <ExperienceEngine/>
        <CredentialVault />
        <ConversionFooter />
        {children}
      </body>
    </html>
  );
}
