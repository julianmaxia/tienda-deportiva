let carrito = 0;

const botones = document.querySelectorAll(".producto button");
const contador = document.getElementById("contador-carrito");
const cantidadCarrito = document.getElementById("cantidad-carrito");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {

        carrito++;
        contador.textContent = "🛒 " + carrito;
        cantidadCarrito.textContent = carrito;

        const producto = boton.parentElement.querySelector("h3").textContent;

        alert(producto + " fue agregado al carrito 🛒");
    });
});