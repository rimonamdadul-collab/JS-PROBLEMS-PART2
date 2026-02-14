const heights2 = [167, 190, 120, 165, 137];
function min (maths){
    let total = maths[0];
    for (const math of maths){
if (math < total){
    total = math
}
}
return total
}
const min1 = min(heights2)
console.log(min1)
