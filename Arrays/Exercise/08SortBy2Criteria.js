function sort(array) {
    // array = array.map(str => str.toLowerCase());
    array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b);
    })

    return array.join("\n")
}

sort(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])
sort(['alpha', 'beta', 'gamma'])