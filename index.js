/*var x=7;
console.log(getName);
function getName(){
    console.log("Namaste javascript")
}
getName();
console.log(x);*/
//so let's run this code output is come as a expected namaste javascript and 7.
/**and when you put 5th and 6th line top  of the program now output is namaste javascript and undefined in other language when you access some variable before the declaration and initialization of that variable then error shown but in js not any error shown on console while executes successfully
 * but hwen we access a function using console.log before to there declaration and initialization 
 * then on console this output come all function like: f gatName(){console.log("namaste javascript");}
 * and when at the beggining we access gatName() then output come namaste javascript
  like in the above code in first line var x=7; when i come on this line just and not executing yet , i putting debugger even before the first line executed.
  now it stop on var x=7; and check on console and in scope , we are just startiing point of the first line before, we see in scope that global is memory and, we see something really really big when we deep down in this we see before executing of that line var x=7 there is a variable come of name x means memory declared before we come on that line and executing them,
  like in phase 1 of memory creation javascript just come from the program  
  
  it will allocate the memory to each variable and function and there are two , and it store the spacial keyword undefined for these variable 
  so even before this code is executed javascript has reserve this memory for x and place the spacial placeholder undefined to it , we can see that undefined present over there
  and when we talk about function when we come on function getName line means on line 3 in above code and when we see in scope in gatName function value is not undefined but we get the actual copy of the function even before we are trying to run this code or function
   */
  getName();
  console.log(x);
  console.log(getName);
  var x=7;
  function getName(){
    console.log("Namaste javascript");//in this output come like this first come namaste javascript undefined and f getName(){console.log("Namaste javascript");}

  }
  /**now understand the different between undefined and not defined means if you remove this lien var x=7; then if you come on line no. 22 then nothing show in scope related to variable x and error is shown which is uncaught refernce error: x is not defined
   * 
   * suppose getName as the arrow function 
   * var getName=()=>{
   * console.log("manaste london")}
   * now when you run this in browser in conole then a error come that  uncaught type error getName is not a function, this arrow function is just behave like a variable so this is not perform like function it beahve like a variable so unlike variable
   * when you come on this line of function then before execution in scope getFunction got a value undefined
   * var x=7;
   * function getName(){
   * console.log("Namaste Javascript");}
   * getName();
   * console.log(x);
   * console.log(getName);
   * so in this code let me put the debbuger on the first line , so this is well known by us that whenever a javascript code is executed a global execution context is created 
   * so when we put the debugger on the first line then wherever a global execution context is created so see where the global execution context is created 
   * so i see in the browser in call stack a anonymous named something is come and the control is on the first line var x=7;
   * now we move in the code and put the debugge on the getName(); line what happen a brand new execution context is created ,a nd what happen that new execution cntext is pushed inside the stack
   *then in stack one exection context getName added just above global execution context (anonymous) and line control goes from line getName(); to console.log("namaste London")
   * once you finish the execution of getName then execution context of getName is removed from stack(call stack)
   * now when you go from getName(); line to just next line then execution context remove and again we back on global execution context
   * once you run and executing every thing in program then this call stack being empty.
   * 
   */