# javascript-menu-images-joomla
Codigo javascript para manejo de menus en joomla con imagenes (Hover y Active)

Es un código rápido para poder manejar menus en joomla sólo con imagenes, revisa si el parent tiene la clase "active", osea que ya se le dio clic a un menú, identifica la imagen y le asigna la url de la imagen que contiene la terminación "-hover" por defecto, luego al posicionar el mouse sobre cualquier otro item del menu, busca automaticamente las imagenes con terminacion "-hover" de cada uno y genera el efecto hover.

### Requiere dos imagenes:
* nombreDelaImagen.png
* nombreDeLaImagen-hover.png

### Si es para usar en JOOMLA:
Poner clase CSS "menu-hover" en cada menu para que el código sepa sobre cual o cuales menus debe activarse y buscar las imagenes con terminacion "-hover" y generar el efecto.
