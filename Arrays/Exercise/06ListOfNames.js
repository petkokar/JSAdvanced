function nameList(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    for(let i = 0; i < sorted.length; i++) {
        console.log(`${i+1}.${sorted[i]}`);
    }
}

nameList(["John", "Bob", "Christina", "Ema"])