/*function a(){
    console.log(b);

}
var b=10;
a();*/
/**when second line run then javascript thought that b is present in local memory space or not?
 * check in a() local execution context that b present or not? and it would not be there because 
 * b not declare or created inside the function
 * but when we run the code it print the 10 that means somehow inside the function this b access that b which is outside the function
 * 
 */
function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b=1;
a();// it give output of 10 also
/**that means even inside the function which is inside another function which is inside global scope i can access b
 * but when i put var b=1; inside the a() function then am i access the variable ? yes, you can also access the vaiable 
 * but when i put the var b=1; inside the a() function and we want to accss the variable b in global scope then we cannot access the b
 * and a error come like uncaught reference error: b is not defined 
 * scope means where you can access a specific function or variable inside the code
 * so question is what is the scope of b , means where we can access the variable b
 * 
 * scope is directly depend upon the lexcical envoirment 
 * 
 * let's see what is lexiacal envoirment?
 * lets suppose this is a whole code
 * function a(){
 * var b=10;
 * c();
 * function c(){
 * }}
 * a();
 * console.log(b);
 * lets create a call stack and first we put a global execution context inside the call stack
 * so whenever a execution context is created a lexical envoirment is also created
 * lexical envoirment is the local memory along with lexical envoirment of its parent
 * lexical terms means in heararchy or in a sequence,
 * like function c() is lexically sit inside a function a() , that means lexical in order, in heararchy
 * means where the function present physically inside a code so there is function c() is physicaly present inside a() funcition
 * so c is lexically inside a, and a is lexically inside the global scope
 * 
 * lexical envoirment means local memory along with lexical envoirment of parent, so like in
 * call stack first we cresate a global execution context and then we invoke function a() which create a new brand execution context which is pushed just above globl execution context and 
 * then inside the function a() one more function invoked which is c() so one more new execution context is created 
 * so lexical envoirment of c() is lical memory of this c means inside memory componet of execution context of c() whichever variable have present that variable we can access easily and we can also 
 * access lexical envoirment of function c()'s parent means function a() lexical envoirment so if 
 * you access variable b in funcion c then you can seee that variable in also function a() and if in functinon a() also that variable b is not present 
 * then you can see lexical envoirment of function a() means local memory of that function and
 * also kexical envoirment of its parent means in global scope , 
 * so this chain is called scope chain
 */
