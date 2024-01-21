function radar(currSpeed, area) {
    let limit;
    switch(area) {
        case 'motorway':
            limit = 130;
            if (currSpeed <= limit) {
                console.log(`Driving ${currSpeed} km/h in a ${limit} zone`);
            } else {
                statusDriving(currSpeed, limit);
            }
            break;
        case 'interstate':
            limit = 90;
            if (currSpeed <= limit) {
                console.log(`Driving ${currSpeed} km/h in a ${limit} zone`);
            } else {
                statusDriving(currSpeed, limit);
            }
            break;
        case 'city':
            limit = 50;
            if (currSpeed <= limit) {
                console.log(`Driving ${currSpeed} km/h in a ${limit} zone`);
            } else {
                statusDriving(currSpeed, limit);
            }
            break;
        case 'residential':
            limit = 20;
            if (currSpeed <= limit) {
                console.log(`Driving ${currSpeed} km/h in a ${limit} zone`);
            } else {
                statusDriving(currSpeed, limit);
            }
            break;
    }

    function statusDriving(speed, limit) {
        let status = '';
        if (speed - limit <= 20) {
            status = 'speeding';
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else if (speed - limit > 20 && speed - limit <= 40) {
            status = 'excessive speeding';
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else {
            status = 'reckless driving';
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}

radar(200, 'motorway');