'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

export default function Brands() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);

  return (
    <section className='flex flex-col gap-4'>
      <p className='container mx-auto px-6 text-center text-base/[1.7rem] md:text-lg/[1.9rem]'>
        Worldwide Confidence: 2,000+ Businesses Trusting in Global Impact
      </p>

      <div className='relative'>
        <div className='absolute left-0 top-0 z-10 h-full w-full max-w-20 bg-gradient-to-r from-[#f6f6f3] to-transparent sm:max-w-32' />

        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {expandedBrands.map(({ name, src }, index) => (
              <div
                key={`brand-${index}`}
                className='embla__slide mr-10 grayscale md:mr-20'
              >
                <img src={src} alt={name} />
              </div>
            ))}
            <div />
          </div>
        </div>

        <div className='absolute right-0 top-0 z-10 h-full w-full max-w-20 bg-gradient-to-l from-[#f6f6f3] to-transparent sm:max-w-32' />
      </div>
    </section>
  );
}

type TBrand = { name: string; src: string };

const brands: TBrand[] = [
  { name: 'Capsule', src: '/images/logos/capsule.svg' },
  { name: 'Command+R', src: '/images/logos/command-r.svg' },
  { name: 'Hourglass', src: '/images/logos/hourglass.svg' },
  { name: 'Lightbox', src: '/images/logos/lightbox.svg' },
  { name: 'Luminous', src: '/images/logos/luminous.svg' },
  { name: 'Spherule', src: '/images/logos/spherule.svg' },
  { name: 'Webflow', src: '/images/logos/webflow.svg' },
];

const expandedBrands: TBrand[] = Array(3)
  .fill(brands)
  .flatMap((arr) => arr);
