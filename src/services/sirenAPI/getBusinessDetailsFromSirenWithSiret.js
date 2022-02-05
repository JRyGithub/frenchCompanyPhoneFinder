import { getBusinessDetailsBySiretNumber } from "./services/getBusinessDetailsBySiretNumber.js"

export const getBusinessDetailsFromSirenWithSiret = async(siret) => {
    let payload = await getBusinessDetailsBySiretNumber(siret)
    const address = parseAddress(payload)
    return { businessName: payload?.etablissement?.uniteLegale?.denominationUniteLegale, address}
}

const parseAddress= payload => {
  const address = payload.etablissement.adresseEtablissement
  const addressString = Object.values(address).filter(v => v).join(`%20`).toLowerCase()
  return addressString
}