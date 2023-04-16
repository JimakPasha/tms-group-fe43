const btnCharacters = document.querySelector('.buttons__characters');
const btnMovies = document.querySelector('.buttons__movies');
const btnBooks = document.querySelector('.buttons__books');
const headerList = document.querySelector('.header__list');
const arrowsPrev = document.querySelector('.arrows__prev');
const arrowsNext = document.querySelector('.arrows__next');
const sortHigh = document.querySelector('.sort-high');
const sortLow = document.querySelector('.sort-low');
const footerPage = document.querySelector('.footer__page');


const URL_ADDRESS = `https://the-one-api.dev/v2/`;
const API_KEY = `uCTx7KDZEcIz6FUJQ2Wu`;
let sort = 'asc'
let currentPage = 1;


function getInformation(sort = asc,whichInformation = ``,currentPage = 1){
    return new Promise((resolve,reject)=>{
        fetch(`${URL_ADDRESS}${whichInformation}?sort=name:${sort}&limit=10&page=${currentPage}`,{
            headers:{
                Authorization:`Bearer ${API_KEY}`
            }
        }).then((response)=>{
            response.ok?resolve(response.json()):reject(new Error('some error'))
        })
    })
}

function showCharacters(){
    headerList.innerHTML = '';
    let whichInformation = `/character`;
    sortLow.disabled = false
    sortHigh.disabled = false
    
    getInformation(sort,whichInformation,currentPage)
        .then((characters)=>{
            characters.docs.forEach(({name,gender,race})=>{
                const element = document.createElement('li');
                element.innerHTML = `<span class="red">Имя:</span> <span class='blue'>${name}</span> , <span class="red">Гендер:</span> <span class='blue'>${gender}</span> , <span class="blue">Раса:</span>  <span class='red'>${race}</span>  `;
                element.classList.add('header__item');
                headerList.append(element);
            })
            checkDisabledPaginationBtns(characters.pages)
        })
        .catch(()=>{
            const element = document.createElement('li');
            element.textContent = 'Что-то пошло не так';
            headerList.append(element);
        })
}

btnCharacters.addEventListener('click',()=>{
    showCharacters()
})


function showMovies(){
    headerList.innerHTML = '';
    let whichInformation = `/movie`;
    currentPage=1
    sortHigh.disabled = true;
    sortLow.disabled = true;
    footerPage.textContent = `страница ${currentPage}`
    getInformation(sort,whichInformation)
        .then((movies)=>{
            console.log(movies);
            movies.docs.forEach(({name})=>{
                const element = document.createElement('li');
                element.innerHTML = `<span class="red">Название фильма:</span> <span class='blue'>${name}</span>`;
                element.classList.add('header__item');
                headerList.append(element);
            })
            checkDisabledPaginationBtns(movies.pages)
        })
        .catch(()=>{
            const element = document.createElement('li');
            element.textContent = 'Что-то пошло не так';
            headerList.append(element);
        })
}
btnMovies.addEventListener('click',()=>{
    showMovies()
})

function showBooks(){
    sortHigh.disabled = true;
    sortLow.disabled = true;
    headerList.innerHTML = '';
    let whichInformation = `/book`;
    currentPage=1
    footerPage.textContent = `страница ${currentPage}`
    getInformation(sort,whichInformation)
        .then((books)=>{
            console.log(books);
            books.docs.forEach(({name})=>{
                const element = document.createElement('li');
                element.innerHTML = `<span class="red">Название книги:</span> <span class='blue'>${name}</span>`;
                element.classList.add('header__item');
                headerList.append(element);
            })
            checkDisabledPaginationBtns(books.pages)
        })
        .catch(()=>{
            const element = document.createElement('li');
            element.textContent = 'Что-то пошло не так';
            headerList.append(element);
        })
}
btnBooks.addEventListener('click',()=>{
    showBooks()
})

function checkDisabledPaginationBtns(maxPage){
    currentPage === 1?arrowsPrev.disabled = true:arrowsPrev.disabled = false;
    maxPage === currentPage?arrowsNext.disabled = true:arrowsNext.disabled = false;
}

arrowsPrev.addEventListener('click',()=>{
    currentPage--;
    footerPage.textContent = `страница ${currentPage}`
    showCharacters();
});

arrowsNext.addEventListener('click',()=>{
    currentPage++;
    footerPage.textContent = `страница ${currentPage}`
    showCharacters();
});

sortHigh.addEventListener('click',()=>{
        sort = 'desc'
        showCharacters()
    })

       
sortLow.addEventListener('click',()=>{
        sort = 'asc'
        showCharacters()
    })