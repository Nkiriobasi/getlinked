import Image from "next/image";
import PrivacyPolicy from '@/public/privacy_terms.webp';
import PrivacyPolicyCard from "@/app/components/privacyPolicyCard/privacyPolicyCard";
import LockBg from '@/public/lock-bg.webp';

const PrivacyPolicy_Terms = () => {
  return (
    <div className="w-full h-full relative">
      <div className="circle-gradient absolute left-0 top-[50%]"></div>

      <div className="container lg:px-[40px] px-5 lg:pt-[140px] pt-[80px] md:pb-[100px] pb-[80px] relative">
        <div className="column-flex">
          <div 
            className="w-full flex extraSizeMd:flex-row flex-col justify-center 
            items-center extraSizeMd:gap-[50px] xs:gap-[180px] s:gap-[120px] gap-[90px]"
          >
            <div 
              className="extraSizeMd:w-[50%] sm:w-[80%] w-full h-[100%] flex 
              flex-col extraSizeMd:items-start items-center justify-start"
            >
              <span className="inline-block mb-3 xs:max-w-[300px] max-w-[240px] extraSizeMd:text-left text-center">
                <h3 className="section-title-text">
                  Privacy Policy and <span className="text-shadePurple">Terms</span>
                </h3>
              </span>
              <span className="inline-block max-w-[345px] extraSizeMd:text-left text-center pb-[30px]">
                <p className="xs:text-sm text-[13px] font-normal leading-[27.5px] text-[hsla(0,_0%,_100%,_0.75)]">
                  Last updated on September 12, 2023
                </p>
              </span>    
              <span className="inline-block max-w-[428px] extraSizeMd:text-left text-center pb-[40px]">
                <p className="xs:text-sm text-[13px] font-normal leading-[27.5px] text-[hsla(0,_0%,_100%,_0.75)]">
                  Below are our privacy & policy, which outline a lot of goodies. 
                  it’s our aim to always take of our participant
                </p>
              </span>    

              <PrivacyPolicyCard />
            </div>

            <div className="extraSizeMd:w-[50%] w-full h-[100%] flex justify-center relative">
              <Image 
                src={PrivacyPolicy} 
                alt="privacy" 
                className="extraSizeMd:w-[100%] w-[80%]"
                priority
              />
              <Image 
                src={LockBg} 
                alt="privacy" 
                className="absolute extraSizeMd:top-[-18%] top-[-14%] extraSizeMd:left-[18%] 
                left-[20%] z-[-10] extraSizeMd:w-[80%] w-[60%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy_Terms