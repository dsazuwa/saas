import Footer from '@/components/footer';
import Blog from '@/components/home/blog';
import Brands from '@/components/home/brands';
import CTA from '@/components/home/cta';
import FAQ from '@/components/home/faq';
import Overview from '@/components/home/overview';
import Reviews from '@/components/home/reviews';

export default function Home() {
  return (
    <>
      <main className='flex w-full flex-col gap-[10vh] pb-[10vh]'>
        <Brands />
        <Overview />
        <Blog />
        <Reviews />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
