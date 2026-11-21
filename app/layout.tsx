import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hangout BAC | Two Worlds. One Destination.",
  description: "Restaurant, bar, nightlife and unforgettable entertainment at The Hangout BAC, 12th Avenue Extension, Bulawayo.",
  metadataBase: new URL("https://bac-lounge-and-entertainment.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}