document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.parentElement.querySelector('span').textContent;
            const packSize = parseInt(this.parentElement.querySelector('.pack-size').value);
            const quantity = parseInt(this.parentElement.querySelector('.quantity').value);
            const pricePerGram = parseFloat(this.parentElement.querySelector('.pack-size').selectedOptions[0].getAttribute('data-price'));
            const totalPricePerItem = pricePerGram * quantity;

            total += totalPricePerItem;

            const listItem = document.createElement("li");
            listItem.textContent = `${productName} - ${quantity} x ${packSize}g - Rs. ${totalPricePerItem}`;
            cartItems.appendChild(listItem);

            totalPrice.textContent = "Total: Rs. " + total.toFixed(2);
        });
    });

    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", function() {
        alert("Thank you for your purchase!");
        cartItems.innerHTML = "";
        total = 0;
        totalPrice.textContent = "Total: Rs. 0";
    });
});
