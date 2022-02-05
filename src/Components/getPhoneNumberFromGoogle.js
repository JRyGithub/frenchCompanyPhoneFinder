import { getPhoneNumber } from "../services/googleAPI/getPhoneNumber.js"
import { getPlaceId } from "../services/googleAPI/getPlaceId.js"

export const getPhoneNumberFromGoogle = async(googleDetails) => {
  try{
    const placeId = await getPlaceId(googleDetails)
    if(!placeId) throw new Error(`Data could not find a place id`)
    const phoneNumber = await getPhoneNumber(placeId)
    return phoneNumber
  }catch(error){
    throw error
  }
}