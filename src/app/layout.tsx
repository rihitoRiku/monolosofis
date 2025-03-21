import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/darkmode-toggle";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/top-navigation";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monolosofis",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pallete-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <TopNavigation />
          {children}
          <Footer />
          {/* <div className="absolute top-0 end-0 pe-4 pt-4">
          <ModeToggle />
        </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
