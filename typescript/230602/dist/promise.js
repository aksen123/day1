const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
        reject("sss")
    }, 1000);
});
promise.then((response) => {
    console.log(response);
});
promise.catch((error) => {
    if (typeof error === "string") {
        console.log(error);
    }
});

