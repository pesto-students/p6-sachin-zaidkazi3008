const mathOperations = require('./calculator');

test('Math operations for two numbers',()=> {
    expect(mathOperations.sum(2,3)).toBe(5);

})

test('Math Opp for Two numbers',()=>{
    expect(mathOperations.diff(3,2)).toBe(1);
    
})
test('Math Opp for Two numbers',()=>{
    expect(mathOperations.product(2,3)).toBe(6);
    
})