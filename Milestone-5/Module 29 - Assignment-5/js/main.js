const couponCode = document.getElementById("couponCode");
const couponBtn = document.getElementById("couponBtn");

const cartBox = document.getElementById("cartBox");

const totalPrice = document.getElementById("totalPrice");
const discountPrice = document.getElementById("discountPrice");
const totalPayment = document.getElementById("totalPayment");

const successModal = document.getElementById("successModal");
const purchaseBtn = document.getElementById("purchaseBtn");


// Coupon Code
function getUseCouponCode(){
    if (couponCode.value === "SELL200") {
        couponBtn.removeAttribute("disabled");
    } else {
        couponBtn.setAttribute("disabled", "true");
    }    
}

// Coupon Button
couponBtn.addEventListener("click", function(){
    const getDiscountPrice = getProductPrice(discountPrice)
    const totalPriceNumber = getProductPrice(totalPrice)
    const discountedPrice = totalPriceNumber * 0.2;
    const totalDiscounted = getDiscountPrice + discountedPrice;
    const discountPriceFixed = totalDiscounted.toFixed(2);
    getAddPrice(discountPrice, discountPriceFixed)

    // Final Result
    const finalTotalPayment = totalPriceNumber - discountPriceFixed;
    const finalTotalPaymentFixed = finalTotalPayment.toFixed(2);
    getAddPrice(totalPayment, finalTotalPaymentFixed)

    // Purchase Button
    if (finalTotalPayment > 0) {
        purchaseBtn.removeAttribute("disabled");
    } else {
        purchaseBtn.setAttribute("disabled", "true");
    }
})


// String To Number Convert
function getProductPrice(priceText){
    const selectedProductPriceText = priceText.innerText;
    const selectedProductPriceNumber = parseFloat(selectedProductPriceText)
    return selectedProductPriceNumber;
}

// Cart Box
function getAddCarts(name){
    const count = cartBox.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-3')
    p.innerHTML = `${count + 1}. ${name}`
    cartBox.appendChild(p);
}

// Add the showing HTML element
function getAddPrice(priceSpan, price){
    priceSpan.innerHTML = price;
}


// Product Handling
function selectedProduct(name, n) {
    const productPrice = document.getElementsByClassName('productPrice');
    const selectedProductPrice = productPrice[n];
    const productPriceNumber = getProductPrice(selectedProductPrice)

    // Total Price
    const prevPriceNumber = getProductPrice(totalPrice)
    const totalPriceNumber = prevPriceNumber + productPriceNumber;
    const totalPriceNumberFixed = totalPriceNumber.toFixed(2);

    getAddCarts(name)
    getAddPrice(totalPrice, totalPriceNumberFixed)
}



// Congratulations Modal
purchaseBtn.addEventListener("click", function () {
    successModal.style.display = "block";
})
document.getElementById('backHome').addEventListener("click", function () {
    successModal.style.display = "none";

    couponCode.value = "";

    cartBox.innerHTML = "";

    totalPrice.innerText = "00.00";
    discountPrice.innerText = "00.00";
    totalPayment.innerText = "00.00";
});
