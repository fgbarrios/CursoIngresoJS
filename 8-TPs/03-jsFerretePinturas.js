/*3.	Para el departamento de pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let grados_cen;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    grados_cen = (temperatura - 32) / 1.8;
    
    alert(temperatura + " grados fahrenheit son " + grados_cen + " Centigrados");
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let grados_fah;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    grados_fah = temperatura * 1.8 + 32;
    
    alert(temperatura + " grados centigrados son " + grados_fah + " Fahrenheit");
	
}
