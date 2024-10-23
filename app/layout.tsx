import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import ThemeModeToggle from '@/components/ThemeModeToggle';
import next from '../public/next.svg';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const firaCode = localFont({
  src: [
    {path: './../fonts/FiraCode/Bold.ttf', weight: '300'},
    {path: './../fonts/FiraCode/Regular.ttf', weight: '400'},
    {path: './../fonts/FiraCode/Medium.ttf', weight: '500'},
    {path: './../fonts/FiraCode/SemiBold.ttf', weight: '600'},
    {path: './../fonts/FiraCode/Bold.ttf', weight: '700'},
  ], 
  variable: '--font-fira-code'
});

const inter = Inter({
  subsets: ['latin'] , 
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'mtkalms: portfolio',
  description: 'Portfolio website of Matthias Kalms (@mtkalms)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${firaCode.variable} text-code ${inter.variable} text-sans text-black dark:text-white`}>
      <body className={`flex flex-col min-h-screen text-sans`}>
        <ThemeProvider attribute="class">
        <nav className="w-full top-0 left-0">
          <div className="container mx-auto max-w-screen-xl p-4 flex flex-wrap items-center justify-between">
            <div className="flex gap-4 font-semibold">
              
            </div>
            <div>
              <ThemeModeToggle/>
            </div>
          </div>
        </nav>
        <div className="flex-grow flex container mx-auto max-w-screen-xl p-4">
          {children}
        </div>
        <footer className="mt-auto">
          <div className="container mx-auto max-w-screen-xl p-4 flex items-center justify-center">
            <div className="flex gap-2">
              Created with
              <Image className="dark:invert" src={next} width={75} alt="next logo"/>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
