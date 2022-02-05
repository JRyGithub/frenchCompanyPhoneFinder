import { getPhoneNumber } from "../services/googleAPI/getPhoneNumber.js"
import { getPlaceId } from "../services/googleAPI/getPlaceId.js"

export const getPhoneNumberFromGoogle = async(googleDetails) => {
  const placeId = await getPlaceId(googleDetails)
  const phoneNumber = await getPhoneNumber(placeId)
  return phoneNumber
}