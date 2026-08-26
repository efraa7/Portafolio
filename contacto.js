const btnInicio = document.getElementById("btn-inicio");
const btnCerrar = document.getElementById("btn-cerrar");

btnInicio.addEventListener("click", function(){
    window.location.href= "index.html";
});

btnCerrar.addEventListener("click", function(){
    window.history.back()
});

const formulario = document.getElementById("form-contacto");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    const btnSubmit = formulario.querySelector('button[type="submit"]');
    const textoOriginal = btnSubmit.innerText;
    btnSubmit.innerText = "Enviando...";
    emailjs.sendForm('service_icx691s', 'template_nxry41y', '#form-contacto', 'jFlhP1c0DrcPu9SMP')
    .then(
        function(response) {
            alert("¡Correo enviado con éxito!");
            formulario.reset();
            btnSubmit.innerText = textoOriginal;
        }, 
        function(error) {
            alert("Error de EmailJS: " + (error.text || error.message || JSON.stringify(error)));
            btnSubmit.innerText = textoOriginal;
        }
    ).catch(function(err) {
        alert("Fallo grave en el sistema: " + err.message);
        btnSubmit.innerText = textoOriginal;
    });
});
