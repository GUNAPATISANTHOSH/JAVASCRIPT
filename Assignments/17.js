let prices = [38, 31, 8, 18, 232, 7, 731, 171, 381, 568];
let search =232;
for (let i=0;i<prices.length;i++){
    if (prices[i]==search){
        console.log("price found at index",i,"is",prices[i])
        break;
    }
}