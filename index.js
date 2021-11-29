function findMatching(array, str) {
    return array.filter( possibleMatch =>
      possibleMatch.toLowerCase() === str.toLowerCase()
    )
  }
  
  function fuzzyMatch(array, testString) {
    return array.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(array, strName) {
    return array.filter( record => record.name === strName)
  }