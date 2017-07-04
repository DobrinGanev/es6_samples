/**
* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Parameters

begin Optional
Zero-based index at which to begin extraction.
A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
If begin is undefined, slice begins from index 0.
end Optional
Zero-based index before which to end extraction. slice extracts up to but not including end.
For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
If end is omitted, slice extracts through the end of the sequence (arr.length).
If end is greater than the length of the sequence, slice extracts through the end of the sequence (arr.length).
Return value

A new array containing the extracted elements.
*
*
*/

const remove_from_list = (params) => {
const {begin ,end, list} = params
return  list.slice(begin, end);
}
let original_list= ['zero', 'one', 'two', 'three'];
console.log(remove_from_list({begin:1,end:3, list: original_list}))
console.log(original_list)

//object spread syntax
const remove_from_list_spread = (params) => {
 const {begin ,end, list} = params
 return [... list.slice(begin, end)]
}


let original_list_spread= ['zero', 'one', 'two', 'three'];
console.log(remove_from_list_spread({begin:1,end:3, list: original_list_spread}))
console.log(original_list_spread)


//remove by index
const remove_item = (params) => {
   const {array, index} = params
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
}
console.log(remove_item({array:original_list_spread,index:0}))
console.log(original_list_spread)
