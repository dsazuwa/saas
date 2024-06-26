import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const font = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
  fallback: ['sans-serif'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'AvalonX',
  description: 'SAAS website built using Next.js based off a Webflow template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'flex h-screen flex-col bg-[#f6f6f3] text-[#333333]',
          font.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
