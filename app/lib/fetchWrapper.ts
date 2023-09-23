"use client"

import axios from "axios";
import { ContactServiceType, RegisterUserType } from "../types";

export const fetchWrapper = {
  get,
  post
}

// Get Request
async function get(url: string) {
  const requestConfig = {}
  
  return await axios.get(url, requestConfig);
}

// Post Request
async function post(url: string, resqData: ContactServiceType | RegisterUserType) {
  const requestConfig = {}
  
  return await axios.post(url, resqData, requestConfig);
}
