// Manejo del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function (event) {
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

// Manejo de inicio de sesión con Apple
document.getElementById("apple-login").addEventListener("click", () => {
    const clientID = "TU_CLIENT_ID"; // Reemplaza con tu client ID de Apple
    const redirectURI = "https://tusitio.com/callback"; // Reemplaza con tu URI de redirección
    const state = crypto.randomUUID(); // Generar un valor único y seguro
    const scope = "email name";

    // URL de autenticación de Apple
    const appleLoginURL = `https://appleid.apple.com/auth/authorize?` +
        `response_type=code&client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}` +
        `&state=${state}&scope=${scope}`;

    // Redirigir al usuario
    window.location.href = appleLoginURL;
});

// Manejo de inicio de sesión con Google
document.getElementById("google-login").addEventListener("click", () => {
    const clientID = "TU_CLIENT_ID"; // Reemplaza con tu client ID de Google
    const redirectURI = "https://tusitio.com/callback"; // Reemplaza con tu URI de redirección
    const scope = "email profile openid";
    const responseType = "token";

    // URL de autenticación de Google
    const googleLoginURL = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}` +
        `&scope=${encodeURIComponent(scope)}&response_type=${responseType}`;

    // Redirigir al usuario
    window.location.href = googleLoginURL;
});
