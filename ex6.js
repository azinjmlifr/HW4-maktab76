/*Ex.6
Create a function Compute the sum of the rounded numbers in an
array.
Test data:
const numbers = [15.5, 2.3, 1.1, 4.7];
output=24
use reduce
*/

let numbers = [15.5, 2.3, 1.1, 4.7];
let sumOFthese = numbers.reduce(function(total, num) {
let result = total + num;
return Math.round(result)
}
)

console.log(sumOFthese);

