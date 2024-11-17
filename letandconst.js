/**what is the temporal dead zone in js?
 * are let and const declaration hoisted?
 * whhat is the difference between syntex error reference error and type error 
 */
console.log(a);// output come is undefined 
console.log(b);// in this output come a error uncaught reference error: b is not defined)

let a=10;
var b=20;
/**but when we put console.log(a) after the line 8 then output come like 10
 * but how to know whether this variable are hoisted or not
 * let's see in the browser what is happen inside the seen , whether this variable allocate a memory or not?
 * so when we put a debbuger on first line then even executing one line of the code see something interesting happen
 * even a single line of code is not executing but javascript allocate memory space to the variable like 
 * a=undefined and b=undefined but b in global scope but a in script so in var variable variiable allocate memory in 
 * global space but in let and const also variable allocate memory before any line executing but in different memory space than global space.
 * so let and const not allocate memory in global space they are allocate memory in seperate memory space named as script
 * so you can not access any thing before you put ant thing inside those variable,
 * 
 * 
 * so what is the temporal dead zone time?
 * temporal dead zone is time since when this let vatiable was hoisted and till it is initialize some value the time between them is known as temporal dead zone
 * whenever you want to access a variable inside the temporal dead zone it give the error uncaught refernce error: a is not defined
 * lets talk about window object which is global object var b is attached with window object like this
 * window.b,
 * but you can not access a like this because let and const type variable have stored in seperate storage seperate space.
 * so when you try to access a from window it give output undefined
 * and at global level this is equal to the window so you can also access the b by this.b
 * but not a
 * and in the let you not do one more thing which is redeclaration 
 * let a=20;
 * let a =10;
 * it giove syntex error, uncaught syntex error : identifier a is already declared 
 * so when you add one more line console.log("my name is ritesh tiwar"), then also show same error because this is the syntex error
 * and when syntex error come after this even one line code would not be execute.
 * same case in also var when use after let:
 * let a =20;
 * var a=30;
 * error show: uncaught syntex error: identifier a already declared 
 * 
 * 
 * but in var likr
 * var b=10;
 * var b=100; 
 * this code work because in var variable you can redeclare any variable 
 * 
 * const:
 * now talk about const 
 * const like let stored in seperate memory space form global llike script
 * as b= undefined 
 * but in let you can initialize later any time after the declaration
 * like
 * let a;
 * a=10;
 * but you can not do the same thing in the const in const this is must that do declaration and initialization together in same line;
 * if you do,
 * const a;
 * a=10; this give syntex error uncaught syntex erro: missing initializer in const declaration
 * and  one mmore error can come when you use const variable which is type error;
 * like const c=1000;
 * c=2000; this give a type error,assignment to const variable, uncaught typeerro: assignment to constant variable
 */