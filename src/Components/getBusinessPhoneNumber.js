import { inputValidator } from "../services/input/inputValidator.js"
import { getDetailsForGoogle } from "./getDetailsForGoogle.js"
import { getPhoneNumberFromGoogle } from "./getPhoneNumberFromGoogle.js"

const getBusinessPhoneNumber = async(query) => {
  try{
    const {inputModel,validityError} = inputValidator(query)
    if(validityError) return {error: validityError}
    const googleDetails = await getDetailsForGoogle({...inputModel})
    const phoneNumber = await getPhoneNumberFromGoogle(googleDetails)
    if(!phoneNumber) {phoneNumber: `Could not find number`}
    return {phoneNumber}
  }catch(error){
    throw error
  }
  
}

export default getBusinessPhoneNumber