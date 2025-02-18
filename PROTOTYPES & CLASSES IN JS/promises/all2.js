const promise1 = new Promise((resolve) => 
    setTimeout(() => resolve("Promise 1 resolved"), 1000)
);

const promise2 = new Promise((resolve) => 
    setTimeout(() => resolve("Promise 2 resolved"), 2000)
);

const promise3 = new Promise((resolve) => 
    setTimeout(() => resolve("Promise 3 resolved"), 1500)
);

const promise4 = new Promise((resolve) => 
    setTimeout(() => resolve("Promise 4 resolved"), 500)
);

const promise5 = new Promise((resolve) => 
    setTimeout(() => resolve("Promise 5 resolved"), 1200)
);

all([promise1, promise2, promise3, promise4, promise5])
    .then(x => console.log(x, "x")) // ✅ Outputs all results in order
    .catch(err => console.log(err, "err"));
async function all(promises){
let ans=0;
return  new Promise((resolve, reject) => {
    for(let prom of promises){
        try {

        }
        catch{
            
        }
    }
});

}