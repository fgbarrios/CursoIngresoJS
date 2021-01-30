/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
	function mostrar()
{

	let dato;

	// pedir dato por prompt
	dato = prompt();

	// asignar a la caja de texto el dato ingresado
	document.getElementById("txtIdNombre").value = dato;
	
}

