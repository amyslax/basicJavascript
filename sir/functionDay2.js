//funtion.....3 ways...declaration, expression n arrow

//function declaration
function add(x,y){
    return[x+y,x-y,x*y,x/y,x%y]
}
let h=add(12,33)
console.log(h)                   // [ 45, -21, 396, 0.36363636363636365, 12 ]
console.log(h[0])                 // 45 gives me index 0=x+y=45
console.log(h[1])                  //-21
console.log(h[2])                  //396

console.log("*************************************")

//function Expression  ....on declaration , change its name to vari .

let addition=function (x,y){
    return x+y
} 
let rr=addition(33,22)
console.log(rr)                 //33+22=55
 
console.log("...............................")
     
/*let sub= function(x,y){
    console.log(x-y)
}
console.log(sub)                 //sub 
sub(30,15)                        //15  .callin th function with 2 values.
*/

console.log("******************************")


//arrow.. in expression,take out funtion n add arrow before statement ,no{}..if more st ,add{}
 let substration=(x,y)=>console.log(x-y)
substration(12,6)                           //6 

substration=(x,y)=>console.log(x+y)
substration(12,6)                                   //18 as we ask to print x+y

console.log("........................................")

//practice  function declaration
function addA(x,y){
    return x+y
}   
  let bb=addA(10,5)
  console.log(bb)                   //15 ..bb=addAfunction which has x n y value..n return
  console.log(addA)               //[Function: addA] ..here calling function name 
  console.log("*************************")

  //practice we have arrow first and expression 2nd

   let addAa=(x,y)=>{
       console.log(x+y)
       return x+y
   }
addAa(12,14)     //26


let addBb=function(x,y){
    return x*y
}
//let fn=function(x,y){
  //  return x*y
//}
function addCc(fn){
    let f=fn(12,13)
    return f
}
let rrr=addCc(addBb)  //in AddCc,we are calling function addBb..rtn x*y
console.log(rrr)         //156 


//declaration
function sub(x,y){
    return x-y
}
let c=sub (12,5)  //giving values 
console.log(c)  //7   
console.log(sub)  // sub 


//arrow   12,5=>12+5=17
let sub1=(x,y)=>  x+y
console.log(sub1)  //we are calling fun not giving value
let c1=sub1(12,5)
 console.log(c1)   // here we want to print 2 values given for sub
                   //17 ..in statement we have asked for return type to add

let sub2=(x,y)=>  x*y
 let d=sub2(12,5)
console.log(d)   //60
console.log("........................")

let newA=function(x,y){
    return x+y
}
function newB(fn){
    let Cccc=fn(12,13)
    return Cccc
}

let ff=newB(newA) //
console.log(ff) //ret Cccc. value (12,13).fn x+y  = 25


console.log("........................")

let greeting=function(){
    console.log("Hello World")

}
greeting()  //Hello World ..

function greetingB(fn){
    fn()
}
greetingB(greeting)  //Hello World  .fn greeting .we already got greeting = Hello World 






