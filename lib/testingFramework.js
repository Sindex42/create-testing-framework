function expectEquality(input, expectedResult) {
  if (input === expectedResult) {
    console.log('pass')
    return true
  } else {
    console.log('fail')
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
