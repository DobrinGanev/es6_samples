const createStore = (reducer) => {
  let state;
  let listeners = []
  const getState = () => state
  const dispatch = (action) => {
     state = reducer(state, action)
     listeners.forEach(listener => listener()) // loop through all functions and call them
  }
 const subscribe = (listener) => {
   listeners.push(listener)
   return () => { //unsubscribe
         listeners = listeners.filter(item => l !== item)
    }
 }
  return {getState, dispatch, subscribe}
}


// test
const logger = () => {
  console.log(store.getState())
}

const add_item = (params) => {
  const {id,text,state} = params;
  return [
     {
       id: id,
       text: text
     },
     ...state
   ]
}
const list = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
         return add_item({id:action.id,text:action.text,state:state})
          default:
            return state
        }
      }
const store = createStore(list)
store.subscribe(logger)
store.dispatch({type:'ADD_ITEM',id:1,text:'test 1'})
store.dispatch({type:'ADD_ITEM',id:1,text:'test 2'})

