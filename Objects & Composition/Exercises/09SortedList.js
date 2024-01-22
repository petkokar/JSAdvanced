function createSortedList() {

    let sortedList = [];

    function checkIndex(index) {
        if (index < 0 || index >= this.size || isNaN(index)) {
            return true;
        }
        return false;
    }

    let listFuncionality = {
        add(number){
            if (typeof number !== 'number'){
                return;
            }

            sortedList.push(Number(number));
            sortedList.sort((a, b) => a - b);
            this.size = sortedList.length;
        },

        remove(index) {
            if (checkIndex(index)) {
                return;
            }

            sortedList.splice(index, 1);
            sortedList.sort((a, b) => a - b);
            this.size = sortedList.length;
        },

        get(index) {
            if (checkIndex[index]) {
                return;
            }
            
            return sortedList[index]
        },

        size: 0
    }

    return listFuncionality;
}

let list = createSortedList();

list.add(5);

list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);