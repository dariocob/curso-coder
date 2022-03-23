let nombre = prompt("Ingrese su nombre");
let opcion;

while (opcion !== "Gracias") {
	opcion = prompt(
		"Ingrese el numero correspondiente para ver nuestros menus! \n Menu #1 (1) \n Menu #2 (2) \n Menu #3 (3) \n Menu #4 (4) \n Menu #5 (5) \n Ingrese Gracias para finalizar"
	);
	if (opcion == 1) {
		let Menu;
		while (Menu !== "Gracias") {
			Menu = prompt("ingrese su nombre para ordenar o Gracias para finalizar");
		}
	} else if (opcion == 2) {
		alert("Menu #2");
	} else if (opcion == 3) {
		alert("Menu #3");
	} else if (opcion == 3) {
		alert("Menu #4");
	} else if (opcion == 3) {
		alert("Menu #5");
	} else if (opcion === "Gracias") {
		alert("Cerrando nuestro catalogo");
	} else if (opcion === "Dario") {
		alert("Ordenando pedido a su nombre");
	} else {
		alert("opcion incorrecta");
	}
}
