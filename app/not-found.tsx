import Link from 'next/link';

import LogoIcon from '@/components/logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className='mx-auto mt-[10vh] flex max-w-screen-md flex-col items-center gap-4 p-4 text-center'>
      <LogoIcon className='h-20 w-auto' />

      <div className='text-[28px] font-medium md:text-[32px]'>
        Sorry, we can&apos;t find that page...
      </div>

      <div className='md:text-[20px]'>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </div>

      <Link href='/' className={cn(buttonVariants())}>
        Back to Home
      </Link>
    </div>
  );
}
