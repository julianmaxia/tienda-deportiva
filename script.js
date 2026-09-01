console.log("Página de series cargada correctamente");

const botones = document.querySelectorAll(".boton");

botones.forEach(function(boton) {
    boton.addEventListener("click", function(evento) {
        evento.preventDefault();
        alert("Próximamente encontrarás más información sobre esta serie.");
    });
});