import { Public_Sans } from 'next/font/google';
import React from 'react';

import { cn } from '@/lib/utils';

const font = Public_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
  fallback: ['Tofu'],
  preload: true,
});

type Props = { dark?: boolean };

const Logo = ({
  className,
  dark = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & Props) => {
  return (
    <div
      className={cn(
        'inline-flex text-2xl font-bold tracking-[0.09rem]',
        {
          'text-black': !dark,
          'text-neutral-200': dark,
        },
        className,
        font.className,
      )}
      {...props}
    >
      AvalonX
      {/* <LogoIcon dark={dark} className='-ml-1' /> */}
    </div>
  );
};

const LogoIcon = ({
  className,
  dark,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & Props) => {
  return (
    <svg
      viewBox='0 0 32 32'
      focusable={false}
      {...props}
      className={cn(
        'h-8 shrink-0 rotate-[-80deg]',
        {
          'fill-black stroke-black': !dark,
          'fill-neutral-200 stroke-neutral-200': dark,
        },
        className,
      )}
    >
      <path
        d='M29.12 2.88a2.1 2.1 0 0 0-2-.54L3.82 8.58a2.09 2.09 0 0 0-.34 3.91l10.59 4.87a1.13 1.13 0 0 1 .57.57l4.87 10.59a2.05 2.05 0 0 0 1.89 1.21h.18a2.06 2.06 0 0 0 1.84-1.54L29.66 4.9a2.1 2.1 0 0 0-.54-2.02zm-24.8 7.79-.42.91.43-1.06 21.5-5.76L15 15.59l-.09-.05zm17.16 17h-.15L16.46 17.1a.47.47 0 0 0-.05-.1L27.25 6.17z'
        data-original='#000000'
      ></path>
    </svg>
  );
};

export { Logo, LogoIcon };
