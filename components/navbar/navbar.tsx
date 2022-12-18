import { useState } from 'react';
import { Inter } from '@next/font/google';
import NavbarLink from './navbar-link';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const navbarLinks = [
    { name: 'Home', path: '/' },
    { name: 'CSS', path: '/css' },
    { name: 'Javascript', path: '#' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-white/80 shadow backdrop-blur">
      <div className="mx-auto max-w-5xl">
        <div className="flex h-16 items-center justify-between">
          <span className="text-2xl font-extrabold text-slate-800">ZM.</span>
          <div className={`${inter.className} flex items-center space-x-8 font-medium`}>
            {navbarLinks.map(navbarLink => (
              <NavbarLink key={navbarLink.path} href={navbarLink.path} name={navbarLink.name} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
