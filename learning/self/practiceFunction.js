//function  declaration

//function funtion name(){}..function name ()
function cal(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y) 
    console.log(x/y)
    console.log(x%y)  
}
cal(100,50)  // calling the function


//if i want only addition function without distrubing other function

function add(x,y){
    //calling the function name req
    console.log(x+y) //statement inside the block
    }
    add(5,10) //calling the function and passing in 2 values  or arguments //ans =15

    // or 
    /*
what ever code written , you want to comment about it .
     */

console.log("*****************")

//function with parameter and return type


function cal(x,y){
    return x+y ///i want to return this function and when i return this
}

let a=cal(12,13) //call the function with 2 arguments..since we didnt ask to console.log before, we have to ask for return

console.log(a)
console.log(a+20)


// function its name( ){
// its name 

// }

function cal(x,y){
    console.log(x+y)
        return 50
    }

cal(11,12)     //23



num = [[10,20,30],[11,224,33],[23,4104,55]] 
let newNumm=num.flat()
console.log(newNumm)
