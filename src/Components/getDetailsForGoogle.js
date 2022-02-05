import { getMissingDetails } from "./getMissingDetails.js"

export const getDetailsForGoogle = async({businessName,siren,siret,address}) => {
  try{
    let details = {businessName,address}
    let missingDetails ={}
    if(!businessName || !address){
       missingDetails = await getMissingDetails(businessName,siren,siret)
       details = {...details,...missingDetails}
    }
    return details
  }catch(error){
    throw error
  }
}