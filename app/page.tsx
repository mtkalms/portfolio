import Image from 'next/image'

import next from '../public/next.svg'
import vercel from '../public/vercel.svg'
import Terminal from '@/components/Terminal'


export default function Home() {
  return <div className="relative mx-auto mt-64 max-w-3xl">
    <Terminal/>
  </div>
}
