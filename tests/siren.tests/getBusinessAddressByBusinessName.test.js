import { expect } from 'chai'
import { getAddressFromSirenWithBusinessName } from '../../src/services/sirenAPI/getAddressFromSirenWithBusinessName.js'
import { getBusinessDetailsFromSirenWithSiret } from '../../src/services/sirenAPI/getBusinessDetailsFromSirenWithSiret.js'

describe(`Get business address with business name`, () => {
  it(`returns 404 error when no business`, async () => {
    try {
      const result = await getAddressFromSirenWithBusinessName(`testertester`)
    } catch (error) {
      expect(error.message).to.equal(`Request failed with status code 404`)
    }
  })
  it(`returns address with business name`, async () => {
      const expectedResult =  `70%20RTE%20GIFFRE%2074970%20MARIGNIER%2074164`
      const result = await getAddressFromSirenWithBusinessName(`EXPERDECO`)
      expect(result.address).to.equal(expectedResult.toLowerCase()) 
  })
})