//let put "Hello"
let h = ["chinmay","amol","amit"]
 for(let i=0;i<h.length;i++){
 //console.log(h[i].concat("Hello!"))
console.log(("hello ").concat(h[i]))
 }
let ab= h.map(function(el,arr,index){
  
    return `welcome ${el}`
 })
 console.log(ab)
//el..current element of array
//map method will return array
//store in one var n map it return array

let str="chinmay ,amol, amit" //we took 1 string 
let str2=[]//we took blank array to push the value in array
// str2.push(str)
// console.log(str2)
//  console.log(str2.push(str))

let x="sudarshana lax "  //1st string
let u="pratiksha "      //2ND STRING
str2.push(x,u)

console.log(str2)

 



let A=5
let B=100
console.log(A+B)
//var =let.change...const...won't change



//if it is string print hello namee or else ask to inpu namee

function person(name){
    if(typeof name==="string")
    console.log("Hello " + name)
else
console.log("please put name")

}
person("neela")  
person(15)

console.log("********************")

function sayHello(name){
    console.log("Hello "+name)
}
sayHello("lax")





