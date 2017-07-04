//update value of array without modifying the original one
const update_value = (params) => {
   const {list,index,value} = params
   let  new_list = list.slice()
	 new_list[index] = value
	 return new_list
}

const original_list = [1,2,3,4,5]
console.log(update_value({list:original_list,index:0,value: 6}))
console.log(original_list)

const update_value_assign = (params) => {
   const {list,index,value} = params
	 
    return Object.assign([], list, {[index]: value});
}

const original_list_assign = [1,2,3,4,5]
console.log(update_value_assign({list:original_list_assign,index:0,value: 6}))
console.log(original_list_assign)


//insert item in array
const insert_item = (params) => {
  const {array, index, item} = params
    return [
        ...array.slice(0, index),
            item,
        ...array.slice(index)
    ]
}

//remove item by index
const remove_item = (params) => {
   const {array, index} = params
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
}

//update value by removing it by index and adding the new one
const update_value_spread = (params) => {
    const {list,index,value} = params
    let temp_arr = remove_item({array:list,index:index})
    
	  return insert_item({array:temp_arr, index:index,item:value})
}



const original_list_spread = [1,2,3,4,5]
console.log(update_value_spread({list:original_list_spread,index:0,value: 6}))
console.log(original_list_spread)

