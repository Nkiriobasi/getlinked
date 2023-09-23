import Image from "next/image";
import Rules_GuidelinesWebp from '@/public/rules_guidelines.webp';

const Rules_Guidelines = () => {
  return (
    <div className="section relative">
        <div className="circle-gradient absolute left-[10%] top-[-20%]"></div>
        <div className="circle-gradient absolute right-[-20%] bottom-0"></div>

        <div className="container lg:px-[60px] px-5 md:pb-[10px] pb-[30px] pt-[10px] relative">
            <div className="column-flex">
                <div className="row-reverse-flex md:gap-[40px] gap-0">
                    <div className="md:w-[50%] w-full h-[100%] flex flex-col md:items-start items-center justify-start">
                        <span className="inline-block mb-3 max-w-[170px] md:text-left text-center">
                            <h3 className="section-title-text">
                                Rules and <span className="text-shadePurple">Guidelines</span>
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
                    
                    <div className="md:w-[50%] w-full h-[100%] flex justify-center relative">
                        <Image 
                            src={Rules_GuidelinesWebp} 
                            alt="rules" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rules_Guidelines