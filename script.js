console.log("Página de series cargada correctamente");

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        console.log("Navegando por la página");
    });
});