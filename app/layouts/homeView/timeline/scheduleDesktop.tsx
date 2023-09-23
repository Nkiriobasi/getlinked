import TimelineDivider from "@/app/components/timelineDivider/timelineDivider"


const ScheduleDesktop = () => {
  return (
    <div className="w-full hidden justify-between items-start mt-10 lg:flex">
        <div className="w-[600px] flex flex-col justify-end items-end pr-10 pt-[120px]">
            <div className="flex flex-col items-end text-right mb-[100px]">
                <span className="inline-block pb-2 max-w-[343px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        Hackathon Announcement
                    </h3>
                </span>
                <span className="inline-block max-w-[436px]">
                    <p className="text-white text-sm leading-[1.7]">
                        The getlinked tech hackathon 1.0 is formally announced
                        to the general public and teams begin to get ready to register
                    </p>
                </span> 
            </div>

            <div className="flex flex-col items-end text-right mb-[95px]">
                <span className="inline-block max-w-[236px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        November 18, 2023
                    </h3>
                </span>
            </div>

            <div className="flex flex-col items-end text-right mb-[90px]">
                <span className="inline-block pb-2 max-w-[311px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        Teams Registration ends
                    </h3>
                </span>
                <span className="inline-block max-w-[388px]">
                    <p className="text-white text-sm leading-[1.7]">
                        Interested Participants are no longer Allowed to register
                    </p>
                </span> 
            </div>

            <div className="flex flex-col items-start text-left mb-[95px]">
                <span className="inline-block max-w-[236px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        November 18, 2023
                    </h3>
                </span>
            </div>

            <div className="flex flex-col items-end text-right mb-[90px]">
                <span className="inline-block pb-2 max-w-[511px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        Getlinked Hackathon 1.0 Offically Begins
                    </h3>
                </span>
                <span className="inline-block max-w-[485px]">
                    <p className="text-white text-sm leading-[1.7]">
                        Accepted teams can now proceed to build their
                        ground breaking skill driven solutions
                    </p>
                </span> 
            </div>

            <div className="flex flex-col items-start text-left">
                <span className="inline-block max-w-[236px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                            November 18, 2023
                    </h3>
                </span>
            </div>
        </div>

        <div className="flex flex-col items-center justify-start">
            <TimelineDivider />
        </div>

        <div className="w-[600px] flex flex-col justify-start items-start pl-10 pt-[150px]">
            <div className="flex flex-col items-start text-left mb-[95px]">
                <span className="inline-block max-w-[236px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        November 18, 2023
                    </h3>
                </span>
            </div>

            <div className="flex flex-col items-start text-left mb-[90px]">
                <span className="inline-block pb-2 max-w-[334px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        Teams Registration begins
                    </h3>
                </span>
                <span className="inline-block max-w-[485px]">
                        <p className="text-white text-sm leading-[1.7]">
                        Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to register
                    </p>
                </span> 
            </div>

            <div className="flex flex-col items-start text-left mb-[85px]">
                <span className="inline-block max-w-[236px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        November 18, 2023
                    </h3>
                </span>
            </div>

            <div className="flex flex-col items-start text-left mb-[70px]">
                <span className="inline-block pb-2 max-w-[486px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        Announcement of the accepted teams and ideas
                    </h3>
                </span>
                <span className="inline-block max-w-[485px]">
                    <p className="text-white text-sm leading-[1.7]">
                        All teams whom idea has been accepted into getlinked tech
                        hackathon 1.0 2023 are formally announced
                    </p>
                </span> 
            </div>

            <div className="flex flex-col items-start text-left mb-[95px]">
                <span className="inline-block max-w-[236px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        November 18, 2023
                    </h3>
                </span>
            </div>

            <div className="flex flex-col items-start text-left">
                <span className="inline-block pb-2 max-w-[132px]">
                    <h3 className="text-[#D434FE] xl:text-2xl md:text-lg text-sm font-bold">
                        Demo Day
                    </h3>
                </span>
                <span className="inline-block max-w-[481px]">
                    <p className="text-white text-sm leading-[1.7]">
                        Teams get the opportunity to pitch their projects to judges.
                        The winner of the hackathon will also be announced on this day
                    </p>
                </span> 
            </div>
        </div>
    </div>
  )
}

export default ScheduleDesktop