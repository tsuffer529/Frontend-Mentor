import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// typographyからとってくる
const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Frontend Mentor Solution",
  icons:"favicon-32x32.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
