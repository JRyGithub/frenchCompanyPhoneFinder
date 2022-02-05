import { expect } from 'chai'
import { getDetailsForGoogle } from '../../src/Components/getDetailsForGoogle.js'

describe(`Gets details for google`, () => {
  it(`returns business name and address if both are present`, async () => {
    const inputModel = { businessName: `test`,address: `test` }
    const result = await getDetailsForGoogle({...inputModel})
    const expectedResult = {}
    expect(result).to.deep.equal({ businessName: `test`,address: `test` })
  })
})