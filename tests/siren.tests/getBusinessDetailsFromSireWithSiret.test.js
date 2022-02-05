import { expect } from 'chai'
import { getBusinessDetailsFromSirenWithSiret } from '../../src/services/sirenAPI/getBusinessDetailsFromSirenWithSiret.js'

describe(`Get business details from siren with siren number`, () => {
  it(`returns 400 with Siren Number is not 15 Digits as message`, async () => {
    const errorMessage = `Siren Number is not 14 Digits`
    try {
      const result = getBusinessDetailsFromSirenWithSiret(`1234`)
    } catch (error) {
      expect(error).to.equal(`Siren Number is not 14 Digits`)
    }
  })

  it(`returns 404 when Siren Number is not existing`, async () => {
    const errorMessage = `Aucun élément trouvé pour le siren 00000000000000`
    try {
      const result = getBusinessDetailsFromSirenWithSiret(`00000000000000`)
    } catch (error) {
      expect(error.message).to.equal(errorMessage)
    }
  })

  it(`returns businessName and address with siret`, async () => {
    const expectedResult = { businessName: `EXPERDECO`, address: `70%20%20RTE%20GIFFRE%2074970%20MARIGNIER%2074164` }
    const result = await getBusinessDetailsFromSirenWithSiret(`30383024400024`)
    expect(expectedResult).to.deep.equal(expectedResult)
  })
})