let catalogo = [];
let carritoCompras = [];

async function obtenerProductos() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const datos = await respuesta.json();
    
    catalogo = datos.map(prod => ({
      titulo: prod.title,
      costo: prod.price,
      cantidad: Math.floor(Math.random() * 15) + 1,
      imagen: prod.image
    }));
    mostrarCatalogo();
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

function mostrarCatalogo() {
  let contenedor = document.getElementById("productos-disponibles");
  contenedor.innerHTML = "";

  catalogo.forEach((item, idx) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.titulo}" width="100"><br>
      <p><strong>${item.titulo}</strong> - $${item.costo} (Stock: ${item.cantidad})</p>
      <button class="agregar" data-idx="${idx}">Añadir</button>
    `;
    contenedor.appendChild(div);
  });

  document.querySelectorAll(".agregar").forEach(btn => {
    btn.addEventListener("click", (event) => {
      let idx = event.target.dataset.idx;
      agregarAlCarrito(catalogo[idx].titulo, 1);
    });
  });
}

function mostrarCarrito() {
  let contenedor = document.getElementById("items-carrito");
  let totalFinal = document.getElementById("total");
  contenedor.innerHTML = "";
  let total = 0;

  carritoCompras.forEach((item, idx) => {
    total += item.total;
    let div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${item.titulo}</strong> - ${item.cantidad} x $${item.costo} = $${item.total}</p>
      <button class="restar" data-idx="${idx}">➖</button>
      <button class="sumar" data-idx="${idx}">➕</button>
      <button class="eliminar" data-idx="${idx}">🗑️</button>
    `;
    contenedor.appendChild(div);
  });

  totalFinal.innerText = `Total: $${total.toFixed(2)}`;

  document.querySelectorAll(".sumar").forEach(btn => {
    btn.addEventListener("click", (event) => modificarCantidad(event.target.dataset.idx, 1));
  });
  document.querySelectorAll(".restar").forEach(btn => {
    btn.addEventListener("click", (event) => modificarCantidad(event.target.dataset.idx, -1));
  });
  document.querySelectorAll(".eliminar").forEach(btn => {
    btn.addEventListener("click", (event) => eliminarDelCarrito(event.target.dataset.idx));
  });
}

function agregarAlCarrito(nombre, cantidad) {
  let item = catalogo.find(p => p.titulo === nombre);
  if (!item || item.cantidad < cantidad) {
    alert(`❌ No hay suficiente stock de "${nombre}".`);
    return;
  }

  let enCarrito = carritoCompras.find(p => p.titulo === nombre);
  if (enCarrito) {
    enCarrito.cantidad += cantidad;
    enCarrito.total += item.costo * cantidad;
  } else {
    carritoCompras.push({ titulo: nombre, cantidad, costo: item.costo, total: item.costo * cantidad });
  }

  item.cantidad -= cantidad;
  mostrarCatalogo();
  mostrarCarrito();
}

function modificarCantidad(idx, cambio) {
  let item = carritoCompras[idx];
  let stock = catalogo.find(p => p.titulo === item.titulo);

  if (cambio === 1 && stock.cantidad > 0) {
    item.cantidad++;
    item.total += item.costo;
    stock.cantidad--;
  } else if (cambio === -1 && item.cantidad > 1) {
    item.cantidad--;
    item.total -= item.costo;
    stock.cantidad++;
  } else if (cambio === -1 && item.cantidad === 1) {
    eliminarDelCarrito(idx);
    return;
  }

  mostrarCatalogo();
  mostrarCarrito();
}

function eliminarDelCarrito(idx) {
  let item = carritoCompras[idx];
  let stock = catalogo.find(p => p.titulo === item.titulo);
  stock.cantidad += item.cantidad;
  carritoCompras.splice(idx, 1);
  mostrarCatalogo();
  mostrarCarrito();
}

function finalizarCompra() {
  let mensaje = document.getElementById("mensaje");

  if (carritoCompras.length === 0) {
    mensaje.innerHTML = `<span style="color:red;">❌ El carrito está vacío.</span>`;
    return;
  }

  let total = carritoCompras.reduce((acc, item) => acc + item.total, 0);
  let descuento = total > 120 ? total * 0.12 : 0;
  let totalFinal = total - descuento;

  mensaje.innerHTML = `<div class="loader"></div> Procesando compra...`;

  setTimeout(() => {
    mensaje.innerHTML = `✅ Compra realizada con éxito.<br>`;
    if (descuento > 0) {
      mensaje.innerHTML += `🎉 <strong>Descuento aplicado: $${descuento.toFixed(2)}</strong><br>`;
    }
    mensaje.innerHTML += `💰 <strong>Total pagado: $${totalFinal.toFixed(2)}</strong>`;
    carritoCompras = [];
    mostrarCarrito();
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);
  obtenerProductos();
});
