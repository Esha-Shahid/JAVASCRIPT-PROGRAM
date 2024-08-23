let name = prompt("enter your name:");
let product = prompt("which product do you wanr?(laptop, keyboard, mouse)");
let laptop = 50000;
let keyboard = 1000;
let mouse = 500;

document.write(name);
document.write(product);

if (product == "laptop") {
    let add = prompt("How many products do you want");
    document.write("your bill:", laptop * add);
} else if (product == "keyboard") {
    let add = prompt("How many products do you want");
    document.write("your bill:", keyboard * add);
} else if (product == "mouse") {
    let add = prompt("How many products do you want");
    document.write("your bill:", mouse * add);
} else (
    document.write("sorry,you entered wrong product:")
)