// Set the current year and last modified date in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  // Only calculate if conditions are met
  if (temp <= 10 && windSpeed > 4.8) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
  }
  return "N/A";
}

// Set wind chill in the weather section
const temperature = 10;  // Static temperature value in Celsius
const windSpeed = 5;     // Static wind speed in km/h
document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);
