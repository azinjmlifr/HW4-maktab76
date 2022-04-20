/*Ex.8
Write a JavaScript function to get the month name from a
particular date. Go to the editor
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
2
Output :
"October"
"November"
*/
let date =new Date();

function month_name (){
    arrayOfMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "october",
    "November",
    "December",
    ];
    let Month = date.getMonth() 
    return arrayOfMonth[Month];
}

console.log(month_name());