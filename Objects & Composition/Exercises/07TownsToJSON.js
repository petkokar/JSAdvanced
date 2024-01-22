function tableToJson(array) {

    let [town, latitude, longitude] = array.shift().split('|').map(column => column.trim()).filter(Boolean);

    let rows = [];
    
    for(let city of array) {
        let [name, coords1, coords2] = city.split('|').map(column => column.trim()).filter(Boolean);
        coords1 = parseFloat(coords1)
        coords2 = parseFloat(coords2)

        const rowObject = {}

        rowObject[town] = name;
        rowObject[latitude] = Number(coords1.toFixed(2));
        rowObject[longitude] = Number(coords2.toFixed(2));
        
        rows.push(rowObject);
    }

    const jsonString = JSON.stringify(rows);
    console.log(jsonString);
}

tableToJson(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);

tableToJson(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |']);