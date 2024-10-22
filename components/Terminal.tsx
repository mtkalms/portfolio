import localFont from 'next/font/local'
import { DetailedHTMLProps, HTMLAttributes } from 'react';
 
const semiBold = localFont({src: './../fonts/FiraCode/SemiBold.ttf', display: 'swap'})

type RepositoryState = "dirty" | "clean";

interface TerminalLineProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  path: string[];
  content: string;
  status?: RepositoryState;
  branch?: string;
  active?: boolean;
}

interface TerminalProps {
  title?: string
  lines?: TerminalLineProps[];
  className?: string;
}

const THEME_STEPS: {bg: string, text: string}[] = [
  {
    bg: "bg-fuchsia-500 dark:bg-fuchsia-600", 
    text: "text-fuchsia-500 dark:text-fuchsia-600"
  }, {
    bg: "bg-purple-500 dark:bg-purple-600", 
    text: "text-purple-500 dark:text-purple-600"
  }, {
    bg: "bg-blue-500 dark:text-purple-600", 
    text: "text-blue-500 dark:text-blue-600"},
]

const THEME_BRANCH: Map<RepositoryState, {bg: string, text: string}> = new Map([
  ["clean", {bg: "bg-green-500", text: "text-green-500"}], 
  ["dirty", {bg: "bg-yellow-500", text: "text-yellow-500"}],
]);

const ICON_BRANCH: Map<RepositoryState, string> = new Map([
  ["clean", ""],
  ["dirty", " ±"],
]);

function TerminalLine({path, content, status = "clean", branch, active}: TerminalLineProps) {
  function lastStepStyle(idx: number) {
    let stepStyle = THEME_STEPS[idx + 1].bg;
    let branchStyle = branch ? THEME_BRANCH.get(status)?.bg : "bg-transparent";
    return [THEME_STEPS[idx].text, idx < path.length - 1 ? stepStyle : branchStyle].join(" ")
  }

  return <div className={"w-full my-0"}>
    <span className="text-gray-100 dark:text-gray-800">
      {path.map((step, idx) => <>
        <span 
          key={`step${idx}`} 
          className={`px-2 ${THEME_STEPS[idx].bg}`}>
          {step}
        </span>
        <span className={lastStepStyle(idx)}></span>
      </>)}
      {branch && <>
        <span className={`px-2 ${THEME_BRANCH.get(status)?.bg}`}>
           {branch}{branch && ICON_BRANCH.get(status)}
        </span>
        <span className={THEME_BRANCH.get(status)?.text}></span>
      </>}
    </span><wbr/>
    <span className="px-2">{content}</span>
    {active && <span className="animate-[pulse_1s_infinite]">█</span>}
  </div>
}

function Terminal({title, lines, className}: TerminalProps) {
  return <div className={`dark:text-gray-100 text-xs bg-gray-100 dark:bg-gray-800 border-x-gray-500 border-y-gray-600 border rounded-xl overflow-hidden ${className}`}>
    <div className="top p-2 border-b bg-gray-300 dark:bg-gray-800 border-b-slate-700 flex align-middle">
      <div className="flex gap-2">
        <div className="h-3 w-3 bg-red-500 rounded-full"/>
        <div className="h-3 w-3 bg-orange-400 rounded-full"/>
        <div className="h-3 w-3 bg-green-500 rounded-full"/>
      </div>
      <div className="flex-grow -my-0.5 px-3 text-center text-slate-500 font-bold overflow-hidden text-ellipsis text-nowrap">
        {title}
      </div>
    </div>
    <div className={`sm:text-xs text-[9px] p-3 ${semiBold.className}`}>
      {lines?.map((line, idx) => 
        <TerminalLine {...line} key={`line-${idx}`} active={idx < lines.length - 1 ? line.active : true}/>
      )}
    </div>
  </div>
}

export default Terminal;
export type { TerminalProps };
