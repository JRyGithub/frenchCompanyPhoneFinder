import { apiRequest } from "../../../utils/apiRequest.js";
import dotenv from 'dotenv' 
dotenv.config()

export const getPlaceDetailsFromGoogle = async(placeId) => {
  const GOOGLE_TEXT_SEARCH_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`
  try{ 
    const response = await apiRequest({method: `get`, url: GOOGLE_TEXT_SEARCH_URL})
    return response.data
  }catch(error){
    console.log(error.message);
    throw error
  }
}