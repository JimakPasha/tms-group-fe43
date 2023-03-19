//Функция для создания тэга и присвоения класса
export function createElement(tagName,options){
    const element = Object.assign(document.createElement(tagName),options);
    return element;
}