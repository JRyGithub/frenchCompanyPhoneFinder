import { getBusinessDetailsFromSirenWithSiret } from "../services/sirenAPI/getBusinessDetailsFromSirenWithSiret.js"
import { getAddressFromSirenWithBusinessName } from "../services/sirenAPI/getAddressFromSirenWithBusinessName.js"
import { getBusinessDetailsFromSirenWithSiren } from "../services/sirenAPI/getBusinessDetailsFromSirenWithSiren.js"

export const getMissingDetails = async (businessName, siren, siret) => {
  try {
    if (businessName) return await getAddressFromSirenWithBusinessName(businessName)
    else if (siret) return await getBusinessDetailsFromSirenWithSiret(siret)
    else return await getBusinessDetailsFromSirenWithSiren(siren)
  }catch(error){
    throw error    
  } 
}