const list = document.querySelector('.list');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

function getTodos(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(response=>{
        if(response.status === 200){
            resolve(response.json());
        }else{
            reject(new Error('some error'));
        }})
    })
}
function printTodos(){
    getTodos().then(todos=>todos.forEach(({id,title}) => {
        const element = document.createElement('li');
        element.classList.add('item');
        element.innerHTML = `<span class="id">id:${id}</span> <span class="title">title: ${title}</span>`;
        list.append(element);
        
    }))
}
open.addEventListener('click',printTodos);

function deleteTodos(){
    let array = list.children;
    for(let i=0;0<array.length;){
        array[i].remove()
    }
}
close.addEventListener('click',deleteTodos);
