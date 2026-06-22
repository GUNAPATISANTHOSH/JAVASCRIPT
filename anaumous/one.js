// // // // // // // // // let a=100;
// // // // // // // // // let add=()=>{}
// // // // // // // // // console.log(typeof a) 
// // // // // // // // // console.log(typeof add) 

// // // // // // // // function add(a,b){
// // // // // // // //     console.log(a+b)
// // // // // // // // }
// // // // // // // // add(10,20)

// // // // // // // let add=(a,b)=>{
// // // // // // //     console.log(a+b) with parameters
// // // // // // // }
// // // // // // // add(10,20)

// // // // // // // let add=()=>{
// // // // // // //     console.log("addition")   without parameters
// // // // // // // }
// // // // // // // add()

// // // // // // // function add(a,b){
// // // // // // //     return a+b;

// // // // // // // }
// // // // // // // let r1=add(10,20)
// // // // // // // let r2=add(1,2)
// // // // // // // console.log(r1)
// // // // // // // console.log(r2)

// // // // // // let add=(a,b)=>{
// // // // // //     return a+b;
// // // // // // }                       with return statement
// // // // // // let r1=add(5,6)
// // // // // // console.log(r1)

// // // // // let add=(a,b)=>a+b;
// // // // // let r1=add(10,20)          //Implicit 
// // // // // console.log(r1)

// // // // let wish=name=>"hello "+ name;
// // // // let msg=wish("rahul")
// // // // console.log(msg  )

// // // function wish(name){
// // //     return "hello "+name;
// // // }
// // // let msg=wish("Rahul")
// // // console.log(msg)

// // // function test(){
// // //     console.log(this) contect very high
// // // }    it gets object
// // // test()
// // let test=()=>{
// //     console.log(this)               //empty object
// // }
// // test()
// function wish(){
//     console.log('gm')
// }
// wish()
// function wish(){       //output is gn gn 
//                         //because the function is override
//     console.log('gn')
// }
// wish()

let wish = name=> name;
let msg=wish("gm")
console.log(msg)

let wish = name=> name;
let msg=wish("gn")
console.log(msg)