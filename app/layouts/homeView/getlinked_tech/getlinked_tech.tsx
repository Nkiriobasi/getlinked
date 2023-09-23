import Image from "next/image";
import PinkCurve from '@/public/pink-lineThrough-vector.webp';
import YellowBulb from '@/public/bulb.webp';
import Fancy from '@/public/fancy.webp';
import Chain from '@/public/chain.webp';
import ManWearingSmartGlasses from '@/public/man-wearing-smart-glasses-touching-virtual-screen.webp';
import VirtualScreen from '@/public/virtual-screen.webp';
import Button from "@/app/components/button/button";
import { unica_One } from '@/app/fonts/fonts'

const Getlinked_Tech = () => {
  return (
    <div className="section">
        <div className="circle-gradient absolute left-[10%] top-[-5%]"></div>
        <div className="circle-gradient absolute extraSizeMd:right-[4%] right-[15%] extraSizeMd:top-[6%] top-[60%]"></div>

        <div className="container lg:pl-[60px] pl-5 pt-4 pr-5 relative">
            <div className="column-flex">
                <span className="w-full flex flex-col items-end justify-start relative">
                    <p className="extraSizeMd:text-[36px] sm:text-2xl xs:text-lg text-[13.5px] font-bold italic">
                        Igniting a Revolution in HR Innovation
                    </p>
                    <Image 
                        src={PinkCurve} 
                        alt="pink curve" 
                        className="extraSizeMd:w-[253px] sm:w-[223px] xs:w-[190px] w-[120px]" 
                        style={{
                            width: "auto"
                        }}
                    />
                </span>

                <div 
                    className="w-full h-full flex extraSizeMd:flex-row flex-col extraSizeMd:items-start items-center 
                    extraSizeMd:justify-between justify-center relative extraSizeMd:mt-[120px] xs:mt-[80px] mt-16"
                >
                    <span className="relative extraSizeMd:inline-block flex flex-col items-center z-10 w-full">
                        <h3 
                            className="1xl:text-[80px] extraSizeMd:text-[60px] xs:text-[36px] 
                            text-[30px] font-bold leading-tight"
                        >
                            getlinked Tech
                        </h3>
                        <h3 
                            className="1xl:text-[80px] extraSizeMd:text-[60px] xs:text-[36px] 
                            text-[30px] font-bold leading-tight pb-3"
                        >
                            Hackathon 
                            <span className="text-shadePurple mx-2">1.0</span>
                            <Image 
                                src={Chain} 
                                alt="chain" 
                                className="s:inline-block hidden mt-[-16px] 1xl:w-[86px] lg:w-[66px] extraSizeMd:w-[55px] w-[41px]" 
                            />
                            <Image 
                                src={Fancy} 
                                alt="" 
                                className="s:inline-block hidden mt-[-16px] 1xl:w-[58px] lg:w-[38px] w-[28px]" 
                            />
                        </h3>
                        <p 
                            className="md:text-[20px] xs:text-base text-[13.5px] font-normal 
                            leading-[1.67] mb-[35px] extraSizeMd:text-left text-center max-w-[520px]"
                        >
                            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                        </p>

                        <Button label="Register" href="/register" />

                        <span 
                            className="inline-block max-w-[291px] xs:min-h-[85px] min-h-[70px] sm:text-[64px] text-5xl 
                            md:mt-10 mt-5 1xl:mb-[70px] extraSizeMd:mb-[85px] sm:mb-12 xs:mb-8 mb-6"
                        >
                            <span className={`${unica_One.className}`}>00</span>
                            <span className={`mx-[25px] ${unica_One.className}`}>00</span>
                            <span className={`${unica_One.className}`}>00</span>
                        </span>

                        {/* <Image 
                            src={YellowBulb} 
                            alt="small bulb" 
                            className="absolute extraSizeMd:top-[-9%] top-[-8.5%] lg:right-[18%] 
                            extraSizeMd:right-[15%] right-[24.5%] 1xl:w-[53px] extraSizeMd:w-[43px] w-[33px]" 
                        /> */}
                    </span>

                    <div className="extraSizeMd:block hidden">
                        <Image 
                            src={ManWearingSmartGlasses} 
                            alt="" 
                            className="absolute right-[-24px] bottom-0 1xl:w-[50%] w-[680px]" 
                            priority
                        />
                        <Image 
                            src={VirtualScreen} 
                            alt="virtual screen" 
                            className="absolute right-[-24px] bottom-0 1xl:w-[47%] w-[639px]" 
                            priority
                        />
                    </div>
                    <div className="extraSizeMd:hidden block w-full h-full relative">
                        <Image 
                            src={ManWearingSmartGlasses} 
                            alt="" 
                            className="w-full" 
                            priority
                        />
                        <Image 
                            src={VirtualScreen} 
                            alt="virtual screen" 
                            className="w-full absolute inset-0 top-[-7%]" 
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getlinked_Tech