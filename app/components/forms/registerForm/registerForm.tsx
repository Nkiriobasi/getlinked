"use client"

import { SetStateAction, useState, useEffect } from "react"
import Image from "next/image"
import PartOfMovement from '@/public/Part-of-move.svg'
import FormInput from "../../formInput/formInput"
import Button from "../../button/button"
import FormSelect from "../../formSelect/formSelect"
import axios from "axios"
import { groupSize } from './registerForm.constants'
import userService from "@/app/lib/user.service"
import { useRouter } from "next/navigation"
import InfoModal from "../../infoModal/infoModal"

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const RegisterForm = () => {
  const [team_name, setTeam_name] = useState<string>('')
  const [phone_number, setPhone_number] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [group_size, setGroup_size] = useState<number | undefined>(undefined)
  const [project_topic, setProject_topic] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [privacy_poclicy_accepted, setPrivacy_poclicy_accepted] = useState<boolean>(false)
  
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const [categoryList, setCategoryList] = useState<[]>()
  
  // Getting Category list
  useEffect(() => {
    axios.get(`${baseURL}/hackathon/categories-list`)
    .then(function (response) {
      setCategoryList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  const router = useRouter()

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let reqData = {
      email,
      phone_number,
      team_name,
      group_size,
      project_topic,
      category,
      privacy_poclicy_accepted
    }

    setLoading(true);

    try {
      const respData = await userService.apiRegisterUser(reqData);

      if(respData.status === 200 || respData.status === 201){
        setSuccess(true)

        setEmail('')
        setPhone_number('')
        setTeam_name('')
        setGroup_size(undefined)
        setProject_topic('')
        setCategory('')
        setPrivacy_poclicy_accepted(false)

        return router.push("");
      }
    } 
    catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        // toaster('An error occurred', 'error');
      }
    } 
    finally {
      setLoading(false);
    }
  } 

  return (
    <>
    {success ? <InfoModal /> : null}
    <section 
      className='w-full h-auto max-w-[840px] bg-inherit rounded-xl shadow 
      flex flex-col justify-center items-center md:w-[50%]'
    >
      <div className="w-full h-full flex items-center justify-start relative py-[30px] lg:px-[40px] sm:px-[30px] px-2.5">
        <div className="w-full h-full flex flex-col">
          <span className="flex flex-col justify-start items-start w-full max-w-full mb-5 md:mt-0 mt-5">
            <h3 
              className="w-full font-semibold text-[32px] text-left text-shadePurple pb-5"
            >
              Register
            </h3>
            <Image src={PartOfMovement} alt="" />

            <p 
              className="text-white w-full flex flex-col items-start justify-start 
              extraSizeMd:text-2xl text-lg pt-6 pb-5"
            >
              CREATE YOUR ACCOUNT
            </p>
          </span>

          <form onSubmit={handleSubmit}>
            <div className="w-full h-full flex flex-col items-center justify-start">
              <div className="w-full h-full flex items-center justify-center space-x-5">
                <div className="w-[50%]">
                  <div className="w-full mb-8">
                    <FormInput 
                      value={team_name}
                      label="Team's Name"
                      placeholder="Enter the name of your group" 
                      htmlFor="teamName"
                      onChange={(e: { target: {value: SetStateAction<string>}}) => setTeam_name(e.target.value)} 
                    />
                  </div>
                  <div className="w-full mb-8">
                    <FormInput 
                      value={email}
                      label="Email"
                      placeholder="Enter your email address" 
                      htmlFor="email"
                      onChange={(e: { target: {value: SetStateAction<string>}}) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="w-full mb-8">
                    <FormSelect 
                      data={categoryList}
                      setCategory={setCategory}
                      htmlFor="category"
                      label="Category"
                      placeholder="Select" 
                    />
                  </div>
                </div>

                <div className="w-[50%]">
                  <div className="w-full mb-8">
                    <FormInput 
                      value={phone_number}
                      label="Phone"
                      placeholder="Enter your phone number" 
                      htmlFor="phone_number"
                      onChange={(e: { target: {value: SetStateAction<string>}}) => setPhone_number(e.target.value)} 
                    />
                  </div>
                  <div className="w-full mb-8">
                    <FormInput 
                      value={project_topic}
                      label="Project Topic"
                      placeholder="What is your group project topic" 
                      htmlFor="project_topic"
                      onChange={(e: { target: {value: SetStateAction<string>}}) => setProject_topic(e.target.value)} 
                    />
                  </div>
                  <div className="w-full mb-8">
                    <FormSelect 
                      data={groupSize}
                      htmlFor="group_size"
                      label="Group Size"
                      placeholder="Select" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full flex flex-col items-start justify-start">
                <p className="text-xs text-[#FF26B9]">
                  Please review your registration details before submitting
                </p>

                <span className="flex items-start py-4">
                  <input 
                    type="checkbox" 
                    id="privacy_poclicy" 
                    name="privacy_poclicy" 
                    checked={privacy_poclicy_accepted}
                    onChange={(e) => setPrivacy_poclicy_accepted(e.target.checked)} 
                    className="mr-2 mt-[3px] cursor-pointer"
                  />
                  <label htmlFor="privacy_poclicy" className="text-xs cursor-pointer">
                    I agreed with the event terms and conditions and privacy policy
                  </label>
                </span>
              </div>

              <div className="w-full flex flex-col items-center flex-auto">
                <Button onClick={() => {}} label="Register Now" type="submit" fullWidth />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default RegisterForm