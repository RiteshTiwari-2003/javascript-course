/**trust issue with setTimeout function
 * 
 * 
 */
function a(){
    console.log("callback function");
}
setTimeout(a,5000);// so it is not always true that in settimeout parameter whateer time mentioned tht settimeout follow that time always no
/**means if in aboe code 5 second time is gien then this is not necessary that it execute accuretly in 5 second it execute in 6 second also it can execute in 7 second also 
 * so this is big trust issue with settimeout but why, it all depend upon the callstack
 * 
 * 
 */
console.log("a");
function cb(){
    console.log("callback");
}
setTimeout(cb,0);
console.log("b");
/**output of above code is a,b, callback */