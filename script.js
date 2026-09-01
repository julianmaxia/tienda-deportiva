```javascript
const botones = document.querySelectorAll(".producto button");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        alert("Producto agregado al carrito 🛒");
    });
});
```
