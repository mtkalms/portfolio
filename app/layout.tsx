import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import ThemeModeToggle from '@/components/ThemeModeToggle';
import next from '../public/next.svg';

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className="text-black dark:text-white">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
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
      </body>
    </html>
  )
}
