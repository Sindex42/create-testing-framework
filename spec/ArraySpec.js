describe('Array', () => {
  describe('#add', () => {
    it('adds an integer to the array', () => {
      let array = new Array
      array.add(1)

      expect(array.array).toContain(1)
    })

    it('a failing test fo toContain', () => {
      let array = new Array

      expect(array.array).toContain(2)
    })
  })
})
