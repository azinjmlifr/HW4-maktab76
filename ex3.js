/*Ex.3
Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox ' 
*/

function fun1(str){
let Array= str.split(' ');
let newArray =[]
Array.forEach(function (item){
newArray.push(item.charAt(0).toUpperCase() + item.slice(1))
   })
return newArray.join(' ');
}


console.log(fun1('the quick brown fox'));