import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alternate AI",
  description: "Convert text to image using OpenAI's API and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/static/iterate_ai_logo.jpeg' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
