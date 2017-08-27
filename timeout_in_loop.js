for (let i=1; i<=5; i++) {
  ((j) =>{
    setTimeout(()=>{
      console.log( j );
    }, j*100);
  })(i)
}
