const module = (params) => {
  const {num_one} = params  //creates a closure with variable number_one 
  const func_one = (params) => {
	   const {num_two} = params
	   return num_two + num_one
	}
	const func_two = (params) => {
	   const {num_tree} = params
	   return num_tree + num_one
	}
	return {func_one, func_two}
  
}

const test_module = module({num_one:1})

console.log(test_module.func_one({num_two: 2}))
console.log(test_module.func_two({ num_tree: 5}))
