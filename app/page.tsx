import Footer from '@/components/footer';
import CTA from '@/components/home/cta';
import Brands from '@/components/home/brands';
import FAQ from '@/components/home/faq';
import Overview from '@/components/home/overview';
import Reviews from '@/components/home/reviews';

export default function Home() {
  return (
    <>
      <main className='flex w-full flex-col gap-[10vh] pb-[10vh]'>
        <Brands />
        <Overview />
        <Reviews />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
