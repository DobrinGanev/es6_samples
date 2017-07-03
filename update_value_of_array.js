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

