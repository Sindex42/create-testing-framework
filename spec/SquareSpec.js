describe('Square', function () {
  describe('#area', function () {
    it('calculates the area', function () {
      let square = new Square(4)
      expectEquality(square.area(), 16)
    })

    it('calculates the area', function () {
      let square = new Square(4)
      expectEquality(square.area(), 20)
    })
  })
})
