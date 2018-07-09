var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho_2_Lienzo = (d.width/2);
var alto_2_Lienzo = (d.height/2);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){

    lienzo.clearRect(0, 0, d.width, d.height); 
    var xLineas = parseInt(texto.value);
    var space_vertical = d.height/xLineas;
    var space_horizontal = d.width/xLineas;
    var l = 0;
    var yi = 0;
    var xf = 0;

if(texto.value == ""){
    alert("Porfavor asigna un número de lineas.");
}
    else{
            /* ==================   Lineas Centrales ==================== */
        dibujarLinea("red", ancho_2_Lienzo, 0, ancho_2_Lienzo, 300); 
        dibujarLinea("red", 0, alto_2_Lienzo, 300, alto_2_Lienzo);

        /* ==================   Superior Izquierda ==================== */
        yi = 0;
        xf = ancho_2_Lienzo - space_horizontal;
        for(var i = 0; i < (xLineas/2); i++){
            dibujarLinea("red", ancho_2_Lienzo, yi, xf, alto_2_Lienzo);
            yi += space_vertical;
            xf -= space_horizontal;
        }
        /* ==================   Superior Derecha ==================== */
        yi = 0;
        xf = ancho_2_Lienzo + space_horizontal;
        for(var i = 0; i < (xLineas/2); i++){
            dibujarLinea("red", xf, alto_2_Lienzo, ancho_2_Lienzo, yi);
            xf += space_horizontal;
            yi += space_vertical;
        }
        /* ==================  Inferior Izquierda ==================== */
        yi = alto_2_Lienzo * 2;
        xf = ancho_2_Lienzo - space_horizontal;
        for(var i = 0; i < (xLineas/2); i++){
            dibujarLinea("red", xf, alto_2_Lienzo, ancho_2_Lienzo, yi);
            yi -= space_vertical;
            xf -= space_horizontal;
        }
        /* ==================  Inferior Derecha ==================== */
        yi = (alto_2_Lienzo * 2);
        xf = ancho_2_Lienzo + space_horizontal;
        for(var i = 0; i < (xLineas/2); i++){
            dibujarLinea("red", xf, alto_2_Lienzo, ancho_2_Lienzo, yi);
            yi -= space_vertical
            xf += space_horizontal;
        }
    /*
    for (l; l < xLineas; l++)
        {
            dibujarLinea("skyblue", 0, xf, yi, 300);
            dibujarLinea("skyblue", xf, 0, 300, yi);
            yi = (widthLienzo/xLineas) * l;
            xf = (widthLienzo/xLineas) * ( l + 1);
        }
    }*/

        }
}    

var texto = document.getElementById("numLineas");
var boton = document.getElementById("btnDibujar");
boton.addEventListener("click", dibujoPorClick);



