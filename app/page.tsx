import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import Brands from '@/components/home/brands';
import Reviews from '@/components/home/reviews';

export default function Home() {
  return (
    <>
      <main className='flex w-full flex-col gap-[10vh] pb-[10vh]'>
        <Brands />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
