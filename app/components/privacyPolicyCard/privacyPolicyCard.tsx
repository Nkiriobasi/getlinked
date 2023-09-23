import Image from "next/image";
import GreenTick from '@/public/list-terms-tick.webp'
import Button from "../button/button";

const PrivacyPolicyCard = () => {
  return (
    <div className="w-full max-w-[569px] h-auto border border-solid border-[#D434FE] bg-inherit">
        <div className="flex flex-col items-center justify-start extraSizeMd:p-8 p-4">
            <span className="flex flex-col extraSizeMd:text-left text-center mb-8">
                <p className="text-sm text-white leading-[30px]">
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                </p>
            </span>

            <span className="flex flex-col items-start">
                <span className="inline-flex">
                    <h5 className="text-[#D434FE] text-base font-bold pb-3">Licensing Policy</h5>
                </span>
                <span className="inline-flex">
                    <h5 className="text-white text-sm font-bold pb-5">
                        Here are terms of our Standard License:
                    </h5>
                </span>
                <span className="inline-flex items-start space-x-3 mb-5">
                    <Image 
                        src={GreenTick} 
                        alt="green tick" 
                        className="mt-2 w-[14px] h-[14px]"
                    />
                    <p className="text-white text-sm font-normal leading-[27px]">
                        The Standard License grants you a non-exclusive right to 
                        navigate and register for our event
                    </p>
                </span>
                <span className="inline-flex items-start space-x-3 mb-5">
                    <Image 
                        src={GreenTick} 
                        alt="green tick" 
                        className="mt-2 w-[14px] h-[14px]"
                    />
                    <p className="text-white text-sm font-normal leading-[27px]">
                        You are licensed to use the item available at any free source
                        sites, for your project developement
                    </p>
                </span>
            </span>

            <span className="flex flex-col items-center w-full">
                <Button label="Read More" href="/#" />
            </span>
        </div>
    </div>
  )
}

export default PrivacyPolicyCard