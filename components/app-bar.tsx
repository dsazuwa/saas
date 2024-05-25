import Link from 'next/link';

import { Logo } from './logo';
import AppBarDropDown from './app-bar-dropdown';

export default function AppBar() {
  return (
    <nav className='container mx-auto inline-flex w-full items-center p-6 max-md:justify-between md:gap-6'>
      <Link href='/'>
        <Logo />
      </Link>

      <div className='inline-flex flex-1 items-center gap-6 max-md:hidden'>
        <div className='inline-flex flex-1 gap-6'>
          {navLinks.map(({ name, href }, index) => (
            <Link
              key={`nav-link-${index}`}
              href={href}
              className='text-sm font-medium hover:text-black'
            >
              {name}
            </Link>
          ))}
        </div>

        <Link href='/login' className='text-sm font-medium hover:text-black'>
          Sign In
        </Link>

        <Link
          href='/register'
          className='rounded-md border border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white'
        >
          Get Started
        </Link>
      </div>

      <div className='md:hidden'>
        <AppBarDropDown />
      </div>
    </nav>
  );
}

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

export { navLinks };
