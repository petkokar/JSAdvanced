function rotateArray(array, count) {
    for(let i = 0; i < count; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array.join(' ')
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2)