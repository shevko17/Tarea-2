define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.addEventListener("load", cargar);
    function cargar() {
        console.log("Hola mundo");
    }
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var rut;
    var telefono;
    var correo;
    var acudientes;
    var fecha;
    var region;
    var comuna;
    var direccion;
    var curso;
    rut = "111111111-1";
    telefono = 11111111111;
    correo = "maria.perez@gmail.com";
    acudientes = "Ninguno";
    fecha = new Date("2016-05-12");
    region = "Valparaiso";
    comuna = "Valparaiso";
    direccion = "XXXXXXXXX";
    curso = "4 primaria";
});
