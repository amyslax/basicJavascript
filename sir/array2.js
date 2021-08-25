/*
map.. 
let newarray=arrayName.map(function(el,index,arr){
   return statement
})     //creates new array with every el
filter..
let newarray=arrayName.filter(function(el,index,arr){
   return statement
})   
reduce..
let newarray=arrayName.reduce(function(acc,el,index,arr){
   return statement
},0 )   //looks like (function,0)
*/


console.log(".....print language one by one .....")
let languages=["hindi","marathi","telgu"]     //length=3
for (let i=0;i <languages.length;i++){
   // console.log(languages[i])     // one by one
    console.log(languages[i],languages[i].length)   //show one by one with length 
}

console.log(" ......find current age by loop.....")
let birthYear=[2000,2001,2004]
let ages=[]
for(let i =0;i<birthYear.length;i++){  
    let currentAge=2021-birthYear[i]   
    ages.push(currentAge)
}
console.log(ages)        // ages =[]and since we push in current age ..[ 21, 20, 17 ]


console.log("******current age*******")
console.log("-----with map----")
let jj=birthYear.map(function(el,index,arr){
return 2021-el
}) 
console.log(jj)  //[ 21, 20, 17 ]
console.log("-----with arrow n map----")

let jjj=birthYear.map((el,index,arr)=> 2021-el)
console.log(jjj)  //or
console.log(birthYear.map((el,index,arr)=> 2021-el))

console.log("******welcome lax ! n so on ******")
let names = ["lax","chinmay","peter"]
console.log("-----with map----")
let uuu=names.map(function(el,index,arr){
   // return ("welcome " + el)            //[ 'welcome lax', 'welcome chinmay', 'welcome peter' ]
return `welcome ${el}!`        //[ 'welcome lax!', 'welcome chinmay!', 'welcome peter!' ]
})
console.log(uuu)
console.log("-----with arrow n map----")
console.log(names.map((el)=>`Welcome ${el} !`)) //['Welcome lax !','Welcome chinmay !','Welcome peter !']
console.log(".....my name is laxmi and age is 20 ....")


let age=20
let firstName="laxmi"
console.log(`My firstname is ${firstName} and my age is ${age}`)
//My firstname is laxmi and my age is 20

//filter
console.log(".... ages greater than 15.....")
let agess=[20,15,30,55,14,6,25]  //[20,30,55,25]
console.log(agess.filter((el,index,arr)=>el>15))   //[ 20, 30, 55, 25 ]
console.log("...with loop also....")

let grtThan15=[]
for(let i=0;i<agess.length;i++){
    if(agess[i]>15){
     grtThan15.push(agess[i])
    }                                //in loop , we get /o one by one ,so we need[]..so we use push.method
}
console.log(grtThan15)

names=["lax","chinmay","peter"]
console.log("..chinmay, peter....") //length=5>
console.log(names.filter((el,index,arr)=>el.length>=5))
console.log(".....")
let lll=names.filter(function(el,ind,arr){
    return el.length >=5
})
console.log(lll)

let nums=[23,34,55,100,28,77]
let ooo=nums.filter(function(el,ind,arr){
   // return el%2      //[ 23, 55, 77 ]
   return el%2!==0    //[ 23, 55, 77 ]
})
console.log(ooo)
console.log("...arrow")
console.log(nums.filter((el,ind,arr)=>el%2 !==0))  //[ 23, 55, 77 ]

console.log("....sum of aged")
let aged=[11,15,18,20,35]
let sum=0
      
for(let i =0;i<aged.length;i++){
     sum=sum+aged[i] 
}
console.log(sum)   //99 total age
console.log(sum/aged.length)   //19.8

//reduce
console.log("......reduce ......") //we use for arithmetic
let nnn=aged.reduce(function(acc,el,ind,arr){
    return acc+el
},0)
console.log(nnn)                                                //99
console.log(nnn/aged.length)                                    //19.8
console.log(aged.reduce((acc,el,ind,arr)=>acc+el,0))            //99
console.log(aged.reduce((acc,el,ind,arr)=>acc+el,0)/aged.length)//19.8


names=["lax","chinmay","peter"] //lenth of el
let vvv=names.reduce(function(acc,el,ind,arr){
    return acc+el.length
},0)
console.log(vvv) //gives me length of el
console.log(vvv/names.length)//5 avg.

let ppp= names.reduce((acc,el,ind,arr)=>acc+el.length,0)
console.log(ppp)  //15
console.log(ppp/names.length)//5


let n=[10,20,30] //reduce for arith 
let ab=n.reduce(function(acc,el,ind,arr){
    return acc+el
},0)
console.log(ab)
let ab1=n.reduce((acc,el,ind,arr)=>acc+el,0)
console.log(ab1)  //60

console.log(ab1/n.length)//20 avg


let transaction=[1000,-100,500,-300,-400,800,4000,-3000]
console.log("......print only deposit ")//filter
let deposit=transaction.filter(function(el){
    return el>0
})
console.log(deposit)
console.log("......print only deposit total ")
let depoTotal=transaction.filter(function(el){
    return el>0
}).reduce(function(acc,el,ind,arr){
   return acc+el
},0)
console.log(depoTotal)

console.log("......print only withdraw ")
let withdraw=transaction.filter(function(el){
    return el<0
})
console.log(withdraw)
console.log("......print only withdraw total ")
let withTotal=transaction.filter(function(el){
    return el<0
}).reduce(function(acc,el){
    return acc+el
},0)
console.log(withTotal)

//go to array3












