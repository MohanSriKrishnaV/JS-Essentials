function de(obj1,obj2){
    if(typeof(obj1)!=="object" && typeof(obj2)!=="object"){
        return obj1===obj2
    }
    
    
if(Array.isArray(obj1) && Array.isArray(obj2)){
    if(obj1.length!==obj2.length) return false
    for(let i=0;i<obj1.length;i++){
if(obj1[i]!==obj2[i]){
return false
}
    }
    return true
}


    if(typeof(obj1)==="object" && typeof(obj2)==="object"){
        if(Object.keys(obj1).length!==Object.keys(obj2).length){
            return false
        }
    let ans=true
    for(let key of Object.keys(obj1)){
        if(obj2.hasOwnProperty(key)){
  ans= ans &&  de(obj1[key],obj2[key])
        }
        
    }
    return ans
    }
    }
    
    // console.log(typeof({"A":1}));

// console.log();
let x={a:{b:1,c:2}}
let y={a:{c:2,b:1}}
// console.log(x==y)
    console.log(de(x,y))
    