// // // let eids=["prabhas","ramcharan","bhAAi",]
// // // // let a=100;
// // // // a="rahul"
// // // // console.log(a)
// // let eids=[101,102,103,104]
// // eids.map((eid)=>{console.log(eid)},4000)

// let numbers=[10,11,12,13]
// let new_numbers=[]
// for (let num of numbers){
//     new_numbers.push(num+1)
// }
// console.log(new_numbers)
let numbers=[10,11,12,13]
let new_numbers=numbers.map((number)=>{
    return number+1;
},2000)
console.log(new_numbers)
