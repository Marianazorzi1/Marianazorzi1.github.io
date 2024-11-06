import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Mariana",
  description: "Aplicação de Front-end_II",
  charset: "UTF-8",
  author: "Mariana Zorzi",
  keywords:"HTML, CSS, JS, React, Next.js"

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
