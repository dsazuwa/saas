'use client';

import { ImageLoaderProps } from 'next/image';

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/dcdakh7gh/image/upload/${params.join(',')}/v1715361000/saas-avalonx/${src}`;
}
