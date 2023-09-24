"use client"

import { usePathname } from "next/navigation";
import Navlinks from "@/app/components/navlinks/navlinks";
import Logo from "@/app/components/logo/logo";
import Menu from "@/app/components/hamburgerMenu/hamburgerMenu";

const Header = () => {
    const pathname = usePathname();

  return (
    <header 
        className={`w-full h-full sticky top-0 z-10 bg-inherit 
        ${pathname === '/contact' || pathname === '/register' 
            ? 'md:block hidden'
            : 'block'}`}
    >
        <div className="extraSizeMd:block hidden">
            <div
                className={`w-full h-[90px] flex items-end pt-2 pb-3 lg:px-[60px] px-5 relative border-b border-solid 
                ${pathname === '/contact' || pathname === '/register' 
                    ? 'border-transparent'
                    : 'border-[HSL(0,_0%,_18%)]'}`
                }
            >
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <Logo />

                    <Navlinks />
                </div>
            </div>
        </div>

        <div className="extraSizeMd:hidden block">
            <div
                className={`w-full h-[60px] border-b border-solid flex items-end pt-2 pb-3 sm:px-[60px] px-5 relative 
                ${pathname === '/contact' || pathname === '/register' 
                    ? 'border-transparent'
                    : 'border-[HSL(0,_0%,_18%)]'}`
                }
            >
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <Logo />

                    <Menu />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header