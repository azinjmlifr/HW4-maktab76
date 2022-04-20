/*Ex.10
Write a JavaScript function to remove the first occurrence of
a given 'search string' from a string.
Test Data:
console.log(remove_first_occurrence("The quick brown fox jumps
over the lazy dog", 'the'));
Output:
"The quick brown fox jumps over lazy dog"
*/


function remove(str,first){
    let array =str.split(' ') 
    let newArray = array.filter(function(item){
        return item!==first
    })
    return newArray.join(' ')
    }
    console.log(remove('The quick brown fox jumps over the lazy dog','the'))