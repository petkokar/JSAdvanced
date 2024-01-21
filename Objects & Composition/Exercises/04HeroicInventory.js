function heroicInvetory(array) {

    let register = [];

    for (let line of array) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        let hero = {
            name,
            level,
            items
        };

        register.push(hero)
    }

    return JSON.stringify(register)
}

heroicInvetory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);