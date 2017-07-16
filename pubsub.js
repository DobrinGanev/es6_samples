//from https://github.com/PaulKinlan/EventManager/blob/master/index.js

const EventManager = () => {
  let events = {}

  const publish = (name, data) => {
    return new Promise((resolve, reject) => {
      const handlers = events[name]
      if(!!handlers === false) return
      handlers.forEach(function(handler) {
        handler.call(this, data)
      })
      resolve()
    })
  }

  const subscribe = (name, handler) => {
    let handlers = events[name]
    if(!!handlers === false) {
      handlers = events[name] = []
    }
    handlers.push(handler)
  }

  const unsubscribe = (name, handler) => {
    let handlers = events[name]
    if(!!handlers === false) return

    let handlerIdx = handlers.indexOf(handler)
    handlers.splice(handlerIdx)
  }
	
	return {publish, subscribe, unsubscribe}
}
const sub = EventManager()

sub.subscribe('dataload', (data) => {
  console.log(data)
});


sub.publish('dataload', {id:'1234'})

