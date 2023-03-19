//Функция для удаления одного элемента
export function removeElement(){
   const elements = document.getElementsByClassName('element')
   if(elements.length>0){
        elements[0].remove()
   }
}