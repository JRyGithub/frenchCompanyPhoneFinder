import { inputValidator } from "../services/input/inputValidator.js"
import { getDetailsForGoogle } from "./getDetailsForGoogle.js"
import { getPhoneNumberFromGoogle } from "./getPhoneNumberFromGoogle.js"

const getBusinessPhoneNumber = async(query) => {
  try{
    const {inputModel,validityError} = inputValidator(query)
    if(validityError) return {error: validityError}
    const googleDetails = await getDetailsForGoogle({...inputModel})
    console.log({googleDetails})
    const phoneNumber = await getPhoneNumberFromGoogle(googleDetails)

    return {phoneNumber}
  }catch(error){
    throw error
  }
  
}

export default getBusinessPhoneNumber