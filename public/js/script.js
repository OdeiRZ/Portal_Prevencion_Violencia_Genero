var zoom = 0;
var maxZoom = 5;

$(document).ready(function() {
	var fecha = new Date();
	$("#fecha").html(fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
	$("#anio").html(fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
	$("#mas").click(function() {resizeText(0.1); });
	$("#menos").click(function() {resizeText(-0.1); });
});

function resizeText(factor) {
    var sw = false;
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    if (zoom < maxZoom && factor == 0.1) {
        sw = true;
        zoom++;
    } else if (zoom > -maxZoom && factor == -0.1) {
        sw = true;
        zoom--;
    }
    if (sw) {
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (factor *= 0.15) + "em";
    }
}