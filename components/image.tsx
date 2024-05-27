'use client';

import NextImage, { ImageProps } from 'next/image';
import { SyntheticEvent, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type Props = ImageProps & { cover?: boolean; dark?: boolean };

export default function Image(props: Props) {
  return props.priority ? (
    <PriorityImage {...props} />
  ) : (
    <LazyLoadImage {...props} />
  );
}

function PriorityImage({ className, cover, ...props }: Props) {
  return (
    <NextImage
      width={0}
      height={0}
      {...props}
      className={cn('h-full w-full', cover && 'object-cover', className)}
    />
  );
}

function LazyLoadImage({ className, cover, dark, onLoad, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true);
    if (onLoad) onLoad(e);
  };

  return (
    <>
      {!loaded && (
        <Skeleton
          className={cn(
            'h-full w-full rounded-none',
            dark && 'bg-neutral-50/10',
            className,
          )}
        />
      )}

      <NextImage
        width={0}
        height={0}
        sizes='100vw'
        {...props}
        // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className={cn({
          'h-full w-full': loaded,
          'h-0 w-auto': !loaded,
          'object-cover': cover,
          className,
        })}
        onLoad={handleLoad}
      />
    </>
  );
}

export { LazyLoadImage, PriorityImage };
