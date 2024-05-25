import { format } from 'date-fns';
import Link from 'next/link';

import Pill from '../pill';

export default function Blog() {
  return (
    <section className='mx-auto max-w-screen-xl space-y-10 px-6'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center gap-1 text-center'>
        <Pill>Our Blog</Pill>

        <h2 className='text-center text-[28px] font-medium md:text-[32px]'>
          Articles & Resources
        </h2>
      </div>

      <div className='grid gap-6 sm:grid-cols-3'>
        {articles.map((article, index) => (
          <Article key={`article-${index}`} article={article} />
        ))}
      </div>
    </section>
  );
}

function Article({
  article: { name, tag, postedAt, img, href },
}: {
  article: TArticle;
}) {
  return (
    <Link href={href} className='space-y-3.5 '>
      <div className='aspect-[3/2.4]'>
        <img src={img} alt={name} className='h-full w-full object-cover' />
      </div>

      <div className='space-y-3'>
        <div className='flex flex-row flex-wrap items-center gap-3'>
          <Pill>{tag}</Pill>

          <span className='text-sm'>{format(postedAt, 'MMMM dd, yyyy')}</span>
        </div>

        <h3 className='text-xl font-medium md:text-2xl'>{name}</h3>
      </div>
    </Link>
  );
}

type TArticle = {
  name: string;
  tag: string;
  postedAt: Date;
  img: string;
  href: string;
};

const articles: TArticle[] = [
  {
    name: 'Stay up-to-date with the latest developments, product , industry insights.',
    tag: 'Newsfeed',
    postedAt: new Date('2024-04-25'),
    img: '/images/blogs/blog-1.jpg',
    href: '',
  },
  {
    name: 'Articles to expert interviews, Perspectives offers a deeper.',
    tag: 'Perspectives',
    postedAt: new Date('2024-04-24'),
    img: '/images/blogs/blog-2.jpg',
    href: '',
  },
  {
    name: 'In this section, we showcase the power in a platform through feature.',
    tag: 'Featurette',
    postedAt: new Date('2024-04-24'),
    img: '/images/blogs/blog-3.jpg',
    href: '',
  },
];
