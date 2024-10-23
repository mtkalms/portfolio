'use client'

import Image, { ImageProps } from 'next/image';
import { useTheme } from "next-themes";

import sun from '../public/icons/sun.svg';
import moon from '../public/icons/moon.svg';
import sunMoon from '../public/icons/sun-moon.svg';

const MODES = ["dark", "light", "system"];
type ThemeMode = (typeof MODES)[number] | "unset";

interface ThemeModeIconProps extends Omit<ImageProps, "src"> {
  mode: ThemeMode;
}

function ThemeModeIcon({ mode, ...props }: ThemeModeIconProps) {
  switch (mode) {
    case "dark":
      return <Image 
        src={moon} {...props}
        title="Toggle theme (dark)"
        alt="Theme toggle button (dark)"
      />;
    case "light":
      return <Image 
        src={sun} {...props}
        title="Toggle theme (light)"
        alt="Theme toggle button (light)"
      />;
    case "system":
    default:
      return <Image 
        src={sunMoon} {...props}
      />;
  }
}

function ThemeModeToggle() {
  const { theme, setTheme } = useTheme();

  function toggle() {
    setTheme(MODES[(MODES.indexOf(theme as ThemeMode) + 1) % MODES.length]);
  }

  return (
    <button type="button" onClick={toggle}>
      <ThemeModeIcon mode={theme as ThemeMode}
        className="dark:invert"
        title={`Toggle theme (${theme})`}
        alt={`Theme toggle button (${theme})`}
        width={30} height={30}  
        suppressHydrationWarning
      />
    </button>
  );
}

export default ThemeModeToggle;
