/*
Using Async/Await and Generators, create separate functions and achieve the same functionality.
Execute 3 callback functions asynchronously,for example doTask1(), doTask2() and doTask3().
*/

// Async Await 
function doTask1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Task 1 completed")
            resolve()
        },3000)
    })
}

function doTask2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Task 2 completed")
            resolve();
        },1000)
    })

}


function doTask3(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Task 3 completed")
            resolve()
        },2000)
    })
}

async function allTasks(){
    await doTask1()
    await doTask2()
    await doTask3()
}

allTasks().then(() => {
    console.log("All tasks are completed")
}).catch((err) => {
    console.log(err)
})