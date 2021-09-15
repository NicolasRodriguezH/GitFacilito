var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = aleatorio(0, 420);
var yCerdo = aleatorio(0, 420);

var xPollo = new Array();
var yPollo = new Array();

function moverCerdo(e)
{
	var movimiento = 21;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xCerdo = xCerdo - movimiento;
			dibujar(xCerdo, yCerdo);
		break;
		case teclas.UP:
			yCerdo = yCerdo - movimiento;
			dibujar(xCerdo, yCerdo);
		break;
		case teclas.RIGHT:
			xCerdo = xCerdo + movimiento;
			dibujar(xCerdo, yCerdo);
		break;
		case teclas.DOWN:
			yCerdo = yCerdo + movimiento;
			dibujar(xCerdo, yCerdo);
		break;
	}
}

var fondo =
{
	url: "tile.png",
	carga: false
}

var vaca =
{
	url: "vaca.png",
	carga: false
}

var pollo =
{
	url: "pollo.png",
	carga: false
}

var cerdo =
{
	url: "cerdo.png",
	carga: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);


function cargaFondo()
{
	fondo.carga = true;
	dibujar();
}

function cargaPollo()
{
	pollo.carga = true;
	mantenerPosicion();
}

function cargaCerdo()
{
	cerdo.carga = true;
}

function cargaVaca()
{
	vaca.carga = true;
	mantenerPosicion();
}

function mantenerPosicion()
{
	if(vaca.carga)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y;
		}
	}
	if(pollo.carga)
	{
		var cantidad = aleatorio(1, 10);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y;
		}
	}
	dibujar();
}

function dibujar()
{
	if(fondo.carga)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.carga)
	{
		for(var i=0; i<5; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if(pollo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
	if(cerdo.carga)
	{
			papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
	}
}

function aleatorio(max, min)
{
	var numero_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
	return numero_aleatorio;
}

function clear()
{
  papel.clearRect(0, 0, villaplatzi.width, villaplatzi.height);
  dibujar();
}