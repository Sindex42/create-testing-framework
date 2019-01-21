function expectEquality(input, expectedResult) {
  if (input === expectedResult) {
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
