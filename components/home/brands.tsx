'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

import Image from '../image';

export default function Brands() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);

  return (
    <div className='flex flex-col gap-4'>
      <p className='container mx-auto px-6 text-center max-md:text-sm'>
        Worldwide Confidence: 2,000+ Businesses Trusting in Global Impact
      </p>

      <div className='relative'>
        <div className='absolute left-0 top-0 z-10 h-full w-full max-w-20 bg-gradient-to-r from-[#f6f6f3] to-transparent sm:max-w-32' />

        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {expandedBrands.map(({ name, photoUrl }, index) => (
              <div
                key={`brand-${index}`}
                className='embla__slide mr-10 grayscale md:mr-20'
              >
                <Image
                  src={photoUrl}
                  alt={name}
                  className='h-auto w-[120px]'
                  width={140}
                  height={40}
                  priority
                  cover
                />
              </div>
            ))}
            <div />
          </div>
        </div>

        <div className='absolute right-0 top-0 z-10 h-full w-full max-w-20 bg-gradient-to-l from-[#f6f6f3] to-transparent sm:max-w-32' />
      </div>
    </div>
  );
}

type TBrand = { name: string; photoUrl: string };

const brands: TBrand[] = [
  { name: 'Capsule', photoUrl: 'capsule' },
  { name: 'Command+R', photoUrl: 'command-r' },
  { name: 'Hourglass', photoUrl: 'hourglass' },
  { name: 'Lightbox', photoUrl: 'lightbox' },
  { name: 'Luminous', photoUrl: 'luminous' },
  { name: 'Spherule', photoUrl: 'spherule' },
  { name: 'Webflow', photoUrl: 'webflow' },
];

const expandedBrands: TBrand[] = Array(3)
  .fill(brands)
  .flatMap((arr) => arr);
