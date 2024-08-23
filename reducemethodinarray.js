// to calculate sum
let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(output);

//to find out the largest number
let numarr = [1, 2, 3, 4];

const result = arr.reduce((res, curr) => {
    return prev > curr ? prev : curr;
});
console.log(result);