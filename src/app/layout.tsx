import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Providers/Provider";
import Image from "next/image";
import img from "../../public/valorant-bg.jpg";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valorant",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-lvh`}>
        <Provider>
          <Container>
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
