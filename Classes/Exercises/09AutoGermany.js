function auto(array) {
    let registry = {};

    for (let line of array) {
        let [make, model, numBuilt] = line.split(' | ');
        numBuilt = Number(numBuilt);
        if(!registry.hasOwnProperty(make)) {
            registry[make] = {};
        }

        if (registry[make][model]) {
            registry[make][model].numBuilt += numBuilt;
        } else {
            registry[make][model] = {
                numBuilt: numBuilt
            }
        }
    }

    for(let make in registry) {
        console.log(make);
        for(let model in registry[make]) {
            console.log(`###${model} -> ${registry[make][model].numBuilt}`);
        }
    }
}

auto(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10']);