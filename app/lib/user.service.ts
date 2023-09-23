"use client"

import { ContactServiceType, RegisterUserType } from '../types';
import { fetchWrapper } from './fetchWrapper'

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const userService = {
  apiRegisterUser,
  apiContactService,
}
export default userService


async function apiRegisterUser(resqData: RegisterUserType) {
  const respData = await fetchWrapper.post(`${baseURL}/hackathon/registration`, resqData)

  return respData
}

async function apiContactService(resqData: ContactServiceType) {
  const respData = await fetchWrapper.post(`${baseURL}/hackathon/contact-form`, resqData)

  return respData
}

