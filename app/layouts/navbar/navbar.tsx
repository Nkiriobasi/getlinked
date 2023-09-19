import Navlinks from "@/app/components/navlinks/navlinks";
import Logo from "@/app/components/logo/logo";
import Menu from "@/app/components/hamburgerMenu/hamburgerMenu";


const Navbar = () => {

  return (
    <div className="w-full h-full sticky top-0 z-[2023]">
        <div className="extraSizeMd:block hidden">
            <div
                className={`w-full h-[90px] border-b border-[HSL(0,_0%,_18%)] border-solid 
                flex items-end pt-2 pb-3 lg:px-[60px] px-4 relative`}
            >
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <Logo />

                    <Navlinks />
                </div>
            </div>
        </div>

        <div className="extraSizeMd:hidden block">
            <div
                className={`w-full h-[60px] border-b border-[HSL(0,_0%,_18%)] border-solid 
                flex items-end pt-2 pb-3 sm:px-[60px] px-4 relative`}
            >
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <Logo />

                    <Menu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar