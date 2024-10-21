'use client'

import { useEffect, useState } from "react";
import Image, { ImageProps } from 'next/image';
import sun from '../public/icons/sun.svg';
import moon from '../public/icons/moon.svg';
import sunMoon from '../public/icons/sun-moon.svg';

const MODES = ["dark", "light", "system"];
type ThemeMode = (typeof MODES)[number] | "unset";

interface ThemeModeIconProps extends Omit<ImageProps, "src"> {
  mode: ThemeMode;
}

function applyThemeMode(mode: ThemeMode) {
  switch (mode) {
    case "dark":
      localStorage.theme = mode;
      document.documentElement.classList.add("dark");
      break;
    case "light":
      localStorage.theme = mode;
      document.documentElement.classList.remove("dark");
      break;
    case "system":
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList.add("dark");
      break;
  }
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
      return <Image 
        src={sunMoon} {...props}
      />;
    default:
      return <div className="h-32 w-32"/>;
  }
}

function ThemeModeToggle() {
  const [mode, setMode] = useState<ThemeMode>("unset");

  useEffect(() => {
    setMode("theme" in localStorage ? localStorage.theme : "system");
  }, []);

  useEffect(() => {
    if (mode !== "unset") {
      applyThemeMode(mode);
    }
  }, [mode]);

  function toggle() {
    setMode(MODES[(MODES.indexOf(mode) + 1) % MODES.length]);
  }

  return (
    <button type="button" onClick={toggle}>
      <ThemeModeIcon mode={mode}
        className="dark:invert"
        title={`Toggle theme (${mode})`}
        alt={`Theme toggle button (${mode})`}
        width={30}
        height={30}
      />
    </button>
  );
}

export default ThemeModeToggle;
