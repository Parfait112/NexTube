import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NewTube",
  description: "NewTube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html
        lang="en"
        className={inter.className}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col">
          <TRPCProvider>
            <Toaster />
            {children}
          </TRPCProvider> 
        </body>
      </html>
    </ClerkProvider>
  );
}
