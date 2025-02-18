function deepEqual(obj1, obj2) {
    // Check if both are strictly equal (handles primitives)
    if (obj1 === obj2) return true;

    // If either is null or not an object, return false
    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    // Handle arrays separately
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) return false; // ✅ Fix index issue
        }
        return true; // ✅ Fix missing `true` return
    }

    // Compare objects (keys & values)
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
            return false; // ✅ Return immediately if mismatch
        }
    }

    return true;
}
