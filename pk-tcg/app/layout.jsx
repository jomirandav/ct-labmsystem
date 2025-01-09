// import { Geist, Geist_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900']
});

export const metadata = {
  title: "Pokémon TCG",
  description: "App with info from the Scarlet & Violet Pokémon series.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased bg-gradient-to-r from-indigo-700 from-10% via-sky-500 via-40% to-emerald-700 to-90%`}
      >
      
        {children}
      </body>
    </html>
  );
}
