//string ....colln of characters...stores chara by index

//string..many method written in js for string .each data type has method n properties..,....
//property is lenght(no of elements)toUppercare
//every char is changed to Uppercase ...

let firstName="chinmay"
 firstName="lax"   // we are updating firstName.. we are not not defining ..so, we don't use let key
console.log(firstName)


// const lastName="shrestha"
// let lastName="thapa"
// console.log(lastName)//error coz we cannot assign on const var.

let city="pune"
console.log(city) // pune

//0  1  2  3 
//p  u  n  e
//-4 -3 -2 -1
console.log(city.length)// 4 no. of el
console.log(city.length-1) // 3 gives me the indexx as it starts with 0
console.log("******************")


function sub(x,y){
    return x+y// action is to add 
}
let r = sub(12,13)
console.log(r)
console.log(typeof r) // ret on no.

let city2="Nagpur"
console.log(city2.length) // 6..no of el
console.log(city2.toUpperCase()) // NAGPUR ..All Cap

console.log(city2.toLowerCase())// nagpur...all small letters


console.log(city2.toUpperCase().toLowerCase())// nagpur string +string  gives string

console.log(city2.toUpperCase().toLowerCase().length)// 6  (string+string gives string and string
//+no = no)..so we got no ret type
console.log(city2.toLowerCase().toLocaleLowerCase())//nagpur retun type is string
console.log(city2.toLowerCase().toLocaleLowerCase().length)//  (becoz return type for length
    //is no and toLowercase is method of "string" ret type)
    //why we can add length..on toLowercase ...coz length is prop of string only.


console.log("***********")

//function with no return..result is undefined

function add(x,y){
    console.log(x+y)

}
//add(23,24) // 47
let v=add(23,24)
console.log(v) // undefined..  because function is not asking to return the value...
//we have already asked to log on st.





let fullName="chinmay"

// 0  1  2  3  4  5  6
// c  h  i  n  m  a  y
// -7 -6 -5 -4 -3 -2 -1

console.log(fullName)// chinmay
console.log(fullName.length)//7 n if you need return type
let L= fullName.length
console.log(typeof L)// no.

console.log(fullName.toUpperCase())//all cap ..all lower when we add method .toLowercase
console.log(fullName.indexOf("i"))// 2
//type of return 




let citys="Maharashtra"// l=11 L - 1= last index=10
console.log(citys)

console.log(city.length-1)//10

console.log(city[0])//m
console.log([city.length-1])// last index for city

//i want to run all of them instead of one by one ... loop



//  let city="Maharashtra"
// for(let i=0;i<city.length;i++){           //init value given i=0
//     //console.log(i)                   //here, i= no.0, 0<11;true;print ; add +1...next i=2...n so on
//     console.log(city[i])          // here i get with city 
//}

for(let i=0;i<5;i++){
    console.log(i)                      //01234
    console.log(city[i])             //mahar
}


//rverese loop ..city.length=11  index=length-1=10
let cityy="Maharashtra"
let reverseString=""
for(let i=cityy.length-1;i>=0;i--){      // we can also write 10 instead of (city.length-1)
    //console.log(i)                    // 11,10,9,8,7,....0
//console.log(cityy[i])                    //a,r,t,h,s,....M
reverseString=reverseString+cityy[i]
}
 console.log(reverseString)
//we are asking for reverseString which is blank , blank+city[i]a=a print,then go to reversString 

//if i want to count "a"..index is "a"then count 
let fifthName="Maharashtra"
let count=0
for(let i=0;i<fifthName.length;i++){
    if(fifthName[i]=="a"){
        count=count+1
    }
}
console.log(count)  //4times 





num = [[10,20,30],[11,224,33],[23,41024,55]] 
let newNum=num.flat()
console.log(newNum)//[10, 20, 30,11, 224, 33, 23, 4104,55] //print highestss
let highestss=0
for (let i=0;i<newNum.length;i++){
    if(newNum[i]>highestss)
    {
        highestss=newNum[i]
    }
}
console.log(highestss)


let senA="My new learning is javascript " ///rev only word
let senB=senA.split(" ").reverse().join(" ")

let newWord=""

for(let i=senB.length-1;i>=0;i--){
newWord=newWord+senB[i]
}

console.log(newWord)
 //tpircsavaj si gninrael wen yM