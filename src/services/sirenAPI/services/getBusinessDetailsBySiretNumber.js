
import { apiRequest } from "../../../utils/apiRequest.js";
import dotenv from 'dotenv' 
dotenv.config()

export const getBusinessDetailsBySiretNumber = async(siretNumber) => {
  if(siretNumber.length != 14) throw new Error(`Siret Number is not 14 Digits`)
  try{
    const SIRET_URL = `https://api.insee.fr/entreprises/sirene/V3/siret/${siretNumber}?masquerValeursNulles=true` 
    const response = await apiRequest({method: `get`, url: SIRET_URL,token: process.env.SIREN_ACCESS_TOKEN})
    return response.data
  }catch(error){
    console.log(error.message);
    throw error
  }
}
