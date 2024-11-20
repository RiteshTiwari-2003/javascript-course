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
