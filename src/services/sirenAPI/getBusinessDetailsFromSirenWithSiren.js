import { getAddressFromSirenWithBusinessName } from "./getAddressFromSirenWithBusinessName.js"
import { getBusinessNameBySirenNumber } from "./services/getBusinessNameBySirenNumber.js"

export const getBusinessDetailsFromSirenWithSiren = async(siren) => {
  let payload = await getBusinessNameBySirenNumber(siren)
  const businessName  = parseForBusinessName(payload)
  const address = await getAddressFromSirenWithBusinessName(businessName)
  return {businessName,address: address.address}
}

const parseForBusinessName = payload => {
  return payload.uniteLegale.periodesUniteLegale[0].denominationUniteLegale
}