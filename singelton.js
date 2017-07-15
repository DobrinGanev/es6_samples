const mySingleton = (() => {
 
  // Instance stores a reference to the Singleton
  let instance
 
  const init = () => {
 
    // Singleton
 
    // Private methods and variables
    const privateMethod = () => {
        console.log( 'I am private' )
    }
 
    const privateVariable = 'Im also private'
 
    const privateRandomNumber = Math.random()
 
    return {
 
      // Public methods and variables
      publicMethod:  () => {
        console.log( "The public can see me!" )
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: () => {
        return privateRandomNumber
      }
    }
  }
 
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: () => {
      if ( !instance ) {
        instance = init()
      }
      return instance
    }
  }
})()




const sing = mySingleton.getInstance()
const sing_2 = mySingleton.getInstance()
console.log(sing.getRandomNumber() ===sing_2.getRandomNumber )

