function addList() {
	//declaracion de variables
	var container = document.getElementById('container');
	var input = document.createElement('input');
	var btn = document.createElement('button');
	var nodoText = document.createTextNode('Guardar');

	//atributos
	input.setAttribute('id','text');

	//creando nodos
	btn.appendChild(nodoText);
	container.appendChild(input);
	container.appendChild(btn);

	//evento titulo de lista
btn.addEventListener('click', function() {
	var list = document.getElementById('text').value;
	document.getElementById('text').value = "";

	//variables
	var form = document.getElementById('form');
	var paragraph = document.createElement('p');
	var newText = document.createTextNode(list);
	var add = document.createElement('a');
	add.setAttribute('href', '#');
	var textAdd = document.createTextNode('Agregar tarjeta');

	//agregando nodo titulo
	paragraph.appendChild(newText);
	form.appendChild(paragraph);
	add.appendChild(textAdd);
	form.appendChild(add);

	//evento agregar tarjeta
add.addEventListener('click', function() {
	var textArea = document.createElement('textarea');
	var add = document.createElement('a');
	add.setAttribute('href', '#');
	var textAdd = document.createTextNode('Agregar tarjeta');
	//nodos
	add.appendChild(textAdd);
	form.appendChild(textArea);
	form.appendChild(add);
})
})
}