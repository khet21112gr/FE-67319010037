let myName : string = "Khettawan";
let myNumber : number = 1000;
console.log(myName);







function cal():void{
    var num1 : number;
    var num2 : number;
    var x1 : any;
    var x2 : any;
    x1 = document.getElementById("num1")
    num1 = Number(x1.value);
    x2 = document.getElementById("num2")
    num2 = Number(x2.value);
    var res : number = num1+num2;
    document.getElementById("result2").innerHTML = String(res);
}