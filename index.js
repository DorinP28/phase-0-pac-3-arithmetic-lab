function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function add(a, b) {
    return a + b;
    expect(add(a, b)).toEqual(a + b);
}

function subtract(a, b) {
    return a - b;
    expect(subtract(a, b)).toEqual(a - b);
}

function multiply(a, b) {
    return a * b;
    expect(multiply(a, b)).toEqual(a * b);
}

function divide(a, b) {
    return a / b;
    expect(divide(a, b)).toEqual(a / b);
}

function increment(a) {
    return a + 1;
    expect(increment(a)).toEqual(a + 1);
}

function increment(a) {
    return a += 1;
    expect(increment(a)).toEqual(a += 1);
}

function decrement(a) {
    return a -= 1;
    expect(decrement(a)).toEqual(a -= 1);
}

function makeInt(n) {
    return(parseInt(n, 10));
}

function preserveDecimal(n) {
    return(parseFloat(n, 10));
}