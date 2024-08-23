let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum = sum += val;
}
let avg = sum / marks.length
console.log(`average marks of the class = ${avg}`);