describe('Square', function () {
  describe('#area', function () {
    describe('calculates the area', function () {
      it('passing test', function () {
        let square = new Square(4)
        expect(square.area()).toEqual(16)
      })


      it('failing test', function () {
        let square = new Square(4)
        expect(square.area()).toEqual(17)
      })
    })
  })
})
