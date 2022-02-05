import { getPlaceIdByTextSearch } from "./services/getPlaceIdByTextSearch.js"

export const getPlaceId = async({businessName,address}) => {
  const payload = await getPlaceIdByTextSearch(businessName,address)
  return payload.results[0].place_id
}