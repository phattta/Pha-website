// src/components/Layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <header>
        <nav>
          <Link href="/login">Login</Link> | <Link href="/">Home</Link> | <Link href="/products">All Dolls</Link> | <Link href="/cart">Cart</Link>
        </nav>
      </header>
      <main>{children}</main>
    </body>
  </html>
);

export default Layout;
