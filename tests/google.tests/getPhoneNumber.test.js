import { expect } from 'chai'
import { getPhoneNumber } from '../../src/services/googleAPI/getPhoneNumber.js'

describe(`Get phone number from google`, () => {
  it(`returns 404 error when no phone number`, async () => {
    const placeId = `00000000`
    try {
      const result = await getPhoneNumber(placeId)
    } catch (error) {
      expect(error.message).to.equal(`Request failed with status code 404`)
    }
  })
  it(`returns phone number with valid details`, async () => {
    const placeId = `ChIJ32g0trEIjEcRMQAYBCmvsmw`   
    const result = await getPhoneNumber(placeId)
    expect(result).to.equal(`+33 4 50 34 63 54`)
  })
})
