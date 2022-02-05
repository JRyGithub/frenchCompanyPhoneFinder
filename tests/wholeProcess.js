import { expect } from 'chai'
import getBusinessPhoneNumber from '../src/Components/getBusinessPhoneNumber.js'

describe(`Get Phone Number for business`,() => {
  it(`returns phone number for with a businessName`,async() => {
    const businessName = `EXPERDECO`
    const phoneNumber = await getBusinessPhoneNumber({businessName})
    expect(phoneNumber.phoneNumber).to.equal(`+33 4 50 34 63 54`)
  })
  it(`returns phone number for with a siret`,async() => {
    const siret = `30383024400024`
    const phoneNumber = await getBusinessPhoneNumber({siret})
    expect(phoneNumber.phoneNumber).to.equal(`+33 4 50 34 63 54`)
  })
  it(`returns phone number for with a siren`,async() => {
    const siren = `303830244`
    const phoneNumber = await getBusinessPhoneNumber({siren})
    expect(phoneNumber.phoneNumber).to.equal(`+33 4 50 34 63 54`)
  })
})