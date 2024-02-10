document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll("#add-to-cart");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.style.backgroundColor = "transparent";
            button.style.color = "#007bff"
            button.style.border = "1px solid #007bff";
            button.innerHTML = 'Added to cart!!';
            // Get product details
            var productContainer = button.parentElement;
            var productName = productContainer.querySelector("#product-title").textContent;
            var productPrice = parseFloat(productContainer.querySelector("#amount").value);

            // Create a new list item for the cart
            var cartItem = document.createElement("li");
            cartItem.textContent = productName + " - ₹" + productPrice.toFixed(2);

            // Append the item to the cart
            document.getElementById("cart-items").appendChild(cartItem);
            updateTotal(productPrice);
        });
    });

    // Function to update the total in the cart
    function updateTotal(price) {
        var currentTotal = parseFloat(document.getElementById("cart-total").textContent.replace("Total: ₹", ""));
        var newTotal = currentTotal + price;
        document.getElementById("total").value = newTotal;
        document.getElementById("cart-total").textContent = "Total: ₹" + newTotal.toFixed(2);
    }

    // Checkout button functionality
    document.getElementById("checkout").addEventListener("click", function() {
        alert("Thank you for your purchase!");
        
    });
});



// order creation
// document.getElementById("checkout").addEventListener("click", orderCreated);
//      function orderCreated(){
//         console.log("payment started");
//         var total = document.getElementById("total").value;
//         if(total =='' || total ==null){
//             alert("Your cart is empty");
//             return;
//         }
//         console.log(total);
//         $.ajax(
//             {
//                 url :'/server',
//                 type:'POST',
//                 data:JSON.stringify({"total":total}),
//                 contentType:'application/json',
//                 dataType:'json',
//                 success:function(response){
//                     console.log(response);
//                 },
//                 error:function (error) {
//                    console.log('Error');
//                 }
//             }
//         )
//     }




// var options = {
//     "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
//     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Acme Corp", //your business name
//     "description": "Test Transaction",
//     "image": "https://example.com/your_logo",
//     "order_id": "order_9A33XWu170gUtm", //add is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
//     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
//         "name": "Gaurav Kumar", //your customer's name
//         "email": "gaurav.kumar@example.com",
//         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
//     },
//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
// };
// var rzp1 = new Razorpay(options);
// document.getElementById('rzp-button1').onclick = function(e){
//     rzp1.open();
//     e.preventDefault();
// }