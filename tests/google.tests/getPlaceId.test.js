import { expect } from 'chai'
import { getPlaceId } from '../../src/services/googleAPI/getPlaceId.js'

describe(`Get place id from google`, () => {
  it(`returns 404 error when no business`, async () => {
    const googleDetails = { businessName: `testertester`,address: `tester`}
    try {
      const result = await getPlaceId(googleDetails)
    } catch (error) {
      expect(error.message).to.equal(`Request failed with status code 404`)
    }
  })
  it(`returns placeId with valid details`, async () => {
    const googleDetails = { businessName: `EXPERDECO`,address: `%2070%20rte%20giffre%2074970%20marignier%2074164`}    
    const result = await getPlaceId(googleDetails)
    expect(result).to.equal(`ChIJ32g0trEIjEcRMQAYBCmvsmw`)
  })
})