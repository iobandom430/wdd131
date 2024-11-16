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

