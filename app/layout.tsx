import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Parth & Nishi - Wedding Invitation",
  description: "Join us in celebrating our union. Traditional Indian Wedding Ceremony",
  keywords: ["wedding", "Indian wedding", "invitation", "RSVP"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} ${playfair.variable}`}>
          {children}
          <Toaster />
        </body>
    </html>
  );
}
