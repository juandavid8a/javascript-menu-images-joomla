# javascript-menu-images-joomla
Codigo javascript para manejo de menus en joomla con imagenes (Hover y Active)

Es un código rápido para poder manejar menus en joomla sólo con imagenes, esta dividido en dos partes:
* Recorre los item que contienen la clase "menu-hover" y revisa si el parent tiene la clase "active", osea que ya se le dio clic a un menú, obtiene la url de la imagen y modifica la etiqueta IMG asignandole una nueva url con la imagen que contiene la terminación "-hover" por defecto
* La segunda parte del codigo reacciona al posicionar el mouse sobre cualquier item del menu y busca automaticamente las imagenes con terminacion "-hover" de cada uno y genera el efecto hover.

### Requiere dos imagenes:
* nombreDelaImagen.png
* nombreDeLaImagen-hover.png

### Si es para usar en JOOMLA:
Poner clase CSS "menu-hover" en cada menu para que el código sepa sobre cual o cuales menus debe activarse y buscar las imagenes con terminacion "-hover" y generar el efecto.

### Si es para usar fuera de JOOMLA esta debe ser la estructura:
```
<ul class="sp-megamenu-parent menu-fade hidden-sm hidden-xs">
      <li class="sp-menu-item current-item active">
          <a class="menu-hover" href="/web/index.php/nuestra-escencia">
            <img src="/web/images/menus/menu-nuestra-esencia-hover.png" alt="Nuestra Escencia">
          </a>
      </li>
      <li class="sp-menu-item">
          <a class="menu-hover" href="/web/index.php/fresh-perfum">
              <img src="/web/images/menus/menu-tu-esencia.png" alt="Tu esencia">
          </a>
      </li>
      <li class="sp-menu-item">
          <a class="" href="/web/index.php/esencias">
              <img src="/web/images/menus/menu-esencias.png" alt="Esencias">
          </a>
      </li>
</ul>
```
