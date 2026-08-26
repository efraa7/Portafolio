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
    emailjs.sendForm('service_li1gfs1', 'template_nxry41y', '#form-contacto').then(function(){
        alert("¡Correo enviado con éxito!");
        formulario.reset();
        btnSubmit.innerText = textoOriginal;
    }, function(error){
        alert("Ocurrió un error al enviar: " + JSON.stringify(error));
        btnSubmit.innerText = textoOriginal;
    });
});