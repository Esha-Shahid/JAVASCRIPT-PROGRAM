let subject1 = Number(prompt("enter marks of data_communication"));//Number function used to convert intiger in to number 
let subject2 = Number(prompt("enter marks of artificial_intelligence"));
let subject3 = Number(prompt("enter marks of compiler_construction"));
let subject4 = Number(prompt("enter marks of software_engineering"));
let subject5 = Number(prompt("enter marks of computer_Graphics"));

let remarks = subject1 + subject2 + subject3 + subject4 + subject5;
let total = 500;
let percentage = (remarks / total) * 100;
let grade;

if (percentage >= 90 && percentage <= 100) {
    grade = "A";
} else if (percentage >= 70 && percentage <= 89) {
    grade = "B";
} else if (percentage >= 60 && percentage <= 69) {
    grade = "C";
} else if (percentage >= 50 && percentage <= 59) {
    grade = "D";
} else if (percentage >= 0 && percentage <= 49) {
    grade = "F";
}
document.write("According to your scores, your grade was:", grade);
document.write("<br>According to your scores your percentage was:", percentage);