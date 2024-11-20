const arr=[5,1,3,2,6];
//Double [10,2,6,4,12]
function double(x){
    return x*2;
}
const output=arr.map(double);
console.log(output);
function triple(x){
    return x*3;
}
const output1=arr.map(triple);
console.log(output1);
function binary(x){
    return x.toString(2);
}
const output3=arr.map(binary);
console.log(output3);
/**yo can write binary function like this also
 * const output3=arr.map(function binary(x){
 * return x.toString(2);});
 * console.log(output3);
 * 
 * you can write also like with the use of arrow function
 * const output3=arr.map((x)=>{
 * return x.toString(2);});
 * console.log(output3);
 * 
 * you can even remove return syntex like
 * const output3=arr.map((x)=>x.toString(2));
 * 
 */
/**filter function basically use to do filter 
 * filter function filter out all the value that odd inside it;
 * 
 */
const arr1=[5,1,3,2,6];
function isOdd(x){
    return x%2;
}
const output4=arr1.filter(isOdd);
console.log(output4);
function isEven(x){
    return x%2===0;
}
const output5=arr1.filter(isEven);
console.log(output5);
function greaterThan4(x){
    return x>4;
}
const output6=arr1.filter(greaterThan4);
console.log(output6);