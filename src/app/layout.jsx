import "./globals.css";
import Lenis from './components/lenis/lenis'

export const metadata = {
  title: "Matrix 2.0",
  description: "Three day workshop on Python, Machine Learning, and Web Development.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/light.png',
        href: '/light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/dark.png',
        href: '/dark.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Lenis />
        {children}
      </body>
    </html>
  );
}
