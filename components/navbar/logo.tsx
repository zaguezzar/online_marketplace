'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function Logo() {
  const router = useRouter();
  const logoClickHandler = React.useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Image
      alt="Estancy's logo"
      className='hidden md:block cursor-pointer'
      height='100'
      width='100'
      src='/images/logo.png'
      onClick={logoClickHandler}
    />
  );
}
