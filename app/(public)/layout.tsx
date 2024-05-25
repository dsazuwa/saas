import { ReactNode } from 'react';

import AppBar from '@/components/app-bar';
import Footer from '@/components/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />

      {children}

      <Footer />
    </>
  );
}
