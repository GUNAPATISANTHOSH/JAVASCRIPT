//21. Use flatMap() to split each name into its individual letters. 
let enames = ["rahul", "sonia", "priya", "modi"] 
let names = enames.flatMap((name)=>name.split(""))
console.log(names)