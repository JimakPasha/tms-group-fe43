const API_KEY = 'wk0c3jD0ePdbXPlpPDIH';
const URL = 'https://the-one-api.dev/v2';

const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const btnSortUp = document.querySelector('.btnSortUp');
const btnSortDown = document.querySelector('.btnSortDown');

// объявляем глобальный параметр sortOrder, который будет использоваться для сортировки
let sortOrder = '';

function getMovie(sortOrder) {
    // sortOrder в URL для сортировки данных
    return new Promise((resolve, reject) => {
        fetch(`${URL}/movie?sort=name:${sortOrder}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
        })
        .then((response) => {
        response.status === 200
            ? resolve(response.json()) 
            : reject(new Error('Ошибка'));
        });
    });
};

btn.addEventListener('click', () => {
    sortOrder = '';
    getMovie(sortOrder).then((movie) => {
        console.log(movie);
        list.innerHTML = '';
        movie.docs.forEach(({name}) => {
            const element = document.createElement('li');
            element.innerText = `${name}`;
            list.append(element);
        });
    });
});

btnSortUp.addEventListener('click', () => {
    // sortOrder сортировки по возрастанию
    sortOrder = 'asc';
    getMovie(sortOrder).then((movie) => {
        console.log(movie);
        list.innerHTML = '';
        movie.docs.forEach(({name}) => {
            const element = document.createElement('li');
            element.innerText = `${name}`;
            list.append(element);
        });
    });
});

btnSortDown.addEventListener('click', () => {
    // sortOrder сортировки по убыванию
    sortOrder = 'desc';
    getMovie(sortOrder).then((movie) => {
        console.log(movie);
        list.innerHTML = '';
        movie.docs.forEach(({name}) => {
            const element = document.createElement('li');
            element.innerText = `${name}`;
            list.append(element);
        });
    });
});