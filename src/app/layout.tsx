import type { Metadata } from "next";
import { poppins } from "@/app/fonts/fonts";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Céphée",
  description: "Constellation d'artistes",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
