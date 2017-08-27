const add = (x,y) => x + y

const thunk = () => add(1,2)

console.log(thunk()) 



const addAsync = (x,y,callback) => {
 setTimeout(()=> { callback(x + y) },1000)
}

const asyncThunk = (callback) => addAsync(10,15,callback)

asyncThunk(res=>  console.log(res))

const addAsync2 = (x,y) => (callback) => {
 setTimeout(()=> { callback(x + y) },1000)
}

const asyncThunk2 = (callback) => addAsync2(10,15)(callback)

asyncThunk2(res=>  console.log(res))
