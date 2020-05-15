class Interfaz {
	constructor() {
		//inicializa la app al instanciar
		this.init();
		//resultado de eventos leer el resultado
		this.listado = document.querySelector('#resultado-eventos');
	}
	//metodo para cuando inicialice la app
	init() {
		this.imprimirCategorias();
	}

	//imprimir las categorias
	imprimirCategorias() {
		const listaCategorias = eventbrite
			.obtenerCategorias()
			.then((categorias) => {
				const cats = categorias.categorias;
				return cats;
			})
			.then((res) => {
				const seleccionarCategoria = document.querySelector(
					'#listado-categorias'
				);
				const categories = res.categories;
				categories.forEach((categorie) => {
					const option = document.createElement('option');
					option.value = categorie.id;
					option.appendChild(document.createTextNode(categorie.name));
					seleccionarCategoria.appendChild(option);
				});
			});
	}

	mostrarMensaje(mensaje, clase) {
		const div = document.createElement('div');
		div.classList = clase;
		div.appendChild(document.createTextNode(mensaje));
		document.querySelector('#buscador').appendChild(div);
		setTimeout(() => {
			this.limpiarMensaje();
		}, 3000);
	}

	limpiarMensaje() {
		const alert = document.querySelector('.alert');

		if (alert) {
			alert.remove();
		}
	}
}
