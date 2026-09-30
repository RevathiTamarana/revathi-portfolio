import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revathi Tamarana | Data & Business Analytics",
  description:
    "Portfolio of Revathi Tamarana — B.Tech Information Technology student focused on Data Analytics and Business Analytics.",
  keywords: [
    "Revathi Tamarana",
    "Data Analyst",
    "Business Analyst",
    "Power BI",
    "SQL",
    "Excel",
    "Python",
    "Data Analytics",
  ],
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