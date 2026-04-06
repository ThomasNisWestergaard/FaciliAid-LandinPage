import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FaciliAid",
  description: "Tools for better facilitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
