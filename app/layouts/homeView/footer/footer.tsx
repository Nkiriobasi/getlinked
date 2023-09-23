import Image from "next/image";
import getlinkedLogo from "@/public/getlinked.webp"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaLocationDot, 
  FaPhoneVolume, 
  FaXTwitter 
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section bg-[#100B20]">
      <div className="container lg:px-[40px] px-5 py-[40px] relative">
        <div className="column-flex">
          <div className="w-full flex md:flex-row flex-col justify-center items-start gap-[55px]">
            <div className="md:w-[40%] w-[290.93px] max-w-full h-full flex flex-col items-start justify-start">
              <div className="flex flex-col justify-start items-start w-auto">
                <div className="flex flex-col items-start justify-start">
                  <span className="inline-flex sm:w-[143px] w-[95px]">
                    <Image 
                      src={getlinkedLogo} 
                      alt="logo" 
                    />
                  </span>
                </div>
                <div className="pt-5 max-w-[412px]">
                  <p className="text-sm text-white font-normal">
                    Getlinked Tech Hackathon is a technology innovation program 
                    established by a group of organizations with the aim of showcasing 
                    young and talented individuals in the field of technology
                  </p>
                </div>

                <div className="">
                  <p className="text-sm text-white font-normal pt-8">
                    <span className="inline-block border-r-2 border-solid border-shadePurple pr-2 mr-2">
                      Terms of Use
                    </span>
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[30%] md:w-[35%] w-[254.56px] max-w-full h-full flex flex-col items-start justify-start">
              <div className="flex flex-col justify-start items-start w-full">
                <h4 className="text-shadePurple text-sm pb-3 font-medium">Useful Links</h4>
                
                <span className="inline-flex items-center">
                  <Link href="#">
                    <p className="text-white text-sm pb-3 font-medium">Overview</p>
                  </Link>
                </span>
                <span className="inline-flex items-center">
                  <Link href="#">
                    <p className="text-white text-sm pb-3 font-medium">Timeline</p>
                  </Link>
                </span>
                <span className="inline-flex items-center">
                  <Link href="#">
                    <p className="text-white text-sm pb-3 font-medium">FAQs</p>
                  </Link>
                </span>
                <span className="inline-flex items-center">
                  <Link href="#">
                    <p className="text-white text-sm pb-3 font-medium">Register</p>
                  </Link>
                </span>

                <span className="inline-flex items-center space-x-4">
                  <span className="inline-block">
                    <p className="text-shadePurple font-medium text-sm">
                      Follow us
                    </p>
                  </span>

                  <span className="inline-flex space-x-3">
                    <a href="https://www.instagram.com/johndoe/" className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px]">
                      <FaInstagram className="hover:text-shadePurple cursor-pointer w-full h-full" />
                    </a>

                    <a href="https://www.twitter.com/johndoe/" className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px]">
                      <FaXTwitter className="hover:text-shadePurple cursor-pointer w-full h-full" />
                    </a>

                    <a href="https://www.facebook.com/johndoe/" className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px]">
                      <FaFacebookF className="hover:text-shadePurple cursor- w-full h-full" />
                    </a>

                    <a href="https://www.linkedIn.com/johndoe/" className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px]">
                      <FaLinkedinIn className="hover:text-shadePurple cursor-pointer w-full h-full" />
                    </a>
                  </span>
                </span>
              </div>
            </div>
            
            <div className="lg:w-[30%] md:w-[25%] w-[181.83px] max-w-full h-full flex flex-col items-start justify-start">
              <div className="flex flex-col justify-start items-start w-full">
                <h4 className="text-shadePurple text-sm pb-4">Contact Us</h4>

                <span className="inline-flex items-start pb-4 space-x-3">
                  <span className="inline-block pt-1">
                    <FaPhoneVolume size={14} color={'white'} />
                  </span>
                  <p className="text-white text-sm font-medium">+234 6707653444</p>
                </span>

                <span className="inline-flex items-start pb-4 space-x-3">
                  <span className="inline-block pt-1">
                    <FaLocationDot size={14} color={'white'} />
                  </span>
                  <p className="text-white text-sm font-medium">
                    27,Alara Street<br />Yaba 100012<br />Lagos State
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="md:pt-20 pt-10 w-full flex justify-center items-center">
            <p className="text-white text-sm font-medium mx-auto">All rights reserved. © getlinked Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer