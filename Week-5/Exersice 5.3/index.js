// Write a function called hasDuplicate 
//which accepts an array and returns true or false
// if that array contains a duplicate


function hasDuplicates(arr){
    let mySet = new Set(arr);    // Set function does not add duplicate value to its array
    if (mySet.size !== arr.length){
        return true
    }else{
        return false
    }
}
console.log(hasDuplicates([1,5,-1,4]));