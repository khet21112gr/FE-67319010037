let myName : string = "Khettawan";
let myNumber : number = 1000;
console.log(myName);
let currentOperation = '';

function showadd():void{

    document.getElementById("math").innerHTML = String("+") ;
    currentOperation =  '+';
}
function showSub():void{

    document.getElementById("math").innerHTML = String("-") ;
    currentOperation =  '-';
}
function showmulti():void{

    document.getElementById("math").innerHTML = String("*") ;
    currentOperation =  '*';
}
function showdivide():void{

    document.getElementById("math").innerHTML = String("/") ;
    currentOperation =  '/';
}




function cal() {
    // Retrieve values from the input fields
    const x1 = document.getElementById("num1") as HTMLInputElement;
    const x2 = document.getElementById("num2") as HTMLInputElement;
    const num1 = Number(x1.value);
    const num2 = Number(x2.value);

    // Variable to store the result
    let result;

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
    document.getElementById("output").innerHTML = `: ${result}`;
}