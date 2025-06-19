import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/footer/Footer";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { Inter } from "next/font/google";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "frost.cat",
  description: "Website & Blog von Felix Orosz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.className} antialiased text-c-text bg-c-background`}
      >
        <NavBar />
        <Suspense fallback={<Loading />}>
          <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl lg:max-w-3xl">
            {children}
          </div>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
