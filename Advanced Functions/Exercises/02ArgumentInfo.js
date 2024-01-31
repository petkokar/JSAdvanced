function argumentInfo(...args) {
    let result = {};

    for(let el of args) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    let sortResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for(let [k, v] of sortResult) {
        console.log(`${k} = ${v}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });