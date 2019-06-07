var imagenes = [];
imagenes[0] = "img/fornite1.jpg";
imagenes[1] = "img/fornite2.jpg";
imagenes[2] = "img/fornite3.jpg";
imagenes[3] = "img/fornite4.jpg";
imagenes[4] = "img/fornite5.jpg";
imagenes[5] = "img/fornite6.jpg";
  var slider = setInterval("flechaDerecha()", 4000);
  var numero = parseInt(0);


function flechaIzquierda(){
  foto1.src = imagenes[numero];
    numero--;
      if (numero < 0) {
          numero=5;
      }
}

function flechaDerecha(){
  foto1.src = imagenes[numero];
  numero++;
  if (numero > 5) {
    numero=0;
  }
}
