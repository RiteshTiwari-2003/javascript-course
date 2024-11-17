/**do you know sortest javascript program , here it is the empty file,even though this file is empty there is nothing to do still js engine do lot of thing behind the since
 * so lets open the source in the browser and set the debugger on empty file then a call stack created in which globaln execution context occur.
 * so when we run the empty progrma then a global execution context is created, so javascript engine create something known as wimdow
 * in window lot of method function come this is created by javasript engine and in global execution context, and just like window javascript engine create one more thing which is this
 * when you open console and write window then something output come as like a object, if you write this then you also get something like object
 * and at the global level this this points to the window object, but
 * what is window window is global object which is created along with global execution context
 * 
 * so whenever any javascript program is run a global object is created a global execution context is created and along with global execution cotext a this variable is created
 * global object in this case in browser known as window,
 * javascript run on browser and javascript also run on server but at all these places for running the javascript prograam there javascript engine present
 * so javascript engine responsibility to create the global object, in case of browserr it is known as window in case of node it is known as something else
 * and at the global level at the base level in the global execution context this is equal to window
 * 
 * so whenevr you create the execution context a this is created along with it even for the functional edecution context and even for the global execution context
 * and at the global level this point to global object thst is window in case of browser,
 * global space - global space nothing but anything you created in javascript but not inside function is global space
 */
var a=10;
function b(){
    var x=10;
}
/**here variable a and function b is in global space but x not. so whenever you access window on browser in window various variable and function 
 * exist but there x is not present there a is present and b is present so this is global space.so whatever thing you write in global space this guys attach to the window
 * and how can i access those variable by this
 */
console.log(window.a);
console.log(a);//so these both console box give same output which is 10
console.log(x); // this give error of uncaught refernce error: x is not defined
/**and at this level at the global level this point to global object so if you access the variable like this 
 * 
 * cosnole.log(this.a); then also output come like window.a which is 10
 * 
undefined vs notdefined

javascript execute in a different way it create the global execution context and allocate the memory to all of the function and variable even before a single line
of code is executed 
suppose we write 
var a=7;
so even before this line of code is executed javacript try to alloxcate memory to this a , let meshow you with the help of debugger
so put the debugger on line 39 right before this line is executed so if we refresh this page then this line has not been executed here 
but javascript has already alllocate the memory to this a, so right now this a value is undefined so at this point when you try to log out a 
i have held the program i put the debugger so i hold the program at thatstate itself so if i right now log a it is undefined 

so undefined  like taking memory it is very different form not defined 

like if i write console.log(x); and if we run this code so we have not allocate the memory to x right so if you try to find x then you would not to find anything so 
this is not defined 
 */