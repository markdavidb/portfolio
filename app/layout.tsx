import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David’s Portfolio | Coming Soon",
  description: "A home for David’s projects, currently in progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
