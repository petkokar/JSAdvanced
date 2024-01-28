function encodeAndDecodeMessages() {
    const [encodeFieldText, decodeFieldText] = document.querySelectorAll('textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');

    encodeButton.addEventListener('click', () => {
        let inputText = encodeFieldText.value;
        inputText = inputText.split('').map(char => {
            const charCode = char.charCodeAt(0);
            const encodedCharCode = charCode + 1;
            return String.fromCharCode(encodedCharCode);
        }).join('');
        decodeFieldText.value = inputText;
        encodeFieldText.value = "";
    })

    decodeButton.addEventListener('click', () => {
        let inputText = decodeFieldText.value;
        inputText = inputText.split('').map(char => {
            const charCode = char.charCodeAt(0);
            const decodedCharCode = charCode - 1;
            return String.fromCharCode(decodedCharCode);
        }).join('');
        decodeFieldText.value = inputText;
    })

}