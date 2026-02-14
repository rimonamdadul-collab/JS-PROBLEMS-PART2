function discount(quantity){
    if (quantity <= 100){
        total = quantity * 90;
           return total 
    }
    else if (quantity <= 200){
        total =quantity*70;
        return total;
    }
    else {
        total = quantity *50;
        return total
    }
}
const dis = discount(359)
console.log(dis)