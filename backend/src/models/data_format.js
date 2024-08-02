function convertStringToArray(str) {
    return str.split(',').map(item => item.trim()).map(item => item.charAt(0).toUpperCase() + item.slice(1))
} 

function convertCopiesSoldToNumbers(copiesSold) {
    const [value, unit] = copiesSold.split(' ');

    return parseFloat(value) * 1000000;
}

export {
    convertStringToArray,
    convertCopiesSoldToNumbers
}