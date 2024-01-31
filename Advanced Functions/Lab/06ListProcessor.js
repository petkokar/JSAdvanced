function createListProcessor(input) {
    let list = [];
    const object = {
        add: item => {
            list.push(item);
        },
        remove: item => {
            list = list.filter(el => el !== item);
        },
        print: () => {
            console.log(list.join(','));
        }
    }

    input.forEach(element => {
        const [command, value] = element.split(' ')
        object[command](value);
    });

}

createListProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);

