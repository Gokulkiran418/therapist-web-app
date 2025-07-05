
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dr. Serena Blake',
  description: 'Professional counseling for Anxiety & Stress Management, Relationship Counseling, Trauma Recovery ',
   icons: {
    icon: "/handheart.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}