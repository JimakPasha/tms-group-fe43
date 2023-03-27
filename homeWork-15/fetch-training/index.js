const requestBtn = document.querySelector('.request');
const list = document.querySelector('.list');

function getTodos() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/').then((response => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(new Error('Ошибка'));
            }
        }))
    })
};

function printTodos() {
    getTodos().then((todos) => {
        todos.forEach(({id, title}) => {
            const idTitle = document.createElement('li');
            idTitle.innerHTML = `${id}, ${title}`;
            list.append(idTitle);
            console.log(idTitle);
        });
    })
}

requestBtn.addEventListener('click', () => {
    printTodos()
});

