
let total = 0;


// Spice Hub Menu
function showMenu() {

    document.getElementById("restaurantName").innerHTML =
        "Taste Hub Menu";

    document.getElementById("foodMenu").innerHTML =

        "<div class='food'>" +
        "<h3>Chicken Biryani</h3>" +
        "<img src='asstes/chicken.jpg'alt='chicken'>"+
        "<p>₹180</p>" +
        "<button onclick=\"addFood('Chicken Biryani',180)\">Add to Cart</button>" +
        "</div>" +

        "<div class='food'>" +
        "<h3>Fried Rice</h3>" +
        "<img src='asstes/fried.png'alt='fried'>"+
        "<p>₹120</p>" +
        "<button onclick=\"addFood('Fried Rice',120)\">Add to Cart</button>" +
        "</div>" +

        "<div class='food'>" +
        "<h3>Paneer Masala</h3>" +
        "<img src='asstes/panner.jpg'alt='panner'>"+
        "<p>₹150</p>" +
        "<button onclick=\"addFood('Paneer Masala',150)\">Add to Cart</button>" +
        "</div>";
}


// Pizza Corner Menu
function showPizza() {

    document.getElementById("restaurantName").innerHTML =
        "Pizza Corner Menu";

    document.getElementById("foodMenu").innerHTML =

        "<div class='food'>" +
        "<h3>Cheese Pizza</h3>" +
        "<img src='asstes/cheese.jpg'alt='chesee'>"+
        "<p>₹200</p>" +
        "<button onclick=\"addFood('Cheese Pizza',200)\">Add to Cart</button>" +
        "</div>" +

        "<div class='food'>" +
        "<h3>Chicken Pizza</h3>" +
        "<img src='asstes/chickpizza.webp'alt='chickenpizza'>"+
        "<p>₹250</p>" +
        "<button onclick=\"addFood('Chicken Pizza',250)\">Add to Cart</button>" +
        "</div>" +

        "<div class='food'>" +
        "<h3>Veg Pizza</h3>" +
        "<img src='asstes/veg.jpg'alt='veg'>"+
        "<p>₹180</p>" +
        "<button onclick=\"addFood('Veg Pizza',180)\">Add to Cart</button>" +
        "</div>";
}


// Burger House Menu
function showBurger() {

    document.getElementById("restaurantName").innerHTML =
        "Burger House Menu";

    document.getElementById("foodMenu").innerHTML =

        "<div class='food'>" +
        "<h3>Chicken Burger</h3>" +
        "<img src='asstes/cbur.jpg'alt='chickeburger'>"+
        "<p>₹150</p>" +
        "<button onclick=\"addFood('Chicken Burger',150)\">Add to Cart</button>" +
        "</div>" +

        "<div class='food'>" +
        "<h3>Cheese Burger</h3>" +
        "<img src='asstes/cheebur.jpg'alt='cheeseburger'>"+
        "<p>₹130</p>" +
        "<button onclick=\"addFood('Cheese Burger',130)\">Add to Cart</button>" +
        "</div>" +

        "<div class='food'>" +
        "<h3>Veg Burger</h3>" +
        "<img src='asstes/vbur.jpg'alt='vegburger'>"+
        "<p>₹100</p>" +
        "<button onclick=\"addFood('Veg Burger',100)\">Add to Cart</button>" +
        "</div>";
}


// Add food to cart
function addFood(name, price) {

    let cart = document.getElementById("cartItems");

    if (total == 0) {
        cart.innerHTML = "";
    }

    cart.innerHTML +=
        "<p>" + name + " - ₹" + price + "</p>";

    total = total + price;

    document.getElementById("total").innerHTML =
        "Total: ₹" + total;
}


// Place order
function placeOrder() {

    if (total == 0) {

        alert("Please add food to cart");

    } else {

        alert("Order placed successfully!");

        total = 0;

        document.getElementById("cartItems").innerHTML =
            "<p>No items added.</p>";

        document.getElementById("total").innerHTML =
            "Total: ₹0";
    }
}

