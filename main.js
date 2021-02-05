// Then & Catch & Training:

const myPromise = new Promise((resolve, reject) => {
    // only one state allowed
    // resolve("resolved");
    // reject("rejected"); // ignore
    if(Math.random() * 100 < 90){
        resolve("good");
    }else{
        reject("bad");
    }
});

myPromise.then(
        (myResolved) => console.log(myResolved),
        (myRejected) => console.log(myRejected)
);

// myPromise.then(
//         null,
//         (myRejected) => console.log(myRejected)
// );


// myPromise.catch(
//     (myRejected) => console.log(myRejected)
// );

// _____________________________
