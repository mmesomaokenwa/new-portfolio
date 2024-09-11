import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Mmesoma Okenwa",
  description: "Mmesoma Okenwa's Portfolio",
  openGraph: {
    url: "https://mmesomacodes.vercel.app/",
    siteName: "Mmesoma Okenwa",
    type: "website",
    title: "Mmesoma Okenwa",
    description: "Mmesoma Okenwa's Portfolio",
    images: [
      {
        url: "https://mfgadjucjxcfjhuaebjq.supabase.co/storage/v1/object/public/products/public/opengraph.png?t=2024-09-11T14%3A46%3A45.782Z",
      },
    ],
  },
};

const quicksand = Quicksand({
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
        className={`${quicksand.className} antialiased`}
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
