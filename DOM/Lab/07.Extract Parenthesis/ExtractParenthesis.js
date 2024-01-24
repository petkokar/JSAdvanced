function extract(elementId) {
    let text = document.getElementById(elementId).textContent;
    let regex = /\(([^)]+)\)/g;
    let result = [];

    let matches = regex.exec(text);
    while(matches) {
        result.push(matches);
        matches = regex.exec(text);
    }

    return result.join('; ')
}