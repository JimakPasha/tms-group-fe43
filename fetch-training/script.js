function getTodos(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  function printTodos(data) {
    const list = document.createElement('ul');
  
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `ID: ${item.id} - ${item.title}`;
      list.appendChild(listItem);
    });
  
    document.body.appendChild(list);
  }

  getTodos('https://jsonplaceholder.typicode.com/todos')
  .then(data => printTodos(data));