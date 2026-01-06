import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Plata - Network & Telecommunications Engineer",
  description: "Network and Telecommunications Engineer focused on ISP operations, network monitoring, and infrastructure reliability.",
  keywords: ["Network Engineer", "Telecommunications", "ISP", "Network Monitoring", "Infrastructure"],
  authors: [{ name: "Carlos Alberto Plata Monroy" }],
  openGraph: {
    title: "Carlos Plata - Network & Telecommunications Engineer",
    description: "Network and Telecommunications Engineer focused on ISP operations, network monitoring, and infrastructure reliability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
