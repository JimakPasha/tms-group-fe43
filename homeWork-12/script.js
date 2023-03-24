const clearBtn = document.querySelector(".clearBtn");
const createBtn = document.querySelector(".createBtn");
const userFormList = document.querySelector(".userFormList");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const ageInput = document.querySelector("#age");


// Если пользователю меньше 18 лет дизейблит кнопку
    ageInput.addEventListener('input', () => {
        createBtn.disabled = ageInput.value < 18;
    });

    // На кнопку "создать" вешеем событие 
    createBtn.addEventListener('click', () => {

        // Cоздадим пустой объект {}, присвоим значения полей input
        const itemObj = {};
        itemObj.name = nameInput.value;
        itemObj.surname = surnameInput.value;
        itemObj.age = ageInput.value;

        // Значения полей input
        const name = nameInput.value;
        const surname = surnameInput.value;
        const age = ageInput.value;

        // Генератор id из лекции
        itemObj.id = Math.floor(Math.random() * 100)

        // Пушим в массив 'listArr' ==> 'itemObj'
        listArr.push(itemObj);

        // Создаем элемент списка пользователя 
        const user = document.createElement('li');
        user.innerText = `Пользователь: ${name} ${surname}, ${age} лет`;

        // Добавляем элемент списка
        userFormList.append(user);
        
        // Отчистка input
        nameInput.value = '';
        ageInput.value = '';
        surnameInput.value = '';

        // Local Storage
        localStorage.setItem('list', JSON.stringify(listArr));
    });

    // Чистим local storage, и удаляем добавленые li элементы
    clearBtn.addEventListener('click', () => {
        localStorage.clear();
        userFormList.remove();
    });

    // Создаем массив
    let listArr = [];
    // Создаем условие, если сетаем в массив, то получаем данные по ключу 'list'
    if (localStorage.getItem('list')) {
        listArr = JSON.parse(localStorage.getItem('list'));
        // Прогоняем цикл 
        listArr.forEach((user) => {
            const el = document.createElement('li');
            el.innerText = `Пользователь: ${user.name} ${user.surname}, ${user.age} лет`;
            userFormList.append(el);
        });
    };

