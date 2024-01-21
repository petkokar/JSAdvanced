function takeBiggerHalf(array) {
    array = array.sort((a, b) => a - b);
    let biggerHalf;
    let half;

    if(array.length % 2 !== 0) {
        half = Math.ceil(array.length / 2);
        biggerHalf = array.slice(half - 1, array.length);
    } else {
        biggerHalf = array.slice(array.length / 2, array.length)
    }

    return biggerHalf;
}

console.log(takeBiggerHalf([3, 19, 14, 7, 2, 19, 6]))