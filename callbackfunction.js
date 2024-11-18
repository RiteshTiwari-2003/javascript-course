/**what is the calllback function in the javascriipt?
 * javascript is the synchronous and single threaded language
 * blocking the main thread
 * power of callback?
 * deep about event listeners?
 * closure demo with event listener?
 * scope demo with event listener?
 * garbage collection and removeeventlistner
 * 
 * 
 * this functipon which you passed in another function is known as callback function , callback function is most powerful function inside the javascript it give access to the whole asynchronous world in synchronous threaded language.
 * and javascript is do only one execution at a time in a synchronous order.but due to callback we can do async thing inside the javascript.
 * 
 */
setTimeout(function (){
    console.log("timer");
},5000);//so which function you give as a parameter to the setTimeout is called as callback function
function x(y){
    console.log("x");
    y();

}
x(function y(){
    console.log("y");

});// this y function is callback function 
/**then now check hiow to use callback in asynchronous task
 * 
 * output of above code is : x, y and after 5 second print timer, inside setTimeout which callback function is present that store a memory in side and wait for time but due to callback ,
 * callback bring asynchronous property in javascript and javascript does not wait for output of setTimeout it move forword and ecxecute reest of the program after this when time spent equal to the given time in the setTimeout then that setTimeout's callback function content is executed.
 * so when you put the debugger on line 16 and line 24 then on console in call stack first global execution context come which shows as anonymous and just above x and above the x y present 
 * and now after some time when all function all thing executed thenn call stack being empty after sometime but after some time like after 5 second again in call stack two anonymous come , one is for setTimeout function and just above this one is for callback function
 * now if i run this code(means when i again play the paused debugger) or refresh the page then it was execute and then in console output is come line this 
 * x and y and in call stack that two anonymous exist but if i start my program again then callback become empty and in console output is
 * x, y, timer
 * 
 * so you can also called call stack as a main thread , so when you block the call stack then you block the main thread
 * 
 */