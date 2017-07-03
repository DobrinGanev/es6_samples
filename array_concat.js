//add a value to array without modifying the original one

const add_to_list = (params) => {
const {item , list} = params
return  list.concat([item])
}
let original_list= [1,2,3];
console.log(add_to_list({item:1,list: original_list}))
console.log(original_list)

//object spread syntax
const add_to_list_spread = (params) => {
  const {item , list} = params
 return [...list,item]
}


let original_list_spread= [4,5,6];
console.log(add_to_list_spread({item:1,list: original_list_spread}))
console.log(original_list_spread)

