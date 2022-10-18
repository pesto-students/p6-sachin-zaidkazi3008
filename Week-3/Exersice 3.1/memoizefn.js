/*
Create a memoize function that remembers previous inputs and stores them in cache 
so that itwon’t have to compute the same inputs more than once.
The function will take an unspecifiednumber of integer inputs and a reducer method.
*/

//Given reducer method:
function add(a,b){
    return a+b
}
//Create a method called memoize such that:
function memoize(fn){
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key , fn(...args));
        return cache.get(key);
    };
}
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd=memoize(add);

//then calling...
console.log(memoizeAdd(100,100));
time(()=>memoizeAdd(100,100));
// returns 200
console.log(memoizeAdd(100,0));
time(()=>memoizeAdd(100,0));
// returns 100
console.log(memoizeAdd(100,200));
time(()=>memoizeAdd(100,200));
// returns 300
console.log(memoizeAdd(100,100));
time(()=>memoizeAdd(100,100));
// returns 200 
// without computing