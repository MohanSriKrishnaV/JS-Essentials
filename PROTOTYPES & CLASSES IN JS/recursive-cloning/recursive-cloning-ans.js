function clone(obj) {
    if (obj === null || typeof obj !== "object" || typeof obj === 'function') {
      return obj;
    }
    const ans = Array.isArray(obj) ? [] : {};
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        ans[i] = clone(obj[i]);
      }
    } else {
      for (const key in obj) {  // Use for...in for objects
        if (obj.hasOwnProperty(key)) { // Important: Check own properties
          ans[key] = clone(obj[key]);
        }
      }
    }
    return ans;
  }
  
  
  // Example Usage (demonstrating deep cloning):
  const originalObj = {
    a: 1,
    b: [2, 3],
    c: { d: 4 },
    e: null,
    f: function() { console.log("hello"); } // Example of a function property
  };
  let y= JSON.parse(JSON.stringify(originalObj)) 
  console.log(y,"y");
  console.log(originalObj,"originalObj");
  
  
//   const clonedObj = clone(originalObj);
  
//   clonedObj.b.push(5);
//   clonedObj.c.d = 6;
//   clonedObj.a = 7;
  
//   console.log("Original:", originalObj);
//   console.log("Cloned:", clonedObj);
  
//   // Demonstrating structuredClone (for modern environments):
//   const originalObj2 = { ...originalObj }; // Create a new object to avoid modifying the original
//   const clonedObj2 = structuredClone(originalObj2);
//   clonedObj2.b.push(8);
  
//   console.log("Original2:", originalObj2);
//   console.log("Cloned2 (structuredClone):", clonedObj2);