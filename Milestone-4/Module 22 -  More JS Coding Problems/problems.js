// Problem - 1
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

woodCalculator(8, 2, 3);

// Problem - 2
const shoppingCart = [
    {name: 'Shoes', price: 1200, quantity: 2},
    {name: 'Shirts', price: 600, quantity: 3},
    {name: 'Pant', price: 1100, quantity: 1},
    {name: 'Belt', price: 350, quantity: 1}
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

totalCost(shoppingCart)