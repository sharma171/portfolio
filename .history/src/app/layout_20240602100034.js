
import "./globals.css";


export const metadata = {
  title: "Portfolio Website",
  description: "Blogging and projects site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
