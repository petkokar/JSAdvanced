// function upper(input) {
//   let textArr = input.split(/[^a-zA-Z0-9]+/gm);
//   for (let i = 0; i < textArr.length; i++) {
//     textArr[i] = textArr[i].toUpperCase();
//   }

//   if (!textArr[textArr.length - 1]) {
//     textArr.pop()
//   }

//   console.log(textArr.join(", "));
// }

function upper(string) {
    let regex = /[A-Za-z]*\w/g;
    let match = string.match(regex);
    console.log(match.join(', ').toUpperCase());
}

upper("Hi, how are you?");
