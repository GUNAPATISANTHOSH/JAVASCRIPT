//20. Use reduce() to count the total number of characters in all names. 
let enames = ["rahul", "sonia", "priya", "modi"] 
let total=enames.reduce((sum,num)=>sum+num.length,0)
console.log(total)