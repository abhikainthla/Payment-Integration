//------------------------ script for slider --------------------------------------

const sliders = document.querySelectorAll("#slider");
sliders.forEach(slider => {
    const quantityValue = slider.parentElement.querySelector('#quantity-value');
    quantityValue.textContent = slider.value;
    
    slider.addEventListener('input', function() {
        quantityValue.textContent = this.value;
    });
});

//---------------------------- script for add to cart button ------------------------
document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll("#add-to-cart");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.style.backgroundColor = "transparent";
            button.style.color = "#007bff";
            button.style.border = "1px solid #007bff";
            button.innerHTML = 'Added to cart!!';
            button.disabled = true;
            // Get product details
            var productContainer = button.parentElement;
            var productName = productContainer.querySelector("#product-title").textContent;
            var productPrice = parseFloat(productContainer.querySelector("#amount").value);
            var quantity = parseInt(productContainer.querySelector("#slider").value);
            
            // Create a new list item for the cart
            var cartItem = document.createElement("li");
            var totalPrice = productPrice * quantity;
            cartItem.textContent = productName + " - ₹" + totalPrice.toFixed(2) + " (" + quantity + " x ₹" + productPrice.toFixed(2) + ")";

            // Append the item to the cart
            document.getElementById("cart-items").appendChild(cartItem);
            updateTotal(totalPrice);
        });
    });

    // Function to update the total in the cart
    function updateTotal(price) {
        var currentTotal = parseFloat(document.getElementById("cart-total").textContent.replace("Total: ₹", ""));
        var newTotal = currentTotal + price;
        document.getElementById("total").value = newTotal;
        document.getElementById("cart-total").textContent = "Total: ₹" + newTotal.toFixed(2);
    }

    // Event listener for the checkout button
    document.getElementById("checkout").addEventListener("click", function() {
        alert("Thank you for your purchase!");
    });

});
