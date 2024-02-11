// console.log("hello, world")

// const promisea = new Promise((resolve, reject) => {
//    resolve("hello!!") // the value when we call a website 
// //    reject() // will be an error message  

// })

// //.then is a call back, it called the unfulfilled callback and it takes in a prameter called value. 
// // this is how we grab things out of promises that have been fulfilled, the .then doesn't go until fulfiled 
// promisea.then((value) => {
//     console.log(value)
// })
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // now lets reject it
// const promise = new Promise((resolve, reject) => {
//     reject("Failure!!") // the value when we call a website 
//  //    reject() // will be an error message  
 
//  })

//         promise.then((value) => {
//             console.log(value)   //instead of loging in Faliure it just threw an on the handle the UnhandledPromiseRejection:  //"ERR_UNHANDLED_REJECTION"
//                                     // this is because when a promise rejects it doesn't feed into the then callback we have to give it something else 
//         })

// // we have to use .catch() 
// // the .catch take in a function called the on rejected function and instead of value the parametere is reason. 

// promise.then((value) => {
//     console.log(value)   //instead of loging in Faliure it just threw an on the handle the UnhandledPromiseRejection:  //"ERR_UNHANDLED_REJECTION"
//                             // this is because when a promise rejects it doesn't feed into the then callback we have to give it something else 
// }).catch((reason) =>{
//     console.log("ERROR!!", reason)  // this will print the error message as well as the reson for it. "ERROR!! Failure!!"
// })

/** all the above are not taking time so lets do an example of time to see how the promise properly works  */
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const promiseu = new Promise((resolve, reject) => {
   // in built js, it takes in a call back that runs when the time out is done and the ms to wait for. 
    setTimeout(() => {
        resolve('hello, how is going')
   }, 3000) //have it wait 1000 ms
 })
console.log(promiseu)   /// this will show it is pending like getting a network/web
promiseu.then((value) => {
    console.log(value)   //instead of loging in Faliure it just threw an on the handle the UnhandledPromiseRejection:  //"ERR_UNHANDLED_REJECTION"
                            // this is because when a promise rejects it doesn't feed into the then callback we have to give it something else 
}).catch((reason) =>{
    console.log("ERROR!!", reason)  // this will print the error message as well as the reson for it. "ERROR!! Failure!!"
})

console.log('i am not blocked')  // this will print becase js is built by keeping in mind of web. and this is a non-blocking, where we are not blocking and can do other operations 

//output
// Promise { <pending> }
// i am not blocked
// hello, how is going



//****************************************** it is not multi-threading it is pretedning, meaing it won't block other operations below while it waits for the promise*/