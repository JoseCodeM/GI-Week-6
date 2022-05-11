function avrgNum (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

//testing
console.log(avrgNum([10, 5])); //7.5
console.log(avrgNum([1, 4, 7])); //3
console.log(avrgNum([1.5, 3, 2.5, 1])); //2