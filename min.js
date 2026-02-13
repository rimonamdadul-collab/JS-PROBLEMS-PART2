const min= [3400,50000, 73000,100000,2200]
function cheapest(numbers){
    let max = numbers[0]
for (const num of numbers){
   if (num < max){
  max  = num 
   }
}
return max
}
const cheap = cheapest(min)
console.log(cheap)