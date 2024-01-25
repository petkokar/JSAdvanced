function solve() {
    let input = document.getElementById('text').value;
    let currCase = document.getElementById('naming-convention').value;
    input = input.toLowerCase();
    input = input.split(' ');
    let result = '';
    switch(currCase) {
      case 'Pascal Case':
        input.forEach(word => {
          result += word[0].toUpperCase() + word.substring(1);
        })
        break;
      case 'Camel Case':
        result = input.shift();
        input.forEach(word => {
          result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        });
      break;
      default:
        result = "Error!"
        break;
    }

    document.getElementById("result").textContent = result;
}