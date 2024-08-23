let n = prompt("Enter a number:")
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

//Use the reduce method to calculate sum of all numbers in the array

let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log("sum = ", sum);

//Use the reduce method to calculate product of all numbers in the array

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);