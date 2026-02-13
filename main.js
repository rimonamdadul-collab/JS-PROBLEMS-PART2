const main = [48,88,28,18,87]
function mainNumbers (numbers){
     let max =numbers[0];
    for (const num of numbers){
       
          if (num < max){
           max = num  ;
          }
    }
    return max;
}
const fff= mainNumbers(main)
console.log(fff)