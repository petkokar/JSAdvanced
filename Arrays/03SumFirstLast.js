function sumFirstLast(arr) {
    let firstNum = Number(arr.shift())
    let lastNum = Number(arr.pop())

    return firstNum + lastNum;
}

sumFirstLast(['20', '30', '40'])