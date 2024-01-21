function sortNegativePositive(arr) {
    let newArr = [];

    for (const number of arr) {
        if (number < 0) {
            newArr.unshift(number)
        } else {
            newArr.push(number)
        }
    }

    return newArr.join("\n");
}

sortNegativePositive([7, -2, 8, 9])