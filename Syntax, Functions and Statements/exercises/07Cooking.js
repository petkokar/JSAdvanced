// function cooking(startingNumber, op1, op2, op3, op4, op5 ) {
//     const chop = (num) => {
//         return num /= 2;
//     }

//     const dice = (num) => {
//         return Math.sqrt(num);
//     }

//     const spice = (num) => {
//         return num + 1;
//     }

//     const bake = (num) => {
//         return num * 3;
//     }

//     const filltet = (num) => {
//         return num - (num * 0.2);
//     }
//     let number = Number(startingNumber)
//     let arrOp = [];
//     arrOp.push(op1, op2, op3, op4, op5)

//     for (let op of arrOp) {
//         switch(op) {
//             case 'chop':
//                 number = chop(number);
//                 break;
//             case 'dice':
//                 number = dice(number);
//                 break;
//             case 'spice':
//                 number = spice(number)
//                 break;
//             case 'bake':
//                 number = bake(number)
//                 break;
//             case 'fillet':
//                 number = filltet(number);
//                 break;
//         }
//         console.log(number);
//     }
// }

// cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function solveSame(...arguments) {
    let num = Number(arguments.shift());

    const operations = {
        chop: () => num / 2,
        dice: () => Math.sqrt(num),
        spice: () => num + 1,
        bake: () => num * 3,
        fillet: () => num * 0.8
    };

    for (let i = 0; i < arguments.length; i++) {
        num = operations[arguments[i]]();
        console.log(num);
    }
}

solveSame('9', 'dice', 'spice', 'chop', 'bake', 'fillet');