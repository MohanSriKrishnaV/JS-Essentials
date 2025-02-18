const isoDate = new Date().toISOString();
// console.log(isoDate); // Example output: "2024-02-14T12:34:56.789Z"
// console.log(typeof isoDate);
function timer(obj){
    let x=obj.split("T")
// console.log(x,"x");
let y=x[0]
let d=y.split("-")
// console.log(d,"d");
let [year,month,date]=d
// console.log(year,month,date);
let z=x[1]
let w=z.split(".")
let ss=w[0].split(":")
// console.log(z,"z");
let [hrs,mins,secs]=ss

return `${date}-${month}-${year}:time-${hrs}-${mins}-${secs}`

}
console.log(timer(new Date().toISOString()));


setTimeout(() => {
    console.log(timer(new Date().toISOString()));

}, 1000);

setTimeout(() => {
    console.log(timer(new Date().toISOString()));

}, 2000);


setTimeout(() => {
    console.log(timer(new Date().toISOString()));

}, 3000);