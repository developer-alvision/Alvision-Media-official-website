import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alvision Media | Premium Digital Studio & Creator Network",
  description: "Stories that travel beyond screens. We create content, campaigns, and experiences that audiences remember.",
  keywords: ["Digital Studio", "Media House", "Content Production", "Influencer Campaigns", "Social Media Strategy", "Performance Marketing"],
  authors: [{ name: "Alvision Media" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-studio-light text-studio-deep-dark">
        {children}
      </body>
    </html>
  );
}
