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