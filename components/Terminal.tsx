import localFont from 'next/font/local'
import styles from './Terminal.module.css'
 
const semiBold = localFont({src: './../fonts/FiraCode/SemiBold.ttf', display: 'swap'})

function Terminal() {
  return <div className="p-5 text-gray-100 text-sm bg-gray-800 border-x-gray-500 border-y-gray-600 border rounded-xl overflow-hidden">
      <div className="top mb-2 pb-2 flex">
          <div className="h-3 w-3 bg-red-500 rounded-full"/>
          <div className="ml-2 h-3 w-3 bg-orange-400 rounded-full"/>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"/>
      </div>
      <div className="mt-4 pb-40 flex text-xs">
        <div className={semiBold.className}>
          <span className={[styles.path, styles.dirty].join(' ')}>
            <span className={styles.step}>mtkalms.github.io</span>
            <span className={styles.step}>portfolio</span>
            <wbr/>
            <span className={styles.step}> main</span>
          </span>
          <wbr/>
          <span className="px-2">Working on it ...</span>
          <span className="animate-ping">█</span>
        </div>
      </div>
  </div>
}

export default Terminal;
