import ScheduleDesktop from "./scheduleDesktop";
import ScheduleMobile from "./scheduleMobile";

const Timeline = () => {
  return (
    <div className="w-full h-full">
      <div className="container lg:px-[20px] px-5 sm:py-[80px] py-[60px] relative">
        <div className="column-flex">
          <div className="w-full flex flex-col justify-center items-center gap-[30px]">
            <div className="w-full flex flex-col items-center">
              <span className="inline-block mb-3 max-w-[138px] text-center">
                <h3 className="section-title-text">
                  Timeline
                </h3>
              </span>
              <span className="inline-block max-w-[340px] text-center">
                <p className="section-body-text">
                  Here is the breakdown of the time we anticipate using for the upcoming event.
                </p>
              </span>  
            </div>
            
            <ScheduleDesktop />
            <ScheduleMobile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline