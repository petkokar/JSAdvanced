function sortNumbers(array) {
    let sorted = array.sort((a, b) => a - b)
    let newArr = [];
    let i = 0;
    while(sorted.length > 0) {
        if (i % 2 === 0) {
            let smallestNum = sorted.shift();
            newArr.push(smallestNum)
        } else {
            let biggestNum = sorted.pop();
            newArr.push(biggestNum)
        }
        i++;
    }
    return newArr
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])