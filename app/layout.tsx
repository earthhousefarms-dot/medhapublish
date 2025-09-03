import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medha Publish",
  description: "Book Publishing House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}