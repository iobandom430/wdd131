document.addEventListener("DOMContentLoaded", function () {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const airport = params.get("airport");
    const pickupDate = params.get("pickup-date");
    const dropoffDate = params.get("dropoff-date");

    // Verificar que los parámetros existan en la URL
    if (!airport || !pickupDate || !dropoffDate) {
        alert("Faltan parámetros de búsqueda. Por favor, vuelve a la página principal.");
        window.location.href = "login.html"; // Redirigir al inicio si faltan parámetros
        return;
    }

    // Mostrar los parámetros de búsqueda en la página
    const carContainer = document.getElementById("car-container");
    const searchSummary = document.createElement("div");
    searchSummary.classList.add("search-summary");
    searchSummary.innerHTML = `
        <h3>Resultados de búsqueda</h3>
        <p><strong>Aeropuerto:</strong> ${airport}</p>
        <p><strong>Fecha de recogida:</strong> ${new Date(pickupDate).toDateString()}</p>
        <p><strong>Fecha de devolución:</strong> ${new Date(dropoffDate).toDateString()}</p>
    `;
    carContainer.appendChild(searchSummary);

    // Simulación de los autos disponibles (reemplaza esto con una llamada a una API o base de datos)
    const availableCars = [
        {
            name: "Toyota Corolla",
            price: 50,
            image: "https://proverenevozy.toyota.cz/media/thumbnails/0e/0eeadba7a7958c21f9865c12764ee397__4938163.jpg",
            description: "Compacto, económico y eficiente"
        },
        {
            name: "Ford Explorer",
            price: 70,
            image: "https://via.placeholder.com/300x200",
            description: "SUV espaciosa y cómoda"
        },
        {
            name: "Tesla Model 3",
            price: 100,
            image: "https://via.placeholder.com/300x200",
            description: "Eléctrico, rápido y moderno"
        },
        
        {
            name: "Tesla Model 3",
            price: 100,
            image: "https://via.placeholder.com/300x200",
            description: "Eléctrico, rápido y moderno"
        },
        {
            name: "Tesla Model 3",
            price: 100,
            image: "https://via.placeholder.com/300x200",
            description: "Eléctrico, rápido y moderno"
        }
    ];

    // Verificar si el usuario está logueado
    const loggedIn = localStorage.getItem("loggedIn");

    // Mostrar los autos disponibles en el contenedor
    availableCars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <h4>${car.name}</h4>
            <p>${car.description}</p>
            <p><strong>Precio por día:</strong> $${car.price}</p>
            ${loggedIn ? `<button class="rent-button">Alquilar ahora</button>` : `<button class="rent-button" onclick="redirectToLogin()">Iniciar sesión para alquilar</button>`}
        `;

        carContainer.appendChild(carCard);
    });
});

// Redirigir al inicio de sesión si el usuario no está logueado
function redirectToLogin() {
    alert("Por favor, inicia sesión para alquilar un coche.");
    window.location.href = "login.html"; // Redirigir al formulario de login
}
