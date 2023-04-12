const requestBtn = document.querySelector('.request-btn');
const list = document.querySelector('.list');

function getTodos(){
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/').then((response => {
            if (response.ok){
                resolve(response.json());
            } else {
                reject(new Error('Some Error'));
            }
        }))
    })
}


function printTodos(callback){
    callback().then((todos) => {
        todos.forEach(({id, title}) => {
            const element = document.createElement('li');
            element.innerHTML = `${id}. ${title}`
            list.append(element);
        })
        
    })
}

requestBtn.addEventListener('click', () => {
    printTodos(getTodos);
});