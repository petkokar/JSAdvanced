function addAndRemove(input) {
    let newArr = [];
    let sum = 0;
    for(let i = 0; i<input.length; i++) {
        sum++;
        if (input[i] === 'add') {
            newArr.push(sum)
        } else if (input[i] === 'remove') {
            newArr.pop();
        }
    }

    if (newArr.length <= 0) {
        return 'Empty';
    } else {
        return newArr.join('\n');
    }

    // return newArr.length ? newArr.join('\n') : "Empty";
}

console.log(addAndRemove(['add', 
'add', 
'add', 
'add']
))