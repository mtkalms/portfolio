'use client'

import Terminal from '@/components/Terminal'
import { useState } from 'react';

export default function Home() {
  const [maximized, setMaximized] = useState<boolean>(false);

  return <Terminal 
    className={maximized ? "absolute top-14 left-1 right-1 bottom-14" : "h-80 m-auto sm:max-w-4xl max-w-xs"}
    title="mtkalms@Matthias-MacBook-Pro:~/Repositories/portfolio"
    onMaximize={() => setMaximized((state) => !state)}>
      <Terminal.Line path="mtkalms/Repositories">git clone git@github.com:mtkalms/portfolio.git</Terminal.Line>
      <Terminal.Line path="mtkalms/Repositories">cd portfolio</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="clean">git commit -m "Add placeholder"</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty">git push</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty">echo "Still working on it ..."</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty">Still working on it ...</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty" active/>
    </Terminal>
}
