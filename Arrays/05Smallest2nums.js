function takeSmallestTwoNums(array) {
    array = array.sort((a, b) => a - b);
    return array.slice(0, 2);
}

takeSmallestTwoNums([30, 15, 50, 5])