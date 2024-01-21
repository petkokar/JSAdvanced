function extract(array) {
    let extractedArr = [];
    let currNum = Number.NEGATIVE_INFINITY;

    for (let num of array) {
        if (num >= currNum) {
            extractedArr.push(num)
            currNum = num;
        }
    }

    return extractedArr;
}

function extract2(data) {
    let biggest = Number.MIN_SAFE_INTEGER;

    return data.reduce((acc, el) => {
        if (el >= biggest) {
            biggest = el;
            acc.push(biggest);
        }

        return acc;
    }, []);
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
