// // Use map() to create a new array containing the lengths of each name. 
// let enames = ["rahul", "sonia", "priya", "modi"];
// let names=enames.map((name)=>name.length)
// console.log(names)

let numbers=[1,2,3,4,5,6,7,8,9,10];
let new_numbers = numbers.map((num)=>{
    return num+5;
})
console.log(new_numbers)