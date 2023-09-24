import Image from "next/image";
import Judging_CriteriaWebp from '@/public/judging_criteria.webp';
import Ellipse from '@/public/Ellipse.svg';
import Button from "@/app/components/button/button";

const Judging_Criteria = () => {
  return (
    <div className="section relative">
      <div className="circle-gradient absolute left-[10%] top-[35%] opacity-60"></div>
      <div className="circle-gradient absolute right-[-5%] bottom-[-5%] opacity-60"></div>

      <div className="container lg:px-[40px] px-5 pt-[60px] pb-[80px] relative">
        <div className="column-flex">
          <div className="w-full flex extraSizeMd:flex-row flex-col justify-center items-center gap-[50px]">
            <div className="extraSizeMd:w-[50%] w-full h-[100%] flex justify-center relative">
              <Image 
                src={Judging_CriteriaWebp} 
                alt="criteria" 
              />
              <Image 
                src={Ellipse} 
                alt="Ellipse" 
                className="absolute top-[-12%] left-[10%] z-[-10] w-[22.8%] extraSizeMd:block hidden"
              />
            </div>

            <div className="extraSizeMd:w-[50%] w-full h-[100%] flex flex-col extraSizeMd:items-start items-center justify-start">
              <span className="inline-block mb-5 xs:max-w-[250px] max-w-[200px] extraSizeMd:text-left text-center">
                <h3 className="section-title-text">
                  Judging Criteria <span className="text-shadePurple">Key attributes</span>
                </h3>
              </span>
              <span className="inline-block extraSizeMd:max-w-[533px] sm:max-w-[80%] max-w-full extraSizeMd:text-left text-center mb-3">
                <p className="section-body-text">
                  <span className="text-[#FF26B9] font-bold">Innovation and Creativity</span>: Evaluate the uniqueness 
                  and creativity of the solution. Consider whether it addresses a real-world problem in a novel 
                  way or introduces innovative features.
                </p>
              </span>
              <span className="inline-block extraSizeMd:max-w-[503px] sm:max-w-[80%] max-w-full extraSizeMd:text-left text-center mb-3">
                <p className="section-body-text">
                  <span className="text-[#FF26B9] font-bold">Functionality</span>: Assess how well the solution works. 
                  Does it perform its intended functions effectively and without major issues? Judges would
                  consider the completeness and robustness of the solution.
                </p>
              </span>
              <span className="inline-block extraSizeMd:max-w-[524px] sm:max-w-[80%] max-w-full extraSizeMd:text-left text-center mb-3">
                <p className="section-body-text">
                  <span className="text-[#FF26B9] font-bold">Impact and Relevance</span>: Determine the potential impact 
                  of the solution in the real world. Does it address a significant problem, and is it relevant 
                  to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </p>
              </span>
              <span className="inline-block extraSizeMd:max-w-[558px] sm:max-w-[80%] max-w-full extraSizeMd:text-left text-center mb-3">
                <p className="section-body-text">
                  <span className="text-[#FF26B9] font-bold">Technical Complexity</span>: Evaluate the technical sophistication 
                  of the solution. Judges would consider the complexity of the code, the use of advanced technologies 
                  or algorithms, and the scalability of the solution.
                </p>
              </span>
              <span className="inline-block extraSizeMd:max-w-[564px] sm:max-w-[80%] max-w-full extraSizeMd:text-left text-center mb-10">
                <p className="section-body-text">
                  <span className="text-[#FF26B9] font-bold">Adherence to Hackathon Rules</span>: Judges will Ensure that the 
                  team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific 
                  technologies or APIs, and any other competition-specific requirements.
                </p>
              </span>

              <Button label="Read More" href="/#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Judging_Criteria