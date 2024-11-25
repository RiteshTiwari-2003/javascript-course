function x(){
    var a=7;
    function y(){
        console.log(a);//output is seven(7)

    }
    y();
}
x();
/**lets put the debugger inside the inner function in the browser then in scope we see along with global scope one more thing present you find closure over there like
 * closure(x)
 * a:7
 * so closure basically means a functions bind together with their lexical envoirment, 
 * function along with their lexical scope is called closure,
 * like inside y it form the closure with the variable which is the part of x lexical scope, the functyion y bind to the variable which present inside the function x this make closure.
 * and it has access to its parent's lexical scope
 * 
 *what is the closure ?
 a closure is the combinstion of the function bundled together (enclosed) with refeerence to its surrounding state(the lexical envoirment).
 in other word, a closure gives you access to outer function's scope from an inner function.in javascript closure are created every time when function is created, at function creation time.
 in line 7 instead of wirting this you can also write this return y;and check outside that what is function returning outside like this
 let z=x();
 console.log(z); // it give us the function y like this f y(){console.log(a);}, now when x return the y then x is gone now x execution context is no longer in the call stack 
 it completely gone all the variable and everything is gone
 but what will happen to this y now,so y function is return from x it no longer connected with x so what about y lexical scope,
 so how it behave outside the scope or function, otside when call the functin z (z()),
 so what will happen when you write z() , it willl try to find out a so when you want to print 
 console.log(z()); then output come but why,
 so function are so beautiful when it return from the other function, they still are maintain to remember lexical envoirment(scope),
 so no longer y present inx but it remember its parent lexical scope,
 so it means when you return function y then not only function body is return but whole closure world is return means function return whole function body along with lexical scope,

 function bundled along with its lexical scope is called as closure

 when you write code like this
 function x(){
 var a=7;
 function y(){
 console.log(a);}
 a=100;
 return y;}
 var z=x();
 console.log(z);
 z();// it give output of 100
 so the function along with reference of variable of lexical of parents return 


 */
function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();

}
z();
/**so if you put debugger inside the function on 54 line and go in browser and see scope then there are many scope shown on the sscreen one is
 * local
 * this:window
 * one scope is closure
 * closure(x)
 * a=7
 * amd one more scope is 
 * closure(z)
 * b=900;
 * and one ore scope is global in which various method and veriable present
 * 
 * use of closure:
 * module design pattern 
 * currying 
 * function like oonce
 * memoize
 * maintaining state in async world
 * setTimeouts
 * iterators
 * and many more
 * 
 */