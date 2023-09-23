"use client"

import { useState } from "react";
import Image from "next/image";
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import FrequentlyAsked from '@/public/frequently_asked.webp';
import { FAQS } from "./faq.constants";

const Frequently_Asked = () => {
    const [selected, setSelected] = useState<null | number>(null)
    
    const toggleAccordion = (index: number) => {
        if(selected === index){
            return setSelected(null)
        }

        setSelected(index)
    }

  return (
    <div className="section">
        <div className="container lg:px-[60px] px-5 py-[60px] relative">
            <div className="column-flex">
                <div className="w-full flex extraSizeMd:flex-row flex-col justify-center items-center gap-[25px]">
                    <div 
                        className="extraSizeMd:w-[50%] sm:w-[80%] w-full h-[100%] flex 
                        flex-col extraSizeMd:items-start items-center justify-start"
                    >
                        <span className="inline-block mb-3 max-w-[255px] extraSizeMd:text-left text-center">
                            <h3 className="section-title-text">
                                Frequently Ask <span className="text-shadePurple">Question</span>
                            </h3>
                        </span>
                        <span className="inline-block max-w-[345px] extraSizeMd:text-left text-center mb-[60px]">
                            <p className="section-body-text">
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </p>
                        </span>

                        <div className="extraSizeMd:w-[427px] w-full">
                            {FAQS.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="w-full bg-inherit mb-4 pb-4 px-2 pt-2 border-b border-solid border-purpleBlue"
                                >
                                    <div
                                        onClick={() => toggleAccordion(index)} 
                                        className="flex justify-between items-start w-full cursor-pointer"
                                    >
                                        <p className="text-sm font-medium">{item.question}</p>

                                        <span className="mt-[2px] ml-6">
                                            {selected === index ? (
                                                <BiMinus size={14} className='text-purpleBlue' />
                                            ) : (
                                                <BsPlus size={14} className='text-purpleBlue' />
                                            )}
                                        </span>
                                    </div>
                                    <div className={`pt-2 ${selected === index ? 'content show' : 'content'}`}>
                                        <p className="text-sm font-normal">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="extraSizeMd:w-[50%] w-full h-[100%] flex justify-center relative">
                        <Image 
                            src={FrequentlyAsked} 
                            alt="faq" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frequently_Asked