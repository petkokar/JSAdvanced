function solve(input) {
    let savedNums = [];

    for(let symbol of input) {
        if (typeof(symbol) !== 'number') {
            if (savedNums.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let recentNums = savedNums.splice(-2);
            let result = checkAndDoOperator(symbol, recentNums[0], recentNums[1]);
            savedNums.push(result);
        } else {
            savedNums.push(symbol);
        }
    }

    if(savedNums.length == 1) {
        console.log(`${savedNums.shift()}`);
    } else if (savedNums.length > 1) {
        console.log('Error: too many operands!');
    }

    function checkAndDoOperator(symbol, num1, num2) {
        switch(symbol) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    }
}

solve([7,

    33,
    
    8,
    
    '-'])