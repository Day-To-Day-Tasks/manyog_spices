document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let total = 0;
    let selectedItems = [];

    // Function to update the list of selected items
    function updateSelectedItems() {
        cartItems.innerHTML = "";
        selectedItems.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.quantity} x ${item.product} (${item.packSize}g) - Rs. ${item.totalPrice.toFixed(2)}`;
            li.addEventListener("click", function() {
                // Remove the clicked item from selectedItems array
                selectedItems.splice(index, 1);
                // Update cart and total price
                updateSelectedItems();
                updateTotalPrice();
            });
            cartItems.appendChild(li);
        });
    }

    // Function to update the total price
    function updateTotalPrice() {
        total = selectedItems.reduce((acc, item) => acc + item.totalPrice, 0);
        totalPrice.textContent = "Total: Rs. " + total.toFixed(2);
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.parentElement.querySelector('span').textContent;
            const packSize = parseInt(this.parentElement.querySelector('.pack-size').value);
            const quantity = parseInt(this.parentElement.querySelector('.quantity').value);
            const pricePerGram = parseFloat(this.parentElement.querySelector('.pack-size').selectedOptions[0].getAttribute('data-price'));
            const totalPricePerItem = pricePerGram * quantity;

            const item = {
                product: productName,
                packSize: packSize,
                quantity: quantity,
                totalPrice: totalPricePerItem
            };

            selectedItems.push(item);

            updateSelectedItems();
            updateTotalPrice();
        });
    });

    checkoutBtn.addEventListener("click", function() {
        // Store selected items in local storage
        localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
        localStorage.setItem("totalPrice", total.toFixed(2));

        // Redirect to checkout page
        window.location.href = "checkout.html";
    });
});
