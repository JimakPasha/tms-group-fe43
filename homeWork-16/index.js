// Task 1 💻
// Сделать отрисовку любого эндпоинта (который выводит список персонажей, фильмов, книг и тд) с помощью ресураса https://the-one-api.dev/
// Реализовать sorting в алфовитном порядке, по возрастанию и по убыванию
// по желанию поиграйтесь с этим API, поделайте ещё запроы на разные эндпоинты, можете повторить фильтрацию, пагинацию
const URL = 'https://the-one-api.dev/v2';
const API_KEY = '6DmzZo-Pfl5eDDmXRt7K';

const btnGetAll = document.querySelector(".btnGetAll");
const list = document.querySelector(".list");

const sortAscBtn = document.querySelector(".sortAscBtn");
const sortDescBtn = document.querySelector(".sortDescBtn");

let sorting = ''; 

function getCharacter(sorting) {
    return new Promise((resolve, reject) => {
        fetch(`${URL}/character?sort=name:${sorting}`, {
          headers: {
            Authorization:`Bearer ${API_KEY}`
          },  
        })
        .then((response) => {
            response.status === 200 ? resolve(response.json()) : reject(new Error ('Error'));
        });
    });
};

// в алфавитном  порядке
btnGetAll.addEventListener('click', () => {
    sorting = '';
    getCharacter(sorting).then((character) => {
        console.log(character);
        list.innerHTML = '';
        character.docs.forEach(({name}) => {
            const el = document.createElement('li');
            el.innerText = `Character:${name}`;
            list.append(el);
        });
    });
});

// по возрастанию
sortAscBtn.addEventListener('click', () => {
    sorting = 'asc';
    getCharacter(sorting).then((character) => {
        console.log(character);
        list.innerHTML = '';
        character.docs.forEach(({name}) => {
            const el = document.createElement('li');
            el.innerText = `Character:${name}`;
            list.append(el);
        });
    });
});

// по убыванию
sortDescBtn.addEventListener('click', () => {
    sorting = 'desc';
    getCharacter(sorting).then((character) => {
        console.log(character);
        list.innerHTML = '';
        character.docs.forEach(({name}) => {
            const el = document.createElement ('li');
            el.innerText = `Character:${name}`;
            list.append(el);
        });
    });
});

