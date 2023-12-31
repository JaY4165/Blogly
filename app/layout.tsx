import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import FooterComp from "@/components/FooterComp";
import { AuthContextProvider } from "@/context/AuthContext";
import PostsPaginationProvider from "@/context/PostsPagination";

export const metadata: Metadata = {
  title: "Blogly",
  description: "A blog website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthContextProvider>
          <PostsPaginationProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <section className="px-1 lg:px-32">
                <Navbar />
                {children}
              </section>
              <FooterComp />
            </ThemeProvider>
          </PostsPaginationProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
