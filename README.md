# Partner Service — Overlay animado para OBS

Overlay transparente 1920x1080 para Facebook Live + OBS Studio.

## Archivos

- `index.html` — estructura del overlay.
- `style.css` — diseño, colores y animaciones.
- `script.js` — comportamiento.
- `logo.png` — logo proporcionado por Partner Service.

## Publicación

GitHub Pages → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

## OBS

Agregar una fuente `Navegador / Browser`:

- URL: la URL de GitHub Pages
- Width: 1920
- Height: 1080
- FPS: 60
- Fondo: transparente (el HTML ya usa `background: transparent`)

Coloca esta fuente por encima de la pantalla y la cámara.

## Ajuste de posición

El diseño está pensado para:
- pantalla compartida: zona izquierda
- cámara: zona derecha
- barra de contacto: parte inferior

La cámara y la pantalla deben colocarse debajo del overlay y alinearse con los marcos.
