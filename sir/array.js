let x=20
console.log(x)            //20
console.log(typeof x)      //no.
console.log("......................")


//..Array .. we use array to store more than one value by index
//we can use mix of string,no,true or false (boolean),[]array inside array

let numbers=[1,2,3,4,5]
console.log(numbers)
let names= ["lax","sulina","raj","ashish","ramesh"]
console.log(names)
let person=["chinmay","deshpande",98355,true,[234,34]]
console.log(person)

//obj =properties n  method  
//array store value by index

let city=["kathmandu","mumbai","nagpur" ]  // index 0,1,2
console.log(city[0])                        // kathmandu
console.log(city.length)                    //3
console.log(city[city.length-1])            // length3-1=2...for city nagpur

console.log(city[1]="jaipur")               //jaipur 
console.log(city)                            // kathmandu,jaipur, nagpur
console.log("................................")

console.log("----every element of array----")
//print every el inside array..we use loop 

          //   0      1         2       3
 let fruits= ['apple','mango','banana','cherry']  
console.log(fruits.length)      
for(let i=0;i<fruits.length;i++){
console.log(fruits[i]) 
}                    

 //one by one ...

console.log(".........................")

//reverse


for(let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i])
}
let firstName="sulina"
let namee=firstName.toUpperCase()
console.log(namee)   // SULINA
let newNamee=firstName[0].toUpperCase()+firstName.slice(1)
console.log(newNamee)


//methods

//make sure u use index which is 3..which we can get fruits.lenght-1

 /*            //action                                  //return (value n type)
push   ..add the element at last of array        ....   new lenght..no
pop    ..remove last el of an array               ..string
unshift ..add element at the beg..                 .....new length ..no
shift     ...remove first element of an array       .....
*/

//push
console.log("----push method applied---")
let veg=["spinach","carrot","tomatoes"]
let aa=veg.push("cabbage")

console.log(aa)        //4
console.log(veg)       // [ 'spinach', 'carrot', 'tomatoes', 'cabbage' ]


console.log("...pop method applied..")

//pop
let bb=veg.pop("cabbage")
console.log(bb)        //cabbage
console.log(veg)    //[ 'spinach', 'carrot', 'tomatoes' ]

console.log("....unshift method applied.....")

// //unshift ..add el at the beginning
 veg = ["spinach", "carrot", "tomatoes"]
let cc=veg.unshift("pepper")
console.log(cc)
console.log(veg)

console.log("************************")

//shift ..remove first el.
veg=[ 'pepper', 'spinach', 'carrot', 'tomatoes' ]
let dd= veg.shift('pepper')      
console.log(veg)          //[ 'spinach', 'carrot', 'tomatoes' ]
console.log(dd)     //pepper
console.log(typeof dd)        // string
console.log("...............................")



//reverse...act=   ret=
let country=["nepal","india","pakistan","bhutan"]
let ee=country.reverse()
console.log(ee)     //[ 'bhutan', 'pakistan', 'india', 'nepal' ]
console.log(country)  // [ 'bhutan', 'pakistan', 'india', 'nepal' ]
console.log(".................")


country=["nepal","india","pakistan","bhutan"]
let ff=country.reverse().pop()       //first rev...+pop  =string 
console.log(ff)            
console.log(".........................")

let gg=country.push("china").toLowercsase //no cannot change to string
//console.log(gg)


// function add(x,y){
//     return(x+y) //true   
// }  
// let addd= add (18,5)
// console.log(addd)

function subs(x,y){
    return x-y
}
let c=subs (12,5)  //giving values 
console.log(c)  //7   
console.log(subs)  

//  ... go to array2.js.......
