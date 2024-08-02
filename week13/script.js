var myName = "Khettawan";
var myNumber = 1000;
console.log(myName);
var currentOperation = '';
function showadd() {
    document.getElementById("math").innerHTML = String("+");
    currentOperation = '+';
}
function showSub() {
    document.getElementById("math").innerHTML = String("-");
    currentOperation = '-';
}
function showmulti() {
    document.getElementById("math").innerHTML = String("*");
    currentOperation = '*';
}
function showdivide() {
    document.getElementById("math").innerHTML = String("/");
    currentOperation = '/';
}
function cal() {
    // Retrieve values from the input fields
    var x1 = document.getElementById("num1");
    var x2 = document.getElementById("num2");
    var num1 = Number(x1.value);
    var num2 = Number(x2.value);
    // Variable to store the result
    var result;
    // Perform the calculation based on the selected operation
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Please select an operation';
    }
    // Display the result
    document.getElementById("output").innerHTML = "Result: ".concat(result);
}
