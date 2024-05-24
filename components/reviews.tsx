'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import Pill from './pill';

export default function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <section className='space-y-10 px-6'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center gap-1 text-center'>
        <Pill>Testimonials</Pill>

        <h2 className='text-center text-[28px] font-medium md:text-[32px]'>
          Customer Reviews
        </h2>
      </div>

      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {reviews.map((review, index) => (
            <Review key={`review-${index}`} review={review} />
          ))}
          <div />
        </div>
      </div>
    </section>
  );
}

type ReviewProps = { review: TReview };

function Review({ review: { review, name, location, image } }: ReviewProps) {
  return (
    <div className='embla__slide mr-5 flex flex-col-reverse border-black/20 bg-white max-sm:w-full sm:flex-row'>
      <div className='flex flex-col justify-between gap-5 p-6 text-left sm:max-w-96'>
        <p className='text-sm/[1.5rem]'>{review}</p>

        <div className='flex flex-col'>
          <span className='text-black'>{name}</span>
          <span className='text-sm'>{location}</span>
        </div>
      </div>

      <div className='aspect-[5/5.569] w-full sm:max-w-52'>
        <img
          src={image}
          alt={name + ' headshot'}
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
}

type TReview = {
  review: string;
  name: string;
  location: string;
  image: string;
};

const reviews: TReview[] = [
  {
    review:
      'Etiam laoreet, ligula in vehicula pretium, nulla erat eleifend enim, id lobortis urna ex et ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    name: 'Tanya Russel',
    location: 'Houston, TX',
    image: '/images/tanya.jpg',
  },
  {
    review:
      'Fusce pulvinar volutpat erat, quis tincidunt eros pellentesque in. Phasellus vehicula tellus est, at volutpat lectus eleifend ac. Sed id enim dictum, tristique metus vel, ultricies est.',
    name: 'Mark Terry',
    location: 'Columbia, SC',
    image: '/images/mark.jpg',
  },
  {
    review:
      'Pellentesque sit amet ornare magna, in dignissim velit. Morbi placerat, leo id fringilla dapibus, enim tellus dignissim magna, at tincidunt sem orci nec nisl.',
    name: 'Nikki Hankins',
    location: 'Berkeley, CA',
    image: '/images/nikki.jpg',
  },
  {
    review:
      'Vivamus pulvinar sem mauris, nec gravida massa luctus nec. In sed condimentum ex. Mauris tortor tortor, venenatis sed est egestas, congue consectetur est. Morbi vulputate risus eu hendrerit mattis.',
    name: 'Jamees Flores',
    location: 'Toledo, OH',
    image: '/images/james.jpg',
  },
  {
    review:
      'Aenean justo metus, pulvinar quis dictum et, pellentesque at metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    name: 'Willie C. Shealey',
    location: 'Fort Washington, PA',
    image: '/images/willie.jpg',
  },
];
