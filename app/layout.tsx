import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Against the Lion",
  description: "A vivid tale of courage in the African jungle."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
