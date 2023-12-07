//Завдання 1
//a)
/*var line = 7;
var star = '+';
var str = '';

for ( var i = 0; i < 7; i++)
{str +=star
console.log (str)}*/

//б)
let rows = 9;
let pattern = "";

for ( let n = 1; n <= rows; n++)

  { for (let space = 1; space <= rows - n; space ++) {
    pattern += " ";}
  
     for (let num = 1; num <= n; num++) {
        pattern += "+";
    }
    pattern += "\n";
  }
console.log (pattern);



//Завдання №2 
//a)
 /*let a = 2;
let b = 3;
function powerCalculator() {let result = a**b;
return result}
let result = powerCalculator()*/
//b)
/*let a = 5;
let b = 3;
function Mathpow() {let result = Math.pow(a, b)
return result }
let result = Mathpow()*/

var line = 7;
var star = '+';
var str = '';

for ( var n = 0; n < 7; n++)
{str +=star}
for (space = 0; space < line - n; space++)
{str += '\n'
console.log (str)}