let carrito = 0;

const botones = document.querySelectorAll(".producto button");
const contador = document.getElementById("contador-carrito");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        carrito++;
        contador.textContent = "🛒 " + carrito;
        alert("Producto agregado al carrito 🛒");
    });
});