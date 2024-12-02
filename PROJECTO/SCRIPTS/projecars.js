// Datos de autos disponibles
const availableCars = [
    { name: "Toyota Corolla", price: 50, image: "https://proverenevozy.toyota.cz/media/thumbnails/0e/0eeadba7a7958c21f9865c12764ee397__4938163.jpg", description: "Compacto, económico y eficiente", rating: 4.5 },
    { name: "Ford Explorer", price: 70, image: "https://di-uploads-pod45.dealerinspire.com/robsightford/uploads/2024/06/ford-explorer-exterior.png", description: "SUV espaciosa y cómoda", rating: 4.8 },
    { name: "Tesla Model 3", price: 100, image: "https://media.drivingelectric.com/image/private/s--Fn61QQ6r--/f_auto,t_primary-image-desktop@1/v1698686429/drivingelectric/2023-10/Tesla%20Model%203%20facelift%201_awovfc.jpg", description: "Eléctrico, rápido y moderno", rating: 4.9 },
    { name: "Hyundai Elantra", price: 40, image: "https://kautoscr.com/wp-content/uploads/HYUNDAI-ELANTRA-2016-CH-599834-2-scaled.jpg", description: "Eficiente y asequible", rating: 4.3 },
    { name: "KIA Sorento", price: 20, image: "https://vehicle-images.dealerinspire.com/4442-110005687/5XYRKDJF4RG271520/6183d22696723964f6a6b46ebb5124fa.jpg", description: "Eléctrico, rápido y moderno", rating: 4.9 },
    { name: "Toyota CHR", price: 40, image: "https://d62-a.sdn.cz/d_62/c_img_gR_l/By6DM/toyota-chr-36.jpeg?fl=cro,0,99,1900,1068%7Cres,2560,,1%7Cwebp,75", description: "Eficiente y asequible", rating: 4.3 },
    { name: "Mercedes Benz C63", price: 200, image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*", description: "Eléctrico, rápido y moderno", rating: 4.9 },
    { name: "Hyundai Accent", price: 40, image: "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/pip/cars/accent-hc/accent-hc-highlights-kv-pc.jpg", description: "Eficiente y asequible", rating: 4.3 }
];

// Verificar si el usuario está logueado
const loggedIn = localStorage.getItem("loggedIn");
const carContainer = document.getElementById("car-container");

// Función para mostrar autos
function displayCars(cars) {
    carContainer.innerHTML = ""; // Limpiar el contenedor
    cars.forEach(car => {
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
}

// Inicializar con todos los autos disponibles
displayCars(availableCars);

// Función para ordenar autos
function sortCars(criterion) {
    const sortedCars = [...availableCars]; // Crear una copia para ordenar
    switch (criterion) {
        case "PRICE": // Ordenar por precio (ascendente)
            sortedCars.sort((a, b) => a.price - b.price);
            break;
        case "RATING": // Ordenar por calificación (descendente)
            sortedCars.sort((a, b) => b.rating - a.rating);
            break;
        case "DISTANCE": // Simular distancia (opcional, agregar lógica)
            // Aquí puedes implementar una ordenación por distancia si tienes ese dato.
            console.warn("Ordenar por distancia aún no está implementado.");
            break;
        default: // Orden recomendado (puedes agregar lógica personalizada)
            console.warn("Orden recomendado no tiene lógica personalizada.");
    }
    displayCars(sortedCars); // Mostrar autos ordenados
}

// Añadir eventos a los filtros
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        const criterion = e.target.value;
        sortCars(criterion);
    });
});

// Redirigir a login si no está logueado
function redirectToLogin() {
    window.location.href = "login.html";
}

