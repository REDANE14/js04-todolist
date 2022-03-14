var form, todoList, button;


form = document.querySelector('form');

todoList = document.querySelector('ul');

button = document.getElementById('clear');

var input = document.getElementById('user-todo');

document.getElementById('clear').disabled = true;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    todoMaker(input.value);
    input.value = ' ';

})

var todoMaker = function(text) {

    let div = document.createElement('div');
    div.classList.add('text');
    var todo = document.createElement('li');

    todo.textContent = text;

    todoList.appendChild(todo)
    todo.style.listStyleType = "none";
       document.getElementById('clear').disabled = false;

}

button.addEventListener('click', function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
     
    }
});
