console.log (5+3)

console.log (5-3)

function greeting(){
let firstName = document.getElementById('firstName').value;

let lastName = document.getElementById('lastName').value;

document.getElementById("welcomeMessage").innerHTML = "Welcome " + firstName + " " + lastName + "!"
}

const price1 = 29.95
console.log('$' + (((price1* 0.07) + price1 )).toFixed(2))

let inventory = 100
inventory -= 15
inventory += 20
console.log(inventory)

const originalPrice = 120.00;
const tax = 0.1;
const discount = 0.15;

 const priceWithTax = (originalPrice * tax + originalPrice).toFixed(2);

 const discountPrice = (originalPrice - (originalPrice * discount));

const discountTax = parseFloat(discountPrice+ discountPrice * tax).toFixed(2);

console.log(`With Tax: $${priceWithTax}`)
console.log(`After Discount: $${discountTax}`)
