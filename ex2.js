/*Ex. 2
Write a JavaScript program to compute the sum of an array of
integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

arr2 = [1, 2, 3, 4, 5, 6];
let sum = 0
let arr2New = arr2.join().split(",").map(Number)
console.log(arr2New);
arr2New.forEach(function(item){
    sum += item
})

console.log(sum);