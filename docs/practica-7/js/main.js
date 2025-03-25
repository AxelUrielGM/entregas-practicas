// 1. Inventario de productos disponibles
const inventario = [
    { articulo: "Camiseta", costo: 15, existencia: 10 },
    { articulo: "Pantalón", costo: 20, existencia: 17 },
    { articulo: "Zapatos", costo: 50, existencia: 5 },
    { articulo: "Vestido", costo: 25, existencia: 8 },
    { articulo: "Sudadera", costo: 30, existencia: 20 },
  ];
  
  // 2. Lista del carrito de compras
  const carritoCompras = [];
  
  // 3. Función para añadir productos al carrito
  function añadirAlCarrito(nombreProducto, cantidad) {
    if (cantidad <= 0) {
      console.log("⚠️ La cantidad debe ser mayor a 0.");
      return;
    }
  
    let encontrado = inventario.find((item) => item.articulo === nombreProducto);
  
    if (encontrado) {
      if (encontrado.existencia >= cantidad) {
        carritoCompras.push({
          articulo: encontrado.articulo,
          cantidad,
          costoUnitario: encontrado.costo,
          subtotal: encontrado.costo * cantidad,
        });
        encontrado.existencia -= cantidad;
        console.log(`✅ Se añadieron ${cantidad} ${nombreProducto}(s) al carrito.`);
      } else {
        console.log(`⚠️ Stock insuficiente. Disponibles: ${encontrado.existencia}.`);
      }
    } else {
      console.log(`⚠️ El artículo "${nombreProducto}" no está en el inventario.`);
    }
  }
  
  // 4. Función para quitar productos del carrito
  function quitarDelCarrito(nombreProducto, cantidad) {
    let itemCarrito = carritoCompras.find((item) => item.articulo === nombreProducto);
  
    if (itemCarrito) {
      if (itemCarrito.cantidad >= cantidad) {
        itemCarrito.cantidad -= cantidad;
        itemCarrito.subtotal -= itemCarrito.costoUnitario * cantidad;
  
        let itemInventario = inventario.find((item) => item.articulo === nombreProducto);
        itemInventario.existencia += cantidad;
  
        if (itemCarrito.cantidad === 0) {
          carritoCompras.splice(carritoCompras.indexOf(itemCarrito), 1);
        }
        console.log(`🗑️ Eliminados ${cantidad} ${nombreProducto}(s) del carrito.`);
      } else {
        console.log(`⚠️ No tienes esa cantidad de "${nombreProducto}" en el carrito.`);
      }
    } else {
      console.log(`⚠️ El artículo "${nombreProducto}" no está en el carrito.`);
    }
  }
  
  // 5. Función para calcular el total de la compra
  function obtenerTotal() {
    let totalCompra = carritoCompras.reduce((acum, item) => acum + item.subtotal, 0);
    console.log(`🛍️ Monto total: $${totalCompra.toFixed(2)}`);
  }
  
  // 6. Función para aplicar descuento
  function aplicarDescuento(total) {
    if (total > 100) {
      console.log("🎉 Se ha aplicado un 10% de descuento por compras mayores a $100!");
      return total * 0.9;
    }
    return total;
  }
  
  // 7. Cuenta regresiva antes de finalizar la compra
  function cuentaRegresiva(segundos, finalizar) {
    let tiempoRestante = segundos;
    let timer = setInterval(() => {
      console.log(`⏳ Confirmando compra en ${tiempoRestante} segundos...`);
      tiempoRestante--;
      if (tiempoRestante < 0) {
        clearInterval(timer);
        finalizar();
      }
    }, 1000);
  }
  
  // 8. Procesar la compra con cuenta regresiva
  function finalizarCompra() {
    console.log("🛒 Preparando compra...");
    cuentaRegresiva(3, () => {
      let totalFinal = carritoCompras.reduce((acum, item) => acum + item.subtotal, 0);
      let montoFinal = aplicarDescuento(totalFinal);
      console.log(`💵 Total a pagar: $${montoFinal.toFixed(2)}`);
      console.log("✅ ¡Compra realizada con éxito! Gracias por tu compra.");
    });
  }
  