/*
Exercise4.1:
Implement a function named getNumber which generates a random number. 
If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable.
*/ 


const getNumber = () => new Promise((resolve,reject) => {
    const randomNumber = parseInt(Math.random() * 100 , 10);
    setTimeout(()=> {
        if(randomNumber % 5 === 0) {
            reject(`Rejected with Num : ${randomNumber}`);
        }
        resolve(`Resolved with Num : ${randomNumber}`);
    }, randomNumber * 10);
});

const p = getNumber(1000);

p.then(console.log)
p.catch((err)=>{throw new Error(`Rejected with Num : ${randomNumber}`)
})