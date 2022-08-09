import { expect } from 'chai'
import { FtManager } from '../../src/mcp02'

describe('Test genesis contract unlock In Javascript', () => {
  let ft: FtManager
  const metaSvAuthorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbnRlcm5hbF90ZXN0X3Nob3dwYXkiLCJpc3MiOiJNZXRhU1YiLCJleHAiOjE3MTYxMDY4NTl9.lARtWFAxMmCyTqOu9EgxB5SqZPc48dp2iWYKYRyDrrg'
  const CoffeeShop = {
    wif: 'L2fxpsw8GvePpUHjgHwn13B6tXhoTn3M4EdEhMdh1B94bYnznR7H',
    address: '14fv4nEaPCShFHkbqD6YuMkMp87FDLSdGk',
  }

  before(async () => {
    ft = new FtManager({
      purse: 'L2fxpsw8GvePpUHjgHwn13B6tXhoTn3M4EdEhMdh1B94bYnznR7H',
    })

    ft.api.authorize({ authorization: metaSvAuthorization })

    let res = await ft.genesis({
      // genesisWif: CoffeeShop.wif,
      tokenName: 'COFFEE COIN',
      tokenSymbol: 'CC',
      decimalNum: 3,
    })

    // txid: c4313f614fd4e17715d2aae02d90fc4ad7c87ed027d1a98825a34ee4e6466b59
    console.log(res)
  })

  it('g0: genesis', async () => {
    expect(true, 'yes').to.be.true
  })
})
