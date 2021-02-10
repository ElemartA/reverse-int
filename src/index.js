module.exports = function reverse (n) {
    let newN = String(n).split('').reverse().join('');
    let newNumber = Number.parseInt(newN);
    return newNumber;
}
