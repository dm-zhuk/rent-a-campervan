#rent-a-campervan app

Este proyecto fue creado con la ayuda de
[Create React App](https://github.com/facebook/create-react-app).
[Consulte la documentación](https://facebook.github.io/create-react-app/docs/getting-started)
para familiarizarse con las funciones opcionales y configurarlas.

1. Con base en el modelo FIGMA
   https://www.figma.com/design/fnMWH0eBB7NnoqdAiiKWsQ/Test?node-id=0-1se
   implementó una aplicación que informa sobre el alquiler de una camper.
2. En la primera página del catálogo se muestran 4 anuncios y el resto después
   de hacer clic en el botón Cargar más.
3. Después de hacer clic en el botón con forma de corazón en la tarjeta
   publicitaria, se agrega a la lista de favoritos y el color del botón cambia
   en consecuencia (fondo: #D84343).
4. Al actualizar la página, se registra el resultado final de las acciones del
   usuario. Si agrega el mapa a favoritos y actualiza la página, el botón
   permanece en el estado "anuncio favorito" con el color correspondiente.
5. Si vuelve a presionar el botón del corazón, la tarjeta se eliminará de la
   lista de favoritos y el color del botón cambiará al color original.
6. Si hace clic en el botón "Mostrar más", se abrirá una ventana modal con
   información detallada sobre la campaña.
7. La ventana modal se cierra haciendo clic en el botón en forma de "cruz",
   haciendo clic en el fondo y presionando la tecla Esc.
8. La ventana modal contiene información sobre las características de la
   caravana y reseñas sobre la misma. La información sobre el dibujo depende del
   estado de la pestaña activa.
9. La ventana modal también contiene un formulario para reservar una caravana,
   que consta de los campos nombre, dirección de correo electrónico, fecha de
   reserva y comentario. Los campos Nombre, Correo electrónico y Fecha de
   reserva son obligatorios y comprueban la validez de los valores introducidos.
