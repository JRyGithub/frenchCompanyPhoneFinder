import { getPlaceDetailsFromGoogle } from "./services/getPlaceDetailsFromGoogle.js"

export const getPhoneNumber = async(placeId) => {
  const payload = await getPlaceDetailsFromGoogle(placeId)
  return payload.result.international_phone_number || payload.result.formatted_phone_number
}