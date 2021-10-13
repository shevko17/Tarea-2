window.addEventListener("load",cargar);
function cargar(){
	console.log("Hola mundo");
}
import jquery=require('jquery');
const $:JQueryStatic=jquery;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()

  

  let rut:string;
  let telefono:number;
  let correo:string;
  let acudientes:string;
  let fecha:Date;
  let region:string;
  let comuna:string;
  let direccion: string;
  let curso:string;

rut ="111111111-1"
telefono=11111111111
correo="maria.perez@gmail.com"
acudientes="Ninguno"
fecha= new Date("2016-05-12")
region="Valparaiso"
comuna="Valparaiso"
direccion="XXXXXXXXX"
curso="4 primaria"
