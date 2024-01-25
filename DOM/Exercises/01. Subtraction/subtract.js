function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    const sum = firstNumber - secondNumber;
    document.getElementById('result').textContent = sum;
}