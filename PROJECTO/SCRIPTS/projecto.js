// Airport options
const airports = [
  "Juan Santamaria International airport, San Jose, Costa Rica (SJO)",
  "Daniel Oduber Quirós International Airport, Liberia, Guanacaste, Costa Rica (LIR)",
];

// Populate the datalist with airport options
const airportsDataList = document.getElementById("airports");

airports.forEach(airport => {
  const option = document.createElement("option");
  option.value = airport; // The value that appears in the input dropdown
  airportsDataList.append(option);
});

// Date validation and form submission
document.getElementById("search-button").addEventListener("click", (event) => {
  // Prevent form submission if validation fails
  event.preventDefault();

  const pickupDate = new Date(document.getElementById("pickup-date").value);
  const dropoffDate = new Date(document.getElementById("dropoff-date").value);

  // Validate that both dates are selected and dropoff is after pickup
  if (!pickupDate || !dropoffDate) {
      alert("Please select both pickup and dropoff dates.");
      return;
  }

  if (pickupDate >= dropoffDate) {
      alert("Dropoff date must be after the pickup date.");
      return;
  }

  const airport = document.getElementById("airportSearch").value;

  // Validate if airport is selected from the dropdown
  if (!airports.includes(airport)) {
      alert("Please select a valid airport from the dropdown.");
      return;
  }

  // If validation passes, redirect to the search results page with query parameters
  window.location.href = `search-results.html?airport=${encodeURIComponent(airport)}&pickup-date=${pickupDate.toISOString().split('T')[0]}&dropoff-date=${dropoffDate.toISOString().split('T')[0]}`;
});

const phrases = [
  "Find The Perfect Car",
  "The Aventure Just Started",
  "Ride & Drive, Like Local",
];

// Elemento donde aparecerá el texto
const textElement = document.getElementById('changing-text');

let index = 0;

// Función para cambiar el texto
function changeText() {
  textElement.textContent = phrases[index]; // Actualiza el texto
  index = (index + 1) % phrases.length; // Mueve al siguiente texto (vuelve al inicio al final)
}

// Inicia el cambio de texto cada 3 segundos
setInterval(changeText, 6000);

// Mostrar el primer texto inmediatamente al cargar
changeText();
