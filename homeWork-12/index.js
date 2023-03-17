const nameInput = document.querySelector('.enter-name');
const surnameInput = document.querySelector('.enter-surname');
const ageInput = document.querySelector('.enter-age');

const createButton = document.querySelector('.create-button');
const resetButton = document.querySelector('.reset-button');

const usersList = document.querySelector('.users-list');

let usersArr = [];

// Навешиваем событие на кнопку "отправить"

createButton.addEventListener('click', () => {
    if(nameInput.value === ''){
        alert('Вы не ввели имя')
        return;
    } else if(surnameInput.value === ''){
        alert('Вы не ввели фамилию');
        return;
    }
    const firstName = nameInput.value;
    const lastName = surnameInput.value;
    const age = ageInput.value;
    usersArr.push({ firstName, lastName, age });
    localStorage.setItem("users", JSON.stringify(usersArr));
    
    createUser(firstName, lastName, age);
    resetList();
});

// Получаем данные из local storage
   if(localStorage.getItem('users')){
    usersArr = JSON.parse(localStorage.getItem('users'));
    usersArr.forEach(({firstName, lastName, age}) => {
        createUser(firstName, lastName, age);
    })
   }

// Добавляем пользователя в список
function createUser(firstName, surname, age){
 const user = document.createElement('li');
 user.classList.add('list-item');
 user.innerHTML = `Пользователь: ${firstName} ${surname}, ${age} лет`;
 usersList.insertAdjacentElement('beforeend', user);
 return user;
}

// Вешаем событие на кнопку "очистить"
resetButton.addEventListener('click', () =>{
    usersList.innerHTML = '';
    resetList();
});


// Зачищаем формы
function resetList(){
    nameInput.value = '';
    surnameInput.value = '';
    ageInput.value = '';
}

// Проверяем возраст
ageInput.addEventListener("input", () =>{
    const age = ageInput.value;
    createButton.disabled = age < 18;
})



