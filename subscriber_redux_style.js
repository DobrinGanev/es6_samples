
const subscriber = () => {
  let listeners = []
  const dispatch = () => {
         listeners.forEach(listener => listener()) // notify all subscibers that dispatch was called
  }
 const subscribe = (params) => {
   const { listener } = params
   listeners.push(listener)
 }
 const unsubscribe = (listener) => {
   listeners.push(listener)
 }
  return {dispatch, subscribe, unsubscribe}
}

// test
const logger = () => {
  console.log('dispatched')
}

const sub = subscriber()
sub.subscribe({listener:logger})
sub.dispatch()
sub.dispatch()

