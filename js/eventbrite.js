class Eventbrite {
	constructor() {
		this.tokenAuth = '3KR6LOPBM4KXWYJ6G7EB';
		this.ordenar = 'date';
	}

	//obtener los resultados de la busqueda
	async obtenerEventos(evento, categoria) {
		const respuesta = await fetch(
			`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.tokenAuth}`
		)
			.then((res) => {
				return res.json();
			})
			.then((evento) => {
				const div = document.createElement('div');
				div.classList = 'font-italic text-center text-primary';
				div.appendChild(document.createTextNode(evento));
				document.querySelector('#resultado-eventos').appendChild(div);
			});
	}

	//mostrar las categorias en init
	async obtenerCategorias() {
		//consultar las categorias de la api
		const respuestaCategorias = await fetch(
			`https://www.eventbriteapi.com/v3/categories/?token=${this.tokenAuth}`
		);
		const categorias = respuestaCategorias.json();

		return {
			categorias,
		};
	}
}
