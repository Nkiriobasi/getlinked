import Image from "next/image"
import RegisterFormImg from '@/public/3d-graphic-designer-showing-thumbs-up.webp'
import RegisterForm from "@/app/components/forms/registerForm/registerForm"

const RegisterView = () => {
  return (
    <main className='w-full extraSizeMd:h-[832px] md:h-[802px] h-auto flex items-center'>
      <div className="container flex flex-col justify-center">
        <div className="flex md:flex-row flex-col w-full items-center justify-between lg:px-[60px] px-5">
          <section className="h-auto flex items-center w-[50%] relative">
            <div>
              <Image src={RegisterFormImg} alt="w-full" priority />
            </div>
          </section>

          <RegisterForm />
        </div>
      </div>
    </main>
  )
}

export default RegisterView