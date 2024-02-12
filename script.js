//------------------------  script for loader -------------------------------------
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
  };
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
            // Getting product details
            var productContainer = button.parentElement;
            var productName = productContainer.querySelector("#product-title").textContent;
            var productPrice = parseFloat(productContainer.querySelector("#amount").value);
            var quantity = parseInt(productContainer.querySelector("#slider").value);
            
            // Create\ing a new list item for the cart
            var cartItem = document.createElement("li");
            cartItem.setAttribute("id","cartItem");
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

    const orders = document.getElementById("dropdown-item2");
    const orderHistory = document.getElementById("order-details");
    const orderList = document.getElementById("orders");

    // Event listener for the checkout button
    document.getElementById("checkout").addEventListener("click", function() {
        alert("Thank you for your purchase!");
        const orderDetails = document.getElementById("cartItem").innerText;
        const total = document.getElementById("total").value;
        const orderTotal = orderDetails +'\n'+'Order Total : ₹'+total+'\n';
        localStorage.setItem('order', JSON.stringify({details : orderTotal}));
        const orderItems = document.createElement("li");
        let orderData = JSON.parse(localStorage.getItem('order'));
            orderItems.innerText = `\nYour Order:\n${orderData.details}\n`;
            orderList.append(orderItems);  

    });


    orders.addEventListener( "click", () =>{
        orderHistory.style.display = "block";
            })

            const removeOrderDiv = document.getElementById("remove-order");
            removeOrderDiv.addEventListener( "click", ()=>{
                orderHistory.style.display = 'none';
            }) 



    //--------------------------------- menu button ------------------------------------

    const menuButton = document.getElementById("menu-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
  
    let isMenuVisible = false;
  
    function toggleMenu() {
        console.log(isMenuVisible);
      isMenuVisible = !isMenuVisible;
      dropdownMenu.style.display = isMenuVisible ? "block" : "none";
    }
  
    menuButton.addEventListener("click", toggleMenu);


    const cartOption = document.getElementById("dropdown-item1");
    const cartOrder = document.getElementById("cart");  
    let isCartVisible = false;
  
    function toggleCartMenu() {
        console.log(isCartVisible);
      isCartVisible = !isCartVisible;
      cartOrder.style.display = isCartVisible ? "block" : "none";


    }
  
    cartOption.addEventListener("click", toggleCartMenu);

    const remove = document.getElementById("remove-cart");
    remove.addEventListener('click', () =>{
        cartOrder.style.display ="none";
        isCartVisible=false;
    })

    const openCartButtons = document.querySelectorAll("#go-to-cart");

    openCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartOrder.style.display ="block";
            isCartVisible = true;
        });
    });
    
 
});

