import Image from "next/image"
import RegisterFormImg from '@/public/3d-graphic-designer-showing-thumbs-up.webp'
import RegisterForm from "@/app/components/forms/registerForm/registerForm"

const RegisterView = () => {
  return (
    <main className='w-full extraSizeMd:h-[832px] md:h-[802px] h-auto flex items-center relative'>
      <div className="circle-gradient absolute left-[-10%] top-[-10%] opacity-60"></div>

      <div className="container flex flex-col justify-center z-[5]">
        <div className="flex md:flex-row flex-col w-full items-center justify-between lg:px-[60px] px-5">
          <section className="h-auto flex items-center w-[50%] relative">
            <div>
              <Image src={RegisterFormImg} alt="w-full" priority />
            </div>
          </section>
          
          <RegisterForm />
        </div>
      </div>

      <div className="circle-gradient absolute right-0 bottom-[12%] opacity-60"></div>
    </main>
  )
}

export default RegisterView