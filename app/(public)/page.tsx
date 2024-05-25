import Blog from '@/components/home/blog';
import Brands from '@/components/home/brands';
import CTA from '@/components/home/cta';
import FAQ from '@/components/home/faq';
import Hero from '@/components/home/hero';
import Overview from '@/components/home/overview';
import Reviews from '@/components/home/reviews';

export default function Home() {
  return (
    <main className='flex w-full flex-col gap-[10vh] pb-[10vh] pt-5'>
      <div className='space-y-10'>
        <Hero />
        <Brands />
      </div>

      <Overview />
      <Blog />
      <Reviews />
      <FAQ />
      <CTA />
    </main>
  );
}
