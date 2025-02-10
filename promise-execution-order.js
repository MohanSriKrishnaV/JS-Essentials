console.log("🚀 Step 1: Script starts");

let x = new Promise((res, rej) => {
    console.log("🔄 Step 2: Inside Promise executor function (Runs immediately)");
    res("✅ Step 4: Promise resolved with success");
});

console.log("🕒 Step 3: Script continues executing after Promise creation");

x.then((res) => console.log(res)).catch();
