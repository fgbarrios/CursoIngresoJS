/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let distanciaTotal;
    let largoAlambre

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    distanciaTotal = (largo + ancho) * 2;

    largoAlambre = distanciaTotal * 3;

    largoAlambre = largoAlambre.toFixed(2);

    alert("La cantidad de metros de alambre a comprar es " + largoAlambre);

}

function Circulo () 
{
    let radio;
    let perimetro;
    let alambre
    const PI = 3.14;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro =  2 * radio * PI;
   
    alambre = perimetro * 3;

    alambre = alambre.toFixed(2);

    alert("La cantidad de metros de alambre a comprar es " + alambre);
	
}

function Materiales () 
{
	let largo;
    let ancho;
    let m2; // m2 es metro cuadrado (largo * ancho)
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    m2 = largo * ancho;

    cemento = m2 * 2;

    cal = m2 * 3;

    alert("La cantidad de cemento que se necesita es " + cemento + " y de cal es " + cal);

}