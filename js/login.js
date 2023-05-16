const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("usuario", username);

        Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => window.location.href = "./sections/admin_pacientes.html", 1500);
    }

    else {
    Swal.fire({
        icon: 'error',
        title: 'Usuario o Contraseña Incorrectos',
        showConfirmButton: false,
        timer: 1500
    })
    formLogin.reset();
}
});

// Verifica si hay un usuario guardado en el localStorage al cargar la página
window.addEventListener("load", function () {
    const savedUser = localStorage.getItem("usuario");

    if (savedUser) {
        document.getElementById("username").value = savedUser;
    }
});
