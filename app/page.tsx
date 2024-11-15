import Terminal from '@/components/Terminal'

export default function Home() {
  return <Terminal 
    className="h-80 m-auto sm:max-w-4xl max-w-xs"
    title="mtkalms@Matthias-MacBook-Pro:~/Repositories/portfolio">
      <Terminal.Line path="mtkalms/Repositories">git clone git@github.com:mtkalms/portfolio.git</Terminal.Line>
      <Terminal.Line path="mtkalms/Repositories">cd portfolio</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="clean">git commit -m \"Add placeholder\"</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty">git push</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty">echo "Still working on it ..."</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty">Still working on it ...</Terminal.Line>
      <Terminal.Line path="mtkalms/portfolio" branch="main" status="dirty" active/>
    </Terminal>
}
