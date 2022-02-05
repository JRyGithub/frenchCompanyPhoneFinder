import { apiRequest } from "../../../utils/apiRequest.js";
import dotenv from 'dotenv' 
dotenv.config()

export const getBusinessNameBySirenNumber = async(sirenNumber) => {
  if(sirenNumber.length != 9) throw new Error(`Siren Number is not 9 Digits`)
  try{
    const SIREN_URL = `https://api.insee.fr/entreprises/sirene/V3/siren/${sirenNumber}?masquerValeursNulles=true` 
    const response = await apiRequest({method: `get`, url: SIREN_URL,token: process.env.SIREN_ACCESS_TOKEN})

    return response.data
  }catch(error){
    console.log(error.message);
    throw error
  }
}

