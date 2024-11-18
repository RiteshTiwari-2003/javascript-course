function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000)
}
x();/*in this after 1 second 1 is printed on console 

function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("namaste javascript");// inthis first namaste javascript printed then after 3 second 1 is printed in next line
    in the settimeout which function present that function create closure and remember the reference of i,
    so whereevr the function goes it takes the refernce of the i along with it so whatever this settimeout do it takes rhe callback function which present inside it and store anywhere and attached the timer to it
    and javascript proceed

    function x(){
    for(var i=1;i<=5;i++){
    setTimeout(function (){
    console.log(i);},i*1000);}
    console.log("namaste javascript");}

x();

above code gives output like this 
namaste javascript 
6
6
6
6
6
how we can fix this , we fix this by using the let data type
function x(){
    for(let i=1;i<=5;i++){
    setTimeout(function (){
    console.log(i);},i*1000);}
    console.log("namaste javascript");}

x();
we all k ow that let keyword is the block scoped so each time hwen loop is running it makes a seperate reference for each time loop 
butn if you want to perform this and with the var keyword then you can use function() because when you use function in iteration it make diffrent copy of i on each iteration not refering same address 
like this

function x(){
    for(var i=1;i<=5;i++){
    function close(i ){
    setTimeout(function (){
    console.log(i);},i*1000);}
    close(i);}
    console.log("namaste javascript");}

x();

so the a function along with refernce to the outer envoirment (function) formed the closure , in other word,
closure is the combination of the functions and its lexical scope bundled together forms a closure 




*/
function outer(){
    var a=10;
    function inner(){
        console.log(a);
// so the function inner() along wwith its lexical outer invoirment is known as the closure 
    }
    return inner;
}
var close=outer()();
//var close=outer();
//close();
/**closure also help in data hiding and encapssulation so how it is work 
 * exapmle of data hidding using closure
 * 
 */
var counter=0;
function incrementCounter(){
    counter++;
}
/**so put above above function inside a function 
 * 
 * function counter(){
 * var count=0;
 * function incrementCounter(){
 * count++;}}
 * console.log(count); // so here error come , a uncaught reference error, count is not defined 
 * 
 * but we can access using closure like return the inner function
 * 
 * function counter(){
 * var count=0;
 * return function incrementCounter(){
 * count++;}}
 * var counter1=counter();
 * counter1();// output is 1
 * counter1(); output is 2
 * var counter2=counter();// it create new refernce of count variable and agsin all thing start with count=0;
 * counter2();output is 1
 */
function Counter(){
    var count=0;
    this.incrementCounter=function (){
        count++;
        console.log(count);
    }
    this.decrementCounter=function (){
        count--;
        console.log(count);
    }
}
var counter1=new Counter();
counter1.incrementCounter();// output is 1
/**what is the garbage collector in javascript and what it do
 * garbage collector is like a program in the browser or in the javascript engine which kind of freeze up the and utilize the memory
 * means the garbage collector in the javascript is the buildin mechanism that automatically manages the memory by reclaiming unused memory
 * and freezing up the resources that are no longer in use. this help prevent memory leaks and ensure thst your application running efficiently without 
 * requiring developers to manually allocate and deallocate memory.
 */