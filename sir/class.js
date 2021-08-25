/*class Person {
    fullname=null
    ssn=null
    age=null
    language=null;
}

let lax=new Person
console.log(lax)  //Person { fullname: null, ssn: null, age: null, language: null }
console.log(lax.age) //null
lax.age=30
*/

/*
let lax= {
    fullname=null
    ssn=null
    age=30
    language=null;
}
*/

/*
let Aashish=new Person
Aashish.fullname="Aashish shrestha"
console.log(Aashish)//Person { fullname:'Aashish shrestha', ssn: null, age:null, language: null }
console.log(lax)//Person { fullname: null, ssn: null, age: 30, language: null }
//it doesn't change lax ...only Aashish is changed
*/
//2nd day class
//class ..user defined data type
//we can create object with a templete which is a class..

// class 1st  way
class Person{
    fullName=null
    ssn=null
    age=null
    language=null
    rollNo=null
}
//  {}is object..properties we have 5(fullname,ssn,age,language,rollNo)...null is value 

// setting the object properties outside....(objectName.objectProerty)
let zoe=new Person  //datatype is Person and we created zoe..all property is null
let suluv=new Person
//one module is created= new object= suluv, holds everything that is available in Person
console.log(zoe) //we get Person { all object is null)

//object.objectproperty
zoe.fullName="zoe nicholas"
//console.log(zoe) // person{only fullname:zoe nicholas and remaining obj are null }

suluv.age=4
console.log(suluv) //person{only age is changed to 4 , rest null}
////console.log(suluv.age)  //4 .. age is 4
console.log(suluv['age'])//4


//to update age suluv to 20
suluv.age=20
console.log(suluv['age'])  //20..age is now 20


//add new prperty
suluv.city="dallas"
console.log(suluv) //here city is added  beside age =20 ..rest null //6 property

//delete property
delete suluv.city
console.log(suluv)//no more city 
suluv.fullName="suluv shrestha"
suluv.ssn=1234567
suluv.age=35
suluv.language="english"
rollNo=353
console.log(suluv)//person { prints  value for each we gave}

// 2nd way class
//while creating object,setting property  with constructor

 class Student{
     constructor(fN,subj,rollNo,age, grade){
     this.fullName=fN
     this.subject=subj
     this.rollNo=rollNo
     this.age=age
     this.grade=grade
 }
}
 let sammy=new Student("sammy shrestha","business",65,32,11)//sammy has new values
 let peter=new Student("peter smith","art",825,28,10)
 let andy=new Student("andy koller","accounting",615,17,9)
 

 //average age in sammy,peter,andy
  let studen=[sammy,peter,andy]
 let avAge=studen.reduce(function(acc,el,ind,arr){
     return acc+el.age/studen.length
 },0)
 console.log(avAge)
 

 //how to get accounting 
 let accSub=studen.find(function(el){
return el.subject=="accounting"
})
console.log(accSub)

// sammy
let sammyName=studen.find(function(el,ind,arr){
return el.fullName=="sammy shrestha"
})
console.log(sammyName)  //will pull sammy shrestha ..all properties
console.log("........................")

//outside the class
//and using constructor,which property for an object at the time of 
//objection creation


//setting the property for an object using function

class employees{
    fullName=null
    age=null
    
    setFullName(fl){
        this.fullName=fl
    }

    setAge(ag){
        this.age=ag
    }

}

let amol=new employees
amol.setFullName("amol thapa")
console.log(amol)     //employees { fullName: 'amol thapa', age: null }
amol.setAge(23)
console.log(amol)       //employees { fullName: 'amol thapa', age: 23 }

console.log(sammy)
console.log(peter)
sammy.age=22
console.log(sammy)