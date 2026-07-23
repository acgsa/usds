import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../src/styles/globals.css";

// Space Mono loaded from local @fontsource package — no network call at build time
const spaceMono = localFont({
  variable: "--font-space-mono",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/space-mono/files/space-mono-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../node_modules/@fontsource/space-mono/files/space-mono-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/space-mono/files/space-mono-latin-700-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "A US Design System",
  description: "A US Design System — component library and design tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body className={`${GeistSans.className} ${spaceMono.variable}`} style={{ minHeight: "100vh", margin: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
