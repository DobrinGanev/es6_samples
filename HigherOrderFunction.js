
/**
function returns another function
*/

const func =  (params_one) => {
   const {number_one} = params_one //creates a closure with variable number_one 
    return (params_two) => {
 	   const {number_two} = params_two //destruct
	   return number_one + number_two
  }
}

let test  = func({number_one:1}) //test is a function
console.log(test({number_two:2}))

//one liner
console.log(func({number_one:1})({number_two:2}))
