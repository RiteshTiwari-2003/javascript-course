/**annonumous function 
 * what is the annonymous function?
 * what are first class function inthe javascript?
 * what is the function statement vs function expression vs function declaration
 * what is the named function expression
 * what is the arrow function?
 * 
 */
function a(){
    console.log("a called");// this way of creating a function is known as function statement

}
a();
//function expression
var b=function (){
    console.log("b called");
    //functiion acts like a value , we can assign a variable to a function
}
b();
/**so above two function are present where one first function function a is example of function statement andd second function function b() is the example of function expression
 * so main difference between these two come in hoisting 
 * like you put a(); before the function a declaration and also you can access b function like b(); before its declaration then output is come like this
 * a called and uncaught type error: b is not a function
 * 
 * because the function b is treat like a variable so before function execution it treat like a variable and automatically it initialize with undefined 
 * and we can not access and undefined variable with the help of paranthesis.
 * 
 * // function declaration and function statement are same.
 * 
 * 
 * //a nnonymous function : a function without name is called as annonymous function
 * functiion (){
 * }but if you run this then error come thst uncaught syntex error: function statement is require a name,
 * annonymous function are used where function are used as a value,mens you need to assign in some variable to this function
 * but when you access function a and function b after the declaration then  output come in right manner but if you write code like this
 * function a(){
 * console.log("a called");
 * }
 * var b=function xyz(parameter1,parameter2){
 * console.log("b called");}
 * a(argument1,argument2);
 * b();
 * xyz();// output come uncaught referenc3e error:xyz is not defined 
 * 
 * 
 * first class function
 * 
 * what is the first class function? instead of above these argument you can pass function as a argument or parameter in another function
 * like annonymous function some time work as value and variable so you can pas an argument a annonymous function
 * var b=function (paraqm1){
 * console.log(param1);}
 * b(function (){
 * })
 * 
 * or you can pass a named function also in another function as argument 
 * var b=function (param1){
 * console.log(param1);}
 * function x(){
 * }
 * b(x);
 * 
 * you can also return a function from a function
 * you return a annonymous function from a function
 * var b=function (param1){
 * return function (){
 * }
 * }
 * console.log(b());// in all this code output come a function whole body f(){}
 * 
 * then first class function is the ability to convert function as a value
 * the ability of function to used as value is known as first class function , in javascript, first class functionn  are function that are treated as first class citizen,
 * meaning they can be:
 * assigned to variable
 * passed as argument to the other function
 * returned from other function
 * characterstics of first class function:
 * 1. assign yto a variable:
 * const greet=function(name){
 * return `Hello , ${name}!`;};
 * console.log(greet('alice'))
 * 2. passed as a arguments: funcction canbe passed s argument to the other function (higher order function)
 * function executefunction(fn,value){
 * return fn(value);}
 * 
 * const double=(x)=>x*2;
 * console.log(executefunction(double,5));
 * 3. return from a function :
 * function createMultiplier(multiplier){
 * return function (num){
 * return num*multiplier;};
 * }
 * const triple=createMultiplier(3);
 * console.log(triple(4));
 */