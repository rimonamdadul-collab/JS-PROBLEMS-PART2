const shoping = [
    {name : 'shempo', price : 300},
    {name : 'brus', price : 200},
    {name : 'fest', price : 600},
]
function totalSum(products){
    let max = 0;
for (const product of products){
max = max + product.price;
}
return max;
    }
  
 
const get = totalSum(shoping)
console.log(get)