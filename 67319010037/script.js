var myName = "Khettawan";
var myNumber = 1000;
console.log(myName);
function cal() {
    var num1;
    var num2;
    var x1;
    var x2;
    x1 = document.getElementById("num1");
    num1 = Number(x1.value);
    x2 = document.getElementById("num2");
    num2 = Number(x2.value);
    var res = num1 + num2;
    document.getElementById("result2").innerHTML = String(res);
}
