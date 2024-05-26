'use client';

import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';
import { SyntheticEvent, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const CDN = process.env.NEXT_PUBLIC_CDN_URL;

type Props = ImageProps & { cover?: boolean; dark?: boolean };

export default function Image(props: Props) {
  return props.priority ? (
    <PriorityImage {...props} />
  ) : (
    <LazyLoadImage {...props} />
  );
}

function PriorityImage({ src, className, cover, ...props }: Props) {
  return (
    <NextImage
      width={0}
      height={0}
      sizes='100vw'
      priority
      src={`${CDN}/${src}`}
      className={cn('h-full w-full', cover && 'object-cover', className)}
      {...props}
    />
  );
}

function LazyLoadImage({
  src,
  className,
  cover,
  dark,
  onLoad,
  ...props
}: Props) {
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
        src={`${CDN}/${src}`}
        width={0}
        height={0}
        sizes='100vw'
        className={cn(className, {
          'h-full w-full': loaded,
          'h-0 w-auto': !loaded,
          'object-cover': cover,
        })}
        onLoad={handleLoad}
        {...props}
      />
    </>
  );
}

function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `${CDN}/${params.join(',')}/${src}`;
}

export { LazyLoadImage, PriorityImage, cloudinaryLoader };
