// 1. Arreglo de productos
let productos = [
    { nombre: "Camiseta", precio: 15, stock: 10 },
    { nombre: "Pantalón", precio: 20, stock: 17 },
    { nombre: "Zapatos", precio: 50, stock: 5 },
    { nombre: "Vestido", precio: 25, stock: 8 },
    { nombre: "Sudadera", precio: 30, stock: 20 },
];

// 2. Carrito de compras
let carrito = [];

// 3. Mostrar productos en la tienda
function mostrarProductos() {
    let listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = "";

    productos.forEach((producto, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${producto.nombre}</strong> - $${producto.precio} (Stock: ${producto.stock})</p>
            <button class="agregar" data-index="${index}"> Agregar</button>
        `;
        listaProductos.appendChild(div);
    });

    // Asignar eventos a los botones después de renderizar el HTML
    document.querySelectorAll(".agregar").forEach(btn => {
        btn.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            agregarAlCarrito(productos[index].nombre, 1);
        });
    });
}

// 4. Mostrar productos en el carrito
function mostrarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let totalCarrito = document.getElementById("total-carrito");
    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.total;

        let div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${producto.nombre}</strong> - ${producto.cantidad} x $${producto.precio} = $${producto.total}</p>
            <button class="restar" data-index="${index}">➖</button>
            <button class="sumar" data-index="${index}">➕</button>
            <button class="eliminar" data-index="${index}">🗑️</button>
        `;
        listaCarrito.appendChild(div);
    });

    totalCarrito.innerText = `Total: $${total.toFixed(2)}`;

    // Agregar eventos a los botones de modificar cantidad
    document.querySelectorAll(".sumar").forEach(btn => {
        btn.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            modificarCantidad(index, 1);
        });
    });

    document.querySelectorAll(".restar").forEach(btn => {
        btn.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            modificarCantidad(index, -1);
        });
    });

    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            eliminarDelCarrito(index);
        });
    });
}

// 5. Agregar producto al carrito
function agregarAlCarrito(productoNombre, cantidad) {
    let producto = productos.find(p => p.nombre === productoNombre);

    if (!producto || producto.stock < cantidad) {
        alert(`❌ No hay suficiente stock de "${productoNombre}".`);
        return;
    }

    let productoEnCarrito = carrito.find(p => p.nombre === productoNombre);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
        productoEnCarrito.total += producto.precio * cantidad;
    } else {
        carrito.push({
            nombre: producto.nombre,
            cantidad: cantidad,
            precio: producto.precio,
            total: producto.precio * cantidad,
        });
    }

    producto.stock -= cantidad;

    mostrarProductos();
    mostrarCarrito();
}

// 6. Modificar cantidad en el carrito con botones ➕ y ➖
function modificarCantidad(index, cambio) {
    let producto = carrito[index];

    let productoInventario = productos.find(p => p.nombre === producto.nombre);
    
    if (cambio === 1 && productoInventario.stock > 0) {
        producto.cantidad += 1;
        producto.total += producto.precio;
        productoInventario.stock -= 1;
    } else if (cambio === -1 && producto.cantidad > 1) {
        producto.cantidad -= 1;
        producto.total -= producto.precio;
        productoInventario.stock += 1;
    } else if (cambio === -1 && producto.cantidad === 1) {
        eliminarDelCarrito(index);
        return;
    }

    mostrarProductos();
    mostrarCarrito();
}

// 7. Eliminar producto del carrito
function eliminarDelCarrito(index) {
    let producto = carrito[index];
    let productoInventario = productos.find(p => p.nombre === producto.nombre);

    productoInventario.stock += producto.cantidad;
    carrito.splice(index, 1);

    mostrarProductos();
    mostrarCarrito();
}

// 8. Procesar compra con loader de 5 segundos
function procesarCompra() {
    let mensajeCompra = document.getElementById("mensaje-compra");

    if (carrito.length === 0) {
        mensajeCompra.innerHTML = `<span style="color: red;">❌ El carrito está vacío.</span>`;
        return;
    }

    let total = carrito.reduce((acc, item) => acc + item.total, 0);
    let descuentoAplicado = total > 100 ? total * 0.1 : 0;
    let totalFinal = total - descuentoAplicado;

    // Mostrar el loader
    mensajeCompra.innerHTML = `<div class="loader"></div> Procesando compra...`;

    setTimeout(() => {
        mensajeCompra.innerHTML = `✅ Compra realizada con éxito.<br>`;

        if (descuentoAplicado > 0) {
            mensajeCompra.innerHTML += `🎉 <strong>Descuento aplicado: $${descuentoAplicado.toFixed(2)}</strong><br>`;
        }

        mensajeCompra.innerHTML += `💰 <strong>Total a pagar: $${totalFinal.toFixed(2)}</strong>`;

        setTimeout(() => {
            mensajeCompra.innerHTML += `<br>🎉 ¡Gracias por tu compra! 🛍️`;
        }, 2000);

        carrito = [];
        mostrarCarrito();
    }, 5000);
}

// 9. Inicializar eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("procesar-compra").addEventListener("click", procesarCompra);
    mostrarProductos();
});

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-registro");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir envío del formulario

        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let contraseña = document.getElementById("contraseña").value;
        let confirmarContraseña = document.getElementById("confirmar-contraseña").value;

        let validado = true;

        // Validación Nombre
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            document.getElementById("error-nombre").textContent = "El nombre solo puede contener letras y espacios.";
            validado = false;
        } else {
            document.getElementById("error-nombre").textContent = "";
        }

        // Validación Correo
        const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexCorreo.test(correo)) {
            document.getElementById("error-correo").textContent = "Por favor, ingresa un correo electrónico válido.";
            validado = false;
        } else {
            document.getElementById("error-correo").textContent = "";
        }

        // Validación Contraseña
        const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexContraseña.test(contraseña)) {
            document.getElementById("error-contraseña").textContent = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.";
            validado = false;
        } else {
            document.getElementById("error-contraseña").textContent = "";
        }

        // Validación Confirmación Contraseña
        if (contraseña !== confirmarContraseña) {
            document.getElementById("error-confirmar-contraseña").textContent = "Las contraseñas no coinciden.";
            validado = false;
        } else {
            document.getElementById("error-confirmar-contraseña").textContent = "";
        }

        // Si todos los campos son válidos
        if (validado) {
            mostrarLoader();
            setTimeout(() => {
                document.getElementById("mensaje-exito").textContent = "¡Formulario enviado exitosamente!";
                formulario.reset();
            }, 5000);
        }
    });

    function mostrarLoader() {
        let mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.textContent = "Enviando... Por favor espera.";

        let loader = document.createElement("div");
        loader.classList.add("loader");
        mensajeExito.appendChild(loader);
    }
});
