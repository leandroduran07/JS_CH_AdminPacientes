

/* admin_pacientes: */

class Paciente {
    constructor(dni, apellido, nombre, mail, domicilio, telefono, fechaNac) {
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.mail = mail;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.fechaNac = fechaNac;
    }
}

const arrayPacientes = [];

const idFormAgregar = document.getElementById("formAgregar");

idFormAgregar.addEventListener("submit", (e) => {
    e.preventDefault();

    let dni = document.getElementById("dni").value;
    let apellido = document.getElementById("apellido").value;
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("correo").value;
    let domicilio = document.getElementById("domicilio").value;
    let telefono = document.getElementById("telefono").value;
    let fechaNac = document.getElementById("fecha").value;

    const paciente = new Paciente(dni, apellido, nombre, mail, domicilio, telefono, fechaNac);

    arrayPacientes.push(paciente);
    idFormAgregar.reset();
    Swal.fire({
        icon: 'success',
        title: 'Paciente Agregado',
        showConfirmButton: false,
        timer: 1500
    })
})


const idFormModificar = document.getElementById("formModificar");

idFormModificar.addEventListener("submit", (e) => {
    e.preventDefault();
    let dni = document.getElementById("dnimod").value;
    let encontrado = false;

    for (let i = 0; i < arrayPacientes.length; i++) {
        if (arrayPacientes[i].dni == dni) {
            let apellido = document.getElementById("apellidomod").value;
            let nombre = document.getElementById("nombremod").value;
            let mail = document.getElementById("correomod").value;
            let domicilio = document.getElementById("domiciliomod").value;
            let telefono = document.getElementById("telefonomod").value;
            let fechaNac = document.getElementById("fechamod").value;

            arrayPacientes[i].apellido = apellido;
            arrayPacientes[i].nombre = nombre;
            arrayPacientes[i].mail = mail;
            arrayPacientes[i].domicilio = domicilio;
            arrayPacientes[i].telefono = telefono;
            arrayPacientes[i].fechaNac = fechaNac;

            encontrado = true;
            Swal.fire({
                icon: 'success',
                title: 'Paciente Modificado',
                showConfirmButton: false,
                timer: 1500
            })
            break;
        }
    }
    if (!encontrado) {
        Swal.fire({
            icon: 'error',
            title: 'No se encontró el nro de DNI. Ingrese nuevamente.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    idFormModificar.reset();

})

const idFormEliminar = document.getElementById("formEliminar");

idFormEliminar.addEventListener("submit", (e) => {
    e.preventDefault();
    dni = document.getElementById("dniEliminar").value;
    encontrado = false;
    for (i = 0; i < arrayPacientes.length; i++) {
        if (arrayPacientes[i].dni == dni) {
            arrayPacientes.splice(i, 1);
            encontrado = true;
            Swal.fire({
                icon: 'success',
                title: 'Datos de Paciente Eliminados.',
                showConfirmButton: false,
                timer: 1500
            })
            break;
        }
    }
    if (!encontrado) {
        Swal.fire({
            icon: 'error',
            title: 'No se encontró el nro de DNI. Ingrese nuevamente.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    idFormEliminar.reset();

})

const idFormMostrar = document.getElementById("formMostrar");

idFormMostrar.addEventListener("submit", (e) => {
    e.preventDefault();
    dni = document.getElementById("dniMostrar").value;
    encontrado = false;

    for (let i = 0; i < arrayPacientes.length; i++) {
        if (arrayPacientes[i].dni == dni) {
            let mensaje = `Apellido: ${arrayPacientes[i].apellido}<br>`;
            mensaje += `Nombre: ${arrayPacientes[i].nombre}<br>`;
            mensaje += `Email: ${arrayPacientes[i].mail}<br>`;
            mensaje += `Domicilio: ${arrayPacientes[i].domicilio}<br>`;
            mensaje += `Tel: ${arrayPacientes[i].telefono}<br>`;
            mensaje += `Fecha de Nacimiento: ${arrayPacientes[i].fechaNac}<br><br>`;

            Swal.fire({
                title: 'Paciente Solicitado:',
                html: mensaje,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
            encontrado = true;
            break;
        }
    }


    if (!encontrado) {
        Swal.fire({
            icon: 'error',
            title: 'No se encontró el nro de DNI. Ingrese nuevamente.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    idFormMostrar.reset();

})

