import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Mmesoma Okenwa",
  description: "Mmesoma Okenwa's Portfolio",
  openGraph: {
    url: "https://new-portfolio-ruby-two.vercel.app/",
    siteName: "Mmesoma Okenwa",
    type: "website",
    title: "Mmesoma Okenwa",
    description: "Mmesoma Okenwa's Portfolio",
    images: ["/opengraph.png"],
  },
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
