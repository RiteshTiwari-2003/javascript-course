{
/**a block is defined by this curly braces , block is also known as compound statement , block is used to combine multiple javascript statement into one group 
 * just like this
 * {
 * var a=10;
 * console.log(a);
 * }
 * group of multiple statement is neccessaty because we use multiple statement group where javascript want only one statement
 * {
 * var a=10;
 * let b=20;
 * const c=30;
 * }
 * when i see scope in the browser then we see that b and c allocate memory in block memory space and a allocate memory space in global space
 * means you can acces var variable also outside the block and let and const in the block only like  
 */

}
{
    var a =10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
/**now output of above code is like this:
 * 10,20,30,10
 * uncaught reference error:b is not defined because when we executing above block and debugger put on line 27 then block memory space going from scope in browser only global scope exist in which only 
 * var a shown.
 * so you can access only a outside the function,
 * now let's see what is shadowing in javascript 
 * like when you have same name variable outside the block like this 
 * var a=100;
 * {
 * var a =10;
 * let b=20;
 * const c=50;
 * console.log(a);
 * console.log(b);
 * console.log(c);}
 * so a which is inside the block shadowing the above a
 * means output of line 42 is 10 and when we access again var a outside the block
 * like this
 * var a=100;
 * {
 * var a =10;
 * let b=20;
 * const c=50;
 * console.log(a);
 * console.log(b);
 * console.log(c);}
 * console.log(a);so output is come likke this 10, 20 ,50, 10
 * because in browser in scope var keyword allocate memory in global space but other let and const in block space so in line 50 when you change the value of a
 * then it change globaly so on line 53 and line 56 both give output is 10.
 * now same thing checjk for let 
 * let b=100;
 * {
 * var a =10;
 * let b=20;// so this is called shadowing 
 * const c=50;
 * console.log(a);
 * console.log(b);so this variable b is shadowing above b here
 * console.log(c);}
 * console.log(b); but output of these proggram is come like this 10, 20 , 50 , 100
 * because here variable stored in three type of wscoope one is script one is block and one is global ,
 * in global scope var a memory is allocated and in block let b and const c memory space is allocated but in sript scope let b=100's b memory space is allocated 
 * 
 * and like let const also perform same thing
 * so shadowing is not the only function of block its behave in function also
 * 
 * ellligle shadowing
 * let a=10;
 * {
 * var a=10;} this give a error syntex error: this is known as uncaught syntex error: because identifier a has been already declared, so it is called as elligal shadowing 
 * but what if we vide versa can we shadow like this
 * var a=10;
 * {
 * let a=20;}this is possible this code not give any error but why in line 78 give error because var is global scope but in global scope alreay a let a variable declared so give error
 * so for solution you give line 78 var variable a boundry like a function 
 * like
 * let a=10;
 * function x(){
 * var a=10;}so there is no any error because var is global scoped or functional scoped because then var a is not interfairing let a now
 * block scope also follown the lexical scope
 * 
 * const a=20;{
 * const a=30;{
 * const a=40;
 * console.log(a);a take value from nearest a like a =40}
 * console.log(a);a take value from nearest a like a=30}when you put debugger on line 92 then you can see in scope there is two seperate seperate block scope  one for a=30, one for a=40 and one is script is script scope where const a 20 present and one scope is global scope
 * 
 * 
 * 
 * 
 * 
 * 
 */