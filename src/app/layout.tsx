import "./globals.css";

import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";

import {cn} from "@/lib/utils";

import {ThemeProvider} from "./_components/theme-provider";
import PrimaryColorProvider from "./_components/primary-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Real Estate Website",
    default: "Real Estate Website",
  },
  description: "Real estate website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrimaryColorProvider>
            <main>{children}</main>
          </PrimaryColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
