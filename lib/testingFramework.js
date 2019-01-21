function expectEquality(inputFunction, expectedResult) {
  if (inputFunction === expectedResult) {
    console.log('%c pass', 'color: #00af00')
    return true
  } else {
    console.log('%c fail', 'color: #ff0000')
    return false
  }
}

function describe(description, test) {
  console.log(description)
  test()
}

function it(scenario, test) {
  console.log('  ' + scenario)
  test()
}

function expect (inputFunction) {
  return {
    toBe: function (expectedResult) {
      if (inputFunction === expectedResult) {
        console.log('%c pass', 'color: #00af00')
        return true
      } else {
        console.log('%c fail', 'color: #ff0000')
        return false
      }
    },

    notToBe: function (expectedResult) {
      if (inputFunction === expectedResult) {
        console.log('%c fail', 'color: #ff0000')
        return false
      } else {
        console.log('%c pass', 'color: #00af00')
        return true
      }
    }
  }
}
