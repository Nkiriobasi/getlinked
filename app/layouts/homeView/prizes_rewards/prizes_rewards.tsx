import Image from "next/image";
import Trophy from '@/public/trophy.webp';
import Rewards from '@/public/rewards.webp';

const Prizes_Rewards = () => {
  return (
    <div className="w-full h-full bg-[#0d061f] relative">
      <div className="circle-gradient absolute left-[18%] top-[5%] opacity-60"></div>
      <div className="circle-gradient absolute right-[-20%] bottom-[5%] opacity-60"></div>

      <div className="container lg:px-[40px] px-5 sm:py-[80px] py-[60px] relative">
        <div className="column-flex">
          <div className="w-full flex md:flex-row flex-col justify-center items-center md:gap-[25px] gap-[80px]">
            <div className="md:w-[45%] w-[90%] h-[100%] flex flex-col items-center justify-center relative">
              <div className="w-full max-w-full pb-[60px] flex flex-col items-center md:hidden">
                <span className="inline-block mb-3 max-w-[174px] text-center">
                  <h3 className="section-title-text">
                    Prizes and <span className="text-shadePurple">Rewards</span>
                  </h3>
                </span>
                <span className="inline-block max-w-[340px] text-center">
                  <p className="section-body-text">
                    Highlight of the prizes or rewards for winners and for participants.
                  </p>
                </span>  
              </div>

              <Image 
                src={Trophy} 
                alt="trophy" 
                className="w-[100%] object-cover select-none"
              />
            </div>

            <div className="md:w-[55%] w-[90%] h-[100%] flex flex-col  items-center">
              <div className="w-full md:max-w-[420px] max-w-full pb-[60px] md:flex hidden flex-col">
                <span className="inline-block mb-3 max-w-[174px] text-left">
                  <h3 className="section-title-text">
                    Prizes and <span className="text-shadePurple">Rewards</span>
                  </h3>
                </span>
                <span className="inline-block max-w-[360px] md:text-left text-center">
                  <p className="section-body-text">
                    Highlight of the prizes or rewards for winners and for participants.
                  </p>
                </span>  
              </div>
              
              <div className="block w-full">
                <Image 
                  src={Rewards} 
                  alt="rewards" 
                  className="w-[100%] object-cover select-none"
                />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes_Rewards