export interface UserData {
  id: string,
  name: string,
  email: string,
  profile_picture_url: string,
  email_verified_at: Date,
  identification_number: string,
  current_organisation: {
    id: string,
    nam: string,
    logo_url: string,
    is_personal: boolean, 
  }
  createdAt: Date,
  deletedAt?: Date,
}