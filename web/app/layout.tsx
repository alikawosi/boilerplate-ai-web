import type { Metadata } from "next";
import "./global.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Boilerplate AI - From Idea to Code",
  description: "Generate production-ready boilerplates for your next big idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <div className="animate-in pt-20">{children}</div>
      </body>
    </html>
  );
}
