let prices = [199, 129, 98, 78, 11, 171, 1055];
let min=prices[0];
for (let price of prices){
    if(price<min){
        min=price;

    }
}
console.log(min)