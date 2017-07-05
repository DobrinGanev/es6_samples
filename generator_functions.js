function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); 

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
/*
*
* Object {value: 1, done: false}
* Object {value: 2, done: false}
* Object {value: 3, done: false}
* Object {value: undefined, done: true}
*
*/

//from Dr. Axel Rauschmayer http://2ality.com/2015/03/es6-generators.html


function* genFunc() {
    console.log('First');
    yield; // (A)
    console.log('Second'); // (B)
}


const f = genFunc()
console.log(f.next())
