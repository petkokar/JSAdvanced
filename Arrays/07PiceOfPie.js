function piece(arrayOfPie, startPie, endPie) {
    let firstIndex = arrayOfPie.indexOf(startPie);
    let lastIndex = arrayOfPie.indexOf(endPie);
    const newArr = arrayOfPie.slice(firstIndex, lastIndex + 1)
    return newArr;
}

console.log(piece(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))