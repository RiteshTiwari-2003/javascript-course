/**
 * java script run time envoirment 
 * javascript is like vinod its everywhere hahaaaaaa....
 * i'm just kidding but you know javascript run inside the bowser it run inside the server it can run inside your smart watch 
 * it can run inside a light bulb , it can een run inside the robot , and you know how it possible it all ppossibkle because of the javascript run time envoirment
 * javascript runtime envoirment is likea big container which has all the things which require for run the javascript code
 * so for running any type of javascript code you need a engine which is javascript engine
 * so inside the javascript runtime envoirment has js engine, in javascript runtime envoirment also set of appi to connect js engine with outer envoirment 
 * we can also have a evnt loop in javascript runtime envoirment , we can also have a callback queue we can also have a micro task queue
 * so but these all thing like a container in which all the thing which is required for run the javascript code.
 * and javascript runtime envoirment is not possible without the javascript engine , javascript engine is the basically heart of the javascript runtimme envoirment
 * so we here taling about browser yes, so browser execute your javascript code just because it has  javascript runtime envoirment
 * you heard about also node js , so node js also has jaascript run time envoirment , in google if you search about nodejs then google also teel that it is open source javascript runtime,
 * means in nodejs has everything which require to run the jaascript code .
 * and nodejs can run this javascript peace of code outside the browser on the server.
 * 
 * suppose you want to run the javascript code on the cooler what you need ?
 * you only need javascript runtime envoirment ,web api or set of api gives access to the super power can use the inside the js engine jaascript code 
 * it is different in case of browser it is different in case of node
 * 
 * for example the javascript runtime envoirment in side the bowser has a api local storage, that give the super power to access local storage
 * from our code.and in the node js it is different but in case of some api which present inside the browser as well as in the node 
 * for example the setTimeout.
 * the setTimeout api present inside the javascript runtime envoirment as well as node, also console present inside the javascript runtime envoirment as well node ,
 * 
 * 
 * javascript engine is the like a heart for javascript runtime envoirment 
 * list of javascript engine:
 * microsoft edge has javascript engine which name is chakra.
 * and browser firefox has a javscript engine name as spiderMonkey.
 * and google chrome has engine which is very famous is v8 engine.and this is same javscript engine which is same use in as well as node , deno and v8.net.
 * and you create your own javascript engine as well.
 * so most popup 
 * the first javascript engine is spidermonkey, which is created by the brenden eich in 1995 at netscape communincation coorporation.
 * brenden eich is also invented javascript alo.
 * 
 * 
 * 
 * now talk about javascript engine architecture so
 * javascript engine takes code as a input and these code  now goes to three step 
 * the first step is parsing 
 * the second step is compilation
 * the third step is execution 
 * these are three majpor thing happen with your code inside the js engine
 * during the parsing phase the code is broken down into peace of token 
 * like there is the peace of code like let a=7;
 * then let is a token , a is another token , 7 is another token .
 * and there is also something known as syntex parser its work is take the code and convert it into ast (abstract syntex tree),
 * 
 * now ast which is generated inside the first phase is pass tto the next phase which is compilation phase 
 * javascript somthing known as just in time compilation
 * but befiore understanf this just in time compilation you should understand about difference between compiler and interpriter , 
 * and this is also one question rise from these part that javascripot is compilation language or interpreted language
 * 
 * 
 * interpreter:
 * interpreter takes your code and start running these code line by line,
 * 
 * compiler:
 * in compiler languafge your whole code even compiling before execution , 
 * 
 * javascript can perform like interpreted language as well as sometime can perform like a compiled language,
 * it all depend upon the javascript engine,
 * so noww a days it complitely depend upon js engine that javascript code is purly interpreted or just in time compiled ,
 * just in time compilsation use interpreter as well as compiler, 
 * 
 * so from first phase parsing phase ast come and goes to interpreter , now this interpreter convert the high level code into byte code and send it to the execution phase ,
 * interpreter takes the help of compiler to optimized the code.
 * the compiler talk with interpreter and along with code runnning line by line compiler also optimized the code as much it can.
 * compiler optimized the code as much it optimize at the run time, because of this it call just in time compilation
 * 
 * some javascript engine follow algorihm ahead of time compilation in that case compiler take the peace of code that executing later and try to optimize it as much as it can 
 * they also produce the byte code that goes to the execution phase later
 * and execution here is not possible without two major thing in javascript 
 * those two component are the memory heap and call stack
 * 
 * you know about call stack already now here is meemory heap here store all the memory
 * so memory heap is the component where whole variable and function assign memory
 * 
 * now we also have garbage collector in the picture 
 * 
 * 
 */