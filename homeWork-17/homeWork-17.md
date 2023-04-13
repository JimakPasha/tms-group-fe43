<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Prototype & Classes</h1>

## Complete exercise

#### Task 1 💻

Создайте класс **`Developer`**

+ Конструктор этого класса принимает один параметр `name`
+ Реализуйте метод  **`startWork`**  который возвращает строку: 
    >  `name` start work ...
+ Реализуйте метод  **`endtWork`**  который возвращает строку: 
    >  `name` end work ...

Далее реализуйте два класса **`Frontend`** **`Backend`** которые будут наследовать методы из класса **`Developer`**

+ Класс **`Frontend`** должен иметь свой уникальный метод `buildWebSite` который возвращает строку:
    >  `name` start build website 
+ Класс **`Frontend`** должен иметь свой уникальный ключ `websiteName` в который мы записываем название веб-сайта над которым будет работать разработчик. 

+ Класс **`Backend`** должен иметь свой уникальный метод `buildServer` который возвращает строку:
    >  `name` start build server

Проинициализируйте два класса **`Frontend`** **`Backend`** и вызовите у них все доступные методы.

```javascript
    const john = new Frontend('john');
    john.startWork()        // john start work ...
    john.buildWebsite()     // john start build website Amazon
    john.endWork()          // john end work ...
```