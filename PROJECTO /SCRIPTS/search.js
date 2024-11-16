document.addEventListener("DOMContentLoaded", function () {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const airport = params.get("airport");
    const pickupDate = params.get("pickup-date");
    const dropoffDate = params.get("dropoff-date");


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
            image: "https://via.placeholder.com/150",
            description: "Compacto, económico y eficiente"
        },
        {
            name: "Ford Explorer",
            price: 70,
            image: "https://via.placeholder.com/150",
            description: "SUV espaciosa y cómoda"
        },
        {
            name: "Tesla Model 3",
            price: 100,
            image: "https://via.placeholder.com/150",
            description: "Eléctrico, rápido y moderno"
        }
    ];

    // Mostrar los autos disponibles en el contenedor
    availableCars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <h4>${car.name}</h4>
            <p>${car.description}</p>
            <p><strong>Precio por día:</strong> $${car.price}</p>
            <button>Alquilar ahora</button>
        `;

        carContainer.appendChild(carCard);
    });
});
