import localFont from 'next/font/local'
import styles from './Terminal.module.css'
 
const semiBold = localFont({src: './../fonts/FiraCode/SemiBold.ttf', display: 'swap'})

interface TerminalLine {
  path: string[];
  content: string;
  status?: "dirty" | "clean";
  branch?: string;
}

interface TerminalProps {
  lines: TerminalLine[];
}

function Terminal({lines}: TerminalProps) {
  return <div className="p-5 text-gray-100 text-sm bg-gray-800 border-x-gray-500 border-y-gray-600 border rounded-xl overflow-hidden">
    <div className="top mb-2 pb-2 flex">
        <div className="h-3 w-3 bg-red-500 rounded-full"/>
        <div className="ml-2 h-3 w-3 bg-orange-400 rounded-full"/>
        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"/>
    </div>
    <div className={`mt-4 pb-40 text-xs ${semiBold.className}`}>
      {lines.map((line, idxLine) => 
        <div className={`w-full ${styles.line}`} key={`line${idxLine}`}>
          <span className={[styles.path, line.status && styles[line.status], line.branch && styles.branch].join(' ')}>
            {line.path.map((step, idxStep) => 
              <span key={`line${idxLine}-step${idxStep}`} 
                className={styles.step}>
                {step}
              </span>
            )}
            {line.branch && <span className={styles.step}> {line.branch}</span>}
          </span><wbr/>
          <span className="px-2">{line.content}</span>
        </div>
      )}
    </div>
  </div>
}

export default Terminal;
