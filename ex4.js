/*Ex.4
Write a JavaScript function to remove. 'null', '0', '""',
'false', 'undefined' and 'NaN' values from an array.*/
let array1 = ['','undefined','false','NaN','null', '0', '""','azin','bye',2]

function remove (item){
   return item !== 'undefined' && item !== 'NaN'&& item !== '0'&& item !== 'undefined'
&& item !== '' && item !== 'false' && item !== 'null' && item !== '""'
  }
console.log(array1.filter(remove));