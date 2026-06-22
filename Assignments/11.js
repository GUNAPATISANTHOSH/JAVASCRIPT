let prices = [199, 129, 98, 78, 11, 171, 1055];
let max = prices[0]
for (let price of prices){
    if(price>max){
        max=price
    }
}
console.log(max)