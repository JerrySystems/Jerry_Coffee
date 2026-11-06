# Beth Coffee — sitio web para GitHub Pages

## Archivos
- `index.html`: estructura de la página.
- `styles.css`: colores, tipografías, fondo, tarjetas y diseño adaptable a celular.
- `menu.js`: todos los artículos y precios, filtros, búsqueda y rutas de imágenes.
- `assets/fondo-cafeteria-futurista.png`: fondo visual creado para esta página.
- `assets/productos/`: carpeta donde debes subir las fotos de cada bebida.

## Cómo cambiar las fotos
1. Sube una imagen por producto dentro de `assets/productos/`.
2. Abre `menu.js` y localiza el artículo.
3. Cambia la propiedad `imagen` por la ruta exacta del archivo, por ejemplo:
   `imagen: "assets/productos/espresso.jpg"`
4. Respeta exactamente las mayúsculas, minúsculas y extensión del archivo. GitHub Pages distingue entre `Latte.jpg` y `latte.jpg`.
5. Si todavía no hay foto para un producto, la tarjeta muestra un recuadro decorativo.

Puedes usar JPG, PNG o WebP; solo asegúrate de que la extensión de la ruta coincida con el archivo.

## Cómo publicar en GitHub Pages
1. Descomprime el ZIP.
2. Sube `index.html`, `styles.css`, `menu.js` y la carpeta `assets` a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. Selecciona **Deploy from a branch**, elige tu rama (normalmente `main`) y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub Pages publique el sitio.

## Cómo cambiar texto y precios
Edita el arreglo `MENU` en `menu.js`. Los precios iniciales se transcribieron del menú que compartiste; revisa que se conserven tal como los deseas antes de publicar. No es necesario modificar el HTML para agregar o quitar bebidas.

## Crédito JerrySystems
El crédito del pie de página enlaza a `https://jerrysystems.github.io/tarjeta/` y muestra el texto solicitado:
“Esta pag fue creada por JerrySystems contacto 2204757459”.
