import { inputModel } from "./models/inputModel.js"

const INPUT_VALIDATOR_ERROR_MESSAGE = `API Requires a valid business name, siren or siret number`

export const inputValidator = (query) => {
  const input = {...inputModel,...query}
  const nullsPresent = checkForNulls(input)
  if(nullsPresent)return {validityError: INPUT_VALIDATOR_ERROR_MESSAGE}

  const typingInvalid = checkTypingValidity(input)
  if(typingInvalid) return {validityError: `${INPUT_VALIDATOR_ERROR_MESSAGE}. ${typingInvalid} was of wrong type`}

  return {inputModel: input}
}

const checkForNulls = obj => {
  if(!obj.businessName && !obj.siren && !obj.siret) return true
  return false
}

const checkTypingValidity = obj => {
  const {businessName,siren,siret} = obj
  if(typeof businessName != `string` && businessName) return `businessName`
  if(!Number(siren) && siren) return `siren`
  if(!Number(siret) && siret) return `siret`
  return false
}