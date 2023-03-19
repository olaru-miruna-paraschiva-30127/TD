function getFibonacci(n){

if (  typeof n !== "number") return "not allowed";
if (n<1 || n>10)return "not allowed";
var numbersF = [];

numbersF[0] = 1;
numbersF[1] = 1;
let a = 1, b = 1 ,c;
for (var i = 2; i<n ; i++){

c= a + b;
numbersF.push(c);
a = b;
b = c;

}

return "["+numbersF+"]"
}
