import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
