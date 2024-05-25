import AppBar from '../app-bar';
import Brands from './brands';
import SubscribeField from './subscribe';

export default function Hero() {
  return (
    <div>
      <div className='hero-wrapper mb-6 flex flex-col'>
        <AppBar />

        <section className='space-y-6'>
          <div className='container mx-auto grid gap-5 px-6 pb-6 md:grid-cols-[auto,1fr] md:items-center md:gap-24'>
            <div className='space-y-5 max-md:text-center md:max-w-80 md:space-y-10'>
              <div className='space-y-3'>
                <p className='text-2xl font-semibold text-black md:text-4xl'>
                  Empowering digital success.
                </p>

                <p className='md:text-lg'>
                  Revolutionizing patient care efficiency with intuitive SaaS
                  solutions tailored for busy healthcare environments.
                </p>
              </div>

              <SubscribeField />
            </div>

            <div className='aspect-[800/654] h-full w-full'>
              <img
                src='/images/hero/img.jpg'
                alt='Hero Image'
                className='h-full w-full'
              />
            </div>
          </div>
        </section>
      </div>

      <Brands />
    </div>
  );
}
