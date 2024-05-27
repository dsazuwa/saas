import { Check } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import Image from '../image';
import { buttonVariants } from '../ui/button';

export default function Overview() {
  return (
    <section className='container mx-auto flex flex-col gap-[10vh] p-6'>
      <div className='flex flex-col gap-[10vh]'>
        <HighlightSection
          className='md:flex-row-reverse'
          heading='Your source of better living'
          photoUrl='info-1'
          alt='Overview Highlight 1'
          graphicPhotoUrl='info-graphic-1'
          graphicAlt='Info Graphic 1'
          linkText='Discover More'
        >
          <ul className='space-y-4 text-base/[1.7rem] md:space-y-6 lg:text-lg/[1.9rem]'>
            <HighlightText
              title='Assessment'
              text='Thoroughly understanding your needs to pave the way for personalized care. Thoroughly understanding your needs to pave the way for personalized care.'
            />

            <HighlightText
              title='Tailored Treatment'
              text="Customized care designed to address your unique health needs effectively. You're Supported Every Step of Your Health Journey, Ensuring Lasting Health and Happiness."
            />

            <HighlightText
              title='Ongoing Support'
              text='Continuous guidance and assistance throughout your healthcare journey. Your Lifelong Partner in Health, Ensuring Consistent Guidance and Assistance for Your Well-being.'
            />
          </ul>
        </HighlightSection>

        <HighlightSection
          heading='Quality of a product'
          photoUrl='info-2'
          alt='Overview Highlight 2'
          graphicPhotoUrl='info-graphic-2'
          graphicAlt='Info Graphic 2'
          linkText='Explorer More'
        >
          <div className='space-y-4 text-base/[1.7rem] lg:text-lg/[1.9rem]'>
            <p>
              Our range of products offers robust solutions for tracking and
              analyzing website data, providing valuable insights into user
              behavior, and optimizing content strategies to enhance
              performance.
            </p>

            <p>
              Incorporating images and videos adds variety to your blog post,
              catering to different learning styles and preferences.
            </p>
          </div>
        </HighlightSection>
      </div>

      <div className='grid grid-cols-2 gap-5'>
        <div className='col-span-2 flex flex-col gap-6 border-neutral-200 bg-white p-2 sm:p-12 md:col-span-1 md:gap-12'>
          <div className='aspect-[3/1.7565] w-full'>
            <Image src='overview-img-1' alt='Overview Image 1' />
          </div>

          <OverviewText
            title='Enhancing user experience'
            text='Improve user satisfaction and productivity with AvalonX SaaS,
            offering intuitive navigation, personalized features, and seamless
            integration for an exceptional experience.'
          />
        </div>

        <div className='col-span-2 flex flex-col gap-6 border-neutral-200 bg-white p-2 sm:p-12 md:col-span-1 md:gap-12'>
          <div className='aspect-[3/1.7565] w-full'>
            <Image src='overview-img-2' alt='Overview Image 2' />
          </div>

          <OverviewText
            title='Schedule post timing'
            text="Determine the optimal times to post based on your audience's
            online behavior and platform insights. Consider factors such as
            time zone, day of the week, and peak engagement hours."
          />
        </div>

        <div className='col-span-2 flex min-h-0 flex-col items-start gap-6 border-neutral-200 bg-white p-2 sm:p-12 md:gap-12 lg:flex-row'>
          <div className='aspect-[8/1.678] w-full lg:w-7/12'>
            <Image src='overview-img-3' alt='Overview Image 3' />
          </div>

          <OverviewText
            className='flex-1'
            title='Power of flow'
            text='Our streamlined platform empowers you to automate tasks, optimize
              processes, and achieve more with less effort.'
          />
        </div>
      </div>
    </section>
  );
}

function HighlightSection({
  className,
  heading,
  photoUrl,
  alt,
  graphicPhotoUrl,
  graphicAlt,
  linkText,
  children,
}: {
  className?: string;
  heading: string;
  photoUrl: string;
  alt: string;
  graphicPhotoUrl: string;
  graphicAlt: string;
  linkText: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-[3.75rem]',
        className,
      )}
    >
      <div className='relative aspect-square overflow-hidden md:w-1/2'>
        <Image src={photoUrl} alt={alt} cover />

        <div className='absolute bottom-2 left-2 aspect-[3/1.5] w-[60%] rounded-sm bg-img-blur p-2 md:bottom-5 md:left-5 lg:p-4'>
          <Image src={graphicPhotoUrl} alt={graphicAlt} />
        </div>
      </div>

      <div className='space-y-5 md:w-1/2'>
        <div className='text-2xl font-medium text-black lg:text-3xl'>
          {heading}
        </div>

        {children}

        <Link
          className={buttonVariants()}
          href='/features'
          aria-label='Go to Features Page'
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

type TextProps = {
  title: string;
  text: string;
  className?: string;
};

function HighlightText({ title, text, className }: TextProps) {
  return (
    <li className={cn('grid grid-cols-[auto,1fr] gap-2 md:gap-2.5', className)}>
      <Check className='w-3 shrink-0 md:w-4' />

      <div className='text-lg font-medium text-black lg:text-xl'>{title}</div>

      <div className='col-start-2 text-base/[1.7rem] lg:text-lg/[1.9rem]'>
        {text}
      </div>
    </li>
  );
}

function OverviewText({ title, text, className }: TextProps) {
  return (
    <div className={cn('flex flex-col gap-2 px-2 pb-2', className)}>
      <div className='text-lg font-medium text-black'>{title}</div>

      <p className='text-base/[1.7rem]'>{text}</p>
    </div>
  );
}
