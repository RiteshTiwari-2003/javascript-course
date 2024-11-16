var x=1;
a();
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}
/**so in this first created a execution context in which two block presentt one is memory component and one is code component in memory component all the variable take memory space
 * so first we create memory for line 1 x, line 5 function a() and for line 9 functio b(),so x will be stored undefined and a and b will be point to the function code
 * this a and b pointing to the exact function code.
 * so lets create a call stack for maintanence the order of execution of executin context.
 * so as a we create above a global exection context this is push down into the stack
 * now when we run this line that var x=1; then x value is replaced by 1 from undefined , our function is invoked a function is invoked ,
 * so now we know already that whenever a function is invoked a execution conntext is createed and that execution context is created into code component and in this new execution context again two part have
 * one is memory component and one is code component so in memory component we create a memory for all the variable whichare present in function a ()
 * so x = undefined so when lineno 6 is executed x valuenis replaced by 10 at the place of undefined so this change occur in local memory space
 * now when you complete the whole execution of the function a() then that execution context which is created for function a() is removed, this whole function a() is also removed from call stack
 * now the control goes back to global execution context
 * now control move to the line no. 3 so now like function a() b() function is executed and make execution context of b like we made before execution context of a and when we execute whole b()
 * function then its execution context is already gone from stack and again control come on global execution context and output is till now is 10, 100
 * now when we execute line no4 then only global execution context present inside a stack so inside the gec which value is present of x same that value printed.
 * now when whole code executed then all thing gone from stack even that global execution context.
 * 
 * 
 */