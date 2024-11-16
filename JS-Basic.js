// what happen when you run the javascript program
/**everything inside in javascript happen inside the execution context, so what happen when you run the javascript program yes a execution context is created so letus see how the execution context is created with the help of javascript program
 * when you create this code the execution context is created , these component are memory component and code component, now this execution context is created in two phase the first phase is also known as creation phase,memory creation phase this is very critical phase 
 *   and after this phase come code execution phase, 
 * so letus first see the first phase of this code , in first phase of memory creation javascript allocate memory to all the variable and function 
 * so  as soon as javascript encounter this line 1,so it allocate memory to n, so it reserve the memory space for n,
 * so javascript goes to line 2 
 * and ir sees there is a function, which name is square, so it will allocate memory to square 
 * 
 * so now let me tell you what does it store, so when it allocate emory to n, it store a special value which is known as undefined, so like this also store memory for square2 and square 4 as undefined , in the case of function the function square whole code internal code litraly copied over here in the memory space,
 * 
 * and for remaining two variable square2 and square 4 it again store memory and stores the special keyword undefined to them.
 * 
 * lets see what happen in the phase 2
 *  the 2nd phase is code exection phase , so lets see how the code executed after memory allocation.
 * so now javascript once again runs through thiswhole javascript program line by line and it execute the code now so as soon as it encounter the first line of below code var n=2 it actually place the vlue 2 inside the n
 * so now remove undefined for a while and lets replace this by 2, after finishing line one it goes to lie 2 
 * and it come the line where function is define so there nothing for execute so line no 2 to 5 there is nothing to execute 
 * so line no. 6 here , so line no. 6 is most amazing  part here we invoke the function ,
 * what do you mean by function envoketion whenever you see the function name with round bracket or paranthesis so it means function has been now executed.
 * whenever a new function is envoked a new execution coontext is created.
 * 
 * remember inside this whole program run inside a global execution context, so when you invoked the function a brand new execution context is created , so here inside the code component a brand new execution context is created 
 * and in these execution context agaiin two component come memory component and code component, so first phase is memory creation phase in memory creation phase we talk about ony inside the function all content, we invoke the function so we only talk about 
 * peace of that function,
 * so in first phase this is not forget that memory is created of that varible and function which is inside the function,so when i say variable means it parameter and variable inside a function so we are allocating a memory of num and ans,in phase one we store inthese both variable undefined ,
 * 
 * so come to part 2 code execution phase so we will be executing each line here, so in this first of all pass thee value of num from global scope from argument which is n and n;s value is 2,
 * so letus put the value 2 , and come on next variable, so now num*num means 4 is replace the undefined of ans variable so after when square2 value bcome 4 the whole execution context which is created inside the code component is completely deleted , now there is no any execution context present as soon as return the ans
 * 
 * so like sqaure 2 when square4 function is invoked sa brand new execution context is created, again it have memory again it have code component,
 * so again in memory component you put two variable num and ans and both havve undefined as a value,
 * so our first phase is done so now in second phase .
 * 
 * 
 * 
 * so javascript handle everything to manage ths execution context creation , deletion , and the control, it manages stack, so this is known as call stack.
 * this is beautiful thing in javascript it has its own call stack, it is stack and every time in the bottom of the stack , we have our global execution context and whenever a function is invoked a new execution context is created and this execution context is import inside the stack,
 * lets we put e in stck as a execution context 1  once the inside the function all thing executed and return then this e1 is removed from the call stack,
 * and control goes back to global execution context(line no. 6), so after this we go on line number 7 where new function is invoked and new brand execution context is created , and this e2 pushed inside the stak,
 * and when it was executed then e2 was also removed from stack, and control goes back to again global execution context.
 * so this call stack only for executing this execution context,
 * so whenever this the function is invoked it push down into stack and whenever tis function is executed it removed from stack
 * so call stack maintains the order of execution of execution contexts.
 * call stack is also known as execution context stack 
 * .program stack 
 * .control stack
 * .runtime stack
 * .machine stack
 */
var n=2
function square(num){
    var ans=num*num;
    return ans;
}
var square2=square(n);
var square4=square(4);