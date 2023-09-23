"use client"

import { SetStateAction } from "react";
import { usePathname } from "next/navigation";

interface FormInputType {
  type?: string
  placeholder?: string
  label?: string
  htmlFor: string
  value: string
  onChange?: (e: {target: {value: SetStateAction<string>;};}) => void
}

const FormInput: React.FC<FormInputType> = ({ type, placeholder, htmlFor, onChange, value, label }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <label 
          htmlFor={htmlFor} 
          className={`${pathname === '/register' ? '' : 'invisible'} pb-2 text-sm`}
        >
          {label}
        </label>
        <input
          type={type ? type : 'text'} 
          id={htmlFor}
          name={htmlFor}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? placeholder : ''}
          className='block w-full h-[47px] bg-inherit border border-solid border-white focus:border-purpleBlue rounded 
          text-sm font-medium placeholder:text-white text-white px-5 py-2 outline-none duration-300 
          placeholder:text-sm' 
        />
      </div>
    </>
  )
}

export default FormInput