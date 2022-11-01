/*Exercise4.3:
Implement Fibonacci Series with Iterators
*/

//! Fibonacci series with iterators:

const fib = {
    n:10,
    [Symbol.iterator] : function(){
        let i =0;
        let old=0 , new1 = 0;
        return {
            next: ()=> {
                if(i++ <= this.n){
                    [old,new1] = [new1, (old + new1) || 1];
                    return {value: old, done:false}
                }
                else {
                    return {done : true}
                }   
            }
        }
    }
};

for(let num of fib){
    console.log(num);
}
