import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CreditLeverage | Smarter Credit. Better Opportunities.",
    template: "%s | CreditLeverage",
  },
  description:
    "Explore credit strategies, travel rewards, business financing, and free financial calculators.",
  applicationName: "CreditLeverage",
  keywords: [
    "credit strategy",
    "credit utilization",
    "travel rewards",
    "business funding",
    "credit card calculator",
    "0% APR",
  ],
  openGraph: {
    title: "CreditLeverage",
    description:
      "Smarter credit decisions. Better financial opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}