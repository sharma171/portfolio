import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Portfolio Website",
  description: "Blogging and projects site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
