import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import Image from '../image';

export default function CTA() {
  return (
    <section className='px-6'>
      <div className='container mx-auto grid w-full gap-10 bg-black px-[25px] py-[50px] text-neutral-400 sm:grid-cols-2 md:grid-cols-11'>
        <div className='flex flex-col gap-5 sm:col-span-2 md:col-span-5'>
          <div className='text-[28px] font-medium text-white md:text-[32px]'>
            Get started now
          </div>

          <div className='aspect-[16/5.7385]'>
            <Image src='cta-img' alt='Call to action image' cover dark />
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
                aria-label='Send an email to joedoe@mail.com'
              >
                joedoe@mail.com
              </a>
            </p>

            <a
              href='tel:(208)555-0112'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-neutral-300 hover:text-white'
              aria-label='Call (208) 555-0112'
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
              aria-label='Go to Register Page'
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
      <div className='text-xl font-medium text-white md:text-2xl'>{title}</div>

      {children}
    </div>
  );
}
