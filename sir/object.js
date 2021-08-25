/*let x=10  //no
let y=true // boolean
let name="Sulina"  //string
let person=["sulina","shrestha",7,23] //object ..can't say which one is name or which is age..
*/
console.log(".....object.....")
//define in {},not in index, gives property and value

let person={
    firstName:"sulina",
    lastName:"shrestha",
    age:7,
    rollNo:23
}
console.log("************ways to retrieve value from object***********")
console.log("...1st dot notation...")
//objectName.propertyName
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.rollNo)

console.log("...2nd bracket notation...")
//objectName['propertyName']
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['rollNo'])

console.log("...update the calue from object...")
//update name to laxmi
person.firstName="laxmi"
console.log(person)        //{ firstName: 'laxmi', lastName: 'shrestha', age: 7, rollNo: 23 }
//update lastname to lama
person.lastName="lama"
console.log(person)            //{ firstName: 'laxmi', lastName: 'lama', age: 7, rollNo: 23 }
//update age=25
person.age=25
console.log(person)        //{ firstName: 'laxmi', lastName: 'lama', age: 25, rollNo: 23 }

console.log("...add the property...")
person.language="Nepali"
console.log(person)        //language:'Nepali' added
person.language="english"
console.log(person)  //update language:'english'
delete person.language
console.log(person)  //no more language


person={
    firstName:"laxmi",
    lastName:"shrestha",
    age:32,
    rollNo:85
}
console.log(person.firstName)
console.log(person['firstName'])

console.log("..for loop...")
//dot operation doesn't work inside loop

for(let x in person){          //for (let x in object){
    console.log(x,person[x])     // console.log(x,object[x])
}                               //  }
console.log(".......")

let students = [
    {
    fullName:"sulina shrestha",
    age:8
},
{
    fullName:"ram deskmukh",
    age:23
},
{
    fullName:"laxmi shrestha",
    age:"not telling you !"
}]

console.log("...for loop....")
for(let i=0;i<students.length;i++){
console.log(students[i].fullName)
} 
console.log("...............")  
 //gives name of all three



for(let i=0;i<students.length;i++){
   let obj=students[i]
   for(let key in obj){
        console.log(key,obj[key])
        //console.log(`${key},${obj[key]}`)
    }
}
console.log("...............")  
  //console.log(students[2])//{ fullName: 'laxmi shrestha', age: 'not telling you !' }
  //console.log(students[2].fullName)//  laxmi shrestha
 // console.log(students[2].age)  //not telling you !

console.log("........employee example...")
//  let employees=[
//      {
//          name:"laxmi",
//          dept:"sales",
//          eNo:123

//      },
//      {
//         name:"william",
//         dept:"service",
//         eNo:345

//     }, 
//      {
//         name:"allison",
//         dept:"management",
//         eNo:121

//     }
//     ]
  
//     ///loop for obj..not in index..so we use var.
// for(let i=0;i<employees.length;i++){
//     let obj=employees(i) 
  

// for(let key in obj ){   //const key given as obj have key n values
//     console.log('${key},${obj[key]}')   
// }
// }
////  object can not be index so we gave var obj


console.log("********************")

let studentss = [
    {
    fullName:"sulina shrestha",
    age:8
},
{
    fullName:"ram deskmukh",
    age:23
},
{
    fullName:"laxmi shrestha",
    age:"not telling you !"
}]

console.log("...for loop....")
for(let i=0;i<studentss.length;i++){
console.log(studentss[i].fullName)
} 
console.log("...............")  
 //gives name of all three



for(let i=0;i<students.length;i++){
   let obj=students[i]    //student[i] one by one  ..loop  i x obj..key , value{}
   
   for(let key in obj){
        console.log(key,obj[key])
        //console.log(`${key},${obj[key]}`)
    }
}
console.log("...............")  
