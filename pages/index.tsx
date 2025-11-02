import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${geistSans.variable} ${geistMono.variable}`}
    >
      <h1 className="text-4xl font-bold">Welcome to the ALX Listing App</h1>
      <p className="mt-4 text-lg">
        This is the home page of your ALX Listing App built with TypeScript and Tailwind CSS.
      </p>
    </main>
  );
}
