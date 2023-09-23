"use client";

import React, { useContext } from "react";
import Image from 'next/image';
import { VisibilityContext } from "@/app/context/visibility.context";
import HamburgerClose from "@/public/hamburger-close.webp";
import Navlinks from "@/app/components/navlinks/navlinks";


const MobileViewPopup = () => {
    const { mobileIsActive, setMobileIsActive } = useContext(VisibilityContext);

  return (
    <>
        <div className={`mobile_popup ${mobileIsActive ? 'mobile_popup_active' : 'mobile_popup_inactive'}`}>
            {/* MOBILE POPUP OVERLAY */}
            <div 
                onClick={() => setMobileIsActive(false)} 
                className="opacity-[1] cursor-pointer bg-[#00000066] fixed top-0 right-0 left-0 bottom-0 transition-opacity"
            ></div>

            <div 
                className={`bg-primary opacity-[1] translate-x-0 w-full max-w-[80%] top-0 right-0 bottom-0 fixed shadow-sm 
                flex flex-col transition-transform text-white overflow-y-auto overflow-x-hidden h-[492px]`}
            >
                <div className="flex min-h-[60px] justify-end items-end pt-2 pb-3 pl-2 sm:pr-[60px] pr-4">
                    <button
                        className={`h-[24px] w-full flex justify-end items-center bg-transparent cursor-pointer hover:opacity-60`}
                    >
                        <span className="w-[19px] block">
                            <span 
                                className={`flex items-center justify-center rounded-full p-[5px] 
                                bg-gradient-to-r from-purpleBlue to-shadePink`}
                            >
                                <span 
                                    onClick={() => setMobileIsActive(false)} 
                                    className="block bg-transparent"
                                >
                                    <Image src={HamburgerClose} alt='Menu' />
                                </span>
                            </span>
                        </span>
                    </button>
                </div>

                <div className="block">
                    <Navlinks />
                </div>
            </div>
      </div>
    </>
  )
}

export default MobileViewPopup;