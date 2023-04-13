const moviesList = document.querySelector('.movie_list');
const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const list = document.querySelector('.list');

const URL = 'https://the-one-api.dev/v2';
const API_KEY = '18kwyyLJFuFbUUvyXPpP';


let movieName = '';

function getMovies(movieName) {
    return new Promise((resolve, reject) => {
        fetch(`${URL}/movie?sort=name:${movieName}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
        })
            .then((response) => {
                response.status === 200 ? resolve(response.json()) : reject(new Error('Some Error'));
            });
    });
}


moviesList.addEventListener('click', () => {
    movieName = '';
    listMovies(movieName)
});

btnStart.addEventListener( 'click', () => {
     movieName = 'asc';
    listMovies(movieName)

})
btnEnd.addEventListener( 'click', () => {
    movieName = 'desc';
   listMovies(movieName)

})

 
 
function listMovies() {
    
    getMovies(movieName)
    .then((movie) => {
        list.innerHTML = '';
      movie.docs.forEach((movie) => {
        const element = document.createElement('li');
        element.innerText = `Movie : 
        ${movie.name}`;
        list.append(element)
        
    });
})
    .catch(() => {
        const el = document.createElement('div');
        el.innerText = `Что-то  пошло не так...`;
        list.append(el);
    })
}