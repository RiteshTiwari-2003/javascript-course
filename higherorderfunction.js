/**higherorder function
 * 
 * a function thast takes another function as aargument and return a function is known as higherorder function.
 * a higher order function in javascript is a function that either:
 * 1.takes another function as a parameter:(callback functtion)
 * 2.return another function as its result
 * 
 * 
 */
function x(){
    console.log("namaste");
}
function y(x){
    x();
}
const radius=[3,1,2,4];
const area=function (radius){
    return Math.PI*radius*radius;
};
const circumference=function (radius){
    return 2*Math.PI*radius;
};
const diameter=function (radius){
    return 2*radius;
};
const calculate=function (radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;

};
console.log(radius.map(area));//line 34 and line 35 give same output
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
const calculateArea=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

const calculateCercumference=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
};
console.log(calculateCercumference(radius));

const calculateDaimeter=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
};
console.log(calculateDaimeter(radius));
/**but above inthese code main problem is we repeating code very much and in programmming all things want to follow dry priciple means dont repeadt yourself
 * 
 * lets try to calculate function like map function like radius.map() then we should use Array.prototype.calculate at the place of const calculate on line 26
 * then after this we write on line 35 is console.log(radius.calculate(area));
 * and then calculate function write like this
 * const calculate=function (logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;

};
 * 
 */