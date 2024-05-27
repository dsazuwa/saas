import AppBar from '../app-bar';
import Image from '../image';
import Brands from './brands';
import SubscribeField from './subscribe';

export default function Hero() {
  return (
    <div>
      <div className='hero-wrapper mb-6 flex flex-col bg-hero-blur'>
        <AppBar />

        <section className='container mx-auto flex flex-col gap-5 p-6 md:flex-row md:items-center md:gap-16'>
          <div className='space-y-5 max-md:text-center md:max-w-80 md:space-y-10'>
            <div className='space-y-3'>
              <p className='text-2xl font-semibold text-black md:text-3xl lg:text-4xl'>
                Empowering digital success.
              </p>

              <p className='lg:text-lg'>
                Revolutionizing patient care efficiency with intuitive SaaS
                solutions tailored for busy healthcare environments.
              </p>
            </div>

            <SubscribeField />
          </div>

          <div className='aspect-[800/654] h-full w-full'>
            <Image
              src='hero'
              alt='Hero Image'
              sizes='(min-width: 768px) 80vw, 100vw'
              width={864}
              height={706}
              priority
            />
          </div>
        </section>
      </div>

      <Brands />
    </div>
  );
}
