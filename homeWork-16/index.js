
const requsetCharactersBtn = document.querySelector('.request-char-btn');
const requsetBookBtn = document.querySelector('.request-book-btn');
const requsetFilmBtn = document.querySelector('.request-film-btn');
const list = document.querySelector('.characters__list');
const filterBtn = document.querySelector('.filter-btn');
const filterInput = document.querySelector('.filter-input');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const selectSort = document.querySelector('.select-sort');


const URL = 'https://the-one-api.dev/v2';
const API_KEY = 'QX6OEqTCYN99hu9l-n_a';
let sortMethod = 'asc';
let currentPage = 1;

requsetCharactersBtn.addEventListener('click', () => {
  getCharacters();
});

requsetBookBtn.addEventListener('click', () => {
  getBooks();
});

requsetFilmBtn.addEventListener('click', () => {
  getFilms();
})

btnNext.addEventListener('click', () => {
  currentPage++;
  getCharacters(currentPage);
});

btnPrev.addEventListener('click', () => {
  currentPage--;
  getCharacters(currentPage);
});

filterBtn.addEventListener('click', () => {
  if(filterInput.value){
    getCharacters(currentPage, filterInput.value);
  }
  filterInput.value = '';
})

selectSort.addEventListener('change', () => {
  sortMethod = selectSort.value;
  getCharacters(currentPage);
});


function fetchData(sortMethod, fetchObject = '', currentPage = 1, characterName = ''){
  return new Promise((resolve,reject)=>{
      fetch(`${URL}${fetchObject}?sort=name:${sortMethod}&limit=10&page=${currentPage}&name=${characterName}`,{
          headers:{
              Authorization:`Bearer ${API_KEY}`
          }
      }).then((response)=>{
          response.ok?resolve(response.json()):reject(new Error('some error'))
      })
  })
}


function getCharacters(currentPage = 1, characterName = '') {
  list.innerHTML = '';
  fetchObject = `/character`;
  fetchData(sortMethod, fetchObject, currentPage, characterName)
      .then((characters) => {
          characters.docs.forEach(({name, race, gender}) => {
              const element = document.createElement('li');
              element.classList.add('list__item');
              element.innerText = `Character: ${name}, race: ${race}, gender: ${gender}`;
              list.append(element);
          });
          checkDisabledPaginationBtns(characters.pages);
      })
      .catch(() => {
          const element = document.createElement('div');
          element.innerText = 'Упс... что-то пошло не так';
          list.append(element);
      });
}


function getBooks() {
  list.innerHTML = '';
  fetchObject = `/book`;
  fetchData(sortMethod, fetchObject)
      .then((books) => {
          books.docs.forEach(({name}) => {
            const element = document.createElement('li');
            element.classList.add('list__item');
            element.innerText = `Book: ${name}, written by J.R.R. Tolkien`;
            list.append(element);
          });
          checkDisabledPaginationBtns(books.pages);
      })
      .catch(() => {
          const element = document.createElement('div');
          element.innerText = 'Упс... что-то пошло не так';
          list.append(element);
      });
}


function getFilms() {
  list.innerHTML = '';
  fetchObject = `/movie`;
  fetchData(sortMethod, fetchObject)
      .then((films) => {
          films.docs.forEach(({academyAwardNominations, academyAwardWins, boxOfficeRevenueInMillions, budgetInMillions, name, rottenTomatoesScore, runtimeInMinutes}) => {
            const element = document.createElement('li');
            element.classList.add('list__item');
            element.innerText = `Film: ${name}, Oscar nominations: ${academyAwardNominations}, Oscar wins: ${academyAwardWins}, Box-office: ${boxOfficeRevenueInMillions} mln, Budget: ${budgetInMillions} mln, Rotten Tomatoes score: ${rottenTomatoesScore}, Runtime: ${runtimeInMinutes} min`;
            list.append(element);
          });
          checkDisabledPaginationBtns(films.pages);
          console.log(films);
      })
      .catch(() => {
          const element = document.createElement('div');
          element.innerText = 'Упс... что-то пошло не так';
          list.append(element);
      });
}

function checkDisabledPaginationBtns(maxPage) {
  currentPage < 2 ? btnPrev.disabled = true : btnPrev.disabled = false;
  maxPage === currentPage ? btnNext.disabled = true : btnNext.disabled = false;
}