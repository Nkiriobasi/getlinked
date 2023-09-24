import Image from "next/image";
import PartnerAndSponsors from '@/public/partner-and-sponsors-section.webp';

const Partners_Sponsors = () => {
  return (
    <div className="section extraSizeMd:mb-10 mb-0 relative">
      <div className="circle-gradient absolute left-0 top-[-10%] opacity-60"></div>
      <div className="circle-gradient absolute right-[-10%] bottom-[5%] opacity-60"></div>

      <div className="container lg:px-[60px] px-5 sm:py-[80px] py-[60px] relative">
        <div className="column-flex">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center justify-center">
              <span className="inline-block sm:mb-5 mb-2.5 s:max-w-[376px] max-w-full text-center">
                <h3 className="section-title-text">
                  Partners and Sponsors
                </h3>
              </span>
              <span className="inline-block max-w-[452px] text-center mb-[60px]">
                <p className="section-body-text">
                  Getlinked Hackathon 1.0 is honored to have the following major 
                  companies as its partners and sponsors
                </p>
              </span>
            </div>
            
            <div className="w-full flex flex-col items-center justify-center">
            <Image 
                src={PartnerAndSponsors} 
                alt="sponsors" 
                className="object-cover select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners_Sponsors