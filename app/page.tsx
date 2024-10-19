import Terminal from '@/components/Terminal'


export default function Home() {
  return <div className="relative mx-auto mt-64 max-w-3xl">
    <Terminal lines={[
      {path: ["mtkalms.github.io"], content: "git clone git@github.com:mtkalms/portfolio.git && cd portfolio"},
      {path: ["mtkalms.github.io", "portfolio"], branch: "main", status: "clean", content: "git commit -m \"Add placeholder\""},
      {path: ["mtkalms.github.io", "portfolio"], branch: "main", status: "dirty", content: "git push"},
      {path: ["mtkalms.github.io", "portfolio"], branch: "main", status: "dirty", content: "Still working on it ..."},
    ]}/>
  </div>
}
