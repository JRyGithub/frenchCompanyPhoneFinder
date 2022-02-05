import { getPlaceIdByTextSearch } from "./services/getPlaceIdByTextSearch.js"

export const getPlaceId = async({businessName,address}) => {
  try{
    const payload = await getPlaceIdByTextSearch(businessName,address)
    return payload.results[0].place_id
  }catch(error){
    throw error
  }
}