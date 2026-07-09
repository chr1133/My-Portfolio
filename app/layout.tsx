import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christine | Software Engineer",
  description: "Portfolio of Christine — Software Engineering student specializing in full-stack and mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       <Navbar />
       <main className="pt-20">{children}</main>
       <Footer />
      </body>
    </html>
  );
}