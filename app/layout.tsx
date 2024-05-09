import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom",
  description: "Clone of Zoom's landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
            socialButtonsPlacement: "bottom",
            // shimmer: true,
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0e78f9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={cn(inter.className, "bg-dark-2 text-white")}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
