let divs = document.querySelectorAll(".box");
let i = 1;
for (div of divs) {
    div.innerText = `new unique value ${i}`;
    i++;
}