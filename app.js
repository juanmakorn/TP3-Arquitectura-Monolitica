// Lista para almacenar los productos en memoria
let productos = [];

// Función para agregar un nuevo producto a la lista
function agregarProducto(nombre, precio) {
  const nuevoProducto = {
    id: productos.length + 1, 
    nombre: nombre,
    precio: precio
  };
  productos.push(nuevoProducto);
  console.log(`Producto "${nombre}" agregado.`);
}

// Función para listar todos los productos almacenados
function listarProductos() {
  if (productos.length === 0) {
    console.log("No hay productos en la lista.");
    return;
  }
  console.log("Lista de Productos:");
  productos.forEach(producto => {
    console.log(`- ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
  });
}

// --- Interacción con la aplicación ---

// Agregar algunos productos
agregarProducto("Laptop", 1200000);
agregarProducto("Mouse", 25000);
agregarProducto("Teclado", 75000);

// Listar todos los productos
listarProductos();

/*
Comentario con la explicacion:

- Por qué esta implementación es monolítica:
  En este código, toda la lógica de la aplicación reside en un único archivo JavaScript.
  La gestión del estado (la lista 'productos'), la lógica de negocio (las funciones
  'agregarProducto' y 'listarProductos'), y la presentación (a través de 'console.log')
  están todas acopladas dentro del mismo script. No hay una separación clara entre
  estas responsabilidades. Un cambio en la forma en que se almacenan los productos
  o en la forma en que se muestran afectaría directamente el mismo archivo.

- Qué desventajas tiene esta estructura:
  1. Dificultad de mantenimiento a gran escala: A medida que la aplicación crece, este
     único archivo se volverá cada vez más grande y complejo, dificultando la comprensión,
     modificación y corrección de errores.
  2. Escalabilidad limitada: Si solo una parte de la aplicación necesita escalarse debido
     a una mayor demanda, en una arquitectura monolítica se debe escalar toda la aplicación,
     lo que puede ser ineficiente y costoso.
  3. Dificultad para adoptar nuevas tecnologías: Si se desea utilizar una nueva tecnología
     o framework para una parte específica de la aplicación, en una arquitectura
     monolítica puede ser difícil o arriesgado integrarla sin afectar el resto del sistema.
  4. Despliegue más complejo: Cualquier cambio, incluso pequeño, requiere redesplegar toda
     la aplicación. Esto puede ser lento y aumentar el riesgo de introducir nuevos problemas.
*/