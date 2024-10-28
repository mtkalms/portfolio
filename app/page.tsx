import Terminal from '@/components/Terminal'


export default function Home() {
  return <Terminal 
    className="h-80 m-auto sm:max-w-4xl max-w-xs"
    title="mtkalms@Matthias-MacBook-Pro:~/Repositories/portfolio" 
    lines={[
      {path: ["mtkalms", "Repositories"], content: "git clone git@github.com:mtkalms/portfolio.git"},
      {path: ["mtkalms", "Repositories"], content: "cd portfolio"},
      {path: ["mtkalms", "portfolio"], branch: "main", status: "clean", content: "git commit -m \"Add placeholder\""},
      {path: ["mtkalms", "portfolio"], branch: "main", status: "dirty", content: "git push"},
      {path: ["mtkalms", "portfolio"], branch: "main", status: "dirty", content: "echo \"Still working on it ...\""},
    ]
  }/>
}
