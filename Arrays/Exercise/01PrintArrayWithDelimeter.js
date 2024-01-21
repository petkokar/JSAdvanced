function printArrayWithGivenDelimeter(array, delimeter) {
    let result = array.join(`${delimeter}`)
    return result;
}

printArrayWithGivenDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-')