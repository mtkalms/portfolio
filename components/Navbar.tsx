import { DetailedHTMLProps, HTMLAttributes } from "react";
import ThemeModeToggle from "./ThemeModeToggle";

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {

}

function Navbar({children, className, ...props}: NavbarProps) {
  return <nav className={`w-full top-0 left-0 ${className}`} {...props}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex gap-4 text-black dark:text-white font-semibold">
        {children}
      </div>
      <div>
        <ThemeModeToggle/>
      </div>
    </div>
  </nav>
}

export default Navbar;