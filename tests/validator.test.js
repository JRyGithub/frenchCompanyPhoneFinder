import { expect } from 'chai'
import { inputValidator } from '../src/services/input/inputValidator.js'

describe(`Test validity of query`, () => {
  it(`returns error for no business name,siret or siren`, async () => {
    const error = inputValidator({ extra: `nothing` })
    expect(error.validityError).to.equal(`API Requires a valid business name, siren or siret number`)
  })
  it(`returns error for invalid business name type`, async () => {
    const error = inputValidator({ businessName: 123 })
    expect(error.validityError).to.equal(`API Requires a valid business name, siren or siret number. businessName was of wrong type`)
  })
  it(`returns error for invalid siren type`, async () => {
    const error = inputValidator({ siren: `hello` })
    expect(error.validityError).to.equal(`API Requires a valid business name, siren or siret number. siren was of wrong type`)
  })
  it(`returns error for invalid siret type`, async () => {
    const error = inputValidator({ siret: `hello` })
    expect(error.validityError).to.equal(`API Requires a valid business name, siren or siret number. siret was of wrong type`)
  })
  it(`returns input model on success`, async () => {
    const input = inputValidator({ businessName: `hello` })
    const expectedResult = {
      businessName: `hello`,
      siren: ``,
      siret: ``,
      address: ``,
    }
    expect(input.inputModel).to.deep.equal(expectedResult)
  })
})