/* ===============================
   PROGRAMMING STRUCTURE
   ===============================
   1. Variable Declaration
   2. Functions
   3. Conditions
   4. Looping
   5. Data Structures
=================================*/

/* ===============================
   DATA STRUCTURE
   ===============================
   cart is an ARRAY (data structure)
=================================*/

let cart = []; // array
let total = 0; // number data type

/* ===============================
   FUNCTION: ADD TO CART
=================================*/

function addToCart(productName, price){

    // DATA OBJECT
    let product = {
        name: productName,   // string
        price: price         // number
    };

    cart.push(product); // add object to array
    total += price;

    displayCart();
}

/* ===============================
   LOOPING STRUCTURE
=================================*/

function displayCart(){

    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    // LOOP
    for(let i = 0; i < cart.length; i++){

        let li = document.createElement("li");

        li.textContent = cart[i].name + " - ₱" + cart[i].price;

        cartList.appendChild(li);
    }

    document.getElementById("total").textContent = total;
}

/* ===============================
   CONDITIONAL STATEMENTS
=================================*/

function checkout(){

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let message = "New Order:%0A%0A";

    for(let i = 0; i < cart.length; i++){
        message += cart[i].name + " - ₱" + cart[i].price + "%0A";
    }

    message += "%0ATotal: ₱" + total;

    // PALITAN MO ITO
    let fbUsername = "Henson Tolentino";

    window.open(
        "https://m.me/" + fbUsername + "?text=" + message,
        "_blank"
    );

    cart = [];
    total = 0;
    displayCart();
}
/* ===============================
   BUY NOW FUNCTION
=================================*/

function buyNow(name, price){

    // TERNARY STATEMENT
    let discount = price > 5000 ? price * 0.10 : 0;

    let finalPrice = price - discount;

    let now = new Date();

    sendEmail([{name:name, price:finalPrice}], finalPrice, now);

    alert("You bought " + name);
}

/* ===============================
   SWITCH STATEMENT EXAMPLE
=================================*/

function categoryMessage(category){

    switch(category){

        case "RAM":
            console.log("Memory Product Selected");
            break;

        case "GPU":
            console.log("Graphics Product Selected");
            break;

        default:
            console.log("Other Category");
    }
}

/* ===============================
   EMAIL SENDING (EmailJS)
=================================*/

function sendEmail(products, totalAmount, time){

    let productList = "forappsa4@gmail.com";

    // LOOP AGAIN
    products.forEach(function(item){
        productList += item.name + " - ₱" + item.price + "\n";
    });

    emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
        products: productList,
        total: totalAmount,
        time: time
    }).then(function(response){
        console.log("SUCCESS!", response.status);
    }, function(error){
        console.log("FAILED...", error);
    });
}