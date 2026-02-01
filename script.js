let quantity = 1;

const qtyDisplay = document.getElementById("qty");
const statusText = document.getElementById("status");

document.querySelector(".plus").addEventListener("click", () => {
    quantity++;
    qtyDisplay.textContent = quantity;
});

document.querySelector(".minus").addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
    }
});

document.getElementById("cartBtn").addEventListener("click", () => {
    const product = document.querySelector("h2").dataset.name;
    const price = document.querySelector(".cost").dataset.price;

    const total = quantity * price;

    statusText.style.color = "green";
    statusText.textContent =
        `${quantity} ${product}(s) added | Total: ₹${total}`;
});
