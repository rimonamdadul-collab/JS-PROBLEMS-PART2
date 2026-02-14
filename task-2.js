function getwood(laptopQuantity,tabletQuantity,mobileQuantity){
   const laptop = 35000 
   const tablet = 15000 
   const mobile = 20000 
   const laptopWood= laptop *laptopQuantity
   const tabletWood = tablet * tabletQuantity
   const mobileWood = mobile * mobileQuantity
   const totalWood = laptopWood + tabletWood + mobileWood
   return totalWood
  
}
const wood = getwood(1,2,5)
console.log(wood)