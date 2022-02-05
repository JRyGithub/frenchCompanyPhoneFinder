import { getBusinessAddressByBusinessName } from "./services/getBusinessAddressByBusinessName.js"

export const getAddressFromSirenWithBusinessName = async(businessName) => {
  try{
    businessName= `PARIS%20ATLIERS`
    let payload = await getBusinessAddressByBusinessName(businessName)
    const address = parseAddress(payload)
    return {address}
  }catch(error){
    throw error
  }
}

const parseAddress= payload => {
  const address = payload.etablissements[0].adresseEtablissement
  const addressString = Object.values(address).filter(v => v).join(`%20`).toLowerCase()
  return addressString
}