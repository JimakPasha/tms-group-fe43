function getTodos(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    });
};

function printTodos(todos) {
    const ul = document.createElement('ul');
    todos.forEach(todos => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="id">${todos.id}</span> ${todos.title}`;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
};


getTodos('https://jsonplaceholder.typicode.com/todos')
.then(todos => {
    printTodos(todos);
});
