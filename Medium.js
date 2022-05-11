function pivotPoint (arr, target) {
    for (let i = 0; i < arr.length; i++) {
       return arr.indexOf(target);
    }
}

console.log(pivotPoint([4,5,6,7,0,1,2], 0)); //4
console.log(pivotPoint([4,5,6,7,0,1,2],3)) //-1
