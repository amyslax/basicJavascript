let students=[                     //[ {el} ,{el} , {el}  ]
    {                             //    0   1    2
        firstName:"chinmay",
        age:23,
        skills:["python","c","python"]
    },
    {
        
        firstName:"poorva",
        age:29,
        skills:["python","c","python"]
    },
    {
        
        firstName:"amit",
        age:24,
        skills:["python","c","python"]
    }
]

for(i=0;i<students.length;i++){
    let studen=students[i]
    console.log(studen.firstName, studen.skills)
}
/*
chinmay [ 'python', 'c', 'python' ]
poorva [ 'python', 'c', 'python' ]
amit [ 'python', 'c', 'python' ]
*/

console.log("--------------otherway----------------")
console.log("......print first name and every skills...")
console.log(students[0].firstName,students[0].skills)   //chinmay  [ 'python', 'c', 'python' ]
console.log(students[1].firstName,students[1].skills)   //poorva 3 [ 'python', 'c', 'python' ]
console.log(students[2].firstName,students[2].skills)    //amit 3 [ 'python', 'c', 'python' ]

console.log("......print first name and no of skills...")
console.log(students[0].firstName,students[0].skills.length)   //chinmay 3
console.log(students[1].firstName,students[1].skills.length)   //poorva 3
console.log(students[2].firstName,students[2].skills.length)    //amit 3

//find
console.log("***********find*************")
console.log(".....print each firstName , age and skill ....")
let one=students.find(function(el,ind,arr){
    return el.firstName=="chinmay"
})
console.log(one)  

let two=students.find(function(el,ind,arr){ 
    return el.firstName=="poorva"                  
})
console.log(two)

let three=students.find(function(el,ind,arr){
    return el.firstName=="amit"
})
console.log(three)
console.log(students.find((el,ind,arr)=>el.firstName=="amit"))


//findIndex
console.log("***********findIndex**************")
let one1=students.findIndex(function(el,ind,arr){
    return el.firstName=="chinmay"
})
console.log(one1)//0

let two1=students.findIndex(function(el,ind,arr){
    return el.firstName=="poorva"
})
console.log(two1)//2

//findIndex
let three1=students.findIndex(function(el,ind,arr){
    return el.firstName=="amit"
})
console.log(three1)//2
console.log("..arrow...")
console.log(students.findIndex((el)=>el.firstName=="amit"))//2

//some
console.log("***********some**************")
let ages=[35,44,12,38,15,50,50]
let agesOne=ages.some(function(el,ind,arr){
    //return el>35//true
    return el==36// false
})
console.log(agesOne)  //true some no is >35
console.log("...arrow...")
console.log(ages.some((el)=>el==44))//true
console.log(ages.some((el)=>el>50))//false


//every
console.log("***********every**************")
let ages2=ages.every(function(el,ind,arr){
    return el>10  //true every el >10
})
console.log(ages2)
console.log(ages.every((el)=>el>44))  //false every el not >44

//forEach
console.log("***********forEach**************")
let cities=["kathmandu","dallas","san francisco","los vegas"]//welcome city!
cities.forEach(function(el,ind,arr){
    console.log (`Welcome ${el}!`)//Welcome dallas! n so on...
})
console.log("...map...")
let map1=cities.map(function(el,ind,arr){
 return`Welcome ${el}!`            //[Welcome dallas! n so on   ]
})
console.log(map1)
console.log(" ...arrow with map...")

console.log (cities.map((el,ind,arr)=>`welcome ${el}!`))

//    sort
console.log("***********sort**************")
let namee=["akash","zoe","william"]
 namee.sort()
 console.log(namee)//or
console.log(namee.sort())


let num=[[20,30,45],[15,25,89],[77,64,1]] //itd [  [],[],[]   ]
console.log(num[0]) //[ 20, 30, 45 ]//print 45 only
console.log(num[0][1])//30
console.log("..........")
console.log("******highest no from num********")
console.log(num[0][2])//45
console.log(num[1][2])//89
console.log(num[2][0])//99

console.log("***********loop **************")

//flat
 num = [[10,20,30],[11,224,33],[23,410404,55]] 
 let newNum= num.flat()
console.log(newNum)  //[10,20,30,11,224,33,23,4104,55]
let highest=0
for( let i=0;i<newNum.length;i++){  //0
  if(newNum[i]>highest)
  {
        highest=newNum[i]  
    }                     
}
console.log(highest)
console.log("............................")


//let numsort = newNum.sort((a, b) => a - b)
//console.log(numsort[newNum.length - 1])



// //console.log(num.flat().



//fill
// console.log("***********fill**************")
let numro=[1,2,8,4,6,2,7,0,15,53,71] 
console.log(numro.fill("a",6,numro.length)) //(value,start, end..)



let arra=["abinash","lax",5,20,-1,1000,[-1,6]]
let arraNew=arra.flat() //[ 'abinash', 'lax', 5, 20, -1, 1000, -1, 6 ]
console.log(arraNew)
let result=arraNew.sort((a,b)=>a-b)
console.log(result)   

console.log("................")
let high=0
for (let i=0;i<arraNew.length;i++){
    if(arraNew[i]>high){
        high=arraNew[i]
    }
}
console.log(high)
console.log("................")

//slice

let abc=["aelina","zoe","amelia","claudia","marifi"] 
console.log(abc.slice(-2))   //[ 'claudia', 'marifi' ]
console.log(abc.slice(1,5))   //[ 'zoe', 'amelia', 'claudia', 'marifi' ]
console.log(abc.slice(1,5))

//concat
let aa=[1,5,8,10]
let bb=["lax","smith","sri"]
console.log(aa.concat(bb))  //[ 1, 5, 8, 10, 'lax', 'smith', 'sri' ]
console.log(bb.concat(aa))  //[ 'lax', 'smith', 'sri', 1, 5, 8, 10 ]

//includes
let fruity=["orange","apple","grapes","cherry","strawberry"]
console.log(fruity.includes("mango"))  //false
console.log(fruity.includes("apple"))  //true

//splice (startpt ,no.of del,replace with and number)
console.log(fruity.splice(1,2,"Aaa","Bbb"))// [ 'apple', 'grapes' ]
console.log(fruity)  //[ 'orange', 'Aaa', 'Bbb', 'cherry', 'strawberry' ]

//join =joins every elem or array ..returns ..string
let namesss=["I","need","1","coffee","!" ]
console.log(namesss.join())//I,need,1,coffee,!
console.log(namesss.join(" "))//I need 1 coffee !//we did with space..(any thing we put here)to join

//go to class.js










// let ee = ['pen','bus','moterbike','auto']
// let mmq = ee.reverse()
// console.log(mmq)
// console.log(ee)


// let n = [1,2,3,4,-11]
// n.sort()
// console.log(n)
// n = [""Abhisha","anay","banana","Ba"]




