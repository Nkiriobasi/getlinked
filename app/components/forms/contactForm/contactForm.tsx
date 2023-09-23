"use client"

import { SetStateAction, useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Button from "../../button/button";
import FormInput from "../../formInput/formInput";
import FormTextarea from "../../formTextarea/formTextarea";
import BackButton from '@/public/back-button.svg';
import userService from "@/app/lib/user.service";


const ContactForm = () => {
    const [first_name, setFirst_name] = useState<string>('')
    const [phone_number, setPhone_number] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const router = useRouter()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let reqData = {
            first_name,
            phone_number,
            email,
            message
        }

        setLoading(true);

        try {
            const respData = await userService.apiContactService(reqData);

            if(respData.status === 200 || respData.status === 201){
                setSuccess(true)

                setFirst_name('')
                setPhone_number('')
                setEmail('')
                setMessage('')

                return router.push("");
            }
        } 
        catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log(error.response.data);
                console.log(error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                // toaster('An error occurred', 'error');
            }
        } 
        finally {
            setLoading(false);
        }
    } 

  return (
    <section 
        className="extraSizeMd:w-[55%] md:w-[50%] w-full h-auto max-w-[617px] bg-inherit 
        rounded-xl shadow flex flex-col justify-center items-center relative"
    >
        <div className="w-full h-full flex items-center justify-start relative py-[30px] lg:px-[40px] sm:px-[30px] px-2.5">
            <div className="w-full h-full flex flex-col">
                <button 
                    onClick={() => router.back()}
                    className="md:hidden inline-flex cursor-pointer"
                >
                    <Image src={BackButton} alt="back button" />
                </button>
                <span className="flex flex-col justify-start items-start w-full max-w-full mb-8 md:mt-0 mt-[60px]">
                    <h3 
                        className="font-semibold text-[18px] text-left leading-[1.389] 
                        text-shadePurple"
                    >
                        Questions or need assistance?
                    </h3>
                    <h3 
                        className="font-semibold text-[18px] text-left leading-[1.389] 
                        text-shadePurple"
                    >
                        Let us know about it!
                    </h3>

                    <p className="max-w-[236px] w-full mt-8 md:hidden flex flex-col items-start justify-start text-sm">
                        Email us below to any question related to our event
                    </p>
                </span>
                
                <form onSubmit={handleSubmit}>
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full mb-8">
                            <FormInput 
                                value={first_name}
                                placeholder="First Name" 
                                htmlFor="firstName"
                                onChange={(e: { target: {value: SetStateAction<string>}}) => setFirst_name(e.target.value)} 
                            />
                        </div>
                        <div className="w-full mb-8">
                            <FormInput 
                                value={email}
                                placeholder="Mail" 
                                htmlFor="mail"
                                onChange={(e: { target: {value: SetStateAction<string>}}) => setEmail(e.target.value)}  
                            />
                        </div>
                        <div className="w-full mb-8">
                            <FormInput 
                                type="tel"
                                value={phone_number}
                                placeholder="Phone Number" 
                                htmlFor="phoneNumber"
                                onChange={(e: { target: {value: SetStateAction<string>}}) => setPhone_number(e.target.value)}  
                            />
                        </div>
                        <div className="w-full mb-8">
                            <FormTextarea 
                                value={message}
                                placeholder="Message" 
                                htmlFor="message" 
                                onChange={(e: { target: {value: SetStateAction<string>}}) => setMessage(e.target.value)}  
                            />
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <Button onClick={() => {}} label="Submit" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        <span className="md:hidden inline-flex mt-10 mb-3">
            <p className="text-shadePurple font-medium text-sm">
                Share on
            </p>
        </span>
        <span className="md:hidden inline-flex gap-4">
            <a href="https://www.instagram.com/johndoe/" className="">
                <FaInstagram size={20} className="hover:text-shadePurple cursor-pointer" />
            </a>

            <a href="https://www.twitter.com/johndoe/" className="">
                <FaXTwitter size={20} className="hover:text-shadePurple cursor-pointer" />
            </a>

            <a href="https://www.facebook.com/johndoe/" className="">
                <FaFacebookF size={20} className="hover:text-shadePurple cursor-pointer" />
            </a>

            <a href="https://www.linkedIn.com/johndoe/" className="">
                <FaLinkedinIn size={20} className="hover:text-shadePurple cursor-pointer" />
            </a>
        </span>
    </section>
  )
}

export default ContactForm