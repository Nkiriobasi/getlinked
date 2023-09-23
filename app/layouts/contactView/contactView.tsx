import ContactForm from "@/app/components/forms/contactForm/contactForm"
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'

const ContactView = () => {
  return (
    <main className="w-full flex items-center relative extraSizeMd:h-[892px] md:h-[862px] h-auto">
        <div className="circle-gradient absolute left-[-10%] top-[-10%]"></div>

        <div className="container flex flex-col justify-center z-20">
            <div 
                className="flex w-full items-start xl:justify-center 
                md:justify-between justify-center xl:px-0 lg:px-[60px] px-5 md:py-0 py-10"
            >
                <section className="h-auto hidden md:flex items-center extraSizeMd:w-[45%] w-[50%] pt-12">
                    <div className="w-full h-full flex flex-col items-start">
                        <span className="inline-block mb-6">
                            <h3 className="text-shadePurple font-bold text-[30px]">Get in touch</h3>
                        </span>
                        <span className="inline-block mb-6">
                            <p className="text-white font-medium text-base">Contact <br/> Information</p>
                        </span>
                        <span className="inline-block mb-6">
                            <p className="text-white font-medium text-base">
                                27,Alara Street <br/> Yaba 100012 <br/> Lagos State
                            </p>
                        </span>
                        <span className="inline-block mb-6">
                            <p className="text-white font-medium text-base">
                                Call Us : 07067981819
                            </p>
                        </span>
                        <span className="inline-block mb-9">
                            <p className="text-white font-medium text-base">
                                we are open from Monday-Friday <br/> 08:00am - 05:00pm
                            </p>
                        </span>
                        <span className="inline-block mb-4">
                            <p className="text-shadePurple font-medium text-base">
                                Share on
                            </p>
                        </span>
                        <span className="inline-flex gap-4 mb-9">
                            <a href="https://www.instagram.com/johndoe/" className="">
                                <FaInstagram size={24} className="hover:text-shadePurple cursor-pointer" />
                            </a>

                            <a href="https://www.twitter.com/johndoe/" className="">
                                <FaXTwitter size={24} className="hover:text-shadePurple cursor-pointer" />
                            </a>

                            <a href="https://www.facebook.com/johndoe/" className="">
                                <FaFacebookF size={24} className="hover:text-shadePurple cursor-pointer" />
                            </a>

                            <a href="https://www.linkedIn.com/johndoe/" className="">
                                <FaLinkedinIn size={24} className="hover:text-shadePurple cursor-pointer" />
                            </a>
                        </span>
                    </div>
                </section>

                <ContactForm />
            </div>
        </div>

        <div className="circle-gradient absolute right-0 bottom-[12%]"></div>
    </main>
  )
}

export default ContactView