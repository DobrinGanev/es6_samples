 //throw an error if you try to pass a defined value that is not a function
 const function_test = (func) => {
  if (typeof func !== 'undefined') { 
    if (typeof func !== 'function') {
      throw new Error('Expected to be a function.')
    }
  }
 }
const logger = () => {
  console.log("this is a function")
}
const obj = {
  key:'this is an object'
}

function_test(logger)
function_test(obj)
function_test(1)
function_test('1')
