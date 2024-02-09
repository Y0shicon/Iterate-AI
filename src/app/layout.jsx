import { Rubik } from "next/font/google";
import "./globals.scss";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Iterate AI",
  description: "Convert text to image using OpenAI's API and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/static/iterate_ai_logo.jpeg" />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
