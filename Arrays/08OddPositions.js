function processOdPositions(array) {
    const newOddArray = array
    .filter((el, index) => index % 2 !== 0)
    .map(el => el * 2)
    .reverse()
    .join(" ");
    return newOddArray
}
processOdPositions([10, 15, 20, 25])