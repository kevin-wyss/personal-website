import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Wyss",
  description: "Field notes from the messy middle of enterprise technology.",
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
