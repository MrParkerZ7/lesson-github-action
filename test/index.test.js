const sum = require('../src/index')

describe("Basic", () => {

   it("sum", () => {
      expect(sum(2, 3)).toEqual(5)
   })

})
