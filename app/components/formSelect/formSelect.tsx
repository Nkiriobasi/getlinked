"use client"

import { useState } from "react"

interface DataType {
    id: any,
    name: any
}

interface FormSelectType {
    placeholder?: string
    label?: string
    htmlFor: string
    data?: DataType[]
    setCategory?: React.Dispatch<React.SetStateAction<string>>
    setGroup_size?: React.Dispatch<React.SetStateAction<string>>
}

const FormSelect: React.FC<FormSelectType> = ({ 
    placeholder, 
    htmlFor, 
    label, 
    data, 
    setCategory, 
    setGroup_size 
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  
    // function handleSelect(value: any): void {
    //     setCategory(value)
    //     setIsOpen(false)
    // }

  return (
    <div className='w-full h-full flex flex-col'>
        <label 
            htmlFor={htmlFor} 
            className={`pb-2 text-sm`}
        >
            {label}
        </label>
        <div className={`relative`}>
            <button
                id={htmlFor}
                type='button'
                className={`flex items-center justify-between h-[47px] w-full px-4 py-2 text-sm font-medium text-white bg-inherit 
                border border-gray-300 rounded focus:border-purpleBlue outline-none duration-300`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* <span>{selectedState || 'Select your category'}</span> */}
                <span>{placeholder}</span>
                <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                    />
                </svg>
            </button>

            {isOpen && (
                <ul 
                    className='absolute z-10 w-full mt-1 overflow-auto bg-white border 
                    border-gray-300 rounded-md shadow max-h-[88px] focus:outline-none overflow-y-auto'
                >
                    {data && data.map((dataValue) => (
                        <li
                            key={dataValue.id}
                            className='px-4 py-1 text-sm text-gray-700 cursor-pointer 
                            hover:bg-purpleBlue hover:text-white font-medium'
                            // onClick={() => handleSelect(dataValue.id)}
                        >
                            {dataValue.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default FormSelect