function townPopulation(array) {
    let registry = {};

    for (let town of array) {
        let [name, population] = town.split(' <-> ');
        
        if (registry.hasOwnProperty(name)) {
            registry[name] += Number(population)
        } else {
            registry[name] = Number(population)
        }
    }

    for (const town in registry) {
        console.log(town, ':', registry[town])
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);