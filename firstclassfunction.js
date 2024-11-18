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
 * 
 */