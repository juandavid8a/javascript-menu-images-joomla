// ************   Codigo para manejo de menu con imagenes (hover y active)     ************** //
imageOver=[];	
var items = document.getElementsByClassName("menu-over");

var i;
for (i = 0; i < items.length; i++) {
	if(items[i].parentNode.className.indexOf("active") > 0){
		var img = items[i].firstChild.attributes["src"].nodeValue;
		imageOver = img.split(".");
		items[i].firstChild.src=imageOver[0]+'-hover.'+imageOver[1];
	}
} 	
  
$(".menu-over").hover(function(){
	var img = $(this).find('img').attr('src');
	imageOver = img.split(".");
	if(img != $(this).find('img').attr('src', imageOver[0]+'-hover.'+imageOver[1])){
		$(this).find('img').attr('src', imageOver[0]+'-hover.'+imageOver[1])
	}
}, function() {
	$(this).find('img').attr('src', imageOver[0]+'.'+imageOver[1])
});
