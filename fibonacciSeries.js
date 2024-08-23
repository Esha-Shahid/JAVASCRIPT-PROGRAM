var a = 0;
var b = 1;
for (var i = 0; i <= 20; i++) {
    var temp = a + b;
    document.write(temp);
    a = b;
    b = temp;
}