let firstName= "Chinmay Deshpande"
console.log(firstName)

//string= stores value by index 0,1,2,,,,

let secondName="Amol"
console.log(secondName.length-1)
console.log("*****************")
console.log(secondName[0])
console.log(secondName[secondName.length-1])


let thirdName="Chinmay Deshpande"
for(let i=0;i<thirdName.length;i++){
    console.log(i)
    console.log(thirdName[i])
}
 

for(let i=secondName.length-1;i>=0;i--){
    console.log(secondName[i])
    console.log(i)
}


console.log("I am new to js")

console.log('I am new to js')

console.log('I am new to js please help me with "book"')
console.log("I am new to js please help me with book's")


let sixName="Amol"
let sevenName="rao"
console.log(sixName+" " +sevenName)

let firstName1="Chinmay"
let secondName1 = "deshpande"
console.log(firstName1+" " +secondName1)
console.log(`My firstname is ${firstName1} and my lastname is ${secondName1}`)


//string + string=string
//string+no = string
//no+string=string
//no + no = string

//object= properties and method
//method =action
//method =return something



function add(x,y){
console.log(x+y)
 return x+y
}

let g=add(12,13)
console.log(g)
console.log(g+10)

let eightName="amol"
let i= eightName.toLowerCase().toUpperCase().length
console.log(i)
console.log(typeof i)




let tenName="chinmahy"
let iNo=tenName.indexOf("h")
let iNo2=tenName.indexOf("h")
console.log(iNo)
console.log(iNo2)
let hb=tenName.indexOf("h",2)
console.log(hb)

let iNo3=tenName.lastIndexOf("c")
console.log(iNo3)

console.log("********************")
let sen="Let's go to the playground"

let s=sen.indexOf("o")
console.log(s)
console.log("-------------------------")

let r=sen.lastIndexOf("o")
console.log(r)
console.log("-----------------------------")

let sm=sen.toLowerCase()
console.log(sm)
console.log("*************************")

let count=0
for(let i=0;i<sen.length;i++){
    // console.log(i)
     console.log(sen[i])
   if (sen[i]=="o"){
       count=count+1
   }
}
console.log(count)
console.log("*************************")


//day 2 string method

let fruit="Grapes"
//0 1 2 3 4 5 
//G R A P E S 
// //let hs=fruit.indexOf('a')
// //let hs=fruit.indexOf('ra')
// // let hs=fruit.indexOf('t')
// fruit.indexOf("p")
// //console.log(hs)

//

let fruits="apple grapes banana mango" 
userInput="grapes"
//userInput="cherry"


let indexF=fruits.indexOf(userInput)
if (indexF>=0){
    console.log("Fruit is available")
}
else{
    console.log("Fruit not available")
}

console.log("________________________________")

//slice= where i want to slice it ...+ve and -ve value(-1)
// string.slice(start,end)
let fruitA="apple"

let fruitS=fruitA.slice(1)
console.log(fruitS)
console.log("***********************")


//change "a"to cap and slice
//console.log(fruitA[0].toUpperCase()+fruitA.slice(1))
let sl=fruitA[0].toUpperCase()+fruitA.slice(1)
console.log(sl)


// let fruits="apple grapes banana mango"
// let rss=fruits.split(" ")
// console.log(rss)

console.log("****************************")
//slice ..action=get substring ...return=gets me another string
//string.slice(start,end)...can be +ve or -ve value(-1)
//remember we don't count the end value on return...we start with the value given

 //0  1  2  3  4  5  6  7 
 //S  H  R  E  S  T  H  A
//-8 -7 -6 -5 -4 -3 -2 -1  

let textTwo="shrestha"
let textTwoB=textTwo.slice(4,7)
console.log(textTwoB)//sth
let textTwoC= textTwo.slice(0,4)
console.log(textTwoC)//shre
console.log(textTwo.slice(-6,-1))//resth
console.log(textTwo.slice(-6,-3))//res
console.log(textTwo.slice(-5,-5))//blank
console.log(textTwo.slice(5))//tha
console.log(textTwo.slice(5,-5))//blank

console.log("*************")


//substring =only +ve value  
//substr =for -ve value


//0   1  2   3  4 
//M   A  N   G  O  //-3=n XXXX,4=0
 // -5 -4 -3  -2  -1 

let textThree="Mango"
 console.log(textThree.substring(1,3))//an
 console.log(textThree.substring(3))//go
 console.log(textThree.substring(-3,4))//Mang//because -ve value won't work so its like (0 ,4)
 console.log(textThree.substring(0,4))

console.log("************************")
 //substr
 console.log(textThree.substr(3))//go//3 is start 
 console.log(textThree.substr(-3))//ngo
 console.log(textThree.substr(-4,-1))// blank 
 console.log(textThree.substr(4))  //o coz 4 is starting .
 console.log(textThree.substr(-4 ))


 //replace..to replace with new one

 let textFour="I am learning python"
 console.log(textFour.replace("python","javascript"))//I am learning javascript

 //concat()means connect two strings
 let textFive="laxmi"
 let textSix=" shrestha"

 console.log(textFive.concat(textSix))//laxmi shrestha

//trim ..trrms the front and back 
 let textSeven=" Laxmi Shrestha "
 //first find the total lenght 
 console.log(textSeven.length)//16
//trim the length
 console.log(textSeven.trim().length)//14



 //charAt
//  let textEight="NewBaby"
//  console.log(textEight.charAt(3))//B

//let put "Hello"
 //let h = ["chinmay","amol","amit"]
//  for(let i=0;i<h.length;i++){
//  //console.log(h[i].concat("Hello!"))
// console.log(("hello ").concat(h[i]))
//  }
console.log("****************")

let jx ="123 Abc 123 Abc www Abc"
//yx=jx.lastIndexOf('Abc')
console.log(jx.lastIndexOf('Abc'))    //20

//splitt

let aab="I need 1 coffee !"
console.log(aab.split())// [ 'I need 1 coffee !' ]
console.log(aab.split(" "))//[ 'I', 'need', '1', 'coffee', '!' ]