function solve(arr) {
    // let result = []
    // for(let i = 0; i < arr.length; i+=2) {
    //     result.push(arr[i])
    // }

    // console.log(result.join(" "));

    const evenPositionNums = arr.filter((el, index) => index % 2 === 0).join(" ");
    // const result = evenPositionNums.join(" ");
    console.log(evenPositionNums);
}

solve(['20', '30', '40', '50', '60'])