/*Ex.7
Write a JavaScript function to get the current date. Go to the
editor
Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"
*/

let date = new Date();

function AddSeparator (myDate ,separator){
let day =myDate.getDate();
let month = myDate.getMonth();
let year = myDate.getFullYear();

return day + separator + month +separator + year
}
console.log(AddSeparator(date,"/"));