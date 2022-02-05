import { apiRequest } from "../../../utils/apiRequest.js";
import dotenv from 'dotenv' 
dotenv.config()

export const getBusinessAddressByBusinessName = async(businessName) => {
  if(typeof businessName != `string`) throw new Error(`Business name must be a string`)
  try{
    const SIRET_URL = `https://api.insee.fr/entreprises/sirene/V3/siret?q=denominationUniteLegale:"${businessName}"` 
    const response = await apiRequest({method: `get`, url: SIRET_URL,token: process.env.SIREN_ACCESS_TOKEN})
    return response.data
  }catch(error){
    console.log(error.message);
    throw error
  }
}
