document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button clicked");
});
/**closure along with event listener 
 * 
 * 
 * event loop in javascript 
 * in call stack does not have timer so whichever or whatever things come into the call stack it imediatly executed and after execution it removed from call stack
 * call stack present in javascript engine, and javascript engine presen in the big red box tha big red box is browser, in browser along with js engine there is also local storage present 
 * and also in browser timer is present , and there is also url present like http:// request ,
 * like a server is exidst from where browser send request and take soome data as response so browser show that data on ui which display in browser
 * it access also geolocation and blutooth if in call stack we need to this superpower then we need to connect these thing to the call stack 
 * and for need of these super power we need to web api
 * 
 * let see some of the webapis
 * setTimeout()
 * DOM API
 * fetch()
 * local storage
 * console
 * location
 * it is heart break for you when you know that setTimeout is not part of the javascript, dom api is also not thhe prt of the jaascript.
 * so above these are the super power  browser have it .
 * browser give access to all these super power in javascript engine to use this super power 
 * suppose tou want to use time then bowser will you gie setTimeout , suppose you hae to access dom tree , so browser give access this dom tree by dom api
 * 
 * so when you want to use these super power youc an access this with the help of winndow 
 * like when you want timer inside your appllication you can access by the help of window.setTimeout,
 * when you want to use dom tree you use window.domtree
 * 
 * 
 * 
*/
console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);
console.log("End");

//in fetxh api use of eent loop
console.log("Start");
setTimeout(function cbt(){
    console.log('CB Netflix');
},5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log("cb netflix ");
});
console.log("End");