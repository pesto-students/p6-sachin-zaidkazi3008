// Create a simple Javascript function code for addition, subtraction, and multiplication of
// 2numbers and write the corresponding Jest based tests for it.

/*
const mathOperations = {
    sum: function(a,b) {
        return a + b;},

    diff: function(a,b) {
        return a - b;},
    
    product: function(a,b){
        return a * b}
}

module.exports = mathOperations(
    sum(),
    diff(),
    product(),
);


test('sum is a+b ',()=>{
    expect( 5 + 4).toBe(9);
});

test('diff is a-b ',()=>{
    expect( 5 - 4).toBe(1);
});

test('product is a*b ',()=>{
    expect( 5 * 4).toBe(20);
});
*/


const mathOperations = {
    sum: (a,b) => {
        return a + b
    }, 
    diff: (a,b) => {
        return a - b 
    },
    product: (a,b) => {
        return a * b
    } 
}

module.exports = mathOperations;