import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: "%s | Content Crafter AI",
    default: "Content Crafter AI"
  },

  description: "AI Generated Content creator for your social media ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={inter.className}>
          {children}
          <script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </body>
      </html>
    </ClerkProvider>
  );
}
