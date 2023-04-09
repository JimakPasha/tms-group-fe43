const btnOpen = document.querySelector('.btnOpen');
const list = document.querySelector('.list');

function getTodos() {
    return new Promise ((resolve, request) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response =>{
            if (response.ok) {
                resolve(response.json());
            } else {
                request (new Error('Some Error'));
            }
        }))
    })

    
}
 function printTodos() {
    getTodos().then((todos) =>{
        todos.forEach(({id, title}) => {
            const el = document.createElement('li');
            el.innerHTML =`${id}, ${title}`
            list.append(el);
            console.log(el);       
         } 
            
         );
    });
    
}



btnOpen.addEventListener('click', () => {
    printTodos()}
)