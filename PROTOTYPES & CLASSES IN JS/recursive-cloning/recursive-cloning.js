function clone(obj){
if(typeof obj!=="object"){
    return obj
}
let ans=Array.isArray(obj)?[]:{}
if(Array.isArray(obj)){
for(let i=0;i<obj.length;i++){
    ans[i]=clone(obj[i])
}
}
else{
    for(let x of Object.keys(obj)){
ans[x]=clone(obj[x])
    }
}
return ans
}
// let x=[1,2,3]
// let y=x

// let y=clone(x)
// x[0]="a"
// console.log(x,"X");
// console.log(y,"y");

// console.log(clone([1,2,3]))
// let x={a:1,b:{c:[1,2,3]}}
// let y=JSON.parse(JSON.stringify(x))
// // let y=clone(x)
// x.b.c.push(5)
// console.log(x);
// console.log(y);

// console.log(clone))

// let x={x:new Date()}
// let y=JSON.parse(JSON.stringify(x))
// console.log(typeof(y.x),"y");

// let x={a:1,b:{new Set(1,2,3)}}
// console.log(x,"x");
