document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Smartphone" },
        { id: 3, name: "Headphones" },
        { id: 4, name: "Smartwatch" },
        { id: 5, name: "Camera" }
    ];

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
