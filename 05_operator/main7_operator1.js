var num1 = 10;
var num2 = 3;
var n = function (a, b) { return a + b; };
num1++;
console.log("++:", num1);
num2--;
console.log("--:", num2);
var num3 = 10;
var num4 = ++num3;
console.log("전치" + num3, num4);
var num5 = num3++;
console.log("후치" + num3, num4);
var result = n(10, 20);
console.log(result);
var strnum = "10";
var num5 = strnum;
console.log(num5);