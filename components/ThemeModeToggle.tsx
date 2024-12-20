'use client'

import Image, { ImageProps } from 'next/image';
import { useTheme } from "next-themes";

import sun from '../public/icons/sun.svg';
import moon from '../public/icons/moon.svg';
import sunMoon from '../public/icons/sun-moon.svg';
import { useState, useEffect, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const MODES = ["dark", "light", "system"];
type ThemeMode = (typeof MODES)[number];

interface ThemeModeIconProps extends Omit<ImageProps, "src"> {
  mode?: ThemeMode;
}

interface ThemeModeToggleProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: number;
}

function ThemeModeIcon({ mode, ...props }: ThemeModeIconProps) {
  switch (mode) {
    case "dark":
      return <Image 
        src={moon} {...props}
      />;
    case "light":
      return <Image 
        src={sun} {...props}
      />;
    case "system":
    default:
      return <Image 
        src={sunMoon} {...props}
      />;
  }
}

function ThemeModeToggle({size = 25, ...props}: ThemeModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function toggle() {
    setTheme(MODES[(MODES.indexOf(theme as ThemeMode) + 1) % MODES.length]);
  }

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return <button>
      <Image src={sunMoon}
        className="dark:invert opacity-50"
        alt="placeholder"   
        width={size} height={size}/>
    </button>
  }

  return (
    <button type="button" onClick={toggle} {...props}>
      <ThemeModeIcon mode={theme as ThemeMode}
        className="dark:invert"
        title={`Toggle theme (${theme})`}
        alt={`Theme toggle button (${theme})`}
        width={size} height={size}  
        suppressHydrationWarning
      />
    </button>
  );
}

export default ThemeModeToggle;
