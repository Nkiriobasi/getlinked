"use client"

import { useState } from "react";
import Image from 'next/image';
import Congratulations from '@/public/congratulation.webp';
import Button from "../button/button";
import { useRouter } from "next/navigation";


function InfoModal() {
  const [showModal, setShowModal] = useState(false)

    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e: any) => {
        e.stopPropagation()
    }

    const router = useRouter()
   

  return (
    <>
        <div className='w-auto'>
            <div
                className='w-auto border border-[#00B0f0] border-solid rounded-3xl py-2 px-4 cursor-pointer'
                onClick={() => setShowModal(true)}
            >
                Add Fund
            </div>
        </div>

        {showModal ? (
        <>
            <div
                onClick={() => setShowModal(false)}
                className='overflow-auto fixed inset-0 z-[2026] outline-none focus:outline-none'
            >
                <div
                    onClick={(e) => handleChildElementClick(e)}
                    className='relative modal__content extraSizeMd:max-w-[669px] max-w-[70%] my-10 mx-auto 
                    border border-solid border-[#D434FE] rounded'
                >
                    {/*content*/}
                    <div className="w-full flex flex-col items-center justify-start sm:p-10 p-5">
                        <div>
                            <Image src={Congratulations} alt="confirmation" className="w-[100%]" />
                        </div>

                        <div className="flex flex-col items-center text-center sm:max-w-[500px] max-w-[364px]">
                            <h4 
                                className="extraSizeMd:text-[32px] sm:text-[28px] xs:text-xl text-white 
                                pb-3 font-medium leading-[30px] text-lg"
                            >
                                Congratulations you have successfully Registered!
                            </h4>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <p className="text-sm text-white pb-5">
                                Yes, it was easy and you did it!
                                check your mail box for next step
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center flex-auto">
                            <Button onClick={() => router.push('/')} label="Back" type="button" fullWidth />
                        </div>
                    </div>
            </div>
          </div>
          <div className='opacity-90 fixed inset-0 z-[2025] bg-[#150E28]'></div>
        </>
      ) : null}
    </>
  )
}

export default InfoModal
