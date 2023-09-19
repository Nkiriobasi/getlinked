"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { VisibilityContext } from '@/app/context/visibility.context';
import HamburgerOpen from '@/public/hamburger-open.svg'


const Menu = () => {
    const { setMobileIsActive } = useContext(VisibilityContext);

  return (
    <>
        <div className="flex content-center items-center">
            <div className="inline-block">
                <span 
                    onClick={() => setMobileIsActive(true)} 
                    className="inline-flex items-center cursor-pointer hover:opacity-60 bg-inherit"
                >
                    <Image src={HamburgerOpen} alt='Menu' />
                </span>
            </div>
        </div>
    </>
  )
}

export default Menu