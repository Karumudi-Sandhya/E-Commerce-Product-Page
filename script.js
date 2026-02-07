let quantity = 1;
let basePrice = 2999;
let stock = 10;

function changeImg(src) {
    document.getElementById("mainImg").src = src;
}

function increase() {
    if (quantity < stock) {
        quantity++;
        updatePrice();
    }
}

function decrease() {
    if (quantity > 1) {
        quantity--;
        updatePrice();
    }
}

function updatePrice() {
    document.getElementById("qty").innerText = quantity;
    document.getElementById("price").innerText = basePrice * quantity;
}

function selectColor(color) {
    document.getElementById("colorText").innerText =
        "Selected Color: " + color;
}

function addCart() {
    showToast("Item added to cart successfully!");
}

function addWish() {
    showToast("Added to wishlist ❤️");
}

function toggleSpecs() {
    let specs = document.getElementById("specs");
    specs.style.display = specs.style.display === "block" ? "none" : "block";
}

function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

/* Delivery Date */
let deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 4);
document.getElementById("delivery").innerText =
    "Delivery by " + deliveryDate.toDateString();

