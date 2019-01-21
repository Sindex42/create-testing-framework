describe('Square', function () {
  describe('#area', function () {
    describe('calculates the area', function () {
      it('expectEquality', function () {
        let square = new Square(4)
        expectEquality(square.area(), 16)
      })

      it('expect().toBe', function () {
        let square = new Square(4)
        expect(square.area()).toBe(16)
      })

      it('expect().notToBe', function () {
        let square = new Square(4)
        expect(square.area()).notToBe(17)
      })
    })
  })
})
