let items = [250, 645, 300, 900, 50];
let i = 0;
//using for of loop
for (let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value of index ${i} = ${val}`);
    i++;
}
//using for loop
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);