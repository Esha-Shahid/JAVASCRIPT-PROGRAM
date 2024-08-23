var num = prompt('enter a number:');
function table(number) {
    for (var i = 1; i <= 10; i++) {
        var res = i * number;
        document.write(`${number} x ${i} = ${res}`);
    }
}
table(num);
// var table = prompt('Enter a number of table:');