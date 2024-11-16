function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('open');
}

function renderTemples(templesToDisplay) {
    const templeContainer = document.getElementById("temple-container");
    templeContainer.innerHTML = ""; // Clear container

    templesToDisplay.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        img.onload = () => templeCard.classList.add("loaded");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        templeCard.appendChild(img);
        templeCard.appendChild(name);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(area);

        templeContainer.appendChild(templeCard);
    });
}

// Call renderTemples() with the default list of all temples on page load
document.addEventListener("DOMContentLoaded", () => renderTemples(temples));

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },

      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      }]

      // List of example airports (can be extended or populated from an API)
      const airports = [
          "Los Angeles International Airport (LAX)",
          "John F. Kennedy International Airport (JFK)",
          "San Francisco International Airport (SFO)",
          "Chicago O'Hare International Airport (ORD)",
          "Miami International Airport (MIA)",
          "Dallas/Fort Worth International Airport (DFW)",
          "Denver International Airport (DEN)",
          "Seattle-Tacoma International Airport (SEA)",
          "Orlando International Airport (MCO)",
          "Hartsfield-Jackson Atlanta International Airport (ATL)"
      ];
  
      const pickupInput = document.getElementById('pickup-location');
      const dropdown = document.getElementById('airport-dropdown');
  
      // Show dropdown options based on input
      pickupInput.addEventListener('input', function() {
          const query = this.value.toLowerCase();
          dropdown.innerHTML = ''; // Clear previous options
  
          // Filter airports that match the query
          const filteredAirports = airports.filter(airport => airport.toLowerCase().includes(query));
  
          // Display filtered options in the dropdown
          filteredAirports.forEach(airport => {
              const option = document.createElement('div');
              option.className = 'dropdown-option';
              option.innerText = airport;
  
              // On click, set input to selected airport and hide dropdown
              option.addEventListener('click', function() {
                  pickupInput.value = airport; // Set input value
                  dropdown.style.display = 'none'; // Hide dropdown
              });
  
              dropdown.appendChild(option);
          });
  
          // Show dropdown if there are matches, otherwise hide it
          dropdown.style.display = filteredAirports.length > 0 ? 'block' : 'none';
      });

      // EXAMPLE

      const airportsDataList = document.getElementById("airports");

      airports.forEach(airport => {
        let option = document.createElement("option");
        option.value = airport;

        airportsDataList.append(option);
      });

      // END OF EXAMPLE
  
      // Hide dropdown when clicking outside the input or dropdown
      document.addEventListener('click', function(event) {
          if (event.target !== pickupInput && event.target !== dropdown) {
              dropdown.style.display = 'none';
          }
      })

      const vehicleData = [
  {
    title: "Toyota Highlander 2019",
    type: "SUV",
    price: 219,
    location: "Clovis",
    distance: 13.6,
    rating: 4.97,
    trips: 31,
    dates: { start: "2024-12-01", end: "2024-12-04" },
    image: "https://images.turo.com/media/vehicle/images/CNC1eUEGQImWLz2B_SfMAw.445x238.jpg"
  },
  {
    title: "Honda Civic 2021",
    type: "Sedan",
    price: 89,
    location: "Fresno",
    distance: 10.2,
    rating: 4.89,
    trips: 20,
    dates: { start: "2024-12-01", end: "2024-12-03" },
    image: "https://images.turo.com/media/vehicle/images/CNC1eUEGQImWLz2B_SfMAw.445x238.jpg"
  },
  // Add more vehicles here
];

function populateVehicles(vehicles) {
  const container = document.getElementById("vehicle-container");
  container.innerHTML = ""; // Clear existing vehicles

  vehicles.forEach((vehicle) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.title}">
      <div class="card-body">
        <h3 class="card-title">${vehicle.title}</h3>
        <p class="card-text">
          <span class="rating">Rating: ${vehicle.rating}</span> (${vehicle.trips} trips)
        </p>
        <p class="card-price">$${vehicle.price} total</p>
        <p class="card-location">Location: ${vehicle.location}</p>
        <p class="card-dates">Available: ${vehicle.dates.start} to ${vehicle.dates.end}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterVehicles() {
  const type = document.getElementById("car-type").value;
  const priceRange = document.getElementById("price-range").value;
  const location = document.getElementById("location").value.toLowerCase();
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  const filtered = vehicleData.filter((vehicle) => {
    const matchesType = type === "all" || vehicle.type === type;
    const [minPrice, maxPrice] = priceRange === "all" ? [0, Infinity] : priceRange.split("-").map(Number);
    const matchesPrice = vehicle.price >= minPrice && vehicle.price <= maxPrice;
    const matchesLocation = vehicle.location.toLowerCase().includes(location);
    const matchesDates =
      (!startDate || new Date(startDate) <= new Date(vehicle.dates.end)) &&
      (!endDate || new Date(endDate) >= new Date(vehicle.dates.start));

    return matchesType && matchesPrice && matchesLocation && matchesDates;
  });

  populateVehicles(filtered);
}

document.getElementById("car-type").addEventListener("change", filterVehicles);
document.getElementById("price-range").addEventListener("change", filterVehicles);
document.getElementById("location").addEventListener("input", filterVehicles);
document.getElementById("start-date").addEventListener("change", filterVehicles);
document.getElementById("end-date").addEventListener("change", filterVehicles);

populateVehicles(vehicleData); // Initial population

// 

