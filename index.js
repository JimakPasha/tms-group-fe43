const userName = document.querySelector('.userName');
const userSurname = document.querySelector('.userSurname');
const userAge = document.querySelector('.userAge');
const userInfo = document.querySelector ('.userInfo');
const createBtn = document.querySelector ('.createBtn');
const clearBtn = document.querySelector ('.clearBtn');

// Возрастное ограничение
userAge.addEventListener('input', () => {
    createBtn.disabled = userAge.value < 18;
}); 


createBtn.addEventListener('click', () => {

    const itemObj = {}; // ---------------------------------------------------------------------- Создаем пустой объект

    itemObj.name = userName.value; // ----------------------------------------------------------- Присваиваем значения
    itemObj.surname = userSurname.value;
    itemObj.age = userAge.value;

    listArr.push(itemObj); // -------------------------------------------------------------------- Добавляем объекты в массив

    const item = document.createElement('li'); // ------------------------------------------------ Создаем элемент
    item.textContent = `Пользователь: ${userName.value} ${userSurname.value}, ${userAge.value} лет`;// ------------------------- Добавляем элементу значение
    userInfo.append(item); // -------------------------------------------------------------------- Добавляем элемент в список

    localStorage.setItem('listArr',JSON.stringify(listArr)); // ---------------------------------- Добавляем данные в LS

});


//  Очищение формы
clearBtn.addEventListener ('click', () => {
    userName.value = '';
    userSurname.value = '';
    userAge.value = '';
    localStorage.clear();
    userInfo.remove();
});


// Добавляем данные из LS в лишки
let listArr = []; 

if (localStorage.getItem('listArr')){
    listArr = JSON.parse(localStorage.getItem('listArr'));
    listArr.forEach((item) => {
        const element = document.createElement('li');
        element.innerText = `Пользователь: ${item.name} ${item.surname}, ${item.age} лет`;
        userInfo.append(element);
    });

}
