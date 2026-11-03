# Capturas del muro (inicio)

El muro del inicio muestra capturas de tus proyectos en 4 columnas. Se configura en `wall` dentro de `src/content.js`.

- Cada pieza `{ img: 'muro-1' }` busca el archivo `muro-1.webp` (o `.jpg` / `.png`) en esta carpeta.
- Las piezas con `tall: true` son verticales (capturas de móvil, proporción 3:5). Las demás son horizontales (4:3).
- Si falta un archivo, la web muestra un recuadro punteado que dice "agrega una captura" con el nombre esperado.

Puedes renombrar las piezas (por ejemplo `{ img: 'tienda-movil', tall: true }`) siempre que el archivo tenga el mismo nombre.
