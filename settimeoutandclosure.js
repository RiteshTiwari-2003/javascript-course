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
    function close(i){
    setTimeout(function (){
    console.log(i);},i*1000);}
    close(i);}
    console.log("namaste javascript");}

x();




*/