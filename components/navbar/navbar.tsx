'use client';
import Logo from './logo';
import DarkModeButton from './dark-mode-button';

export default function Navbar() {
  return (
    <nav className='fixed w-full z-50 shadow-sm'>
      {/* <Logo /> */}
      <DarkModeButton />
    </nav>
  );
}
