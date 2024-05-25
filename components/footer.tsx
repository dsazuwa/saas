import Link from 'next/link';
import {
  FacebookIcon,
  IconType,
  InstagramIcon,
  XIcon,
  YoutTubeIcon,
} from './icons';
import { buttonVariants } from './ui/button';
import { Logo } from './logo';

export default function Footer() {
  return (
    <div className='mt-auto bg-black text-neutral-400'>
      <div className='container mx-auto px-6'>
        <div className='flex w-full flex-col gap-16 py-16 md:flex-row'>
          <LinkSection />

          <div className='flex flex-col gap-4 text-wrap'>
            <Logo dark />

            <div>4140 Parker Rd. Allentown, New Mexico 31134</div>

            <div className='h-[1px] bg-neutral-700' />

            <a
              href='mailto:joedoe@mail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-neutral-300 hover:text-white'
            >
              joedoe@mail.com
            </a>

            <a
              href='tel:(208) 555-0112'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-neutral-300 hover:text-white'
            >
              (208)555-0112
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2 border-t border-neutral-700 py-6 sm:flex-row sm:justify-between md:items-center'>
          <div>© 2024 AvalonX. All Rights Reserved.</div>

          <div className='inline-flex flex-wrap gap-1 max-sm:m-[-6px]'>
            <IconLink href='https://twitter.com' Icon={XIcon} />
            <IconLink href='https://facebook.com' Icon={FacebookIcon} />
            <IconLink href='https://youtube.com' Icon={YoutTubeIcon} />
            <IconLink href='https://instagram.com' Icon={InstagramIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkSection() {
  return (
    <div className='grid w-full grid-cols-footer gap-6'>
      {links.map(({ section, links }) => (
        <div
          key={`${section}-section`}
          className='flex max-w-[10rem] flex-col gap-3'
        >
          <div className='text-white'>{section}</div>

          {links.map(({ name, href }, index) => (
            <Link
              key={`${section}-link-${index}`}
              href={href}
              className='min-w-0 capitalize transition-colors hover:text-white'
            >
              {name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

type IconLinkProps = { href: string; Icon: IconType };

function IconLink({ href, Icon }: IconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={buttonVariants({ variant: 'ghostDark', size: 'icon' })}
    >
      <Icon className='h-5 fill-white' />
    </a>
  );
}

const links = [
  {
    section: 'Product',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Features', href: '/features' },
      { name: 'Blogs', href: '/blog' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'Integrations', href: '/integrations' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    section: 'Resources',
    links: [
      { name: 'Changelog', href: '/changelog' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Coming Soon', href: '/coming-soon' },
      { name: 'Error 404', href: '404' },
    ],
  },
  {
    section: 'Utilities',
    links: [
      { name: 'Style Guide', href: '/style-guide' },
      { name: 'Licensing', href: '/licensing' },
    ],
  },
];
