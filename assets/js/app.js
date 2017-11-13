function addList() {
	//declaracion de variables
	var form = document.getElementById('form');
	var input = document.createElement('input');
	var btn = document.createElement('button');
	var nodoText = document.createTextNode('Guardar');

	//atributos
	input.setAttribute('id','input');

	//creando nodos
	btn.appendChild(nodoText);
	form.appendChild(input);
	form.appendChild(btn);

	//titulo de lista
btn.addEventListener('click', function() {
	var list = document.getElementById('input').value;
	document.getElementById('input').value = "";
	var form = document.getElementById('form');
	var title = document.createElement('p');
	var textTitle = document.createTextNode('input');

	//agregando nodo titulo
	title.appendChild(textTitle);
	form.appendChild(title);
})

}