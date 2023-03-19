//Функция для удаления всех элементов
export function removeAllElements(){
    const elements = document.getElementsByClassName('element')
    for(let i=0;i<elements.length;){
        elements[0].remove()
    }
}