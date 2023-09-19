'use client'

import { NAVLINKS } from "./navlinks.constant";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Button from "../button/button";

const Navlinks = () => {
    const pathname = usePathname();

  return (
    <nav className="extraSizeMd:max-w-[716px] max-w-full w-auto h-full flex extraSizeMd:flex-row flex-col items-center content-center">
        <ul 
            className={`w-full extraSizeMd:px-0 xs:px-10 px-4 extraSizeMd:pt-0 pt-10 h-full flex extraSizeMd:flex-row 
            flex-col sm:items-center items-start relative`}
        >
            {NAVLINKS.map(({text, href}, index) => {
                const isActive = pathname.startsWith(href)
                   
                return (
                    <li 
                        key={index} 
                        className={`w-auto h-full flex extraSizeMd:flex-row flex-col items-center 
                        content-center text-sm font-medium relative py-4 extraSizeMd:px-4 px-0
                        ${isActive 
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purpleBlue to-shadePink' 
                            : 'text-white hover:opacity-60 duration-200'} `}
                    >
                        <Link 
                            href={`${href}`} 
                        >
                            {text}
                        </Link>
                    </li>
                )
            })}

            <span className="w-auto extraSizeMd:ml-8 ml-0 extraSizeMd:mt-0 mt-4">
                <Button label="Register" />
            </span>
        </ul>
    </nav>
  )
}

export default Navlinks