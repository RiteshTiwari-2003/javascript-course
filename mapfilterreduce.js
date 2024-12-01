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

/**reduce function so just like name suggest reduce does not reduce any thing  */
//sum and max
const arr3=[5,1,3,5,6];
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr3));
//so here we can use reduce function for iterating the all the element and give a single output
const output7=arr3.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output7);

function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax(arr3));

const output8=arr3.reduce(function (max,curr){
    if(curr>max){
        max=curr;
    }
    return max;

},0);
console.log(output8);

const user=[{
    firstName:"Akshay",
    lastName:"Kumar",
    age:56
},
{
    fistName:"Donald Trump",
    lastName:"President",
    age:76
},
{
    firstName:"Ritesh",
    lastName:"Tiwari",
    age:22
},
{
    firstName:"Deepika",
    lastName:"Padukonne",
    age:"56"
}];
const output9=user.map((x)=>x.firstName+" "+x.lastName);
console.log(output8);
const output10=user.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output10);
// so task is to print that person first name whose age are less than 30 like in this array this is [akshay, deepika]
const output11=user.filter((x)=>{x.age<30}).map((x)=>x.firstName);
console.log(output11);
//can you print or display same output as above code printed using reduce function then it's answer is yes we can
const output12=user.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;

},[]);
console.log(output12);

/**the map function is often used in combination with other js methods, such as filter, reduce, and forEach ,to manipulate and transform 
 * data into the array.
 */
const people=[{name:"alice",age:20},
    {name:"bob",age:30},
    {name:"charlie",age:40},
];
const names=people.filter(person=>person.age>=30).map(person=>person.name);
console.log(names);