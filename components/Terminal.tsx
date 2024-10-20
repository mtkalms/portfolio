import localFont from 'next/font/local'
import './Terminal.css'
 
const semiBold = localFont({src: './../fonts/FiraCode/SemiBold.ttf', display: 'swap'})

interface TerminalLine {
  path: string[];
  content: string;
  status?: "dirty" | "clean";
  branch?: string;
}

interface TerminalProps {
  title?: string
  lines?: TerminalLine[];
  className?: string;
}

function Terminal({title, lines, className}: TerminalProps) {
  return <div className={`dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-800 border-x-gray-500 border-y-gray-600 border rounded-xl overflow-hidden ${className}`}>
    <div className="top p-2 border-b bg-gray-300 dark:bg-gray-800 border-b-slate-700 flex align-middle">
      <div className="flex gap-2">
        <div className="h-3 w-3 bg-red-500 rounded-full"/>
        <div className="h-3 w-3 bg-orange-400 rounded-full"/>
        <div className="h-3 w-3 bg-green-500 rounded-full"/>
      </div>
      <div className="flex-grow -m-0.5 text-xs text-center text-slate-500 font-bold text">
        {title}
      </div>
    </div>
    <div className={`p-3 text-xs ${semiBold.className}`}>
      {lines?.map((line, idxLine) => 
        <div className={"w-full"} key={`line${idxLine}`}>
          <span className={["terminal-path", line.status && line.status, line.branch && "terminal-path-branch"].join(' ')}>
            {line.path.map((step, idxStep) => 
              <span key={`line${idxLine}-step${idxStep}`} 
                className="terminal-path-step">
                {step}
              </span>
            )}
            {line.branch && <span className="terminal-path-step"> {line.branch}</span>}
          </span><wbr/>
          <span className="px-2">{line.content}</span>
        </div>
      )}
    </div>
  </div>
}

export default Terminal;
