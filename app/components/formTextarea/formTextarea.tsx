"use client"

import { SetStateAction } from "react";

interface FormTextareaType {
  placeholder?: string
  htmlFor: string
  value: string
  onChange?: (e: {target: {value: SetStateAction<string>;};}) => void
}

const FormTextarea: React.FC<FormTextareaType> = ({ placeholder, htmlFor, onChange, value }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <label htmlFor={htmlFor} className="invisible"></label>
      <textarea 
        id={htmlFor}
        name={htmlFor}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full h-[119px] bg-inherit border border-solid border-white focus:border-purpleBlue 
        rounded text-base font-medium px-5 py-2 placeholder:text-white text-white outline-none duration-300"
      ></textarea>
    </div>
  )
}

export default FormTextarea