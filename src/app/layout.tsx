import type { Metadata } from "next";
import { Nunito, Pangolin } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const pangolin = Pangolin({
  variable: "--font-pangolin",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedar & Copper — The Apartment Shop",
  description:
    "A clothing and appliances store hidden inside an illustrated apartment. Wander five rooms, pick up what you find, and uncover a few things that are not for sale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${pangolin.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
