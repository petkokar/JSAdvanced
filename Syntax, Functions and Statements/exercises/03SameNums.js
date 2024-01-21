function sameNums(num) {
    num = String(num);
    let isSame = num.split('').every(digit => digit === num.charAt(0));
    num = num.split('').map(Number);
    let sum = num.reduce((total, digit) => total + digit, 0)
    console.log(isSame);
    console.log(sum);
}

sameNums(2222222);