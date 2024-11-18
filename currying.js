/**what is currying in javascript?
 * currying in javascript is a functional programming technique where a function is transformed into a serio\es of function , each taking  a single argument.
 * Instead a taking all argument together,a function takes the first argument and return another function that takes next argument and so on, untill all argument are provided.
 * 
 * 
 */
// syntex of currying
function curryFunction(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };

}
const curried=curryFunction(1)(2)(3);
console.log(curried);
/**why use currying?
 * 1. reusability: you can cfreate specific functions by partially apply argument
 * const add=(a)=>(b)=>a+b;
 * const add5=add(3);
 * console.log(add5(5));
 * cosnole.log(add5(10));
 * 
 * currying with arrow function:
 * here's how you use currying with arrow function
 * const multiply=(a)=>(b)=>(c)=>a*b*c;
 * cosnole.log(multiply(2)(3)(4)) */