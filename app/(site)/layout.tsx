import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import "../styles.css";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants";
import { Providers } from "./providers";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${roboto.className}`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
