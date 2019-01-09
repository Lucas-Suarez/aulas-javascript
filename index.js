//referenciando.elementos.da.aplicação
listElement = document.querySelector('#app ul');
btnElement = document.querySelector('.btn');
inputElement = document.querySelector('.textbox');

//adiocionando.a.lista.de.itens
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//função.para.renderizar.a.lista
function rendertodos () {
    listElement.innerHTML = '';

    for (todo of todos) {
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}

rendertodos();

//função.para.adicionar.item.a.lista
function addtodo () {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    rendertodos();
    saveToStorage();
}

btnElement.onclick = addtodo;

//função.para.deletar.item.da.lista
function deleteTodo (pos) {
    todos.splice(pos, 1);
    rendertodos();
    saveToStorage();
}

function saveToStorage () {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}