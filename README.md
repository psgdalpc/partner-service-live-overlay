# Partner Service — Facebook Live Overlay v2

## Qué corrige esta versión

1. Marco de pantalla: 1330 × 748 px, relación 16:9.
2. Marco de cámara: 360 × 360 px.
3. Panel de comentarios: 496 × 364 px.
4. Marcos de pantalla y cámara con animación de luces/borde.
5. Panel de comentarios listo visualmente para el live.
6. Se mantiene el CTA y WhatsApp 907 920 574.
7. No se muestra ninguna referencia a edad.

## IMPORTANTE: el overlay NO recorta las fuentes de OBS

El HTML solo dibuja los marcos. Si la cámara o la captura de pantalla de OBS ocupan toda la escena, seguirán viéndose fuera del marco.

Por eso debes recortar y transformar las fuentes en OBS para que queden exactamente debajo de los marcos.

### Resolución de lienzo

- Base (Canvas): 1920 × 1080
- Salida: 1920 × 1080
- FPS: 60

### Posiciones exactas

PANTALLA COMPARTIDA
- X = 34
- Y = 148
- Ancho = 1330
- Alto = 748

CÁMARA
- X = 1390
- Y = 148
- Ancho = 360
- Alto = 360

COMENTARIOS
- El panel visual está en X = 1390, Y = 532, Ancho = 496, Alto = 364.

## Cómo ajustar la captura de pantalla

En OBS:
1. Selecciona "Captura de ventana".
2. Mantén ALT y arrastra los bordes para recortar.
3. Clic derecho > Transformar > Editar transformación.
4. Ajusta Posición y Tamaño.
5. Usa "Ajustar a pantalla" solo como punto de partida; luego corrige manualmente.
6. La captura debe terminar exactamente en el rectángulo 1330 × 748.

## Cómo ajustar la cámara

1. Selecciona "Dispositivo de captura de video".
2. Clic derecho > Transformar > Editar transformación.
3. Mantén ALT y arrastra los bordes para recortar el exceso.
4. Coloca la cámara en X=1390, Y=148.
5. Tamaño final: 360 × 360.
6. Mantén el candado de proporción si quieres conservar el aspecto de la cámara; recorta antes de cambiar tamaño.

## Orden de fuentes en OBS

De arriba hacia abajo:

1. OVERLAY PARTNER SERVICE V2
2. CÁMARA
3. CAPTURA DE VENTANA
4. Audio / otras fuentes

El overlay siempre va ARRIBA.

## Comentarios reales de Facebook

El panel incluido es una interfaz visual y trae mensajes demo para que veas cómo quedará.

Un Browser Source transparente no puede, por sí solo, leer los comentarios privados/de tu sesión de Facebook y convertirlos en texto dentro del overlay. Para comentarios reales hay que añadir una fuente de comentarios de Facebook (por ejemplo, una ventana/página de comentarios o una integración/plugin compatible) y colocarla debajo o dentro de este panel.

Si quieres que los comentarios aparezcan automáticamente, el siguiente paso es configurar esa fuente específica en OBS.

## Publicar en GitHub Pages

Sube:
- index.html
- style.css
- script.js
- logo.png

Luego:
Settings > Pages > Deploy from a branch > main > /(root) > Save.

URL:
https://TUUSUARIO.github.io/partner-service-live-overlay-v2/

## OBS Browser Source

URL: la URL de GitHub Pages
Width: 1920
Height: 1080
FPS: 60
Custom CSS: dejar vacío.
