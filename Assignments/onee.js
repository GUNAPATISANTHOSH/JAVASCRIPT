let eid=101;
let ename="Rahul"
let avail=true 
let locs=["Wayanad","New Delhi","Bangalore"]
let emp={
    eid:102,
    ename:"sonai",
    esal:450000
}
let product={}
/*document.writeln(eid)
document.writeln(ename)
document.writeln(avail)
document.writeln(locs)
document.write("<br/>")
document.write(emp)
document.write("<br/>")

document.write(JSON.stringify(emp))*/
console.log(Object.keys(emp))
console.log(Object.keys(emp).length)
console.log(Object.keys(emp).length==0)
console.log(Object.values(emp))
console.log(Object.values(emp).length)
console.log(Object.values(emp).length==0)
console.log(Object.values(product).length==0)