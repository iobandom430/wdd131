document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de autenticación
    if (username === "usuario" && password === "contraseña") {
        // Guardamos el estado de la sesión en localStorage
        localStorage.setItem("loggedIn", "true");
        alert("Iniciaste sesión correctamente.");
        window.location.href = "search-results.html"; // Redirigir al resultado de búsqueda
    } else {
        alert("Credenciales incorrectas. Intenta nuevamente.");
    }
});
