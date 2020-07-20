let shoppingList=['wheat','rice','mango','olive oil','orange'];
console.log(shoppingList);
let shoppingBasket=['maggi','cornflakes','oats'];
console.log(shoppingBasket);
Array.prototype.push.apply(shoppingBasket,shoppingList);
console.log(shoppingBasket);
