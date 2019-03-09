// ************   Codigo para manejo de menu con imagenes (hover y active)     ************** //
imageOver=[];	
var items = document.getElementsByClassName("menu-hover");
var subItems = document.getElementsByClassName("sp-has-child");

//Revisamos si hay submenus y los deshabilitamos
for (i = 0; i < subItems.length; i++) {
	subItems[i].classList.remove("sp-has-child");
}
var i;
//Revisamos si hay algun parent con active y le remplazamos la imagen por el hover
for (i = 0; i < items.length; i++) {
	if(items[i].parentNode.className.indexOf("active") > 0){
		var img = items[i].firstChild.attributes["src"].nodeValue;
		imageOver = img.split(".");
		items[i].firstChild.src=imageOver[0]+'-hover.'+imageOver[1];
		items[i].classList.remove("menu-hover");
	}
} 	
//Esperamos a que el mouse pase por un menu y realizamos el efecto hover  
$(".menu-hover").hover(function(){
	var img = $(this).find('img').attr('src');
	imageOver = img.split(".");
	$(this).find('img').attr('src', imageOver[0]+'-hover.'+imageOver[1])
}, function() {
	$(this).find('img').attr('src', imageOver[0]+'.'+imageOver[1])
});
