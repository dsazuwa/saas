'use client';

import { Button } from '../ui/button';

export default function SubscribeField() {
  return (
    <form className='border-input inline-flex w-full max-w-[400px] rounded-md border bg-black/5 shadow-sm backdrop-blur-sm has-[input:focus-visible]:border-neutral-900'>
      <div className='flex-1 py-3 pl-4'>
        <input
          className='h-full w-full bg-transparent text-sm placeholder:text-neutral-500 focus-visible:outline-none'
          placeholder='Enter your email'
        />
      </div>

      <Button type='submit' className='m-0.5'>
        Get Started
      </Button>
    </form>
  );
}
