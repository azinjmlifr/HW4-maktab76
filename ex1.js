/*Ex. 1
Write a JavaScript program to compute the exponent of a number
PS:use Recursion
*/

function exponentNumber (a,n){
    if (n === 1 ){
        return a;
    }else{
        return a * exponentNumber(a,n-1);
    }
}

console.log(exponentNumber(4,2));


