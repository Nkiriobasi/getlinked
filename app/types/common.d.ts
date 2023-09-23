export interface RegisterUserType {
  email: string
  phone_number: string
  team_name: string
  group_size: number | undefined
  project_topic: string
  category: string
  privacy_poclicy_accepted: boolean
}

export interface ContactServiceType {
  first_name: string
  phone_number: string
  email: string
  message: string
}


