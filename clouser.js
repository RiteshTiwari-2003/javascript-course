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
 */