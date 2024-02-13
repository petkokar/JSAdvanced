function solve() {

    const selectMenuTo = document.getElementById('selectMenuTo');
    const binaryOption = document.createElement('option');

    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    const hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexOption);

    document.querySelector('button').addEventListener('click', converNum);

    function converNum(){
        let inputNumber = document.getElementById("input").value;
        let selectMenuOption = document.getElementById('selectMenuTo').value;

        if(selectMenuOption === 'binary') {
            let result = decimalToBinary(inputNumber);
            document.getElementById('result').value = result;
        } else if (selectMenuOption === 'hexadecimal') {
            let result = decimalToHexadecimal(inputNumber);
            document.getElementById('result').value = result;
        }
    }

    function decimalToBinary(decimalNumber) {
        return Number(decimalNumber).toString(2);
    }

    function decimalToHexadecimal(decimalNumber) {
        return Number(decimalNumber).toString(16).toUpperCase();
    }
}