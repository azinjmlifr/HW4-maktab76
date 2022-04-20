/*Ex.5
Write a JavaScript function to merge two arrays and remove all
duplicate elements.
Test data:
var array1 = [1, 2, 3];
1
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]
*/


function concat (array1,array2){
  let arr=[]
  array1.forEach(function(item){
      if(arr.indexOf(item)===-1){
      arr.push(item)}
  })
  array2.forEach(function(item){
      if(arr.indexOf(item)===-1){
          arr.push(item)  
      }
  })
  return arr
}
console.log(concat([1, 2, 3],[2, 30, 1]))