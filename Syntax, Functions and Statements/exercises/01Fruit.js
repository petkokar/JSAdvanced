function solve(fruit, fruitGrams, pricePerKg) {
    let fruitKg = fruitGrams / 1000;
    console.log(`I need $${(pricePerKg * fruitKg).toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);