function carFactory(carRequirements) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]

    const carriages = {
        hatchback: { type: 'hatchback', color: carRequirements.color },
        coupe: { type: 'coupe', color: carRequirements.color }
    }

    const wheelSize = carRequirements.wheelsize % 2 === 0 ? carRequirements.wheelsize - 1 : carRequirements.wheelsize;

    const selectedEngine = engines.find(engine => engine.power >= carRequirements.power);

    const car = {
        model: carRequirements.model,
        engine: selectedEngine,
        carriage: carriages[carRequirements.carriage],
        wheels: new Array(4).fill(wheelSize)
    }
    return car;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));