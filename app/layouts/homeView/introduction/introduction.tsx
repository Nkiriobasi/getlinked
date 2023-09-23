import Image from "next/image";
import IntroductionWebp from '@/public/introduction.webp';

const Introduction = () => {
  return (
    <div className="section">
      <div className="container lg:px-[60px] px-5 md:pb-[60px] pb-[40px] md:pt-[60px] pt-[30px] relative">
        <div className="column-flex">
          <div className="row-flex md:gap-20 gap-10">
            <div className="md:w-[50%] w-[90%] h-[100%] flex justify-center relative">
              <Image 
                src={IntroductionWebp} 
                alt="intro" 
              />
            </div>

            <div className="md:w-[50%] w-full h-[100%] flex flex-col md:items-start items-center justify-start">
              <span className="inline-block mb-3 xs:max-w-[450px] max-w-[430px] md:text-left text-center">
                <h3 className="section-title-text">
                  Introduction to getlinked <span className="text-shadePurple">techHackathon 1.0</span>
                </h3>
              </span>
              <span className="inline-block max-w-[535px] md:text-left text-center">
                <p className="section-body-text">
                  Our tech hackathon is a melting pot of visionaries, and its purpose is as
                  clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                  design maverick, or a concept wizard, you&apos;ll have the chance to transform 
                  your ideas into reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the world,
                  that&apos;s what we&apos;re all about!
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction