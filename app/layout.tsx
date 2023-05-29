import Header from "@/components/Header";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Filmfrenzy",
  description: "A 7ª arte ao seu alcance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-Br'>
      <body className={`${bebas.variable} ${inter.variable} font-sans`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
