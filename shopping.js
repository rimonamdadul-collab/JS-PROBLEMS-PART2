const getCard = [
    {name : 'shampo', price: 300, quantity: 3},
    {name : 'shirt', price: 700, quantity: 3},
    {name : 'pent', price: 1000, quantity: 2},
    {name : 'caf', price: 800, quantity: 1},
]
function getCardCost (getCards){
    let total = 0;
for (const getCard of getCards){
    const thisCard = getCard.price * getCard.quantity
total =total + thisCard
}
return total
}
const add = getCardCost(getCard)
console.log(add)