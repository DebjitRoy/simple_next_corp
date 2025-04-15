'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="relative w-full flex flex-wrap items-center justify-between m-x-auto p-8 ">
        <Link href="/" className={`font-bold text-3xl`}>
          Home
        </Link>
        <div className="space-x-4 text-xl ">
          <Link href="/performance" className={pathname === '/performance' ? 'font-bold' : ''}>
            Performance
          </Link>
          <Link href="/reliability" className={pathname === '/reliability' ? 'font-bold' : ''}>
            Reliability
          </Link>
          <Link href="/scale" className={pathname === '/scale' ? 'font-bold' : ''}>
            Scale
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
