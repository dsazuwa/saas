import React from 'react';

const Logo = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<'img'>
>((props, ref) => {
  return <img src='/aether-logo.png' alt='logo' ref={ref} {...props} />;
});
Logo.displayName = 'Logo';

const LogoIcon = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<'img'>
>((props, ref) => {
  return <img src='/aether-logo-sm.png' alt='logo' ref={ref} {...props} />;
});
LogoIcon.displayName = 'LogoIcon';

export default LogoIcon;
