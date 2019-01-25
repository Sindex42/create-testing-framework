describe('Square', () => {
  describe('throwing an error on instantiating', () => {
    it('a square with NaN', () => {
      expect(() => { new Square('a') }).toThrowError('argument is not a number')
    })

    it('a square with a negative integer', () => {
      expect(() => { new Square(-1) }).toThrowError('size should be a positive number')
    })
  })

  describe('#area', () => {
    describe('calculates the area', () => {
      it('passing test', () => {
        let square = new Square(4)
        expect(square.area()).toEqual(16)
      })

      it('failing test', () => {
        let square = new Square(4)
        expect(square.area()).toEqual(17)
      })
    })
  })
})
