'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

export default function Brands() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);

  const x = brands.map((brand) => [brand, brand, brand]).flat();

  return (
    <section className='flex flex-col gap-6'>
      <p className='mx-auto max-w-screen-lg text-center'>
        Worldwide Confidence: 2,000+ Businesses Trusting in Global Impact
      </p>

      <div className='embla mx-auto' ref={emblaRef}>
        <div className='embla__container'>
          {brands
            .flatMap((brand) => [brand, brand, brand])
            .map(({ name, src }, index) => (
              <div
                key={`brand-${index}`}
                className='embla__slide mr-20 grayscale'
              >
                <img src={src} alt={name} />
              </div>
            ))}
          <div />
        </div>
      </div>
    </section>
  );
}

const brands = [
  { name: 'Capsule', src: '/images/logos/capsule.svg' },
  { name: 'Command+R', src: '/images/logos/command-r.svg' },
  { name: 'Hourglass', src: '/images/logos/hourglass.svg' },
  { name: 'Lightbox', src: '/images/logos/lightbox.svg' },
  { name: 'Luminous', src: '/images/logos/luminous.svg' },
  { name: 'Spherule', src: '/images/logos/spherule.svg' },
  { name: 'Webflow', src: '/images/logos/webflow.svg' },
];
