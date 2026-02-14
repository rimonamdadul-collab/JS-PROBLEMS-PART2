function add (num1,num2){
    const result = num1 + num2;
    return result;
}
function subtract (num1,num2){
    const result = num1-num2;
    return result;
}
function multiply (num1,num2){
    const result = num1 *num2;
    return result;
}
function divide (num1,num2){
    const result =num1 / num2;
    return result;
}
function calculator (a,b,operation){
 if (operation === 'add'){
    const result = add(a,b)
    return result
 } 
 else if (operation === 'subtract'){
    const result = multiply(a,b)
    return result
 }
 else if (operation === 'divide'){
    const result = divide(a,b)
    return result
 }
}
const result =calculator(4,8 ,'divide')
console.log(result)