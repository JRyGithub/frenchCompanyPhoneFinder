import { apiRequest } from "../../../utils/apiRequest.js";
import dotenv from 'dotenv' 
dotenv.config()

export const getPlaceIdByTextSearch = async(businessName,address) => {
  const GOOGLE_TEXT_SEARCH_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${businessName}%20${address}&key=${process.env.GOOGLE_API_KEY}`
  try{ 
    const response = await apiRequest({method: `get`, url: GOOGLE_TEXT_SEARCH_URL})
    return response.data
  }catch(error){
    throw error
  }
}