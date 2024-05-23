import React from 'react';

import { cn } from '@/lib/utils';

const Pill = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn('rounded-[50px] border px-3 py-1.5 text-sm', className)}
    />
  );
});

Pill.displayName = 'Pill';

export default Pill;
