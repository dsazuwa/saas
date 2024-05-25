import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export default function CTA() {
  return (
    <section className='px-6'>
      <div className='mx-auto grid w-full max-w-screen-xl gap-10 bg-black px-[25px] py-[50px] text-neutral-400 sm:grid-cols-2 md:grid-cols-11'>
        <div className='flex flex-col gap-5 sm:col-span-2 md:col-span-5'>
          <h2 className='text-[28px] font-medium text-white md:text-[32px]'>
            Get started now
          </h2>

          <div className='aspect-[16/5.7385]'>
            <img
              src='/images/cta-img.png'
              alt='Call to action image'
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <Action title='Contact us' className='md:col-span-3'>
          <div className='flex h-full flex-col justify-between'>
            <p>
              If contacting us by email, send your inquiry to
              <a
                href='mailto:joedoe@mail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='ml-1 text-sm text-neutral-300 hover:text-white'
              >
                joedoe@mail.com
              </a>
            </p>

            <a
              href='tel:(208)555-0112'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-neutral-300 hover:text-white'
            >
              (208) 555-0112
            </a>
          </div>
        </Action>

        <Action title='Sign up now' className='md:col-span-3'>
          <div className='flex h-full flex-col justify-between'>
            <p>Sign up now for instant access to in our platform.</p>

            <Link
              href='/register'
              className='text-sm text-neutral-300 hover:text-white'
            >
              Join us today
            </Link>
          </div>
        </Action>
      </div>
    </section>
  );
}

function Action({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex h-full flex-col gap-5', className)}>
      <h3 className='text-xl font-medium text-white md:text-2xl'>{title}</h3>

      {children}
    </div>
  );
}
