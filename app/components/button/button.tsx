"use client"

import Link from "next/link"

interface ButtonType {
  label: string
  onClick?: () => void
  href?: string | undefined
  type?: any
  fullWidth?: boolean
}

const Button: React.FC<ButtonType> = ({ label, onClick, href, type, fullWidth }) => {
  return (
    <>
      {href !== undefined ? (
        <Link 
          href={href}
          className={`flex items-center justify-center sm:w-[172px] w-[152px] sm:h-[53px] h-[46.84px] text-center 
          text-sm button-gradient rounded hover:opacity-80 duration-200 p-2 font-medium`}
        >
          {label}
        </Link>
      ) : (
        <button 
          type={type}
          onClick={onClick} 
          className={`${fullWidth ? 'w-full' : 'w-[172px]'} h-[53px] flex items-center 
          justify-center text-center text-sm button-gradient rounded hover:opacity-80 
          duration-200 p-2 font-medium`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
