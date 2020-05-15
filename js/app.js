//intanciar eventbrite e interfaz
const eventbrite = new Eventbrite();
const ui = new Interfaz();

//variables globales
const boton = document.querySelector('#buscarBtn');
const buscar = document.querySelector('#evento');
const categorias = document.querySelector('#listado-categorias');
//listeners para realizar la busqueda
eventListeners();

function eventListeners() {
	boton.addEventListener('click', (event) => {
		event.preventDefault();
		//leer el texto del input
		const textoBuscador = buscar.value;
		const categoriaSeleccionada =
			categorias.options[categorias.selectedIndex].value;

		//revisar que el input no se quede vacio

		if (textoBuscador !== '') {
			eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada);
		} else {
			ui.mostrarMensaje(
				'Escribe algo en el buscador',
				'alert alert-danger mt-4 text-center font-weight-bold'
			);
		}
	});
}
