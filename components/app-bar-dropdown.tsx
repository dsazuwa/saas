'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navLinks } from './app-bar';

export default function AppBarDropDown() {
  const [open, setOpen] = useState(false);

  const Icon = open ? X : Menu;

  const links = [
    ...navLinks,
    { name: 'Sign In', href: '/login' },
    { name: 'Get Started', href: '/register' },
  ];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          {<Icon className='h-4 w-4 shrink-0 fill-neutral-500' />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mx-6 mt-[15px] w-[calc(100vw-3rem)] rounded-sm bg-[#f6f6f3]'>
        {links.map(({ name, href }, index) => (
          <DropdownMenuItem key={`nav-menu-item-${index}`} asChild>
            <Link
              href={href}
              className='py-2 text-sm font-medium hover:underline focus-visible:underline'
            >
              {name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
