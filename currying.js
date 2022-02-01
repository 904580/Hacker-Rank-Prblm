// how to print sum(5)(8)(7)(6)


const sum = (a)=> (b)=>(c)=(d) => a+b+c+d;

const add = sum(5)(8)(7)(6);
console.log(add);


//  Currying function- currying is an advanced technique of working with functions 
//  Currying is a function that takes one argument at a time and returns a new function 
//  expecting the next argument. It is a transformation of functions that translates 
// a function from callable as f(a, b, c) into callable as f(a)(b)(c).