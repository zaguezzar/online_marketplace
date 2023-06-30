'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className=''
    >
      Toggle Mode
    </button>
  );
}
