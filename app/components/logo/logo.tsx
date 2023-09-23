"use client"

import Image from "next/image";
import Link from "next/link";
import getlinkedLogo from "@/public/getlinked.webp"

const Logo = () => {
  return (
    <div className="extraSizeMd:w-auto w-[120px] h-full flex flex-row items-center justify-center">
      <Link href={'/'} className="inline-block">
        <Image src={getlinkedLogo} alt="logo" />
      </Link>
    </div>
  )
}

export default Logo