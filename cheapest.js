const mobiles = [
    {name: 'redmi', price: 35000,color:'black', cemra : "12mp"},
    {name: 'honor', price: 30000,color:'black', cemra : "12mp"},
    {name: 'iphone', price: 300000,color:'black', cemra : "12mp"},
    {name: 'vivo', price: 25000,color:'black', cemra : "12mp"},
    {name: '1+plus', price: 40000,color:'black', cemra : "12mp"},
]
function cheapest(mobiles){
    let max = mobiles[0]
   for (const num of mobiles){
  if ( num.price > max.price){
    max =num
  }
   }
   return max
}
const phn = cheapest(mobiles)
console.log(phn)