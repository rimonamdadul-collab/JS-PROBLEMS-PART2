 
 
const num1 = 39;
const num2 = 93;
const num3 = 30;
if (num1 > num2 && num1 > num3){
console.log('num1 the real hero')
}
else if (num2 > num1 && num2 && num3){
    console.log('no num2 the real hero')
}
function mathmax(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log('num1 is hero')
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        console.log('num2 the real gero')
     return num2;
    }
    else if (num3 > num2 && num3 > num1){
        console.log('num3 the real hero');  return num3;
       
    }
}
const max = mathmax(43,23,84,)
console.log(max)