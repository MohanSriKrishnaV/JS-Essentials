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


    function all(promises) {
        return new Promise((resolve, reject) => {
            let ans = []; // To store results in order
            let completed = 0; // Counter to track resolved promises
    
            promises.forEach((p, index) => {
                p.then((res) => {
                    ans[index] = res; // Store results in correct order
                    completed++;
    
                    if (completed === promises.length) {
                        resolve(ans); // ✅ Resolve only when all promises finish
                    }
                }).catch(() => {
                    reject([]); // ❌ Immediately reject if any promise fails
                });
            });
        });
    }
    