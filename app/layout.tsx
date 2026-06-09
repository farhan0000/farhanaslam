import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farhan Aslam — Senior Front-End & Mobile Engineer",
  description:
    "Farhan Aslam — Senior Front-End & Mobile Engineer. React, Next.js, Vue & React Native. Building high-performance web and mobile products.",
  openGraph: {
    title: "Farhan Aslam — Senior Front-End & Mobile Engineer",
    description:
      "React, Next.js, Vue & React Native. Building high-performance web and mobile products.",
    type: "website",
  },
};

// Set theme before paint: persisted choice wins, otherwise prefers-color-scheme.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('farhan-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = t === 'dark' ? 'dark' : 'light';
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
