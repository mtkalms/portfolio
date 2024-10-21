import Terminal from '@/components/Terminal'


export default function Home() {
  return <div className="relative mx-auto max-w-3xl">
    <Terminal 
      className="mt-40 h-80"
      title="mtkalms@Matthias-MacBook-Pro:~/Repositories/portfolio" 
      lines={[
        {path: ["mtkalms", "Repositories"], content: "git clone git@github.com:mtkalms/portfolio.git && cd portfolio"},
        {path: ["mtkalms", "portfolio"], branch: "main", status: "clean", content: "git commit -m \"Add placeholder\""},
        {path: ["mtkalms", "portfolio"], branch: "main", status: "dirty", content: "git push"},
        {path: ["mtkalms", "portfolio"], branch: "main", status: "dirty", content: "echo \"Still working on it ...\""},
      ]
      }/>
  </div>
}
