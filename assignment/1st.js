//console.log("........ to reverse string........")
 let namee="chinmay"
let revsentenceamee=""
for(let i=namee.length-1;i>=0;i--){
    revsentenceamee=revsentenceamee+namee[i]
    }
console.log(revsentenceamee)   //yamnihc


console.log("....reverse words from sentencetence....")

let sen="my new learning is javascript"
let word=sen.split(" ")
let word1=word.reverse().join(" ")
console.log(word1)
let newWord=" "
for(let i=word1.length-1;i>=0;i--){
newWord=newWord+word1[i]
}
console.log(newWord)

//
 let newSen=sen.split (" ")
 let sentence=newSen.reverse().join(" ")
let revsentence=" "
for(let i=sentence.length-1;i>=0;i--){
revsentence=revsentence+sentence[i]
}
console.log(revsentence)





console.log(" ..... highest and lowest....")
let numbers=[34,55,-500,66,77,88,234,5,0,66,88]
 
 let min=0
 let max=0
for(let i=numbers.length-1;i>=0;i--){
    if(numbers[i]<min){
        min=numbers[i]
        }
        else
  {
   if(numbers[i]>max){
   max=numbers[i]
  }
}
}
console.log(min)
console.log(max)



console.log("..... highest on all.......")
let arra=[[1,2,3],[33,44,55],[55,77,343]]
let newArra=arra.flat()
let highest=0
for(i=0;i<newArra.length;i++){
    highest=newArra[i]
}
 console.log(highest)


 console.log(" no. of vowels from the string ")
let saying="i am new to javascript"
 let count=0
 for(i=0;i<saying.length;i++){
        if(saying[i]=="a"|| saying[i]=="e"|| saying[i]=="i"|| saying[i]=="o"|| saying[i]=="u"){
            count=count+1
        }
    }
    console.log(count) //7
//or 
let saying1="i am new to javascript"
let vowels=["a","e","i","o","u"]
let counts=0
for(let i=0;i<saying1.length;i++){
if(vowels.includes(saying1[i])){
     counts=counts+1
}
}
console.log(count)



