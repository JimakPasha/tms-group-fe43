const requestBtn = document.querySelector(".requestBtn");
const list = document.querySelector(".list");

function getTodos() {
    return new Promise ((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
            if (response.status === 200) {
                resolve(response.json());
            } else {
                reject (new Error ("Error"));
            }
        })
    })
};

function printTodos() {
    getTodos().then((todos) => {
        todos.forEach(({id, title}) => {
            const el = document.createElement('li');
            el.innerHTML = `${id}, ${title}`;
            list.append(el);
        });
    });
}

requestBtn.addEventListener('click', () => {
    printTodos();
})